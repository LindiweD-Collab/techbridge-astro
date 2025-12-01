



























import { supabase } from '../supabaseClient.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Read Data
    const dataEl = document.getElementById('course-data');
    if (!dataEl) return; // Guard if not on course page
    const courseData = JSON.parse(dataEl.dataset.json);
    const { id: courseId, modules, lessonsById, allLessons } = courseData;

    // 2. State
    let currentUser = null;
    let completedLessons = new Set();
    let currentLessonId = allLessons[0].id;
    let sessionProgress = {}; 

    // --- INIT ---
    async function init() {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return lock("Access Denied", "You must be logged in.");
        currentUser = user;

        // Check Enrollment
        const { data: enrollment } = await supabase
            .from('paid_courses')
            .select('course_id')
            .eq('user_id', user.id)
            .eq('course_id', courseId)
            .maybeSingle();

        if (!enrollment) return lock("Not Enrolled", "You have not purchased this course.");

        // Unlock UI
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('app-layout').style.visibility = 'visible';
        document.getElementById('user-welcome').textContent = `Welcome, ${user.user_metadata.full_name || user.email}`;

        await fetchProgress();
        renderSidebar();
        renderLesson(currentLessonId);
    }

    function lock(title, msg) {
        document.getElementById('lock-title').textContent = title;
        document.getElementById('lock-msg').textContent = msg;
        document.getElementById('lock-btn').style.display = 'inline-block';
    }

    // --- DATA ---
    async function fetchProgress() {
        const { data } = await supabase.from('user_progress')
            .select('video_id').eq('user_id', currentUser.id).eq('course_id', courseId).eq('is_completed', true);
        if (data) data.forEach(r => completedLessons.add(r.video_id));
        updateProgressUI();
    }

    function updateProgressUI() {
        const pct = Math.round((completedLessons.size / allLessons.length) * 100);
        document.getElementById('progress-bar-fill').style.width = pct + "%";
        document.getElementById('progress-percent-text').textContent = pct + "%";
        if (pct === 100) document.getElementById('download-cert-btn').style.display = 'block';
    }

    // --- RENDER LESSON ---
    function renderLesson(id) {
        currentLessonId = id;
        renderSidebar(); // Re-render to update active/completed states
        
        const lesson = lessonsById[id];
        const container = document.getElementById('lesson-content-area');
        const isDone = completedLessons.has(id);

        container.innerHTML = `
            <h1 id="course-title">${lesson.title}</h1>
            
            <div class="lesson-tabs">
                <div class="lesson-tab active" data-tab="video">Video</div>
                <div class="lesson-tab" data-tab="assignment">Assignment</div>
                <div class="lesson-tab" data-tab="quiz">Quiz</div>
                ${lesson.labEmbedUrl ? `<div class="lesson-tab" data-tab="lab">Lab</div>` : ''}
            </div>

            <div id="tab-video" class="lesson-tab-content active">
                ${lesson.videoUrl ? `<div class="video-player"><iframe src="${lesson.videoUrl}" frameborder="0" allowfullscreen></iframe></div>` : '<p>No video content.</p>'}
            </div>

            <div id="tab-assignment" class="lesson-tab-content">
                <div class="assignment-box">
                    ${lesson.assignment}
                </div>
            </div>

            <div id="tab-quiz" class="lesson-tab-content">
                <div class="quiz-box" id="quiz-render-area"></div>
            </div>

            <div id="tab-lab" class="lesson-tab-content">
                ${lesson.labEmbedUrl ? `<iframe src="${lesson.labEmbedUrl}" class="lab-embed"></iframe>` : ''}
            </div>

            <div class="complete-box">
                <div>
                    <input type="checkbox" id="complete-check" ${isDone ? 'checked disabled' : 'disabled'}>
                    <label for="complete-check">
                        Mark as completed
                        <span id="complete-label" style="display:block; font-size:0.8rem; color:#666; font-weight:400;">
                            ${isDone ? '(Lesson Completed)' : '(Pass Quiz & Assignment to unlock)'}
                        </span>
                    </label>
                </div>
                ${isDone ? '<span style="color:green; font-weight:bold;">Done!</span>' : ''}
            </div>
        `;

        // Init Quiz
        renderQuiz(lesson.quiz);
        
        // Init Assignment
        const assignBtn = container.querySelector('.assignment-submit');
        if(assignBtn) assignBtn.addEventListener('click', () => checkAssignment());

        // Init Tabs
        container.querySelectorAll('.lesson-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                container.querySelectorAll('.lesson-tab').forEach(b => b.classList.remove('active'));
                container.querySelectorAll('.lesson-tab-content').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
            });
        });
    }

    // --- QUIZ LOGIC ---
    function renderQuiz(quiz) {
        const area = document.getElementById('quiz-render-area');
        let html = '';
        quiz.forEach((q, i) => {
            html += `<div class="quiz-question"><p><strong>Question ${i+1}:</strong> ${q.q}</p>
            <div class="quiz-options">
            ${q.a.map(opt => `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>`).join('')}
            </div></div>`;
        });
        html += `<button id="quiz-submit" class="action-btn" style="margin-top:20px;">Submit Quiz</button><p id="quiz-msg" class="quiz-status"></p>`;
        area.innerHTML = html;

        document.getElementById('quiz-submit').addEventListener('click', () => {
            let score = 0;
            let all = true;
            quiz.forEach((q, i) => {
                const sel = document.querySelector(`input[name="q${i}"]:checked`);
                if(!sel) all = false;
                else if(sel.value === q.correct) score++;
            });
            
            const msg = document.getElementById('quiz-msg');
            if(!all) return msg.textContent = "Please answer all questions.";
            
            if(score === quiz.length) {
                msg.textContent = "Passed! ✅";
                msg.style.color = "green";
                markTaskDone('quiz');
            } else {
                msg.textContent = `You got ${score}/${quiz.length}. Try again.`;
                msg.style.color = "#e55649";
            }
        });
    }

    function checkAssignment() {
        const txt = document.querySelector('.assignment-textarea');
        const msg = document.querySelector('.assignment-status');
        if(txt.value.length > 10) {
            msg.textContent = "Assignment submitted! ✅";
            msg.style.color = "green";
            markTaskDone('assignment');
        } else {
            msg.textContent = "Please write more detail.";
            msg.style.color = "#e55649";
        }
    }

    async function markTaskDone(type) {
        if(!sessionProgress[currentLessonId]) sessionProgress[currentLessonId] = {};
        sessionProgress[currentLessonId][type] = true;

        const lesson = lessonsById[currentLessonId];
        const quizOK = !lesson.quiz || sessionProgress[currentLessonId].quiz;
        const assignOK = !lesson.assignment || sessionProgress[currentLessonId].assignment;

        if(quizOK && assignOK) {
            const check = document.getElementById('complete-check');
            check.checked = true;
            check.disabled = true;
            document.getElementById('complete-label').textContent = "(Lesson Completed)";
            
            if(!completedLessons.has(currentLessonId)) {
                await supabase.from('user_progress').insert({
                    user_id: currentUser.id, course_id: courseId, video_id: currentLessonId, is_completed: true
                });
                completedLessons.add(currentLessonId);
                updateProgressUI();
                renderSidebar();
            }
        }
    }

    document.getElementById('download-cert-btn').addEventListener('click', async (e) => {
        e.target.textContent = 'Generating...';
        const { data: { session } } = await supabase.auth.getSession();
        const url = `/api/generate-certificate?course=${courseId}`;
        
        const res = await fetch(url, { headers: { 'Authorization': `Bearer ${session.access_token}` } });
        if(res.ok) {
            const blob = await res.blob();
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `${courseId}-Certificate.pdf`;
            link.click();
        } else {
            alert('Certificate generation failed.');
        }
        e.target.textContent = 'Download Certificate';
    });

    document.getElementById('logout-btn').addEventListener('click', async () => {
        await supabase.auth.signOut();
        window.location.href = '/login';
    });

    init();
});