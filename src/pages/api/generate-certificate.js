import { createClient } from '@supabase/supabase-js';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import QRCode from 'qrcode';
import { courses } from '../../data/courses.js';

export const prerender = false;

const LAYOUT = {

    nameY: 450,
    courseY: 420,
    dateY: 400,
    serialY: 100,
    verifyY: 85,
    nameSize: 30,
    courseSize: 22,
    dateSize: 14,
    footerSize: 10,
    colorText: rgb(0.2, 0.2, 0.2),       
    colorGold: rgb(0.7, 0.55, 0.15),     
    colorFaint: rgb(0.5, 0.5, 0.5),      
    qrX: 780, 
    qrY: 80,
    qrSize: 60
};

export async function GET({ request }) {
    try {
        const url = new URL(request.url);
        const courseId = url.searchParams.get('course');
        const authHeader = request.headers.get('Authorization');

        if (!authHeader) return new Response('Missing authorization', { status: 401 });
        if (!courseId || !courses[courseId]) return new Response('Invalid course ID', { status: 400 });

        const token = authHeader.split(' ')[1];

        const supabaseAdmin = createClient(
            import.meta.env.PUBLIC_SUPABASE_URL,
            import.meta.env.SUPABASE_SERVICE_KEY
        );

        const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token);
        if (userError || !user) return new Response('Invalid user token', { status: 401 });

        const courseData = courses[courseId];
        const allLessons = courseData.modules.flatMap(m => m.lessons);
        const totalLessonsCount = allLessons.length;

        const { count, error: countError } = await supabaseAdmin
            .from('user_progress')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', user.id)
            .eq('course_id', courseId)
            .eq('is_completed', true);

        if (countError) return new Response('Database error', { status: 500 });

        if (count < totalLessonsCount) {
            return new Response(`Course incomplete. ${count}/${totalLessonsCount} lessons finished.`, { status: 403 });
        }

        const userName = user.user_metadata?.full_name || user.email;
        const courseTitle = courseData.title;
        const completionDate = new Date().toLocaleDateString('en-ZA', {
            year: 'numeric', month: 'long', day: 'numeric'
        });

        const year = new Date().getFullYear();
        const shortCode = courseId.substring(0,3).toUpperCase(); 
        const randomId = Math.floor(1000 + Math.random() * 9000); 
        const serialNumber = `TB-${year}-${shortCode}-${randomId}`;
        const verifyUrl = `https://techbridge.io/verify?id=${serialNumber}`;
        const qrDataUrl = await QRCode.toDataURL(verifyUrl);
        const qrImageBytes = await fetch(qrDataUrl).then(res => res.arrayBuffer());
        const templateFetchUrl = new URL('/certificate_template.pdf', request.url);
        const pdfTemplateBytes = await fetch(templateFetchUrl).then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(pdfTemplateBytes);
        const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        const fontReg = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const qrImage = await pdfDoc.embedPng(qrImageBytes);

        const page = pdfDoc.getPages()[0];
        const { width } = page.getSize();
        const drawCentered = (text, y, size, font, color) => {
            const textWidth = font.widthOfTextAtSize(text, size);
            page.drawText(text, {
                x: (width - textWidth) / 2,
                y: y,
                size: size,
                font: font,
                color: color,
            });
        };

        drawCentered(userName, LAYOUT.nameY, LAYOUT.nameSize, fontBold, LAYOUT.colorText);
        drawCentered(courseTitle, LAYOUT.courseY, LAYOUT.courseSize, fontBold, LAYOUT.colorGold);
        drawCentered(`Completed on ${completionDate}`, LAYOUT.dateY, LAYOUT.dateSize, fontReg, LAYOUT.colorText);

        page.drawText(`Certificate Serial: ${serialNumber}`, {
            x: 50, 
            y: LAYOUT.serialY,
            size: LAYOUT.footerSize,
            font: fontReg,
            color: LAYOUT.colorFaint
        });

        page.drawText(`Verify at: ${verifyUrl}`, {
            x: 50, 
            y: LAYOUT.verifyY,
            size: LAYOUT.footerSize,
            font: fontReg,
            color: LAYOUT.colorFaint
        });

        const qrXPosition = width - LAYOUT.qrSize - 50; 
        page.drawImage(qrImage, {
            x: qrXPosition,
            y: LAYOUT.qrY,
            width: LAYOUT.qrSize,
            height: LAYOUT.qrSize,
        });

        const pdfBytes = await pdfDoc.save();

        return new Response(pdfBytes, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="TechBridge_${serialNumber}.pdf"`
            }
        });

    } catch (err) {
        console.error(err);
        return new Response(`Error generating PDF: ${err.message}`, { status: 500 });
    }
}