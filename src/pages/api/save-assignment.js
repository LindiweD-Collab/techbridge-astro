import { createClient } from '@supabase/supabase-js';

export const prerender = false;

export async function POST({ request }) {
    try {
        const authHeader = request.headers.get('Authorization');
        if (!authHeader) {
            return new Response('Unauthorized', { status: 401 });
        }

        const token = authHeader.split(' ')[1];
        const { courseId, lessonId, text, score } = await request.json();

        const supabase = createClient(
            import.meta.env.PUBLIC_SUPABASE_URL,
            import.meta.env.SUPABASE_SERVICE_KEY
        );

        const { data: { user }, error: userError } = await supabase.auth.getUser(token);
        if (userError || !user) {
            return new Response('Invalid Token', { status: 401 });
        }

        const { error: saveError } = await supabase
            .from('assignment_submissions')
            .insert({
                user_id: user.id,
                course_id: courseId,
                lesson_id: lessonId,
                submission_text: text,
                ai_score: score,
                status: 'pending' 
            });

        if (saveError) {
            console.error("Save Error:", saveError);
            return new Response('Database Error', { status: 500 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err) {
        return new Response(`Server Error: ${err.message}`, { status: 500 });
    }
}