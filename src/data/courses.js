// src/data/courses.js

export const courses = {
    
'digital-literacy': {
    id: 'digital-literacy',
    title: 'Digital Literacy & IT Skills',
    thumbnail: "/img/0.png",
    description: "Master the basics of using computers, navigating the internet safely, and using essential productivity tools.",
    tags: ["Basics", "Office 365", "Security"],
    skillsGained: [
        "Computer Operations",
        "File Management",
        "Email Etiquette",
        "Internet Safety",
        "Office Productivity",
        "Digital Communication"
    ],
    prerequisites: ["None"],
    certificateEligible: true,
    offlineResources: [
        { name: "Digital Literacy Notes (PDF)", url: "/downloads/digital-literacy-notes.pdf" }
    ],
    progress: { completedLessons: 0, totalLessons: 10 },

    modules: [
        // ======================================================
        // MODULE 1
        // ======================================================
        {
            id: "module-1",
            title: 'Basic Computer Skills',
            difficulty: "Beginner",
            lessons: [
                { 
                    id: 'intro-to-os',
                    title: 'Lesson 1: Intro to Computers & Operating Systems',
                    videoUrl: 'https://www.youtube.com/embed/v_2a-G02-G8',
                    duration: "15 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>Explain the difference between hardware and software.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "Which of these is hardware?", a: ["Mouse", "Chrome", "Word"], correct: "Mouse" },
                        { q: "What is software?", a: ["Physical parts of a PC", "Programs that run on a PC", "A type of mouse"], correct: "Programs that run on a PC" },
                        { q: "What does an operating system do?", a: ["Manages hardware & software", "Cleans viruses", "Stores passwords"], correct: "Manages hardware & software" },
                        { q: "Which is an example of an OS?", a: ["Windows 10", "YouTube", "Excel"], correct: "Windows 10" }
                    ]
                },
                { 
                    id: 'file-management',
                    title: 'Lesson 2: File & Folder Management',
                    videoUrl: 'https://www.youtube.com/embed/N3-Gj-a8-bA',
                    duration: "20 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>Organize sample files into folders and write why file structure matters.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "Best way to organize files?", a: ["Use folders", "Put everything on desktop"], correct: "Use folders" },
                        { q: "What is a file extension?", a: [".docx", "A folder type", "A browser"], correct: ".docx" },
                        { q: "Which tool helps you navigate folders?", a: ["File Explorer", "Task Manager", "Paint"], correct: "File Explorer" }
                    ]
                },
                { 
                    id: 'typing-basics',
                    title: 'Lesson 3: Typing Basics & Keyboard Shortcuts',
                    videoUrl: 'https://www.youtube.com/embed/8ZlZz0CGaYw',
                    duration: "18 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>List 5 useful keyboard shortcuts and their purpose.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "What does Ctrl + C do?", a: ["Copy", "Paste", "Undo"], correct: "Copy" },
                        { q: "What does Ctrl + V do?", a: ["Paste", "Copy", "Save"], correct: "Paste" },
                        { q: "Which finger should press the 'F' key?", a: ["Left index finger", "Right index finger", "Thumb"], correct: "Left index finger" },
                        { q: "What does Ctrl + Z do?", a: ["Undo", "Redo", "Zoom"], correct: "Undo" }
                    ]
                },
                { 
                    id: 'internet-basics',
                    title: 'Lesson 4: Internet Basics & Browsers',
                    videoUrl: 'https://www.youtube.com/embed/e4S8zfLdLgQ',
                    duration: "14 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>Describe the parts of a browser and their functions.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "Which is a browser?", a: ["Edge", "Windows", "Excel"], correct: "Edge" },
                        { q: "What does a search engine do?", a: ["Finds information online", "Runs your PC", "Saves files"], correct: "Finds information online" },
                        { q: "What does a URL represent?", a: ["The web address", "A file name", "A password"], correct: "The web address" },
                        { q: "Incognito mode is used for…?", a: ["Private browsing", "Saving downloads", "Storing history"], correct: "Private browsing" }
                    ]
                }
            ]
        },

        // ======================================================
        // MODULE 2
        // ======================================================
        {
            id: "module-2",
            title: 'Intermediate Digital Skills',
            difficulty: "Intermediate",
            lessons: [
                {
                    id: 'online-safety',
                    title: 'Lesson 5: Online Safety & Cybersecurity Basics',
                    videoUrl: 'https://www.youtube.com/embed/wX4HDbmqgUc',
                    duration: "17 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>Write 5 rules for staying safe online.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "Which is a strong password?", a: ["dog123", "Passw0rd!", "123456"], correct: "Passw0rd!" },
                        { q: "What is phishing?", a: ["Fake messages to steal info", "Downloading apps", "Saving passwords"], correct: "Fake messages to steal info" },
                        { q: "Which should you NOT click?", a: ["Unknown links", "Official website pages", "Banking apps"], correct: "Unknown links" },
                        { q: "2FA stands for…?", a: ["Two-Factor Authentication", "Two-File Access", "Tech For All"], correct: "Two-Factor Authentication" }
                    ]
                },
                {
                    id: 'email-basics',
                    title: 'Lesson 6: Email Basics & Etiquette',
                    videoUrl: 'https://www.youtube.com/embed/Ear4Rhp4dWQ',
                    duration: "16 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>Write a professional email requesting information.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "What belongs in the subject line?", a: ["Your name", "The email purpose", "A joke"], correct: "The email purpose" },
                        { q: "What is CC used for?", a: ["Copy others in the email", "Send files", "Delete spam"], correct: "Copy others in the email" },
                        { q: "Which is professional?", a: ["hey pls reply", "Dear Sir/Madam", "WYD?"], correct: "Dear Sir/Madam" }
                    ]
                },
                {
                    id: 'cloud-basics',
                    title: 'Lesson 7: Cloud Storage (Google Drive / OneDrive)',
                    videoUrl: 'https://www.youtube.com/embed/6k3LZ4C2MHw',
                    duration: "15 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>Explain how to upload a file to cloud storage.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "Cloud storage is used to…?", a: ["Store files online", "Buy data", "Clean your PC"], correct: "Store files online" },
                        { q: "Which is a cloud service?", a: ["Google Drive", "Calculator", "Notepad"], correct: "Google Drive" },
                        { q: "Syncing means…?", a: ["Updating files across devices", "Deleting files", "Backing up passwords"], correct: "Updating files across devices" }
                    ]
                }
            ]
        },

        // ======================================================
        // MODULE 3
        // ======================================================
        {
            id: "module-3",
            title: 'Office Essentials & Practical Skills',
            difficulty: "Intermediate",
            lessons: [
                {
                    id: 'word-processing',
                    title: 'Lesson 8: Word Processing (Microsoft Word / Google Docs)',
                    videoUrl: 'https://www.youtube.com/embed/8Sn-sQ2vGkA',
                    duration: "22 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>Create a formatted document with headings and bullet points.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "Which menu contains text formatting tools?", a: ["Home", "Insert", "View"], correct: "Home" },
                        { q: "Which file format is used for Word?", a: [".docx", ".mp3", ".jpg"], correct: ".docx" },
                        { q: "Bold text shortcut?", a: ["Ctrl + B", "Ctrl + M", "Ctrl + R"], correct: "Ctrl + B" }
                    ]
                },
                {
                    id: 'spreadsheets',
                    title: 'Lesson 9: Spreadsheet Basics (Excel / Sheets)',
                    videoUrl: 'https://www.youtube.com/embed/Te17QJ2G0i8',
                    duration: "25 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>Build a simple budget sheet and calculate totals.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "What does SUM() do?", a: ["Adds numbers", "Deletes text", "Sorts data"], correct: "Adds numbers" },
                        { q: "Cells in Excel are identified by…?", a: ["Column + Row", "Color", "Font"], correct: "Column + Row" },
                        { q: "Which symbol starts a formula?", a: ["=", "+", "#"], correct: "=" }
                    ]
                },
                {
                    id: 'presentations',
                    title: 'Lesson 10: Presentations (PowerPoint / Slides)',
                    videoUrl: 'https://www.youtube.com/embed/2Lhu8j5H6vY',
                    duration: "20 min",
                    completed: false,
                    assignment: `<h3>Assignment</h3><p>Create a 3-slide presentation introducing yourself.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [
                        { q: "Which view shows all slides?", a: ["Slide Sorter", "Normal View", "Reading View"], correct: "Slide Sorter" },
                        { q: "Which file format does PowerPoint use?", a: [".pptx", ".pdf", ".png"], correct: ".pptx" },
                        { q: "Transitions are used to…?", a: ["Animate slide changes", "Change text color", "Format numbers"], correct: "Animate slide changes" }
                    ]
                }
            ]
        }
    ]
},

   'full-stack': {
    id: 'full-stack',
    title: 'Full-Stack Web Development',
    thumbnail: "/img/0.png",
    description: "Learn to build complete web applications with modern tools.",
    tags: ["JavaScript", "Node.js", "HTML/CSS"],
    skillsGained: ["Frontend", "Backend", "API design", "Database"],
    prerequisites: ["Basic computer knowledge"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },

    modules: [
        // =========================================
        // MODULE 1: FRONTEND DEVELOPMENT
        // =========================================
        {
            id: "module-1",
            title: 'Frontend Development',
            difficulty: "Beginner",
            lessons: [
                { 
                    id: 'html-css', 
                    title: 'Lesson 1: HTML & CSS',
                    videoUrl: 'https://www.youtube.com/embed/mU6anWqZJcc',
                    duration: "45 min",
                    completed: false,
                    assignment: `<h3>Assignment 1</h3><p>Create a personal portfolio using HTML & CSS.</p>`,
                    quiz: [
                        { q: "What does CSS stand for?", a: ["Cascading Style Sheets", "Creative Style System"], correct: "Cascading Style Sheets" },
                        { q: "Which HTML tag is used for the largest heading?", a: ["<h6>", "<h1>", "<header>"], correct: "<h1>" },
                        { q: "Which property changes text color in CSS?", a: ["font-color", "text-color", "color"], correct: "color" },
                        { q: "Which tag is used to insert an image?", a: ["<img>", "<src>", "<picture>"], correct: "<img>" }
                    ],
                    labEmbedUrl: 'https://codepen.io/'
                },

                { 
                    id: 'javascript-es6', 
                    title: 'Lesson 2: JavaScript Essentials',
                    videoUrl: 'https://www.youtube.com/embed/W6NZfCO5eDE',
                    duration: "50 min",
                    completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Write a JS function that multiplies any two numbers.</p>`,
                    quiz: [
                        { q: "Keyword to declare a constant?", a: ["var", "let", "const"], correct: "const" },
                        { q: "Which symbol is used for strict equality?", a: ["==", "===", "="], correct: "===" },
                        { q: "What is the output type of typeof []?", a: ["array", "object", "list"], correct: "object" },
                        { q: "Which method converts a string to an integer?", a: ["parseInt()", "toNumber()", "int()"], correct: "parseInt()" }
                    ],
                    labEmbedUrl: 'https://codesandbox.io/embed/vanilla?fontsize=14&theme=dark'
                }
            ]
        },

        // =========================================
        // MODULE 2: BACKEND DEVELOPMENT
        // =========================================
        {
            id: "module-2",
            title: 'Backend Development',
            difficulty: "Intermediate",
            lessons: [
                { 
                    id: 'node-express', 
                    title: 'Lesson 3: Node.js & Express',
                    videoUrl: 'https://www.youtube.com/embed/SccSCuHhOw0',
                    duration: "55 min",
                    completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Build a simple Express server with one GET route.</p>`,
                    quiz: [
                        { q: "How do you run a Node file?", a: ["node index.js", "start"], correct: "node index.js" },
                        { q: "Which file is commonly used to store dependencies?", a: ["package.js", "node.json", "package.json"], correct: "package.json" },
                        { q: "What does Express help you build?", a: ["APIs", "Games", "Databases"], correct: "APIs" },
                        { q: "Which middleware parses JSON?", a: ["express.json()", "express.data()", "body.json"], correct: "express.json()" }
                    ],
                    labEmbedUrl: 'https://stackblitz.com/embed/node-express-api?file=index.js&theme=dark'
                },

                { 
                    id: 'api-routing',
                    title: 'Lesson 4: Building REST APIs',
                    videoUrl: 'https://www.youtube.com/embed/pKd0Rpw7O48',
                    duration: "40 min",
                    completed: false,
                    assignment: `<h3>Assignment 4</h3><p>Create a REST API with routes for GET, POST, and DELETE.</p>`,
                    quiz: [
                        { q: "Which HTTP method retrieves data?", a: ["GET", "POST", "DELETE"], correct: "GET" },
                        { q: "Which status code means success?", a: ["200", "400", "500"], correct: "200" },
                        { q: "REST stands for?", a: ["Representational State Transfer", "Remote Enterprise Service Transfer"], correct: "Representational State Transfer" },
                        { q: "Which method is used to update data?", a: ["PUT/PATCH", "UPDATE", "CHANGE"], correct: "PUT/PATCH" }
                    ],
                    labEmbedUrl: 'https://stackblitz.com/'
                }
            ]
        },

        // =========================================
        // MODULE 3: DATABASES & AUTHENTICATION
        // =========================================
        {
            id: "module-3",
            title: 'Databases & Authentication',
            difficulty: "Intermediate",
            lessons: [
                { 
                    id: 'mongodb-basics',
                    title: 'Lesson 5: MongoDB Basics',
                    videoUrl: 'https://www.youtube.com/embed/ofme2o29ngU',
                    duration: "40 min",
                    completed: false,
                    assignment: `<h3>Assignment 5</h3><p>Create a MongoDB collection and insert 3 documents.</p>`,
                    quiz: [
                        { q: "MongoDB stores data in?", a: ["Tables", "Documents"], correct: "Documents" },
                        { q: "MongoDB default port?", a: ["27017", "3306", "8080"], correct: "27017" },
                        { q: "Which command shows all databases?", a: ["show dbs", "list db", "display databases"], correct: "show dbs" },
                        { q: "MongoDB belongs to which category?", a: ["SQL", "NoSQL"], correct: "NoSQL" }
                    ],
                    labEmbedUrl: 'https://www.mongodb.com/try'
                },

                { 
                    id: 'auth-jwt',
                    title: 'Lesson 6: User Authentication (JWT)',
                    videoUrl: 'https://www.youtube.com/embed/7nafaH9SddU',
                    duration: "45 min",
                    completed: false,
                    assignment: `<h3>Assignment 6</h3><p>Implement signup/login using JWT tokens.</p>`,
                    quiz: [
                        { q: "JWT stands for?", a: ["Java Web Token", "JSON Web Token"], correct: "JSON Web Token" },
                        { q: "Where are JWTs commonly stored?", a: ["Cookies/localStorage", "SQL DB", "GitHub"], correct: "Cookies/localStorage" },
                        { q: "JWT is signed with?", a: ["A secret key", "An SSL certificate", "A hash map"], correct: "A secret key" },
                        { q: "Which part contains user data?", a: ["Header", "Payload", "Signature"], correct: "Payload" }
                    ],
                    labEmbedUrl: 'https://stackblitz.com/'
                }
            ]
        },

        // =========================================
        // MODULE 4: ADVANCED FRONTEND (REACT)
        // =========================================
        {
            id: "module-4",
            title: 'Advanced Frontend (React)',
            difficulty: "Advanced",
            lessons: [
                { 
                    id: 'react-basics',
                    title: 'Lesson 7: React Basics',
                    videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8',
                    duration: "55 min",
                    completed: false,
                    assignment: `<h3>Assignment 7</h3><p>Create a React component that displays your profile.</p>`,
                    quiz: [
                        { q: "React uses what syntax?", a: ["JSX", "XML", "HTML5"], correct: "JSX" },
                        { q: "React is a ___?", a: ["Library", "Framework", "Language"], correct: "Library" },
                        { q: "Which hook handles state?", a: ["useState", "useContext", "useStatic"], correct: "useState" },
                        { q: "React apps run on?", a: ["The browser", "The server", "The terminal"], correct: "The browser" }
                    ],
                    labEmbedUrl: 'https://codesandbox.io/s/new?file=/src/App.js'
                },

                { 
                    id: 'react-state',
                    title: 'Lesson 8: State Management',
                    videoUrl: 'https://www.youtube.com/embed/35lXWvCuM8o',
                    duration: "40 min",
                    completed: false,
                    assignment: `<h3>Assignment 8</h3><p>Build a counter app using React state.</p>`,
                    quiz: [
                        { q: "React state is updated using?", a: ["setState", "update()", "change()"], correct: "setState" },
                        { q: "Which hook helps with side effects?", a: ["useEffect", "useSide", "useWatch"], correct: "useEffect" },
                        { q: "State should be considered?", a: ["Immutable", "Mutable"], correct: "Immutable" },
                        { q: "Props flow direction?", a: ["Parent ➝ Child", "Child ➝ Parent"], correct: "Parent ➝ Child" }
                    ],
                    labEmbedUrl: 'https://codesandbox.io/'
                }
            ]
        },

        // =========================================
        // MODULE 5: DEPLOYMENT & DEVOPS
        // =========================================
        {
            id: "module-5",
            title: 'Deployment & DevOps',
            difficulty: "Advanced",
            lessons: [
                { 
                    id: 'git-github',
                    title: 'Lesson 9: Git & GitHub',
                    videoUrl: 'https://www.youtube.com/embed/RGOj5yH7evk',
                    duration: "50 min",
                    completed: false,
                    assignment: `<h3>Assignment 9</h3><p>Initialize a git repo and push it to GitHub.</p>`,
                    quiz: [
                        { q: "Command to commit?", a: ["git push", "git commit -m"], correct: "git commit -m" },
                        { q: "Git tracks what?", a: ["Changes", "Errors", "Viruses"], correct: "Changes" },
                        { q: "Command to check status?", a: ["git check", "git status"], correct: "git status" },
                        { q: "GitHub is a ___?", a: ["Repository hosting platform", "Database"], correct: "Repository hosting platform" }
                    ],
                    labEmbedUrl: 'https://github.com/'
                },

                { 
                    id: 'deploy-vercel',
                    title: 'Lesson 10: Deploying to Vercel',
                    videoUrl: 'https://www.youtube.com/embed/clnifACTG6Q',
                    duration: "30 min",
                    completed: false,
                    assignment: `<h3>Assignment 10</h3><p>Deploy your frontend to Vercel and submit the live link.</p>`,
                    quiz: [
                        { q: "Vercel is mainly used for?", a: ["Backend apps", "Frontend hosting"], correct: "Frontend hosting" },
                        { q: "Which command deploys a project?", a: ["vercel", "deploy"], correct: "vercel" },
                        { q: "Vercel is built by the creators of?", a: ["Next.js", "React", "Nuxt"], correct: "Next.js" },
                        { q: "Vercel deployments are ___ by default.", a: ["Global", "Local"], correct: "Global" }
                    ],
                    labEmbedUrl: 'https://vercel.com/new'
                }
            ]
        }
    ]
}

,
'cybersecurity': {
  id: 'cybersecurity',
  title: 'Cybersecurity Fundamentals',
  thumbnail: '/img/cybersecurity.png',
  description: 'Hands-on cybersecurity course covering cyber threats, network security, ethical hacking basics, incident response, and practical defensive skills.',
  tags: ['Security', 'Cybersecurity', 'Networking', 'Ethical Hacking'],
  skillsGained: [
    'Threat identification & analysis',
    'Network security basics (firewalls, ports, protocols)',
    'OWASP Top 10 vulnerabilities',
    'Password & identity security',
    'Basic Linux security commands',
    'Incident response & reporting',
    'Safe browsing & malware prevention'
  ],
  prerequisites: ['Basic IT knowledge recommended'],
  certificateEligible: true,
  offlineResources: ['/pdfs/cybersecurity-cheatsheet.pdf'],
  progress: { completedLessons: 0, totalLessons: 0 },

  modules: [
    // MODULE 1 --------------------------------------------------------
    {
      id: 'cyber-module-1',
      title: 'Introduction to Cybersecurity',
      difficulty: 'Beginner',
      pdfNote: '/pdfs/cyber-intro.pdf',
      lessons: [
        {
          id: 'cyber-what-is-cybersecurity',
          title: 'Lesson 1: What is Cybersecurity?',
          videoUrl: 'https://www.youtube.com/embed/9V8c5vHfFv0',
          duration: '20 min',
          completed: false,
          assignment: `
            <h3>Assignment 1: Cyber Threats Reflection</h3>
            <p>List 3 types of cyber threats and explain how they impact users/businesses. (Min 40 words)</p>
            <textarea class="assignment-textarea" data-min-length="40" placeholder="Write your response..."></textarea>
            <button class="button primary assignment-submit">Submit Assignment</button>
            <p class="assignment-status"></p>
          `,
          quiz: [
            { q: 'Cybersecurity protects what?', a: ['Systems & Data', 'Only Hardware', 'Only Passwords'], correct: 'Systems & Data' }
          ],
          labEmbedUrl: null
        }
      ]
    },

    // MODULE 2 --------------------------------------------------------
    {
      id: 'cyber-module-2',
      title: 'Types of Cyber Threats',
      difficulty: 'Beginner',
      pdfNote: '/pdfs/cyber-threats.pdf',
      lessons: [
        {
          id: 'cyber-threats',
          title: 'Lesson 2: Malware, Phishing & Social Engineering',
          videoUrl: 'https://www.youtube.com/embed/eTtB1YDPu0g',
          duration: '30 min',
          completed: false,
          assignment: `
            <h3>Assignment 2: Social Engineering Case Study</h3>
            <p>Describe a real or hypothetical phishing attempt and how you would identify it. (Min 50 words)</p>
            <textarea class="assignment-textarea" data-min-length="50"></textarea>
            <button class="button primary assignment-submit">Submit Assignment</button>
            <p class="assignment-status"></p>
          `,
          quiz: [
            { q: 'Phishing typically involves?', a: ['Fake emails', 'Hardware failure', 'Firewall blocking'], correct: 'Fake emails' }
          ],
          labEmbedUrl: null
        }
      ]
    },

    // MODULE 3 --------------------------------------------------------
    {
      id: 'cyber-module-3',
      title: 'Network Security Basics',
      difficulty: 'Beginner',
      pdfNote: '/pdfs/cyber-networking.pdf',
      lessons: [
        {
          id: 'cyber-network-security',
          title: 'Lesson 3: Firewalls, Ports & Protocols',
          videoUrl: 'https://www.youtube.com/embed/2G1u1x5z6Fg',
          duration: '40 min',
          completed: false,
          assignment: `
            <h3>Assignment 3: Firewall Rules Exercise</h3>
            <p>Explain in simple terms how a firewall works and give an example rule. (Min 40 words)</p>
            <textarea class="assignment-textarea" data-min-length="40"></textarea>
            <button class="button primary assignment-submit">Submit Assignment</button>
            <p class="assignment-status"></p>
          `,
          quiz: [
            { q: 'Port 80 is used for?', a: ['HTTP', 'FTP', 'DNS'], correct: 'HTTP' }
          ],
          labEmbedUrl: 'https://tryhackme.com' // optional practice platform
        }
      ]
    },

    // MODULE 4 --------------------------------------------------------
    {
      id: 'cyber-module-4',
      title: 'Ethical Hacking Basics',
      difficulty: 'Intermediate',
      pdfNote: '/pdfs/cyber-ethical-hacking.pdf',
      lessons: [
        {
          id: 'cyber-ethical-hacking',
          title: 'Lesson 4: Penetration Testing & Reconnaissance',
          videoUrl: 'https://www.youtube.com/embed/z7KX6jlD3rI',
          duration: '45 min',
          completed: false,
          assignment: `
            <h3>Assignment 4: Recon Exercise</h3>
            <p>List 3 tools used for information gathering and what they reveal. (Min 50 words)</p>
            <textarea class="assignment-textarea" data-min-length="50"></textarea>
            <button class="button primary assignment-submit">Submit Assignment</button>
            <p class="assignment-status"></p>
          `,
          quiz: [
            { q: 'Nmap is used for?', a: ['Network scanning', 'Password storage', 'Malware creation'], correct: 'Network scanning' }
          ],
          labEmbedUrl: 'https://www.hackthebox.com'
        }
      ]
    },

    // MODULE 5 --------------------------------------------------------
    {
      id: 'cyber-module-5',
      title: 'Identity & Access Management (IAM)',
      difficulty: 'Intermediate',
      pdfNote: '/pdfs/cyber-iam.pdf',
      lessons: [
        {
          id: 'cyber-iam',
          title: 'Lesson 5: Passwords, MFA & Account Security',
          videoUrl: 'https://www.youtube.com/embed/nZfXXuCF2pg',
          duration: '30 min',
          completed: false,
          assignment: `
            <h3>Assignment 5: Account Security Plan</h3>
            <p>Create a 3-step plan to secure online accounts using IAM principles. (Min 40 words)</p>
            <textarea class="assignment-textarea" data-min-length="40"></textarea>
            <button class="button primary assignment-submit">Submit Assignment</button>
            <p class="assignment-status"></p>
          `,
          quiz: [
            { q: 'MFA stands for?', a: ['Multi-Factor Authentication', 'Manual File Access', 'Multi-File Admin'], correct: 'Multi-Factor Authentication' }
          ],
          labEmbedUrl: null
        }
      ]
    },

    // MODULE 6 --------------------------------------------------------
    {
      id: 'cyber-module-6',
      title: 'Incident Response & Reporting',
      difficulty: 'Intermediate',
      pdfNote: '/pdfs/cyber-incident.pdf',
      lessons: [
        {
          id: 'cyber-incident',
          title: 'Lesson 6: Responding to Security Breaches',
          videoUrl: 'https://www.youtube.com/embed/8p1ZvaNkbv4',
          duration: '35 min',
          completed: false,
          assignment: `
            <h3>Assignment 6: Incident Response Steps</h3>
            <p>Explain how you would respond to a malware infection on a workstation. (Min 50 words)</p>
            <textarea class="assignment-textarea" data-min-length="50"></textarea>
            <button class="button primary assignment-submit">Submit Assignment</button>
            <p class="assignment-status"></p>
          `,
          quiz: [
            { q: 'What is the FIRST step in incident response?', a: ['Identification', 'Recovery', 'Reporting'], correct: 'Identification' }
          ],
          labEmbedUrl: null
        }
      ]
    },

    // MODULE 7 --------------------------------------------------------
    {
      id: 'cyber-module-7',
      title: 'Final Project & Certification',
      difficulty: 'Intermediate',
      pdfNote: '/pdfs/cyber-capstone.pdf',
      lessons: [
        {
          id: 'cyber-capstone',
          title: 'Capstone Project: Secure a Small Business',
          videoUrl: 'https://www.youtube.com/embed/SZNG3GqXOr8',
          duration: '1 hr',
          completed: false,
          assignment: `
            <h3>Final Capstone: Small Business Security Plan</h3>
            <p>Create a detailed cyber protection plan for a small business (firewalls, passwords, backups, training). (Min 120 words)</p>
            <textarea class="assignment-textarea" data-min-length="120"></textarea>
            <button class="button primary assignment-submit">Submit Capstone</button>
            <p class="assignment-status"></p>
          `,
          quiz: [
            { q: 'What is the MOST important part of a security plan?', a: ['Consistency', 'Complex tools', 'New hardware'], correct: 'Consistency' }
          ],
          labEmbedUrl: null
        }
      ]
    }
  ]
}
,

    // --- 3. RPA ---
'rpa': {
    id: 'rpa',
    title: 'Robotic Process Automation',
    thumbnail: "/img/0.png",
    description: "Automate repetitive business processes using leading RPA tools like UiPath.",
    tags: ["Automation", "UiPath", "Efficiency"],
    skillsGained: ["Bot Building", "Process Analysis", "UiPath Studio"],
    prerequisites: ["Basic Logic"],
    certificateEligible: true,

    // PDF NOTES
    offlineResources: [
        { 
            name: "RPA Beginner Notes (PDF)", 
            url: "/pdf/rpa-beginner-notes.pdf" 
        },
        { 
            name: "UiPath Studio Shortcuts (PDF)", 
            url: "/pdf/uipath-shortcuts.pdf" 
        }
    ],

    progress: { completedLessons: 0, totalLessons: 0 },

    modules: [

        // -------------------------------
        // MODULE 1 — RPA BASICS
        // -------------------------------
        {
            id: "module-1",
            title: "RPA Basics",
            difficulty: "Beginner",
            lessons: [
                { 
                    id: 'intro-to-rpa',
                    title: 'Lesson 1: Intro to RPA',
                    videoUrl: 'https://www.youtube.com/embed/P-Y-kE-Dh-c',
                    duration: "20 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 1</h3>
                        <p>Identify one task to automate.</p>
                        <textarea class="assignment-textarea" data-min-length="20"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "RPA stands for?", a: ["Robotic Process Automation", "Real Process"], correct: "Robotic Process Automation" }
                    ],
                    labEmbedUrl: null
                },
                { 
                    id: 'uipath-studio',
                    title: 'Lesson 2: UiPath Studio Fundamentals',
                    videoUrl: 'https://www.youtube.com/embed/T6-MrAZ-3-I',
                    duration: "40 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 2</h3>
                        <p>Describe how to create a Hello World bot.</p>
                        <textarea class="assignment-textarea" data-min-length="20"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "The main workspace panel in UiPath Studio is?", a: ["Designer", "Coder"], correct: "Designer" }
                    ],
                    labEmbedUrl: null
                }
            ]
        },

        // -------------------------------
        // MODULE 2 — INTERMEDIATE SKILLS
        // -------------------------------
        {
            id: "module-2",
            title: "Intermediate RPA Skills",
            difficulty: "Intermediate",
            lessons: [
                {
                    id: 'selectors-101',
                    title: "Lesson 3: Working With Selectors",
                    videoUrl: "https://www.youtube.com/embed/ti02l5I96XU",
                    duration: "30 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 3</h3>
                        <p>Explain what selectors are and why they are important in RPA.</p>
                        <textarea class="assignment-textarea" data-min-length="30"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "Selectors identify?", a: ["UI elements", "Emails"], correct: "UI elements" }
                    ],
                    labEmbedUrl: null
                },

                {
                    id: 'data-scraping',
                    title: "Lesson 4: Data Scraping & Extraction",
                    videoUrl: "https://www.youtube.com/embed/1q0yRSPCkGQ",
                    duration: "35 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 4</h3>
                        <p>Scrape a table from any website and describe the steps.</p>
                        <textarea class="assignment-textarea" data-min-length="40"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "Data scraping extracts?", a: ["Structured data", "Random images"], correct: "Structured data" }
                    ],
                    labEmbedUrl: null
                }
            ]
        },

        // -------------------------------
        // MODULE 3 — OFFICE AUTOMATION ESSENTIALS
        // -------------------------------
        {
            id: "module-3",
            title: "Office Automation Essentials",
            difficulty: "Intermediate",
            lessons: [
                {
                    id: 'excel-automation',
                    title: "Lesson 5: Automating Excel with UiPath",
                    videoUrl: "https://www.youtube.com/embed/ycUy4ciZfYE",
                    duration: "45 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 5</h3>
                        <p>Create a workflow to read an Excel sheet and highlight duplicate values.</p>
                        <textarea class="assignment-textarea" data-min-length="40"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "Which activity reads Excel data?", a: ["Read Range", "Get Text"], correct: "Read Range" }
                    ],
                    labEmbedUrl: null
                },

                {
                    id: 'email-automation',
                    title: "Lesson 6: Email Automation",
                    videoUrl: "https://www.youtube.com/embed/-xvFeoJEB6Y",
                    duration: "30 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 6</h3>
                        <p>Build a workflow that sends automated email alerts.</p>
                        <textarea class="assignment-textarea" data-min-length="30"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "Email automation is done via?", a: ["SMTP", "FTP"], correct: "SMTP" }
                    ],
                    labEmbedUrl: null
                }
            ]
        },

        // -------------------------------
        // PRACTICAL LABS
        // -------------------------------
        {
            id: "labs",
            title: "Hands-on Practical Labs",
            difficulty: "Practical",
            lessons: [
                {
                    id: "lab-1",
                    title: "Lab: Build Your First RPA Bot",
                    videoUrl: null,
                    duration: "45 min",
                    completed: false,
                    assignment: null,
                    quiz: [],
                    labEmbedUrl: "https://uipath.com/learning/demo-lab-1"
                },

                {
                    id: "lab-2",
                    title: "Lab: Automate a Web Form",
                    videoUrl: null,
                    duration: "60 min",
                    completed: false,
                    assignment: null,
                    quiz: [],
                    labEmbedUrl: "https://uipath.com/learning/demo-lab-2"
                }
            ]
        }

    ] 
}
,

    // --- 4. CLOUD & DEVOPS ---
'cloud-devops': {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps',
    thumbnail: "/img/0.png",
    description: "Streamline software delivery and infrastructure management with cloud tech.",
    tags: ["AWS", "Docker", "CI/CD"],
    skillsGained: ["Cloud Architecture", "Containerization", "Deployment"],
    prerequisites: ["Basic Networking"],
    certificateEligible: true,
    offlineResources: [], 
    progress: { completedLessons: 0, totalLessons: 0 },

    modules: [

        // ---------------- MODULE 1 ----------------
        {
            id: "module-1",
            title: 'Cloud Technologies',
            difficulty: "Intermediate",
            notesPdf: "/notes/cloud-tech-basics.pdf",   // << PDF Notes
            lessons: [
                { 
                    id: 'aws-core',
                    title: 'Lesson 1: AWS Core Services',
                    videoUrl: 'https://www.youtube.com/embed/g-i6ioSOAfA',
                    duration: "35 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 1</h3>
                        <p>Explain the difference between EC2 and S3.</p>
                        <textarea class="assignment-textarea" data-min-length="20"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "Which AWS service is a virtual server?", a: ["EC2", "S3"], correct: "EC2" }
                    ],
                    labEmbedUrl: "https://lab.techbridge.dev/aws-core-lab"  // << LAB ADDED
                }
            ]
        },

        // ---------------- MODULE 2 ----------------
        {
            id: "module-2",
            title: 'DevOps Essentials',
            difficulty: "Intermediate",
            notesPdf: "/notes/devops-essentials.pdf",  // << PDF Notes
            lessons: [
                { 
                    id: 'docker',
                    title: 'Lesson 2: Docker Basics',
                    videoUrl: 'https://www.youtube.com/embed/3c-iBn73dDE',
                    duration: "40 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 2</h3>
                        <p>Write the command to run a Docker container.</p>
                        <textarea class="assignment-textarea" data-min-length="10"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "What is a Docker Image?", a: ["Blueprint", "Container"], correct: "Blueprint" }
                    ],
                    labEmbedUrl: "https://lab.techbridge.dev/docker-basics-lab"  // << LAB ADDED
                }
            ]
        },

        // ---------------- MODULE 3 (NEW) ----------------
        {
            id: "module-3",
            title: "CI/CD Pipelines",
            difficulty: "Intermediate",
            notesPdf: "/notes/cicd-pipelines.pdf",  // << PDF Notes
            lessons: [
                {
                    id: "intro-cicd",
                    title: "Lesson 3: What is CI/CD?",
                    videoUrl: "https://www.youtube.com/embed/SCZUkM7JYvI",
                    duration: "30 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 3</h3>
                        <p>Explain how CI improves code quality.</p>
                        <textarea class="assignment-textarea" data-min-length="25"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "What does CI stand for?", a: ["Continuous Integration", "Constant Innovation"], correct: "Continuous Integration" }
                    ],
                    labEmbedUrl: "https://lab.techbridge.dev/cicd-lab" // << LAB ADDED
                }
            ]
        },

        // ---------------- MODULE 4 (NEW) ----------------
        {
            id: "module-4",
            title: "Kubernetes & Scaling",
            difficulty: "Advanced",
            notesPdf: "/notes/kubernetes.pdf", // << PDF Notes
            lessons: [
                {
                    id: "k8s-basics",
                    title: "Lesson 4: Kubernetes Basics",
                    videoUrl: "https://www.youtube.com/embed/X48VuDVv0do",
                    duration: "45 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 4</h3>
                        <p>What is a Kubernetes Pod?</p>
                        <textarea class="assignment-textarea" data-min-length="20"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>
                    `,
                    quiz: [
                        { q: "Kubernetes Pods are…?", a: ["Smallest deployable unit", "A container registry"], correct: "Smallest deployable unit" }
                    ],
                    labEmbedUrl: "https://lab.techbridge.dev/kubernetes-lab" // << LAB ADDED
                }
            ]
        }
    ]
}
,

    // --- 5. DATA SCIENCE ---
