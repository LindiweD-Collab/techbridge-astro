import { createClient } from '@supabase/supabase-js';

export const prerender = false;

export async function POST({ request }) {
    try {
        const { id, status, feedback } = await request.json();

        const supabase = createClient(
            import.meta.env.PUBLIC_SUPABASE_URL,
            import.meta.env.SUPABASE_SERVICE_KEY
        );

        // 1. Update the Assignment Submission Table (The Admin Log)
        const { data: sub, error: fetchError } = await supabase
            .from('assignment_submissions')
            .update({ status: status, feedback: feedback })
            .eq('id', id)
            .select()
            .single();

        if (fetchError) throw fetchError;

        // 2. IF APPROVED: Unlock the student's progress
        if (status === 'approved') {
            
            // FIX: We must map 'lesson_id' (from submissions) to 'video_id' (in user_progress)
            const { error: progressError } = await supabase
                .from('user_progress')
                .upsert({
                    user_id: sub.user_id,
                    course_id: sub.course_id,
                    video_id: sub.lesson_id, // <--- FIXED: Changed from lesson_id to video_id
                    assignment_complete: true
                }, { 
                    onConflict: 'user_id, course_id, video_id' // <--- FIXED: Constraint must match columns
                });

            if (progressError) {
                console.error("Progress Update Error:", progressError);
                throw progressError;
            }
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error("Grading API Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}