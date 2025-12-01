import { createClient } from '@supabase/supabase-js';

export const prerender = false;

export async function POST({ request }) {
    try {
        const { id, status, feedback } = await request.json();
        
        const supabase = createClient(
            import.meta.env.PUBLIC_SUPABASE_URL,
            import.meta.env.SUPABASE_SERVICE_KEY
        );

        // 1. Update Submission Table
        const { data: sub, error: subError } = await supabase
            .from('assignment_submissions')
            .update({ status: status, feedback: feedback })
            .eq('id', id)
            .select()
            .single();

        if (subError) throw subError;

        // 2. If Approved, Unlock Lesson Progress
        if (status === 'approved') {
            await supabase.from('user_progress').upsert({
                user_id: sub.user_id,
                course_id: sub.course_id,
                lesson_id: sub.lesson_id, // Use your correct column name (video_id or lesson_id)
                assignment_complete: true
            }, { onConflict: 'user_id, course_id, lesson_id' }); // Ensure constraint matches
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}