'data-science': {
    id: 'data-science',
    title: 'Data Science & AI Pathway',
    thumbnail: "/img/0.png",
    description: "Turn raw data into actionable insights using Python, SQL, and machine learning.",
    tags: ["Python", "Data", "AI"],
    skillsGained: ["Data Analysis", "Visualization", "ML Basics"],
    prerequisites: ["Math Basics"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },

    modules: [

        // ---------------- MODULE 1 ----------------
        {
            id: "module-1",
            title: "Data Analysis",
            difficulty: "Intermediate",
            pdfNotes: "/pdf/data-analysis-notes.pdf", // <--- downloadable notes

            lessons: [
                { 
                    id: 'python-pandas',
                    title: 'Lesson 1: Python Pandas',
                    videoUrl: 'https://www.youtube.com/embed/gt-u-j-2-r0',
                    duration: "45 min",
                    completed: false,
                    assignment: `<h3>Assignment 1</h3><p>Command to load CSV?</p>
                                <textarea class="assignment-textarea" data-min-length="10"></textarea>
                                <button class="button primary assignment-submit">Submit</button>
                                <p class="assignment-status"></p>`,
                    quiz: [{ q: "What is a DataFrame?", a: ["Table", "List"], correct: "Table" }],
                    labEmbedUrl: 'https://colab.research.google.com/'
                }
            ]
        },

        // ---------------- MODULE 2 ----------------
        {
            id: "module-2",
            title: "Data Visualization",
            difficulty: "Intermediate",
            pdfNotes: "/pdf/data-visualization-notes.pdf",

            lessons: [
                { 
                    id: 'matplotlib-basics',
                    title: 'Lesson 2: Matplotlib & Seaborn',
                    videoUrl: 'https://www.youtube.com/embed/o_OZdbCzHUA',
                    duration: "40 min",
                    completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Create a line chart with Matplotlib.</p>
                                <textarea class="assignment-textarea" data-min-length="20"></textarea>
                                <button class="button primary assignment-submit">Submit</button>
                                <p class="assignment-status"></p>`,
                    quiz: [{ q: "Which library is used for charts?", a: ["Matplotlib", "Numpy"], correct: "Matplotlib" }],
                    labEmbedUrl: 'https://colab.research.google.com/'
                }
            ]
        },

        // ---------------- MODULE 3 ----------------
        {
            id: "module-3",
            title: "SQL for Data Science",
            difficulty: "Intermediate",
            pdfNotes: "/pdf/sql-data-science-notes.pdf",

            lessons: [
                { 
                    id: 'sql-basics',
                    title: 'Lesson 3: SQL Basics',
                    videoUrl: 'https://www.youtube.com/embed/27axs9dO7AE',
                    duration: "35 min",
                    completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Write a query to select all rows from a table.</p>
                                <textarea class="assignment-textarea" data-min-length="15"></textarea>
                                <button class="button primary assignment-submit">Submit</button>
                                <p class="assignment-status"></p>`,
                    quiz: [{ q: "Which SQL command retrieves data?", a: ["SELECT", "INSERT"], correct: "SELECT" }],
                    labEmbedUrl: 'https://sqliteonline.com/'
                }
            ]
        },

        // ---------------- MODULE 4 ----------------
        {
            id: "module-4",
            title: "Machine Learning Foundation",
            difficulty: "Advanced",
            pdfNotes: "/pdf/ml-foundations-notes.pdf",

            lessons: [
                { 
                    id: 'ml-basics',
                    title: 'Lesson 4: Machine Learning Basics',
                    videoUrl: 'https://www.youtube.com/embed/GwIo3gDZCVQ',
                    duration: "50 min",
                    completed: false,
                    assignment: `<h3>Assignment 4</h3><p>What is supervised learning?</p>
                                <textarea class="assignment-textarea" data-min-length="20"></textarea>
                                <button class="button primary assignment-submit">Submit</button>
                                <p class="assignment-status"></p>`,
                    quiz: [{ q: "ML stands for?", a: ["Machine Learning", "Manual Logic"], correct: "Machine Learning" }],
                    labEmbedUrl: 'https://colab.research.google.com/'
                }
            ]
        }
    ]
}
,

   'entrepreneurship': {
    id: 'entrepreneurship',
    title: 'Entrepreneurship & Startups',
    thumbnail: "/img/0.png",
    description: "A practical guide to launching, managing, and scaling a successful business.",
    tags: ["Business", "Startup", "Strategy"],
    skillsGained: ["Planning", "Sales", "Pitching"],
    prerequisites: ["None"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },
    modules: [
        {
            id: "module-1",
            title: 'Starting Up',
            difficulty: "Beginner",
            pdfNote: "/pdfs/starting-up.pdf",
            lessons: [
                { 
                    id: 'idea-validation', title: 'Lesson 1: Idea Validation', videoUrl: 'https://www.youtube.com/embed/AZPYp-IIoA4', duration: "30 min", completed: false,
                    assignment: `<h3>Assignment 1</h3><p>Fill out Lean Canvas.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Goal of validation?", a: ["Prove demand", "Get money"], correct: "Prove demand" }],
                    labEmbedUrl: 'https://canvanizer.com/new/lean-canvas'
                }
            ]
        },
        {
            id: "module-2",
            title: 'Funding & Finance',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/funding-finance.pdf",
            lessons: [
                { 
                    id: 'funding-strategies', title: 'Lesson 2: Funding Strategies', videoUrl: 'https://www.youtube.com/embed/xxxx', duration: "40 min", completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Identify 3 funding sources for your startup.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Angel investors?", a: ["Yes", "No"], correct: "Yes" }],
                    labEmbedUrl: null
                }
            ]
        },
        {
            id: "module-3",
            title: 'Marketing & Sales',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/marketing-sales.pdf",
            lessons: [
                { 
                    id: 'marketing-strategies', title: 'Lesson 3: Marketing Strategies', videoUrl: 'https://www.youtube.com/embed/yyyy', duration: "45 min", completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Create a mini marketing plan.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Digital marketing?", a: ["Yes", "No"], correct: "Yes" }],
                    labEmbedUrl: null
                }
            ]
        },
        {
            id: "module-4",
            title: 'Scaling Up',
            difficulty: "Advanced",
            pdfNote: "/pdfs/scaling-up.pdf",
            lessons: [
                { 
                    id: 'scaling-strategies', title: 'Lesson 4: Scaling Strategies', videoUrl: 'https://www.youtube.com/embed/zzzz', duration: "50 min", completed: false,
                    assignment: `<h3>Assignment 4</h3><p>Plan expansion for your startup.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Franchising?", a: ["Yes", "No"], correct: "Yes" }],
                    labEmbedUrl: null
                }
            ]
        }
    ]
}
,

    'business-management': {
    id: 'business-management',
    title: 'Business Management Essentials',
    thumbnail: "/img/0.png",
    description: "Optimize workflows and lead teams effectively.",
    tags: ["Leadership", "Management"],
    skillsGained: ["Leadership", "Communication", "Agile"],
    prerequisites: ["None"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },
    modules: [
        {
            id: "module-1",
            title: 'Leadership',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/leadership.pdf",
            lessons: [
                { 
                    id: 'leadership-styles', title: 'Lesson 1: Leadership Styles', videoUrl: 'https://www.youtube.com/embed/B-5s02_G3gE', duration: "25 min", completed: false,
                    assignment: `<h3>Assignment 1</h3><p>Describe a democratic leader.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Democratic style?", a: ["Involves team", "Decides alone"], correct: "Involves team" }],
                    labEmbedUrl: 'https://miro.com/app/board/uXjVM1kHd1I/' // example leadership exercise board
                }
            ]
        },
        {
            id: "module-2",
            title: 'Team Management',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/team-management.pdf",
            lessons: [
                { 
                    id: 'team-building', title: 'Lesson 2: Team Building & Motivation', videoUrl: 'https://www.youtube.com/embed/abcd1234', duration: "30 min", completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Plan a team-building activity.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Key to motivation?", a: ["Recognition", "Punishment"], correct: "Recognition" }],
                    labEmbedUrl: 'https://miro.com/app/board/uXjVM1kHd2I/'
                }
            ]
        },
        {
            id: "module-3",
            title: 'Project & Workflow Management',
            difficulty: "Advanced",
            pdfNote: "/pdfs/project-management.pdf",
            lessons: [
                { 
                    id: 'agile-methodology', title: 'Lesson 3: Agile Methodology', videoUrl: 'https://www.youtube.com/embed/efgh5678', duration: "35 min", completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Create a sample Kanban board.</p><textarea class="assignment-textarea" data-min-length="40"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Agile focuses on?", a: ["Iterative delivery", "One-time delivery"], correct: "Iterative delivery" }],
                    labEmbedUrl: 'https://trello.com/b/example-kanban'
                }
            ]
        },
        {
            id: "module-4",
            title: 'Communication & Negotiation',
            difficulty: "Advanced",
            pdfNote: "/pdfs/communication.pdf",
            lessons: [
                { 
                    id: 'negotiation-skills', title: 'Lesson 4: Negotiation Techniques', videoUrl: 'https://www.youtube.com/embed/ijkl9101', duration: "40 min", completed: false,
                    assignment: `<h3>Assignment 4</h3><p>Write a negotiation plan for a client scenario.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Best negotiation strategy?", a: ["Win-win", "Win-lose"], correct: "Win-win" }],
                    labEmbedUrl: 'https://miro.com/app/board/uXjVM1kHd3I/'
                }
            ]
        }
    ]
}
,


   'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing for Growth',
    thumbnail: "/img/0.png",
    description: "Master tools to grow a business online.",
    tags: ["Marketing", "SEO", "Social Media"],
    skillsGained: ["SEO", "Content Marketing", "Analytics", "Email Marketing", "Paid Ads"],
    prerequisites: ["None"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },
    modules: [
        {
            id: "module-1",
            title: 'Core Skills',
            difficulty: "Beginner",
            pdfNote: "/pdfs/dm-core-skills.pdf",
            lessons: [
                { 
                    id: 'content-seo', title: 'Lesson 1: SEO Basics', videoUrl: 'https://www.youtube.com/embed/s-A4Qc8f-YI', duration: "30 min", completed: false,
                    assignment: `<h3>Assignment 1</h3><p>Define long-tail keyword.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "SEO stands for?", a: ["Search Engine Optimization", "Sales Engine"], correct: "Search Engine Optimization" }],
                    labEmbedUrl: 'https://www.semrush.com/'
                },
                { 
                    id: 'content-marketing', title: 'Lesson 2: Content Marketing', videoUrl: 'https://www.youtube.com/embed/xyz123abc', duration: "35 min", completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Create a blog outline for a business.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Content marketing goal?", a: ["Educate audience", "Sell instantly"], correct: "Educate audience" }],
                    labEmbedUrl: 'https://www.canva.com/'
                }
            ]
        },
        {
            id: "module-2",
            title: 'Social Media & Ads',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/dm-social-ads.pdf",
            lessons: [
                { 
                    id: 'social-strategy', title: 'Lesson 3: Social Media Strategy', videoUrl: 'https://www.youtube.com/embed/abc456def', duration: "40 min", completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Create a 1-week social media content plan.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Best posting frequency?", a: ["Consistent", "Random"], correct: "Consistent" }],
                    labEmbedUrl: 'https://buffer.com/'
                },
                { 
                    id: 'paid-ads', title: 'Lesson 4: Paid Advertising', videoUrl: 'https://www.youtube.com/embed/def789ghi', duration: "45 min", completed: false,
                    assignment: `<h3>Assignment 4</h3><p>Create a sample ad campaign plan.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Ad objective?", a: ["Awareness", "Random"], correct: "Awareness" }],
                    labEmbedUrl: 'https://ads.google.com/'
                }
            ]
        },
        {
            id: "module-3",
            title: 'Analytics & Reporting',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/dm-analytics.pdf",
            lessons: [
                { 
                    id: 'google-analytics', title: 'Lesson 5: Google Analytics', videoUrl: 'https://www.youtube.com/embed/ghi789jkl', duration: "30 min", completed: false,
                    assignment: `<h3>Assignment 5</h3><p>Analyze website traffic data.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Metrics tracked?", a: ["Sessions", "Random"], correct: "Sessions" }],
                    labEmbedUrl: 'https://analytics.google.com/'
                }
            ]
        },
        {
            id: "module-4",
            title: 'Email Marketing & Automation',
            difficulty: "Advanced",
            pdfNote: "/pdfs/dm-email-automation.pdf",
            lessons: [
                { 
                    id: 'email-campaigns', title: 'Lesson 6: Email Marketing', videoUrl: 'https://www.youtube.com/embed/jkl012mno', duration: "35 min", completed: false,
                    assignment: `<h3>Assignment 6</h3><p>Create a sample email sequence.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Goal of email campaigns?", a: ["Engage & Convert", "Ignore"], correct: "Engage & Convert" }],
                    labEmbedUrl: 'https://mailchimp.com/'
                }
            ]
        }
    ]
}
,

    'project-management': {
    id: 'project-management',
    title: 'Project Management (PMP)',
    thumbnail: "/img/0.png",
    description: "Deliver projects on time and within budget.",
    tags: ["Management", "Agile", "PMP"],
    skillsGained: ["Planning", "Risk Mgmt", "Agile", "Scheduling", "Team Leadership"],
    prerequisites: ["None"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },
    modules: [
        {
            id: "module-1",
            title: 'PM Basics',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/pm-basics.pdf",
            lessons: [
                { 
                    id: 'project-lifecycle', title: 'Lesson 1: Lifecycle', videoUrl: 'https://www.youtube.com/embed/Jk-jFF-9y-M', duration: "35 min", completed: false,
                    assignment: `<h3>Assignment 1</h3><p>List the 5 phases.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "First phase?", a: ["Initiation", "Closing"], correct: "Initiation" }],
                    labEmbedUrl: 'https://trello.com/'
                }
            ]
        },
        {
            id: "module-2",
            title: 'Planning & Scheduling',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/pm-planning.pdf",
            lessons: [
                { 
                    id: 'gantt-charts', title: 'Lesson 2: Gantt Charts', videoUrl: 'https://www.youtube.com/embed/abc123def', duration: "40 min", completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Create a sample Gantt chart for a project.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Purpose of Gantt chart?", a: ["Schedule tasks", "Hire staff"], correct: "Schedule tasks" }],
                    labEmbedUrl: 'https://www.teamgantt.com/'
                }
            ]
        },
        {
            id: "module-3",
            title: 'Risk & Resource Management',
            difficulty: "Advanced",
            pdfNote: "/pdfs/pm-risk.pdf",
            lessons: [
                { 
                    id: 'risk-assessment', title: 'Lesson 3: Risk Assessment', videoUrl: 'https://www.youtube.com/embed/def456ghi', duration: "45 min", completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Identify top 3 project risks.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Risk type?", a: ["Technical", "Random"], correct: "Technical" }],
                    labEmbedUrl: 'https://riskregister.net/'
                }
            ]
        },
        {
            id: "module-4",
            title: 'Agile & Team Management',
            difficulty: "Advanced",
            pdfNote: "/pdfs/pm-agile.pdf",
            lessons: [
                { 
                    id: 'scrum-methodology', title: 'Lesson 4: Scrum Methodology', videoUrl: 'https://www.youtube.com/embed/ghi789jkl', duration: "50 min", completed: false,
                    assignment: `<h3>Assignment 4</h3><p>Prepare a sprint plan.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Scrum role?", a: ["Product Owner", "Designer"], correct: "Product Owner" }],
                    labEmbedUrl: 'https://jira.com/'
                }
            ]
        }
    ]
}
,

    'executive-education': {
    id: 'executive-education',
    title: 'Executive Education Program',
    thumbnail: "/img/0.png",
    description: "High-level training in digital strategy and leadership.",
    tags: ["Executive", "Strategy", "Leadership"],
    skillsGained: ["Strategic Planning", "Digital Transformation", "Decision Making", "Innovation"],
    prerequisites: ["Management Exp"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },
    modules: [
        {
            id: "module-1",
            title: 'Strategy',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ee-strategy.pdf",
            lessons: [
                { 
                    id: 'strategic-decision', title: 'Lesson 1: Strategic Decisions', videoUrl: 'https://www.youtube.com/embed/pM98qStj9O8', duration: "40 min", completed: false,
                    assignment: `<h3>Assignment 1</h3><p>Define SWOT.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "T in SWOT?", a: ["Threats", "Time"], correct: "Threats" }],
                    labEmbedUrl: null
                }
            ]
        },
        {
            id: "module-2",
            title: 'Digital Transformation',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ee-digital.pdf",
            lessons: [
                { 
                    id: 'digital-strategy', title: 'Lesson 2: Digital Strategy', videoUrl: 'https://www.youtube.com/embed/abc123def', duration: "45 min", completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Outline a digital transformation plan for a company.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Digital strategy goal?", a: ["Innovation", "Firing staff"], correct: "Innovation" }],
                    labEmbedUrl: 'https://miro.com/app/'
                }
            ]
        },
        {
            id: "module-3",
            title: 'Leadership & Innovation',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ee-leadership.pdf",
            lessons: [
                { 
                    id: 'innovative-leadership', title: 'Lesson 3: Innovative Leadership', videoUrl: 'https://www.youtube.com/embed/def456ghi', duration: "50 min", completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Describe a recent innovative leadership example.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Key to innovation?", a: ["Creativity", "Rigidity"], correct: "Creativity" }],
                    labEmbedUrl: 'https://www.mural.co/'
                }
            ]
        }
    ]
}
,

    // --- IT SUPPORT FULL CURRICULUM ---
'it-support': {
    id: 'it-support',
    title: 'IT Support Professional',
    thumbnail: "/img/0.png",
    description: "Master the fundamentals of IT support.",
    tags: ["IT", "Hardware", "Networking", "Windows", "Linux", "Cloud"],
    skillsGained: ["Hardware Assembly", "OS Installation", "Network Configuration", "Customer Service", "Troubleshooting", "Cloud Basics"],
    prerequisites: ["None"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },
    modules: [
        // Module 1
        {
            id: "module-1",
            title: 'IT Fundamentals',
            difficulty: "Beginner",
            pdfNote: "/pdfs/it-fundamentals.pdf",
            lessons: [
                { 
                    id: 'hardware-troubleshooting', 
                    title: 'Lesson 1: Hardware & Troubleshooting', 
                    videoUrl: 'https://www.youtube.com/embed/v8-v-F96-Ps', 
                    duration: "30 min", 
                    completed: false,
                    assignment: `<h3>Assignment 1</h3><p>List 3 hardware components and their functions.</p>`,
                    quiz: [
                        { q: "What does POST stand for?", a: ["Power-On Self-Test", "Primary OS Test", "Peripheral Output System"], correct: "Power-On Self-Test" },
                        { q: "Which component is responsible for processing data?", a: ["CPU", "RAM", "Hard Drive"], correct: "CPU" },
                        { q: "Which hardware stores data permanently?", a: ["SSD", "RAM", "Cache"], correct: "SSD" }
                    ]
                },
                { 
                    id: 'os-basics', 
                    title: 'Lesson 2: Operating Systems Basics', 
                    videoUrl: 'https://www.youtube.com/embed/FWSs-Pjlu8k', 
                    duration: "40 min", 
                    completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Explain the difference between Admin and Standard accounts.</p>`,
                    quiz: [
                        { q: "Which account type is safer for daily use?", a: ["Admin", "Standard", "Guest"], correct: "Standard" },
                        { q: "Which OS is open-source?", a: ["Linux", "Windows", "macOS"], correct: "Linux" },
                        { q: "Windows Task Manager is used to?", a: ["Monitor processes", "Install drivers", "Edit text"], correct: "Monitor processes" }
                    ]
                }
            ]
        },

        // Module 2
        {
            id: "module-2",
            title: 'Networking Basics',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/networking-basics.pdf",
            lessons: [
                { 
                    id: 'networking-fundamentals', 
                    title: 'Lesson 3: Networking Fundamentals', 
                    videoUrl: 'https://www.youtube.com/embed/0-p-g8-gOMk', 
                    duration: "45 min", 
                    completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Explain IP addressing and subnets.</p>`,
                    quiz: [
                        { q: "DNS resolves what?", a: ["Names to IPs", "IP to MAC", "Ports to IPs"], correct: "Names to IPs" },
                        { q: "Default gateway is used for?", a: ["Accessing external networks", "Printing documents", "Storing files"], correct: "Accessing external networks" },
                        { q: "Subnet mask separates?", a: ["Network & host", "Users & groups", "Applications & services"], correct: "Network & host" }
                    ]
                },
                { 
                    id: 'dhcp-dns', 
                    title: 'Lesson 4: DHCP & DNS', 
                    videoUrl: 'https://www.youtube.com/embed/q9h8sVxZzH8', 
                    duration: "35 min", 
                    completed: false,
                    assignment: `<h3>Assignment 4</h3><p>Explain the purpose of DHCP and DNS.</p>`,
                    quiz: [
                        { q: "Which assigns IP automatically?", a: ["DHCP", "DNS", "ARP"], correct: "DHCP" },
                        { q: "DNS translates?", a: ["Domain names to IPs", "IPs to MAC addresses", "Subnet to Gateway"], correct: "Domain names to IPs" },
                        { q: "DHCP uses which protocol?", a: ["UDP", "TCP", "ICMP"], correct: "UDP" }
                    ]
                }
            ]
        },

        // Module 3
        {
            id: "module-3",
            title: 'Advanced OS Skills',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/advanced-os.pdf",
            lessons: [
                { 
                    id: 'windows-admin', 
                    title: 'Lesson 5: Windows Admin Tools', 
                    videoUrl: 'https://www.youtube.com/embed/2pZkhZ6Gd1Q', 
                    duration: "40 min", 
                    completed: false,
                    assignment: `<h3>Assignment 5</h3><p>Use Task Manager and list running processes.</p>`,
                    quiz: [
                        { q: "Which tool monitors processes?", a: ["Task Manager", "Registry Editor", "Control Panel"], correct: "Task Manager" },
                        { q: "Command to open Task Manager?", a: ["Ctrl+Shift+Esc", "Alt+F4", "Win+R"], correct: "Ctrl+Shift+Esc" },
                        { q: "Safe mode starts Windows with?", a: ["Minimal drivers", "All programs", "Internet only"], correct: "Minimal drivers" }
                    ]
                },
                { 
                    id: 'linux-basics', 
                    title: 'Lesson 6: Linux Essentials', 
                    videoUrl: 'https://www.youtube.com/embed/6hCjzj_BKsk', 
                    duration: "45 min", 
                    completed: false,
                    assignment: `<h3>Assignment 6</h3><p>Run basic Linux commands (ls, cd, pwd).</p>`,
                    quiz: [
                        { q: "Command to list files?", a: ["ls", "dir", "list"], correct: "ls" },
                        { q: "Command to show current directory?", a: ["pwd", "cd", "home"], correct: "pwd" },
                        { q: "Change directory command?", a: ["cd", "mv", "cp"], correct: "cd" }
                    ]
                }
            ]
        },

        // Module 4
        {
            id: "module-4",
            title: 'IT Security',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/it-security.pdf",
            lessons: [
                { 
                    id: 'antivirus-malware', 
                    title: 'Lesson 7: Antivirus & Malware', 
                    videoUrl: 'https://www.youtube.com/embed/3l3WTb9aDqo', 
                    duration: "35 min", 
                    completed: false,
                    assignment: `<h3>Assignment 7</h3><p>Explain types of malware.</p>`,
                    quiz: [
                        { q: "Malware type that locks files?", a: ["Ransomware", "Spyware", "Adware"], correct: "Ransomware" },
                        { q: "Malware that records keystrokes?", a: ["Keylogger", "Virus", "Trojan"], correct: "Keylogger" },
                        { q: "Malware spreading through email?", a: ["Worm", "Ransomware", "Rootkit"], correct: "Worm" }
                    ]
                },
                { 
                    id: 'firewalls', 
                    title: 'Lesson 8: Firewalls & Policies', 
                    videoUrl: 'https://www.youtube.com/embed/3nUeD8IYvX8', 
                    duration: "40 min", 
                    completed: false,
                    assignment: `<h3>Assignment 8</h3><p>Explain how a firewall protects a network.</p>`,
                    quiz: [
                        { q: "Firewall blocks?", a: ["Unauthorized access", "Authorized access", "Emails"], correct: "Unauthorized access" },
                        { q: "Common firewall type?", a: ["Network", "Keyboard", "Display"], correct: "Network" },
                        { q: "Firewall can monitor?", a: ["Traffic", "Battery", "RAM"], correct: "Traffic" }
                    ]
                }
                            ]
        },

        {
            id: "module-5",
            title: 'Troubleshooting & Support',
            difficulty: "Advanced",
            pdfNote: "/pdfs/troubleshooting.pdf",
            lessons: [
                { 
                    id: 'diagnose-hardware', 
                    title: 'Lesson 9: Diagnose Hardware Failures', 
                    videoUrl: 'https://www.youtube.com/embed/n1kOJ4U6j3M', 
                    duration: "40 min", 
                    completed: false,
                    assignment: `<h3>Assignment 9</h3><p>List steps to diagnose a failing hard drive.</p>`,
                    quiz: [
                        { q: "Tool for disk health?", a: ["CHKDSK", "Notepad", "Paint"], correct: "CHKDSK" },
                        { q: "First step in troubleshooting?", a: ["Identify problem", "Replace hardware", "Reinstall OS"], correct: "Identify problem" },
                        { q: "SMART status is used for?", a: ["Disk health monitoring", "RAM usage", "Network speed"], correct: "Disk health monitoring" }
                    ]
                },
                { 
                    id: 'os-troubleshoot', 
                    title: 'Lesson 10: Software & OS Troubleshooting', 
                    videoUrl: 'https://www.youtube.com/embed/x6GkV8Wtfq8', 
                    duration: "45 min", 
                    completed: false,
                    assignment: `<h3>Assignment 10</h3><p>Resolve a boot failure scenario.</p>`,
                    quiz: [
                        { q: "Boot config tool?", a: ["msconfig", "regedit", "taskmgr"], correct: "msconfig" },
                        { q: "Safe Mode is used for?", a: ["Troubleshooting OS issues", "Installing software", "Gaming"], correct: "Troubleshooting OS issues" },
                        { q: "Blue Screen often indicates?", a: ["System crash", "Virus alert", "Printer error"], correct: "System crash" }
                    ]
                }
            ]
        },

        {
            id: "module-6",
            title: 'Cloud & Virtualization',
            difficulty: "Advanced",
            pdfNote: "/pdfs/cloud-virtualization.pdf",
            lessons: [
                { 
                    id: 'cloud-fundamentals', 
                    title: 'Lesson 11: Cloud Basics', 
                    videoUrl: 'https://www.youtube.com/embed/0vDKRk6dV6Y', 
                    duration: "40 min", 
                    completed: false,
                    assignment: `<h3>Assignment 11</h3><p>Describe differences between IaaS, PaaS, SaaS.</p>`,
                    quiz: [
                        { q: "Which is SaaS?", a: ["Google Docs", "VMware", "Linux OS"], correct: "Google Docs" },
                        { q: "IaaS provides?", a: ["Virtual machines", "Software apps", "End-user data"], correct: "Virtual machines" },
                        { q: "PaaS provides?", a: ["Development environment", "Hardware devices", "Printers"], correct: "Development environment" }
                    ]
                },
                { 
                    id: 'virtual-machines', 
                    title: 'Lesson 12: Virtual Machines', 
                    videoUrl: 'https://www.youtube.com/embed/kdjflsdf', 
                    duration: "45 min", 
                    completed: false,
                    assignment: `<h3>Assignment 12</h3><p>Create a VM in VirtualBox or VMware.</p>`,
                    quiz: [
                        { q: "VM software?", a: ["VirtualBox", "Notepad", "Excel"], correct: "VirtualBox" },
                        { q: "VM snapshots are used for?", a: ["Restore state", "Create accounts", "Network configs"], correct: "Restore state" },
                        { q: "Guest OS runs on?", a: ["VM", "Host BIOS", "Router"], correct: "VM" }
                    ]
                }
            ]
        },

        // =========================================
        // MODULE 7: IT Software & Deployment
        // =========================================
        {
            id: "module-7",
            title: 'IT Software & Deployment',
            difficulty: "Advanced",
            pdfNote: "/pdfs/software-deployment.pdf",
            lessons: [
                { 
                    id: 'software-install', 
                    title: 'Lesson 13: Software Installation & Updates', 
                    videoUrl: 'https://www.youtube.com/embed/kdjslf', 
                    duration: "40 min", 
                    completed: false,
                    assignment: `<h3>Assignment 13</h3><p>Install and update a software package.</p>`,
                    quiz: [
                        { q: "Windows update tool?", a: ["Windows Update", "Registry", "Control Panel"], correct: "Windows Update" },
                        { q: "Software patch fixes?", a: ["Bugs or vulnerabilities", "CPU speed", "Screen resolution"], correct: "Bugs or vulnerabilities" },
                        { q: "Installer file type for Windows?", a: [".exe", ".docx", ".txt"], correct: ".exe" }
                    ]
                }
            ]
        },

        // =========================================
        // MODULE 8: Backup, Recovery & Documentation
        // =========================================
        {
            id: "module-8",
            title: 'Backup, Recovery & Documentation',
            difficulty: "Advanced",
            pdfNote: "/pdfs/backup-recovery.pdf",
            lessons: [
                { 
                    id: 'backup-strategies', 
                    title: 'Lesson 14: Backup Strategies', 
                    videoUrl: 'https://www.youtube.com/embed/ljfksdf', 
                    duration: "35 min", 
                    completed: false,
                    assignment: `<h3>Assignment 14</h3><p>Create a backup plan for a small office.</p>`,
                    quiz: [
                        { q: "Best backup frequency?", a: ["Daily", "Monthly", "Yearly"], correct: "Daily" },
                        { q: "Full backup includes?", a: ["All files", "Only system files", "Temporary files"], correct: "All files" },
                        { q: "Offsite backup is for?", a: ["Disaster recovery", "Faster boot", "Printing"], correct: "Disaster recovery" }
                    ]
                }
            ]
        },

        // =========================================
        // MODULE 9: Customer Support & Soft Skills
        // =========================================
        {
            id: "module-9",
            title: 'Customer Support & Soft Skills',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/customer-support.pdf",
            lessons: [
                { 
                    id: 'helpdesk-practices', 
                    title: 'Lesson 15: Help Desk Best Practices', 
                    videoUrl: 'https://www.youtube.com/embed/ksjdf23', 
                    duration: "40 min", 
                    completed: false,
                    assignment: `<h3>Assignment 15</h3><p>Simulate a help desk ticket and resolve it.</p>`,
                    quiz: [
                        { q: "SLA stands for?", a: ["Service Level Agreement", "System Level Access", "Server Log Analysis"], correct: "Service Level Agreement" },
                        { q: "First step in support?", a: ["Acknowledge ticket", "Install software", "Restart server"], correct: "Acknowledge ticket" },
                        { q: "Customer satisfaction metric?", a: ["CSAT", "CPU usage", "RAM usage"], correct: "CSAT" }
                    ]
                }
            ]
        },

        // =========================================
        // MODULE 10: Capstone Lab / Real-World Project
        // =========================================
        {
            id: "module-10",
            title: 'Capstone Lab / Real-World Project',
            difficulty: "Advanced",
            pdfNote: "/pdfs/capstone.pdf",
            lessons: [
                { 
                    id: 'capstone-project', 
                    title: 'Lesson 16: Office IT Setup', 
                    videoUrl: 'https://www.youtube.com/embed/ksjdlf23', 
                    duration: "60 min", 
                    completed: false,
                    assignment: `<h3>Capstone Assignment</h3><p>Build an office IT setup and troubleshoot 5 scenarios.</p>`,
                    quiz: [
                        { q: "What to test first?", a: ["Power", "Network", "Printer"], correct: "Power" },
                        { q: "Check user accounts for?", a: ["Permissions", "Screen size", "Mouse"], correct: "Permissions" },
                        { q: "Network connectivity issue check?", a: ["Ping test", "Install app", "Reboot monitor"], correct: "Ping test" }
                    ]
                }
            ]
        }
    ]
}

,

'business-analysis': {
    id: 'business-analysis',
    title: 'Business Analysis Fundamentals',
    thumbnail: "/img/0.png",
    description: "Learn to bridge the gap between IT and business by gathering requirements, mapping processes, and driving data-driven decisions.",
    tags: ["Business", "Strategy", "Requirements", "Agile"],
    skillsGained: ["Stakeholder Management", "Process Modeling", "User Stories", "BRD Writing", "Data Analysis", "UAT"],
    prerequisites: ["None"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },
    modules: [
        // Module 1
        {
            id: "module-1",
            title: 'Introduction to BA',
            difficulty: "Beginner",
            pdfNote: "/pdfs/ba-introduction.pdf",
            lessons: [
                { 
                    id: 'what-is-ba', title: 'Lesson 1: What is Business Analysis?', videoUrl: 'https://www.youtube.com/embed/lxY6h4lT6c4', duration: "25 min", completed: false,
                    assignment: `<h3>Assignment 1</h3><p>Identify 3 key stakeholders for a payroll system.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Primary goal of a BA?", a: ["Define needs", "Write code"], correct: "Define needs" }],
                    labEmbedUrl: null
                },
                { 
                    id: 'requirements-gathering', title: 'Lesson 2: Requirements Gathering', videoUrl: 'https://www.youtube.com/embed/e0Dq40Jk89c', duration: "35 min", completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Write a user story: 'As a [role], I want to [feature], so that [benefit]'.</p><textarea class="assignment-textarea" data-min-length="20"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Which is functional?", a: ["System calculates tax", "System is blue"], correct: "System calculates tax" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-2",
            title: 'Process Modeling',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/ba-process-modeling.pdf",
            lessons: [
                { 
                    id: 'process-mapping', title: 'Lesson 3: Process Mapping (BPMN)', videoUrl: 'https://www.youtube.com/embed/7s6N1i1K7u0', duration: "40 min", completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Explain the difference between 'As-Is' and 'To-Be' process maps.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Decision shape in flowchart?", a: ["Diamond", "Square"], correct: "Diamond" }],
                    labEmbedUrl: 'https://embed.diagrams.net/?embed=1&ui=min&spin=1&proto=json&configure=1'
                }
            ]
        },

        {
            id: "module-3",
            title: 'Documentation & BRD',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/ba-documentation.pdf",
            lessons: [
                { 
                    id: 'brd-writing', title: 'Lesson 4: Business Requirements Document', videoUrl: 'https://www.youtube.com/embed/ZkX_E1x5Q8Y', duration: "35 min", completed: false,
                    assignment: `<h3>Assignment 4</h3><p>Create a BRD template for a simple HR system.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "BRD primary purpose?", a: ["Capture requirements", "Code software"], correct: "Capture requirements" }],
                    labEmbedUrl: 'https://docs.google.com/document/' 
                },
                { 
                    id: 'functional-nonfunctional', title: 'Lesson 5: Functional vs Non-Functional Requirements', videoUrl: 'https://www.youtube.com/embed/Y0d1U_euCO8', duration: "30 min", completed: false,
                    assignment: `<h3>Assignment 5</h3><p>List 3 functional and 3 non-functional requirements for an online store.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Performance is?", a: ["Non-Functional", "Functional"], correct: "Non-Functional" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-4",
            title: 'Agile & User Stories',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/ba-agile.pdf",
            lessons: [
                { 
                    id: 'user-stories', title: 'Lesson 6: Agile & User Stories', videoUrl: 'https://www.youtube.com/embed/oej3D1Xj5MQ', duration: "35 min", completed: false,
                    assignment: `<h3>Assignment 6</h3><p>Write 3 user stories for a mobile app login feature.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Format of user story?", a: ["As a [role], I want [feature], so that [benefit]", "Do X then Y"], correct: "As a [role], I want [feature], so that [benefit]" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-5",
            title: 'Data Analysis for BA',
            difficulty: "Intermediate",
            pdfNote: "/pdfs/ba-data-analysis.pdf",
            lessons: [
                { 
                    id: 'data-driven-decisions', title: 'Lesson 7: Data Analysis & Reporting', videoUrl: 'https://www.youtube.com/embed/HjRkz0pqKfQ', duration: "40 min", completed: false,
                    assignment: `<h3>Assignment 7</h3><p>Create a simple report summarizing user survey data.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Why analyze data?", a: ["Make decisions", "Decorate charts"], correct: "Make decisions" }],
                    labEmbedUrl: 'https://colab.research.google.com/' 
                }
            ]
        },

        {
            id: "module-6",
            title: 'Testing & UAT',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ba-uat.pdf",
            lessons: [
                { 
                    id: 'uat-testing', title: 'Lesson 8: User Acceptance Testing', videoUrl: 'https://www.youtube.com/embed/N8plPzZC4mA', duration: "35 min", completed: false,
                    assignment: `<h3>Assignment 8</h3><p>Create a UAT checklist for a payroll system.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "UAT verifies?", a: ["System meets user needs", "Code correctness"], correct: "System meets user needs" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-7",
            title: 'Capstone Project',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ba-capstone.pdf",
            lessons: [
                { 
                    id: 'capstone-project', title: 'Lesson 9: Capstone Business Analysis Project', videoUrl: 'https://www.youtube.com/embed/N9jVtLqXz9M', duration: "60 min", completed: false,
                    assignment: `<h3>Capstone Assignment</h3><p>Analyze a case study, gather requirements, and create process maps, BRD, and user stories.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "First step in BA project?", a: ["Identify stakeholders", "Write code"], correct: "Identify stakeholders" }],
                    labEmbedUrl: 'https://embed.diagrams.net/?embed=1&ui=min&spin=1&proto=json&configure=1'
                }
            ]
        }
    ]
},

'business-analysis-advanced': {
    id: 'business-analysis-advanced',
    title: 'Advanced Business Analysis',
    thumbnail: "/img/0.png",
    description: "Deep-dive into enterprise analysis, advanced modeling, product ownership, data-driven decision making, and strategic business architecture.",
    tags: ["Business", "Enterprise", "Strategy", "Advanced BA", "Analytics"],
    skillsGained: [
        "Enterprise Analysis",
        "Advanced BPMN",
        "Data Modeling",
        "Systems Thinking",
        "Product Ownership",
        "Solution Evaluation",
        "Business Architecture",
        "Advanced UAT & QA Strategy"
    ],
    prerequisites: ["Business Analysis Fundamentals"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },

    modules: [

        {
            id: "module-1",
            title: 'Enterprise & Strategic Analysis',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ba-advanced-enterprise.pdf",
            lessons: [
                { 
                    id: 'strategic-analysis',
                    title: 'Lesson 1: Advanced Strategic & Enterprise Analysis',
                    videoUrl: 'https://www.youtube.com/embed/IRPo9Iu9nP8',
                    duration: "45 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 1</h3>
                        <p>Conduct a SWOT + Root Cause Analysis for a struggling e-commerce company.</p>
                        <textarea class="assignment-textarea" data-min-length="60"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>`,
                    quiz: [{ q: "What does enterprise analysis align with?", a: ["Business strategy", "UI design"], correct: "Business strategy" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-2",
            title: 'Advanced BPMN & Process Optimization',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ba-advanced-process.pdf",
            lessons: [
                { 
                    id: 'advanced-bpmn',
                    title: 'Lesson 2: BPMN 2.0 Advanced Modeling',
                    videoUrl: 'https://www.youtube.com/embed/IV8ZqDK2CSg',
                    duration: "50 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 2</h3>
                        <p>Model a complex insurance claim process using advanced BPMN elements: gateways, events, and swimlanes.</p>
                        <textarea class="assignment-textarea" data-min-length="60"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>`,
                    quiz: [{ q: "What BPMN element handles exceptions?", a: ["Event", "Task"], correct: "Event" }],
                    labEmbedUrl: 'https://embed.diagrams.net/?embed=1&ui=min&spin=1'
                }
            ]
        },

        {
            id: "module-3",
            title: 'Data Modeling & Systems Thinking',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ba-data-modeling.pdf",
            lessons: [
                { 
                    id: 'data-modeling',
                    title: 'Lesson 3: Data Models, ERDs & System Interactions',
                    videoUrl: 'https://www.youtube.com/embed/_W_8xDFIxk8',
                    duration: "45 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 3</h3>
                        <p>Create an ERD for a banking system with customers, accounts, transactions, and loans.</p>
                        <textarea class="assignment-textarea" data-min-length="50"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>`,
                    quiz: [{ q: "ERD shows?", a: ["Data relationships", "UI screens"], correct: "Data relationships" }],
                    labEmbedUrl: '/erd-lab'
                }
            ]
        },

        {
            id: "module-4",
            title: 'Product Ownership, Agile Scaling & Backlog Mastery',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ba-product-ownership.pdf",
            lessons: [
                { 
                    id: 'agile-scaling',
                    title: 'Lesson 4: Scaling Agile – SAFe, LeSS & Nexus',
                    videoUrl: 'https://www.youtube.com/embed/cDJsa1shGdE',
                    duration: "50 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 4</h3>
                        <p>Create a prioritized backlog for a fintech mobile app using MoSCoW + Weighted Shortest Job First (WSJF).</p>
                        <textarea class="assignment-textarea" data-min-length="60"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>`,
                    quiz: [{ q: "Purpose of WSJF?", a: ["Prioritization", "UI styling"], correct: "Prioritization" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-5",
            title: 'Solution Evaluation & Optimization',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ba-solution-evaluation.pdf",
            lessons: [
                { 
                    id: 'solution-evaluation',
                    title: 'Lesson 5: Measuring & Evaluating Business Solutions',
                    videoUrl: 'https://www.youtube.com/embed/zlPC2kDbRcs',
                    duration: "40 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 5</h3>
                        <p>Evaluate a deployed CRM solution and document gaps, KPIs, and improvement recommendations.</p>
                        <textarea class="assignment-textarea" data-min-length="60"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>`,
                    quiz: [{ q: "Which evaluates success?", a: ["KPIs", "CSS"], correct: "KPIs" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-6",
            title: 'Advanced UAT, QA Strategy & Defect Management',
            difficulty: "Advanced",
            pdfNote: "/pdfs/ba-advanced-uat.pdf",
            lessons: [
                { 
                    id: 'advanced-uat',
                    title: 'Lesson 6: UAT Strategy & End-to-End Testing',
                    videoUrl: 'https://www.youtube.com/embed/iyO_nS95B90',
                    duration: "45 min",
                    completed: false,
                    assignment: `
                        <h3>Assignment 6</h3>
                        <p>Create a UAT strategy with entry/exit criteria, test scripts, and acceptance criteria for an HR system.</p>
                        <textarea class="assignment-textarea" data-min-length="60"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>`,
                    quiz: [{ q: "What is part of UAT?", a: ["Test scenarios", "Brand colors"], correct: "Test scenarios" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-7",
            title: 'Capstone: Enterprise Solution Design',
            difficulty: "Expert",
            pdfNote: "/pdfs/ba-graduate-capstone.pdf",
            lessons: [
                { 
                    id: 'graduate-capstone',
                    title: 'Lesson 7: Full Enterprise BA Project',
                    videoUrl: 'https://www.youtube.com/embed/N9jVtLqXz9M',
                    duration: "90 min",
                    completed: false,
                    assignment: `
                        <h3>Capstone Project</h3>
                        <p>
                            Analyse a large enterprise system (e.g., digital banking).  
                            Deliverables must include:<br><br>
                            ✔ Stakeholder Analysis<br>
                            ✔ Advanced BPMN diagrams<br>
                            ✔ ERD + Data Model<br>
                            ✔ User Stories + Acceptance Criteria<br>
                            ✔ BRD + SRS<br>
                            ✔ UAT Plan<br>
                        </p>
                        <textarea class="assignment-textarea" data-min-length="120"></textarea>
                        <button class="button primary assignment-submit">Submit</button>
                        <p class="assignment-status"></p>`,
                    quiz: [{ q: "What comes first in enterprise BA?", a: ["Stakeholder identification", "Coding"], correct: "Stakeholder identification" }],
                    labEmbedUrl: 'https://embed.diagrams.net/?embed=1&ui=min&spin=1'
                }
            ]
        }

    ]
}, 

'desktop-support': {
  id: 'desktop-support',
  title: 'Desktop Support Technician (Fast-Track)',
  thumbnail: '/img/desktop-support.png',
  description: 'Fast-track course that teaches practical desktop & helpdesk skills — hardware, Windows support, networking basics, Active Directory and customer-facing troubleshooting.',
  tags: ['IT Support', 'Helpdesk', 'Windows', 'Networking'],
  skillsGained: [
    'Hardware diagnostics & repair',
    'Windows installation & troubleshooting',
    'Basic networking (IP, DHCP, DNS, Wi-Fi)',
    'Active Directory & user management',
    'Malware removal & security basics',
    'Ticketing & professional support communication'
  ],
  prerequisites: ['None — basic computer familiarity recommended'],
  certificateEligible: true,
  offlineResources: ['/pdfs/desktop-support-cheatsheet.pdf'],
  progress: { completedLessons: 0, totalLessons: 0 },
  modules: [
    {
      id: 'ds-module-1',
      title: 'Getting Started with Desktop Support',
      difficulty: 'Beginner',
      pdfNote: '/pdfs/ds-intro.pdf',
      lessons: [
        {
          id: 'ds-intro-role',
          title: 'Lesson 1: Role of a Desktop Support Technician',
          videoUrl: 'https://www.youtube.com/embed/0eG3w3jD5kY', 
          duration: '20 min',
          completed: false,
          assignment: `
            <h3>Assignment 1: Support Role Reflection</h3>
            <p>List three responsibilities of a desktop support technician and one soft skill that matters most. (Min 30 words)</p>
            <textarea class="assignment-textarea" data-min-length="30" placeholder="Write your answer..."></textarea>
            <button class="button primary assignment-submit" style="margin-top:10px;">Submit Assignment</button>
            <p class="assignment-status" style="font-weight:600; margin-top:8px;"></p>
          `,
          quiz: [
            { q: 'Which best describes first-line support?', a: ['Handles initial requests', 'Writes backend services', 'Designs networks'], correct: 'Handles initial requests' }
          ],
          labEmbedUrl: null
        }
      ]
    },

    {
      id: 'ds-module-2',
      title: 'Hardware & Peripherals',
      difficulty: 'Beginner',
      pdfNote: '/pdfs/ds-hardware.pdf',
      lessons: [
        {
          id: 'ds-hardware-basics',
          title: 'Lesson 2: PC Components & Diagnostics',
          videoUrl: 'https://www.youtube.com/embed/1a2b3cD4E5F', // placeholder
          duration: '35 min',
          completed: false,
          assignment: `
            <h3>Assignment 2: Hardware Checklist</h3>
            <p>Create a short checklist for diagnosing a PC that won’t boot. (Min 30 words)</p>
            <textarea class="assignment-textarea" data-min-length="30" placeholder="Paste your checklist..."></textarea>
            <button class="button primary assignment-submit" style="margin-top:10px;">Submit Assignment</button>
            <p class="assignment-status" style="font-weight:600; margin-top:8px;"></p>
          `,
          quiz: [
            { q: 'Which component stores the OS?', a: ['SSD/HDD', 'RAM', 'CPU'], correct: 'SSD/HDD' }
          ],
          labEmbedUrl: null
        }
      ]
    },

    {
      id: 'ds-module-3',
      title: 'Windows OS & Software Support',
      difficulty: 'Beginner',
      pdfNote: '/pdfs/ds-windows.pdf',
      lessons: [
        {
          id: 'ds-windows-install',
          title: 'Lesson 3: Installing & Troubleshooting Windows',
          videoUrl: 'https://www.youtube.com/embed/2a2b3cD4E5G', // placeholder
          duration: '40 min',
          completed: false,
          assignment: `
            <h3>Assignment 3: Common Fixes</h3>
            <p>Describe how you would fix a slow Windows PC (3 steps). (Min 30 words)</p>
            <textarea class="assignment-textarea" data-min-length="30" placeholder="Write steps..."></textarea>
            <button class="button primary assignment-submit" style="margin-top:10px;">Submit Assignment</button>
            <p class="assignment-status" style="font-weight:600; margin-top:8px;"></p>
          `,
          quiz: [
            { q: 'What tool shows installed drivers?', a: ['Device Manager', 'Task Manager', 'Event Viewer'], correct: 'Device Manager' }
          ],
          labEmbedUrl: null
        }
      ]
    },

    {
      id: 'ds-module-4',
      title: 'Networking Fundamentals for Support',
      difficulty: 'Beginner',
      pdfNote: '/pdfs/ds-networking.pdf',
      lessons: [
        {
          id: 'ds-network-basics',
          title: 'Lesson 4: IP, DNS & Wi-Fi Troubleshooting',
          videoUrl: 'https://www.youtube.com/embed/3a3b3cD4E5H', // placeholder
          duration: '45 min',
          completed: false,
          assignment: `
            <h3>Assignment 4: Network Troubleshooting</h3>
            <p>Explain 3 steps to diagnose Wi-Fi dropouts. (Min 30 words)</p>
            <textarea class="assignment-textarea" data-min-length="30" placeholder="Describe steps..."></textarea>
            <button class="button primary assignment-submit" style="margin-top:10px;">Submit Assignment</button>
            <p class="assignment-status" style="font-weight:600; margin-top:8px;"></p>
          `,
          quiz: [
            { q: 'What command shows IP config on Windows?', a: ['ipconfig', 'ifconfig', 'ping'], correct: 'ipconfig' }
          ],
          labEmbedUrl: 'https://www.packettracer.io/' 
        }
      ]
    },

    {
      id: 'ds-module-5',
      title: 'Active Directory & User Support',
      difficulty: 'Intermediate',
      pdfNote: '/pdfs/ds-ad.pdf',
      lessons: [
        {
          id: 'ds-ad-basics',
          title: 'Lesson 5: User Accounts, Groups & Policies',
          videoUrl: 'https://www.youtube.com/embed/4a4b4cD4E5I', // placeholder
          duration: '35 min',
          completed: false,
          assignment: `
            <h3>Assignment 5: AD Task</h3>
            <p>Write steps to reset a user password and document it in a ticket. (Min 30 words)</p>
            <textarea class="assignment-textarea" data-min-length="30" placeholder="Write steps..."></textarea>
            <button class="button primary assignment-submit" style="margin-top:10px;">Submit Assignment</button>
            <p class="assignment-status" style="font-weight:600; margin-top:8px;"></p>
          `,
          quiz: [
            { q: 'Which tool manages AD users?', a: ['Active Directory Users & Computers', 'Device Manager', 'Regedit'], correct: 'Active Directory Users & Computers' }
          ],
          labEmbedUrl: null
        }
      ]
    },

    {
      id: 'ds-module-6',
      title: 'Security & Malware Removal',
      difficulty: 'Intermediate',
      pdfNote: '/pdfs/ds-security.pdf',
      lessons: [
        {
          id: 'ds-security',
          title: 'Lesson 6: Malware, Antivirus & Best Practices',
          videoUrl: 'https://www.youtube.com/embed/5a5b5cD4E5J', // placeholder
          duration: '30 min',
          completed: false,
          assignment: `
            <h3>Assignment 6: Security Response</h3>
            <p>Explain how to perform a basic malware scan and secure a compromised workstation. (Min 30 words)</p>
            <textarea class="assignment-textarea" data-min-length="30" placeholder="Describe actions..."></textarea>
            <button class="button primary assignment-submit" style="margin-top:10px;">Submit Assignment</button>
            <p class="assignment-status" style="font-weight:600; margin-top:8px;"></p>
          `,
          quiz: [
            { q: 'Best first step for suspected malware?', a: ['Isolate device', 'Reboot repeatedly', 'Change BIOS'], correct: 'Isolate device' }
          ],
          labEmbedUrl: null
        }
      ]
    },

    {
      id: 'ds-module-7',
      title: 'Professional Support & Capstone',
      difficulty: 'Intermediate',
      pdfNote: '/pdfs/ds-capstone.pdf',
      lessons: [
        {
          id: 'ds-capstone',
          title: 'Lesson 7: Capstone — Real World Ticket',
          videoUrl: 'https://www.youtube.com/embed/6a6b6cD4E5K', // placeholder
          duration: '60 min',
          completed: false,
          assignment: `
            <h3>Capstone Assignment</h3>
            <p>Resolve a simulated ticket: diagnose, document steps, and provide a resolution summary (submit as text). (Min 100 words)</p>
            <textarea class="assignment-textarea" data-min-length="100" placeholder="Submit your capstone write-up..."></textarea>
            <button class="button primary assignment-submit" style="margin-top:10px;">Submit Capstone</button>
            <p class="assignment-status" style="font-weight:600; margin-top:8px;"></p>
          `,
          quiz: [
            { q: 'Final step after resolving ticket?', a: ['Document resolution & close ticket', 'Ignore user', 'Delete logs'], correct: 'Document resolution & close ticket' }
          ],
          labEmbedUrl: null
        }
      ]
    }
  ]
},

'call-centre-digital-skills': {
    id: 'call-centre-digital-skills',
    title: 'Call Centre Digital Skills',
    thumbnail: "/img/0.png",
    description: "Prepare for a high-demand career in customer support by mastering digital tools, communication skills, CRM systems, and problem-solving techniques used in modern call centres.",
    tags: ["Customer Service", "Digital Skills", "Call Centre", "CRM"],
    skillsGained: [
        "Professional Communication", 
        "Call Handling Techniques", 
        "Ticketing Systems", 
        "Customer Empathy", 
        "Escalation Management",
        "CRM System Navigation"
    ],
    prerequisites: ["Basic Computer Skills"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },

    modules: [
        {
            id: "module-1",
            title: "Introduction to Contact Centres",
            difficulty: "Beginner",
            pdfNote: "/pdfs/callcentre-intro.pdf",
            lessons: [
                {
                    id: "lesson-1",
                    title: "Lesson 1: The Call Centre Industry",
                    videoUrl: "https://www.youtube.com/embed/xM9XN6PvxF8",
                    duration: "20 min",
                    completed: false,
                    assignment: `<h3>Assignment 1</h3><p>Explain in your own words what a modern call centre does and list 3 industries that rely heavily on customer support teams.</p><textarea class="assignment-textarea" data-min-length="40"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "What is the purpose of a call centre?", a: ["Support customers", "Build computers"], correct: "Support customers" }],
                    labEmbedUrl: null
                }
            ]
        },
        {
            id: "module-2",
            title: "Communication & Professionalism",
            difficulty: "Beginner",
            pdfNote: "/pdfs/callcentre-communication.pdf",
            lessons: [
                {
                    id: "lesson-2",
                    title: "Lesson 2: Professional Communication",
                    videoUrl: "https://www.youtube.com/embed/eGNAfC9m7Y8",
                    duration: "30 min",
                    completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Write a sample response you would give to a frustrated customer requesting help with an account issue.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "What is the key to good communication?", a: ["Active listening", "Speaking faster"], correct: "Active listening" }],
                    labEmbedUrl: null
                }
            ]
        },
        {
            id: "module-3",
            title: "CRM & Ticketing Systems",
            difficulty: "Intermediate",
            pdfNote: "/pdfs/callcentre-crm.pdf",
            lessons: [
                {
                    id: "lesson-3",
                    title: "Lesson 3: Using CRM & Ticketing Software",
                    videoUrl: "https://www.youtube.com/embed/9uL37Q7-VrM",
                    duration: "35 min",
                    completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Create a sample ticket describing a customer's issue with their online order.</p><textarea class="assignment-textarea" data-min-length="40"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "What is a CRM?", a: ["Customer Relationship Management", "Central Robot Machine"], correct: "Customer Relationship Management" }],
                    labEmbedUrl: "https://embed.diagrams.net/?embed=1&ui=min"
                }
            ]
        }
    ]
}
, 

'youth-programme': {
    id: 'youth-programe',
    title: 'Youth Program',
    thumbnail: "/img/youth-program.png",
    description: "Practical soft skills, workplace experience, and introductory tech for youth with low-tech background.",
    tags: ["Work Readiness", "Digital Literacy", "Cyber Safety", "Drone", "Robotics"],
    skillsGained: [
        "Professionalism",
        "Teamwork",
        "Problem Solving",
        "Digital Literacy",
        "Cyber Safety",
        "Drone Operation",
        "Robotics"
    ],
    prerequisites: ["None"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },
    modules: [

        {
            id: "module-1",
            title: "Workplace Communication & Etiquette",
            difficulty: "Beginner",
            lessons: [
                { 
                    id: "professional-behavior",
                    title: "Lesson 1: Professional Behavior & Workplace Norms",
                    videoUrl: "https://www.youtube.com/embed/example1",
                    duration: "30 min",
                    completed: false,
                    skillPoints: { "Professionalism": 10 },
                    assignment: `<h3>Assignment 1</h3><p>List 5 professional behaviors expected in a workplace.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Which is professional behavior?", a: ["Punctuality", "Using slang"], correct: "Punctuality" }],
                    labEmbedUrl: null
                },
                { 
                    id: "teamwork-activities",
                    title: "Lesson 2: Teamwork & Collaboration Activities",
                    videoUrl: "https://www.youtube.com/embed/example2",
                    duration: "35 min",
                    completed: false,
                    skillPoints: { "Teamwork": 10 },
                    assignment: `<h3>Assignment 2</h3><p>Complete a group activity and reflect on teamwork.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Teamwork requires?", a: ["Communication", "Competition"], correct: "Communication" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-2",
            title: "Problem Solving & Critical Thinking",
            difficulty: "Beginner",
            lessons: [
                { 
                    id: "scenario-solving",
                    title: "Lesson 3: Scenario-based Problem Solving",
                    videoUrl: "https://www.youtube.com/embed/example3",
                    duration: "40 min",
                    completed: false,
                    skillPoints: { "Problem Solving": 10 },
                    assignment: `<h3>Assignment 3</h3><p>Analyze a workplace scenario and propose a solution.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Critical thinking helps with?", a: ["Problem Solving", "Procrastination"], correct: "Problem Solving" }],
                    labEmbedUrl: null
                },
                { 
                    id: "mini-project-workflow",
                    title: "Mini Project: Organize a Mock Office Task Workflow",
                    videoUrl: null,
                    duration: "60 min",
                    completed: false,
                    skillPoints: { "Problem Solving": 15, "Teamwork": 10 },
                    assignment: `<h3>Mini Project</h3><p>Create a workflow plan for a simple office task (e.g., processing forms).</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-3",
            title: "Community Tech Engagement (Onsite)",
            difficulty: "Beginner",
            lessons: [
                { 
                    id: "assist-learners",
                    title: "Lesson 4: Assist Local Learners in a Simple Computer Lab Activity",
                    videoUrl: null,
                    duration: "45 min",
                    completed: false,
                    skillPoints: { "Digital Literacy": 10, "Teamwork": 5 },
                    assignment: `<h3>Assignment 4</h3><p>Help a group of learners complete a basic computer task.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [],
                    labEmbedUrl: null
                },
                { 
                    id: "teach-digital-basics",
                    title: "Lesson 5: Teach Basic Digital Literacy to Children or Peers",
                    videoUrl: null,
                    duration: "45 min",
                    completed: false,
                    skillPoints: { "Digital Literacy": 15, "Professionalism": 5 },
                    assignment: `<h3>Assignment 5</h3><p>Conduct a mini digital literacy session.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-4",
            title: "Cyber Safety & Digital Citizenship for Youth",
            difficulty: "Beginner",
            lessons: [
                { 
                    id: "online-safety",
                    title: "Lesson 6: Online Safety, Anti-Bullying, Digital Footprint",
                    videoUrl: "https://www.youtube.com/embed/example6",
                    duration: "35 min",
                    completed: false,
                    skillPoints: { "Cyber Safety": 10 },
                    assignment: `<h3>Assignment 6</h3><p>List 5 ways to protect yourself online.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Digital footprint is?", a: ["Your online presence", "Your resume"], correct: "Your online presence" }],
                    labEmbedUrl: null
                },
                { 
                    id: "protect-info",
                    title: "Lesson 7: Protecting Personal Information & Privacy Settings",
                    videoUrl: "https://www.youtube.com/embed/example7",
                    duration: "35 min",
                    completed: false,
                    skillPoints: { "Cyber Safety": 10, "Digital Literacy": 5 },
                    assignment: `<h3>Assignment 7</h3><p>Enable privacy settings on a test account.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Enable 2FA?", a: ["Yes", "No"], correct: "Yes" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-5",
            title: "Intro to Drone Technology & Mapping",
            difficulty: "Beginner",
            lessons: [
                { 
                    id: "drone-safety",
                    title: "Lesson 8: Drone Safety & Prep",
                    videoUrl: "https://www.youtube.com/embed/example8",
                    duration: "30 min",
                    completed: false,
                    skillPoints: { "Drone Operation": 10 },
                    assignment: `<h3>Assignment 8</h3><p>List 5 rules for flying drones safely.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Fly near airport?", a: ["No", "Yes"], correct: "No" }],
                    labEmbedUrl: null
                },
                { 
                    id: "aerial-mapping",
                    title: "Lesson 9: Aerial Mapping & Observation",
                    videoUrl: "https://www.youtube.com/embed/example9",
                    duration: "40 min",
                    completed: false,
                    skillPoints: { "Drone Operation": 15 },
                    assignment: `<h3>Assignment 9</h3><p>Map a small area and annotate features.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-6",
            title: "Intro to Robotics",
            difficulty: "Beginner",
            lessons: [
                { 
                    id: "robotics-basics",
                    title: "Lesson 10: Robotics Fundamentals",
                    videoUrl: "https://www.youtube.com/embed/example10",
                    duration: "40 min",
                    completed: false,
                    skillPoints: { "Robotics": 10 },
                    assignment: `<h3>Assignment 10</h3><p>Identify 5 parts of a simple robot.</p><textarea class="assignment-textarea" data-min-length="30"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Robots can?", a: ["Perform programmed tasks", "Sleep"], correct: "Perform programmed tasks" }],
                    labEmbedUrl: null
                },
                { 
                    id: "robotics-mini-project",
                    title: "Lesson 11: Mini Robotics Project",
                    videoUrl: null,
                    duration: "60 min",
                    completed: false,
                    skillPoints: { "Robotics": 15, "Problem Solving": 10 },
                    assignment: `<h3>Mini Project</h3><p>Build a simple circuit robot (line follower or light sensor).</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [],
                    labEmbedUrl: null
                }
            ]
        }
    ],
    badges: [
        { name: "Professionalism Pro", skill: "Professionalism", pointsRequired: 50 },
        { name: "Teamwork Star", skill: "Teamwork", pointsRequired: 40 },
        { name: "Problem Solver", skill: "Problem Solving", pointsRequired: 40 },
        { name: "Digital Literacy Champion", skill: "Digital Literacy", pointsRequired: 50 },
        { name: "Cyber Safe Youth", skill: "Cyber Safety", pointsRequired: 40 },
        { name: "Drone Navigator", skill: "Drone Operation", pointsRequired: 25 },
        { name: "Junior Robotics Engineer", skill: "Robotics", pointsRequired: 25 }
    ]
}
,
'drone-tech': {
    id: 'drone-tech',
    title: 'Drone Operations & Aerial Analytics',
    thumbnail: "/img/drone-tech-advanced.png",
    description: "Master professional drone operations, aerial data collection, mapping analytics, and field applications for agriculture, security, and surveying.",
    tags: ["Drones", "Mapping", "GIS", "Field Work", "Data Analysis"],
    skillsGained: ["Advanced Flight Planning", "Drone Safety & Compliance", "Aerial Mapping & GIS", "Data Analysis", "Surveying Techniques", "Field Reporting"],
    prerequisites: ["Intro to Drone Technology & Mapping or basic drone experience"],
    certificateEligible: true,
    offlineResources: [],
    progress: { completedLessons: 0, totalLessons: 0 },
    modules: [
    
        {
            id: "module-1",
            title: "Flight Safety & Compliance",
            difficulty: "Intermediate",
            lessons: [
                {
                    id: "regulations-advanced",
                    title: "Lesson 1: Drone Regulations & Airspace",
                    videoUrl: "https://www.youtube.com/embed/example-adv1",
                    duration: "40 min",
                    completed: false,
                    assignment: `<h3>Assignment 1</h3><p>Research your local drone regulations and create a compliance checklist for complex operations.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Can you fly drones above people without authorization?", a: ["No", "Yes"], correct: "No" }],
                    labEmbedUrl: null
                },
                {
                    id: "advanced-safety",
                    title: "Lesson 2: Emergency Handling & Risk Management",
                    videoUrl: "https://www.youtube.com/embed/example-adv2",
                    duration: "45 min",
                    completed: false,
                    assignment: `<h3>Assignment 2</h3><p>Create a risk management plan for a drone mission including contingencies for emergencies.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Best practice for emergency landing?", a: ["Open clear area", "Near obstacles"], correct: "Open clear area" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-2",
            title: "Flight Planning & Maneuvers",
            difficulty: "Intermediate",
            lessons: [
                {
                    id: "flight-paths",
                    title: "Lesson 3: Complex Flight Path Planning",
                    videoUrl: "https://www.youtube.com/embed/example-adv3",
                    duration: "50 min",
                    completed: false,
                    assignment: `<h3>Assignment 3</h3><p>Design a complex flight path including altitude changes, obstacles, and multiple waypoints.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Why use waypoints?", a: ["Precise flight path", "Random flying"], correct: "Precise flight path" }],
                    labEmbedUrl: null
                },
                {
                    id: "advanced-maneuvers",
                    title: "Lesson 4: Advanced Maneuvers & Payload Operations",
                    videoUrl: "https://www.youtube.com/embed/example-adv4",
                    duration: "50 min",
                    completed: false,
                    assignment: `<h3>Assignment 4</h3><p>Perform a payload drop simulation or precision maneuver and document results.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Payload affects?", a: ["Stability & battery", "Color of drone"], correct: "Stability & battery" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-3",
            title: "Aerial Mapping & GIS Analytics",
            difficulty: "Advanced",
            lessons: [
                {
                    id: "mapping-advanced",
                    title: "Lesson 5: High-Resolution Mapping & Orthomosaics",
                    videoUrl: "https://www.youtube.com/embed/example-adv5",
                    duration: "60 min",
                    completed: false,
                    assignment: `<h3>Assignment 5</h3><p>Produce an orthomosaic map from multiple drone images and annotate key features.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "Orthomosaic maps are?", a: ["Corrected aerial image mosaics", "Hand sketches"], correct: "Corrected aerial image mosaics" }],
                    labEmbedUrl: null
                },
                {
                    id: "gis-analysis",
                    title: "Lesson 6: GIS Data Analysis & Interpretation",
                    videoUrl: "https://www.youtube.com/embed/example-adv6",
                    duration: "60 min",
                    completed: false,
                    assignment: `<h3>Assignment 6</h3><p>Analyze drone data for area measurement, vegetation health, or security mapping.</p><textarea class="assignment-textarea" data-min-length="50"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "GIS helps to?", a: ["Analyze spatial data", "Bake cakes"], correct: "Analyze spatial data" }],
                    labEmbedUrl: null
                }
            ]
        },

        {
            id: "module-4",
            title: "Capstone Drone Project",
            difficulty: "Advanced",
            lessons: [
                {
                    id: "field-project",
                    title: "Lesson 7: Real-World Drone Project",
                    videoUrl: null,
                    duration: "90 min",
                    completed: false,
                    assignment: `<h3>Capstone Project</h3><p>Plan, execute, and document a full drone survey project, including safety, flight path, data collection, and GIS mapping.</p><textarea class="assignment-textarea" data-min-length="100"></textarea><button class="button primary assignment-submit">Submit</button><p class="assignment-status"></p>`,
                    quiz: [{ q: "First step in a professional drone project?", a: ["Flight planning", "Takeoff immediately"], correct: "Flight planning" }],
                    labEmbedUrl: null
                }
            ]
        }
    ]
}


};