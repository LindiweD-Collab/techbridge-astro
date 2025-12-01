import { createClient } from '@supabase/supabase-js';

export const prerender = false; // Webhooks MUST be dynamic

// ==========================================
// CONFIGURATION: PRICE MAPPING (IN CENTS)
// ==========================================
// Yoco sends amounts in Cents (ZAR * 100).
// Example: R500.00 = 50000
// UPDATE THESE VALUES to match exactly what you charge on Yoco.
const PRICE_MAP = {
    50000: 'digital-literacy',       // R500
    450000: 'full-stack',            // R4,500
    450000: 'cybersecurity',         // R4,500 (Note: If prices are same, use Metadata in Yoco setup)
    350000: 'rpa',                   // R3,500
    400000: 'data-science',          // R4,000
    450000: 'cloud-devops',          // R4,500
    150000: 'entrepreneurship',      // R1,500
    250000: 'business-management',   // R2,500
    100000: 'financial-literacy',    // R1,000
    200000: 'digital-marketing',     // R2,000
    300000: 'project-management',    // R3,000
    500000: 'executive-education',   // R5,000
    350000: 'it-support',            // R3,500
    200000: 'it-support-essentials', // R2,000
    300000: 'business-analysis',     // R3,000
    400000: 'business-analysis-advanced' // R4,000
};

export async function POST({ request }) {
    try {
        const payload = await request.json();

        // 1. Check if this is a successful payment
        if (payload.type !== 'payment.succeeded') {
            return new Response('Event ignored', { status: 200 });
        }

        const data = payload.data;
        const customerEmail = data.customer.email;
        const amountPaid = data.amount; // Comes in cents
        
        // 2. Determine which course they bought
        
        // PRIORITY 1: Check Metadata (Best Practice)
        // When creating a Yoco link, you can sometimes add metadata. 
        // If you did, we use that.
        let courseId = data.metadata?.courseId;

        // PRIORITY 2: Fallback to Price Mapping
        if (!courseId) {
            courseId = PRICE_MAP[amountPaid];
        }

        // Logic Check: If multiple courses cost the same (e.g. R4500), 
        // the map might pick the wrong one. 
        // Ideally, ensure every course has a unique price (e.g. R4500 vs R4501) 
        // OR strictly use Metadata in your Yoco integration.

        if (!customerEmail || !courseId) {
            console.error(`Missing info. Email: ${customerEmail}, Amount: ${amountPaid}, Course identified: ${courseId}`);
            return new Response('Missing email or unidentified course price', { status: 400 });
        }

        // 3. Enroll the user in Supabase
        const supabaseAdmin = createClient(
            import.meta.env.PUBLIC_SUPABASE_URL,
            import.meta.env.SUPABASE_SERVICE_KEY
        );

        // Find user by email
        const { data: { users }, error: userError } = await supabaseAdmin.auth.admin.listUsers();
        const user = users.find(u => u.email === customerEmail);

        if (user) {
            // Check if already enrolled to prevent duplicates
            const { data: existing } = await supabaseAdmin
                .from('paid_courses')
                .select('*')
                .eq('user_id', user.id)
                .eq('course_id', courseId)
                .maybeSingle();

            if (!existing) {
                await supabaseAdmin
                    .from('paid_courses')
                    .insert({ user_id: user.id, course_id: courseId });
                
                console.log(`Enrolled ${customerEmail} in ${courseId}`);
            }
            
            return new Response('User enrolled successfully', { status: 200 });
        } else {
            console.log(`User ${customerEmail} paid but has no account.`);
            // Optional: Send an invite email here using a service like Resend or SendGrid
            return new Response('User not registered yet', { status: 200 });
        }

    } catch (err) {
        console.error("Webhook Error:", err);
        return new Response(`Error: ${err.message}`, { status: 500 });
    }
}