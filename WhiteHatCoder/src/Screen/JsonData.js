const courses = [
  {
    "id": 1,
    "category": "Mobile Development",
    "courseName": "Android Development",
    "courseDuration": "6 Months",
    "introduction": "Android Development is the process of creating applications for devices running the Android operating system, such as smartphones, tablets, smart TVs, and wearables. Android is built by Google and is the world’s most popular mobile platform, powering billions of devices.",
    "projectMade": ["Notes App", "Expense Tracker"],
    "finalProjectMade": "Online Shopping App",
    "img": require("../assets/andriod1.png"),
    "fees": "18000",
    "aboutCourse": "Covers Android Studio, layouts, Firebase, SQLite, APIs, and full app creation.",
    "technology1": require("../assets/java1.png"),
    "technology2": require("../assets/kotlin.png"),
    "technology3": require("../assets/androidstudio.png"),
    "technology4": require("../assets/firebase.png"),
    "technology5": require("../assets/sqlite.png"),
    "Technologies":'✔ Java :The oldest and most widely used language for Android apps. \n ✔ Kotlin (Official recommended language by Google):Modern, fast, easy, and used in almost all new apps.\n ✔ Android Studio:The official IDE that provides tools to design, code, test, and publish apps.\n ✔ XML:Used to design app UI layouts.\n ✔ Firebase:Used for authentication, database, hosting, analytics, notifications, etc. ',
    "What":'Designing UI with XML\nActivity & Fragment lifecycle\nNavigation\n Working with APIs\nUsing local database (Room / SQLite)\nFirebase integration\nPush notifications\nApp testing & deployment on Play Store ',
    "why":'Android has the largest global market share,\nHuge job opportunities\nYou can publish apps on Play Store\nFlexible and open-source platform\nEasy to integrate with APIs, databases, cloud, IoT devices, etc',
    'slybs':[{ 
      id: 1, 
      title: '01. Introduction to Mobile Development', 
      duration: '10:20', 
      type: 'video',
      info: 'Learn the basic principles of UI/UX, the difference between them, and the role of a designer in the industry.' 
    },
    { 
      id: 2, 
      title: '02. Development Environment Setup', 
      duration: '15:45', 
      type: 'video',
      info: 'Master the color wheel, psychology of colors, and how to create accessible palettes for modern apps.'
    },
    { 
      id: 3, 
      title: '03. Android Studio Overview,Project Structure', 
      duration: '1.2 MB', 
      type: 'pdf',
      info: 'A deep dive into 8pt grids, column systems, and spacing rules to make your designs look professional.'
    },
    { 
      id: 4, 
      title: '04. XML Basics,UI Layouts Introduction', 
      duration: '20:00', 
      type: 'video',
      info: 'Bring your designs to life with micro-interactions, state transitions, and high-fidelity clickable prototypes.'
    },
    { 
      id: 5, 
      title: '05. Material Design Basics', 
      duration: '20:00', 
      type: 'video',
      info: 'Bring your designs to life with micro-interactions, state transitions, and high-fidelity clickable prototypes.'
    },
    { 
      id: 6, 
      title: '06.Activity Lifecycle', 
      duration: '20:00', 
      type: 'video',
      info: 'Bring your designs to life with micro-interactions, state transitions, and high-fidelity clickable prototypes.'
    },{ 
      id: 7, 
      title: '07.Fragment Basics', 
      duration: '20:00', 
      type: 'video',
      info: 'Bring your designs to life with micro-interactions, state transitions, and high-fidelity clickable prototypes.'
    },]
  },

  {
    "id": 2,
    "category": "Mobile Development",
    "courseName": "React Native",
    "courseDuration": "6 Months",
    "introduction": "React Native is a JavaScript framework used to build mobile apps for Android and iOS using React.It lets developers write code once and run it on both platforms with native performance.React Native uses native components, making apps fast, smooth, and close to real native apps.",
    "projectMade": ["Login System", "Todo App", "Weather API App"],
    "finalProjectMade": "E-Commerce Mobile App",
    "img": require("../assets/react.png"),
    "fees": "15000",
    "aboutCourse": "Learn components, navigation, REST APIs, Firebase, and real apps.",
    "technology1": require("../assets/html.png"),
    "technology2": require("../assets/css.png"),
    "technology3": require("../assets/js.png"),
    "technology4": require("../assets/native.png"),
    "technology5": require("../assets/firebase.png"),
     "Technologies": '✔ React: The core library for building user interfaces. \n ✔ JavaScript/TypeScript: The primary language for all development.\n ✔ Native Modules: Used to access platform-specific code (Java/Kotlin for Android, Swift/Objective-C for iOS).\n ✔ Expo: A set of tools to speed up development, testing, and deployment.\n ✔ Firebase/Backend APIs: For data storage, authentication, and server-side logic.',
    "What": 'Creating cross-platform UI components\nState and Props management\nHandling navigation (React Navigation)\nWorking with native device features (Camera, GPS, Storage)\nIntegrating REST APIs and Firebase\nApp deployment on Play Store & App Store',
    "why": 'Build apps for both Android and iOS with a single codebase.\nSaves significant time and cost (nearly 50%).\nExcellent performance, close to real native apps.\nHuge community support from Meta (Facebook).\nJavaScript developers can easily transition to mobile development.',
    "slybs": [
      { id: 1, title: '01. React Native CLI vs Expo', duration: '12:00', type: 'video', info: 'Setup your environment and understand the difference between Expo and CLI.' },
      { id: 2, title: '02. View, Text, and Image Components', duration: '15:20', type: 'video', info: 'Master the basic building blocks of any mobile screen.' },
      { id: 3, title: '03. Flexbox in React Native', duration: '1.5 MB', type: 'pdf', info: 'How to create responsive layouts using Flexbox.' },
      { id: 4, title: '04. React Navigation 6.x', duration: '22:10', type: 'video', info: 'Implement Stack, Tab, and Drawer navigation.' }
    ]
  },

  {
    "id": 3,
    "category": "Web Development",
    "courseName": "MERN Stack",
    "courseDuration": "6 Months",
    "introduction": "The MERN Stack is a popular full-stack web development technology stack used to build fast, scalable, and modern web applications. It includes four powerful technologies: MongoDB, Express.js, React.js, and Node.js. Together, they help developers build both the frontend and backend using JavaScript.",
    "projectMade": ["Portfolio", "Blog App"],
    "finalProjectMade": "MERN E-Commerce Website",
    "img": require("../assets/mern.png"),
    "fees": "25000",
    "aboutCourse": "Covers HTML, CSS, JS, React, Node, Express, MongoDB, APIs, JWT.",
    "technology1": require("../assets/html.png"),
    "technology2": require("../assets/css.png"),
    "technology3": require("../assets/js.png"),
    "technology4": require("../assets/native.png"),
    "technology5": require("../assets/mongodb.png"),
    "Technologies": '✔ MongoDB: NoSQL database for flexible data storage.\n ✔ Express.js: Fast, minimalist web framework for Node.js (Backend).\n ✔ React.js: JavaScript library for building dynamic user interfaces (Frontend).\n ✔ Node.js: JavaScript runtime environment for building scalable network applications (Backend).\n ✔ Mongoose/APIs/JWT: For database interaction, communication, and security.',
    "What": 'Frontend development with React (Components, Hooks, State)\nBackend API development with Node.js and Express.js\nDatabase management with MongoDB\nAuthentication and authorization using JWT\nConnecting Frontend and Backend (Full-Stack)\nDeployment on cloud platforms (Heroku/Netlify/Vercel)',
    "why": 'High demand for MERN developers globally.\nEverything is based on JavaScript/JSON, making development seamless.\nFast development cycle and excellent performance.\nIt allows you to build modern, single-page applications (SPAs).\nIt provides a complete solution for building large-scale web apps.',
    "slybs": [
      { id: 1, title: '01. React Hooks (useState, useEffect)', duration: '18:00', type: 'video', info: 'Managing state and lifecycle in functional components.' },
      { id: 2, title: '02. Node.js Event Loop', duration: '14:45', type: 'video', info: 'Understanding how Node handles asynchronous operations.' },
      { id: 3, title: '03. MongoDB CRUD Operations', duration: '25:00', type: 'video', info: 'Connecting to database and managing records.' },
      { id: 4, title: '04. JWT Authentication Flow', duration: '30:00', type: 'video', info: 'Securing routes using JSON Web Tokens.' }
    ]
  },

  {
    "id": 4,
    "category": "Web Development",
    "courseName": "Full Stack Development",
    "courseDuration": "6 Months",
    "introduction": "Full Stack Development refers to building both the frontend (client side) and the backend (server side) of a website or application. A full stack developer works on everything — the user interface, server logic, database, APIs, and deployment — making them capable of handling complete project development.",
    "projectMade": ["Portfolio", "Blog App"],
    "finalProjectMade": "E-Commerce Website",
    "img": require("../assets/fullstack.png"),
    "fees": "25000",
    "aboutCourse": "Covers HTML, CSS, JS, React, Node, Express, MongoDB.",
    "technology1": require("../assets/html.png"),
    "technology2": require("../assets/css.png"),
    "technology3": require("../assets/js.png"),
    "technology4": require("../assets/node.png"),
    "technology5": require("../assets/firebase.png"),
    "Technologies": '✔ Frontend (HTML, CSS, JavaScript, React/Vue/Angular)\n ✔ Backend (Node.js/Python/PHP/Java, Express/Django/Laravel)\n ✔ Database (MongoDB/MySQL/PostgreSQL)\n ✔ API (REST/GraphQL)\n ✔ Cloud & Deployment (AWS/Azure/Firebase/Vercel)',
    "What": 'Designing and implementing responsive UI (Frontend)\nBuilding robust server-side logic and APIs (Backend)\nManaging and querying databases\nImplementing user authentication and security\nDeploying and maintaining the complete application (DevOps basics)',
    "why": 'The most sought-after job role in IT; developers can handle entire projects.\nHigher salary packages and better career growth.\nComplete control over all layers of the application.\nVersatility to work on any part of the project.\nFast-paced learning and building complex applications.',
    "slybs": [
      { id: 1, title: '01. Semantic HTML & Modern CSS', duration: '12:00', type: 'video', info: 'Accessibility and SEO through proper HTML structure.' },
      { id: 2, title: '02. RESTful API Design', duration: '20:15', type: 'video', info: 'Best practices for naming and structuring API endpoints.' },
      { id: 3, title: '03. State Management with Redux', duration: '2.5 MB', type: 'pdf', info: 'Managing complex global state across large applications.' },
      { id: 4, title: '04. Deployment with Docker', duration: '15:00', type: 'video', info: 'Containerizing your full stack app for production.' }
    ]
  },

  {
    "id": 5,
    "category": "Web Development",
    "courseName": "Frontend Development",
    "courseDuration": "3 Months",
    "introduction": "Frontend Development is the process of building the visual and interactive part of a website or web application — everything the user sees and interacts with. It focuses on user interface (UI), layout, design, animations, and smooth user experience (UX).",
    "projectMade": ["Landing Page", "Portfolio"],
    "finalProjectMade": "Complete Responsive Website",
    "img": require("../assets/frontend.png"),
    "fees": "12000",
    "aboutCourse": "Learn layouts, animations, UI/UX basics.",
    "technology1": require("../assets/html.png"),
    "technology2": require("../assets/css.png"),
    "technology3": require("../assets/js.png"),
    "technology4": require("../assets/bootstrap.png"),
    "technology5": require("../assets/tailwind.png"),
     "Technologies": '✔ HTML5: The structure of a webpage.\n ✔ CSS3: Styling, layout, and responsiveness (Flexbox, Grid).\n ✔ JavaScript (ES6+): Adding interactivity, DOM manipulation, and logic.\n ✔ Frameworks (React/Vue/Angular): For building scalable, dynamic UIs.\n ✔ Tools (Bootstrap/Tailwind, Figma/XD): For fast styling and design collaboration.',
    "What": 'Creating semantic and accessible HTML markup.\nStyling and making websites responsive across all devices.\nAdding animations and dynamic content using JavaScript.\nOptimizing performance for fast loading.\nWorking with design tools (Figma) to convert design to code.',
    "why": 'You directly influence the user experience and interface of an application.\nCreative and highly visual role.\nHigh demand in the industry for UI/UX-focused developers.\nQuick to learn the basics and start building visible projects.\nIt is the entry point for all modern web technologies.',
    "slybs": [
      { id: 1, title: '01. CSS Grid & Flexbox Masterclass', duration: '25:00', type: 'video', info: 'Building complex modern layouts with ease.' },
      { id: 2, title: '02. JavaScript ES6+ Features', duration: '18:30', type: 'video', info: 'Arrow functions, destructuring, and spread operators.' },
      { id: 3, title: '03. Responsive Images & Media', duration: '10:00', type: 'video', info: 'Optimizing media for different screen sizes.' }
    ]
  },

  {
    "id": 6,
    "category": "Web Development",
    "courseName": "Backend Development (Node/Express)",
    "courseDuration": "3 Months",
    "introduction": "Backend Development focuses on the server-side of an application — the part users cannot see.It handles data, logic, authentication, APIs, databases, and everything needed to make the app function smoothly behind the scenes.",
    "projectMade": ["REST APIs", "Auth System"],
    "finalProjectMade": "API Backend for E-Commerce",
    "img": require("../assets/backend.png"),
    "fees": "20000",
    "aboutCourse": "Node.js, Express.js, MongoDB, JWT, authentication.",
    "technology1": require("../assets/node.png"),
    "technology2": require("../assets/express.png"),
    "technology3": require("../assets/mongodb.png"),
    "technology4": require("../assets/jwt.png"),
    "technology5": require("../assets/firebase.png"),
    "Technologies": '✔ Node.js: JavaScript runtime for server-side code.\n ✔ Express.js: The core framework for building robust APIs.\n ✔ MongoDB: Popular NoSQL database for data storage.\n ✔ Authentication (JWT/OAuth): For secure user management.\n ✔ REST APIs: The standard for communication between client and server.' ,
    "What": 'Building high-performance, scalable RESTful APIs.\nImplementing complex business logic and server-side features.\nManaging database connections and querying data.\nEnsuring security with authentication, authorization, and data validation.\nHandling requests, responses, and routing efficiently.',
    "why": 'Backend is the core intelligence of any application; it is a highly critical and rewarding role.\nVery high salaries and long-term career stability.\nFocuses on logic, architecture, and security.\nNode/Express is highly performant and widely used by large companies.\nYou can integrate with any frontend or mobile application.',
    "slybs": [
      { id: 1, title: '01. Node Module System', duration: '12:40', type: 'video', info: 'Understanding exports, imports, and global objects.' },
      { id: 2, title: '02. Express Middleware', duration: '19:00', type: 'video', info: 'How to process requests using middleware functions.' },
      { id: 3, title: '03. Password Hashing with Bcrypt', duration: '11:20', type: 'video', info: 'Securely storing user passwords in databases.' }
    ]
  },

  {
    "id": 7,
    "category": "Web Development",
    "courseName": "PHP",
    "courseDuration": "4 Months",
    "introduction": "PHP Development focuses on building server-side applications using PHP, one of the most widely used backend languages for web development.",
    "projectMade": ["Blog Site", "Auth Module"],
    "finalProjectMade": "Service Marketplace",
    "img": require("../assets/php.png"),
    "fees": "18000",
    "aboutCourse": "MVC, routing, migrations, Blade UI, API dev.",
    "technology1": require("../assets/php1.png"),
    "technology2": require("../assets/laravel.png"),
    "technology3": require("../assets/mysql.png"),
    "technology4": require("../assets/html.png"),
    "technology5": require("../assets/css.png"),
    "Technologies": '✔ PHP: The widely used scripting language for web development.\n ✔ Laravel: The most popular and powerful PHP framework (MVC architecture).\n ✔ MySQL: Relational database management system for data storage.\n ✔ HTML/CSS/JS: For creating the basic structure and frontend.\n ✔ Composer: Dependency management tool for PHP.',
    "What": 'Server-side application development using PHP.\nBuilding web applications using the MVC (Model-View-Controller) design pattern.\nDatabase interaction and management with MySQL.\nCreating secure, scalable web services and APIs.\nDeploying PHP/Laravel applications to a server.',
    "why": 'PHP powers over 77% of all websites (including WordPress).\nLaravel provides a structured, modern, and efficient way to build web apps.\nExtremely high demand in the freelance and corporate market.\nIt is easy to find affordable hosting and deployment is simple.\nExcellent community and vast resources for learning.',
    "slybs": [
      { id: 1, title: '01. PHP Basics & Syntax', duration: '15:00', type: 'video', info: 'Variables, loops, and associative arrays in PHP.' },
      { id: 2, title: '02. Laravel MVC Architecture', duration: '22:00', type: 'video', info: 'Understanding Models, Views, and Controllers.' },
      { id: 3, title: '03. Eloquent ORM', duration: '18:45', type: 'video', info: 'Simplified database interaction without SQL.' }
    ]
  },

  {
    "id": 8,
    "category": "Cyber Security",
    "courseName": "Ethical Hacking",
    "courseDuration": "4 Months",
    "introduction": "Learn hacking tools & security testing.",
    "projectMade": ["Network Scan", "Password Audit"],
    "finalProjectMade": "Penetration Testing Project",
    "img": require("../assets/ethical.png"),
    "fees": "22000",
    "aboutCourse": "Kali Linux, Wireshark, Metasploit.",
    // "technology1": require("../assets/kali.png"),
    // "technology2": require("../assets/metasploit.png"),
    // "technology3": require("../assets/wireshark.png"),
    // "technology4": require("../assets/burpsuite.png"),
    // "technology5": require("../assets/linux.png"),
     "Technologies": '✔ Kali Linux: A specialized operating system for ethical hacking and penetration testing.\n ✔ Metasploit: A framework for developing, executing, and testing exploit code.\n ✔ Wireshark: A network protocol analyzer for monitoring traffic.\n ✔ Burp Suite: An integrated platform for performing security testing of web applications.\n ✔ Programming: Python, Shell Scripting for automation.',
    "What": 'Understanding different hacking phases (Reconnaissance, Scanning, Exploitation).\nIdentifying vulnerabilities in networks, systems, and web applications.\nPerforming penetration testing (Pen Test) to legally find and report security weaknesses.\nAnalyzing network traffic and system logs.\nWriting security reports and suggesting remediation steps.',
    "why": 'High demand for security professionals in every industry to protect systems.\nIt is a highly engaging and challenging career path.\nHigh salaries and opportunities for continuous learning.\nBecome a "White Hat" hacker, using your skills for good.\nContribute directly to global cyber safety.',
    "slybs": [
      { id: 1, title: '01. Networking for Hackers', duration: '30:00', type: 'video', info: 'OSI Model, IP addressing, and packet flow.' },
      { id: 2, title: '02. Footprinting & Recon', duration: '25:15', type: 'video', info: 'Gathering information before an attack.' },
      { id: 3, title: '03. Vulnerability Analysis', duration: '0.8 MB', type: 'pdf', info: 'Scanning systems for known security holes.' },
      { id: 4, title: '04. Social Engineering', duration: '20:00', type: 'video', info: 'Psychology of hacking and phishing.' }
    ]
  },

  {
    "id": 9,
    "category": "Cyber Security",
    "courseName": "Network Security",
    "courseDuration": "3 Months",
    "introduction": "Protect networks from cyber attacks.",
    "projectMade": ["Firewall Setup", "Packet Sniffing"],
    "finalProjectMade": "Network Security Audit",
    "img": require("../assets/network.png"),
    "fees": "18000",
    "aboutCourse": "IDS, IPS, encryption, secure protocols.",
    // "technology1": require("../assets/firewall.png"),
    // "technology2": require("../assets/wireshark.png"),
    // "technology3": require("../assets/linux.png"),
    // "technology4": require("../assets/encryption.png"),
    // "technology5": require("../assets/vpn.png"),
     "Technologies": '✔ Firewalls (e.g., Cisco, Juniper): To control incoming and outgoing network traffic.\n ✔ IDS/IPS (Intrusion Detection/Prevention Systems): To monitor and stop malicious activity.\n ✔ VPNs (Virtual Private Networks): For secure, encrypted communication.\n ✔ Wireshark: For in-depth network packet analysis.\n ✔ Cryptography: Understanding encryption, hashing, and digital signatures.',
    "What": 'Designing and implementing secure network architectures.\nConfiguring and managing firewalls and security devices.\nMonitoring networks for suspicious activity and threats.\nImplementing and managing VPNs for remote access security.\nEnsuring data confidentiality and integrity through encryption and secure protocols.',
    "why": 'Every organization depends on a secure network infrastructure.\nCritical and highly specialized role in the IT industry.\nExcellent career growth and global job opportunities.\nHigh salary due to the critical nature of the job.\nDirectly responsible for protecting an organization\'s most valuable assets (data).',
    "slybs": [
      { id: 1, title: '01. Implementing Firewalls', duration: '28:00', type: 'video', info: 'Rules, policies, and traffic filtering.' },
      { id: 2, title: '02. VPN Configuration', duration: '20:10', type: 'video', info: 'Setting up secure tunnels for remote work.' },
      { id: 3, title: '03. Encryption Standards', duration: '1.1 MB', type: 'pdf', info: 'RSA, AES, and SSL/TLS protocols.' }
    ]
  },

  {
    "id": 10,
    "category": "AI / ML",
    "courseName": "Machine Learning",
    "courseDuration": "5 Months",
    "introduction": "Learn ML algorithms, model training.",
    "projectMade": ["Spam Detection", "Regression Model"],
    "finalProjectMade": "AI Recommendation System",
    "img": require("../assets/ml.png"),
    "fees": "32000",
    "aboutCourse": "Python, NumPy, Pandas, ML algorithms.",
    // "technology1": require("../assets/python.png"),
    // "technology2": require("../assets/numpy.png"),
    // "technology3": require("../assets/pandas.png"),
    // "technology4": require("../assets/sklearn.png"),
    // "technology5": require("../assets/jupyter.png"),
    "Technologies": '✔ Python: The primary language for ML (Scikit-learn, TensorFlow, Keras).\n ✔ NumPy: For fast, efficient numerical operations.\n ✔ Pandas: For data manipulation and analysis.\n ✔ ML Algorithms: Linear Regression, Logistic Regression, Decision Trees, K-Means, SVM.\n ✔ Jupyter Notebook: For interactive development and experimentation.',
    "What": 'Data Preprocessing and Feature Engineering.\nUnderstanding and implementing core ML algorithms.\nTraining, testing, and optimizing ML models (Model Lifecycle).\nEvaluating model performance (Metrics like Accuracy, Precision, Recall).\nBuilding predictive systems and recommendation engines.',
    "why": 'Machine Learning is the fastest-growing field in technology.\nOpportunity to solve complex real-world problems (Healthcare, Finance, IoT).\nExtremely high demand and competitive salaries worldwide.\nYou are building the future of AI-powered systems.\nAbility to create intelligent applications that learn from data.',
    "slybs": [
      { id: 1, title: '01. Statistics for ML', duration: '35:00', type: 'video', info: 'Probability, distributions, and hypothesis testing.' },
      { id: 2, title: '02. Linear Regression', duration: '25:00', type: 'video', info: 'Predicting values based on historical trends.' },
      { id: 3, title: '03. Supervised vs Unsupervised', duration: '18:40', type: 'video', info: 'Knowing when to use classification or clustering.' }
    ]
  },

  {
    "id": 11,
    "category": "AI / ML",
    "courseName": "Deep Learning",
    "courseDuration": "6 Months",
    "introduction": "Neural networks, CNN, RNN models.",
    "projectMade": ["Image Classifier", "Object Detection"],
    "finalProjectMade": "AI Face Recognition",
    "img": require("../assets/dl.png"),
    "fees": "40000",
    "aboutCourse": "TensorFlow, Keras, ANN, CNN, LSTM.",
    // "technology1": require("../assets/tensorflow.png"),
    // "technology2": require("../assets/keras.png"),
    "technology3": require("../assets/python.png"),
    // "technology4": require("../assets/numpy.png"),
    // "technology5": require("../assets/opencv.png"),
      "Technologies": '✔ TensorFlow & Keras: The leading frameworks for building deep learning models.\n ✔ Python: Primary language for all development.\n ✔ Neural Networks (ANN, CNN, RNN/LSTM): The core architecture of DL models.\n ✔ Specialized Libraries: OpenCV (for Computer Vision), NLTK (for NLP).\n ✔ Hardware: Understanding GPUs and TPUs for acceleration.',
    "What": 'Designing and implementing various Neural Network architectures (CNN for images, RNN/LSTM for sequences).\nWorking with large datasets for training complex models.\nDeveloping Computer Vision applications (Image Recognition, Object Detection).\nDeveloping Natural Language Processing (NLP) models (Text Generation, Translation).\nFine-tuning and deploying deep learning models.',
    "why": 'Deep Learning is behind modern AI breakthroughs (ChatGPT, self-driving cars).\nHighest salary potential within the AI/ML domain.\nWork on cutting-edge technologies and unsolved problems.\nBuild applications that mimic human intelligence (Vision, Language).\nDirect path to research and advanced engineering roles.',
    "slybs": [
      { id: 1, title: '01. Building Neural Networks', duration: '40:00', type: 'video', info: 'Layers, activations, and backpropagation.' },
      { id: 2, title: '02. Computer Vision (CNN)', duration: '35:20', type: 'video', info: 'How machines see and recognize images.' },
      { id: 3, title: '03. Natural Language Processing', duration: '30:00', type: 'video', info: 'LSTMs and Transformers for text.' }
    ]
  },

  {
    "id": 12,
    "category": "AI / ML",
    "courseName": "Data Science",
    "courseDuration": "6 Months",
    "introduction": "Data analysis, ML, visualization.",
    "projectMade": ["Sales Analysis", "Customer Segmentation"],
    "finalProjectMade": "Predictive Analysis",
    "img": require("../assets/ds.png"),
    "fees": "35000",
    "aboutCourse": "Python, SQL, Tableau, PowerBI.",
    "technology1": require("../assets/python.png"),
    // "technology2": require("../assets/sql.png"),
    // "technology3": require("../assets/tableau.png"),
    // "technology4": require("../assets/powerbi.png"),
    // "technology5": require("../assets/pandas.png"),
     "Technologies": '✔ Python (Pandas, NumPy, Scikit-learn): For data cleaning, analysis, and ML.\n ✔ SQL: For database querying and data extraction.\n ✔ Visualization Tools (Tableau/PowerBI/Matplotlib): For creating insightful reports.\n ✔ Statistics & Probability: The mathematical foundation for analysis.\n ✔ Excel: For initial data cleaning and reporting.',
    "What": 'Collecting, cleaning, and transforming raw data into a usable format.\nPerforming exploratory data analysis (EDA) to find patterns and trends.\nBuilding statistical and Machine Learning models to make predictions.\nCreating compelling data visualizations and dashboards.\nCommunicating data-driven insights to stakeholders (Storytelling).',
    "why": 'Data is the new oil; Data Scientists turn data into actionable business value.\nHigh demand across all sectors (E-commerce, Healthcare, Finance).\nIt is a blend of coding, statistics, and business strategy.\nExcellent job growth and opportunities for leadership roles.\nDirectly impact business decisions and growth strategies.',
    "slybs": [
      { id: 1, title: '01. Data Cleaning with Pandas', duration: '20:00', type: 'video', info: 'Handling missing values and outliers.' },
      { id: 2, title: '02. Tableau Dashboarding', duration: '25:10', type: 'video', info: 'Visualizing data for business stakeholders.' },
      { id: 3, title: '03. SQL for Data Science', duration: '15:30', type: 'video', info: 'Advanced joins and subqueries.' }
    ]
  },

  {
    "id": 13,
    "category": "Designing",
    "courseName": "Graphic Designing",
    "courseDuration": "2 Months",
    "introduction": "Learn Photoshop, Illustrator.",
    "projectMade": ["Logo", "Banner"],
    "finalProjectMade": "Branding Kit",
    "img": require("../assets/gd.png"),
    "fees": "8000",
    "aboutCourse": "Color theory, typography, creative design.",
    // "technology1": require("../assets/photoshop.png"),
    // "technology2": require("../assets/illustrator.png"),
    // "technology3": require("../assets/figma.png"),
    // "technology4": require("../assets/canva.png"),
    // "technology5": require("../assets/xd.png").
     "Technologies": '✔ Adobe Photoshop: For image editing, manipulation, and retouching.\n ✔ Adobe Illustrator: For vector graphics, logos, and illustrations.\n ✔ Canva/Figma: For quick designs and social media graphics.\n ✔ CorelDRAW (Optional): For print and publication design.\n ✔ Design Principles: Color Theory, Typography, Layout.',
    "What": 'Creating unique and scalable logos and brand identities.\nDesigning visually appealing marketing materials (Brochures, Banners, Ads).\nEditing and enhancing photographs for various platforms.\nUnderstanding typography and effective visual communication.\nPreparing files for both digital and print media.',
    "why": 'A creative career that allows you to visually communicate ideas and brands.\nHigh demand in marketing, advertising, and digital media.\nGreat freelance opportunities globally.\nQuick learning curve with immediate visible results.\nEssential for all businesses from small startups to large corporations.',
    "slybs": [
      { id: 1, title: '01. Adobe Illustrator Basics', duration: '18:00', type: 'video', info: 'Pen tool, shapes, and pathfinder.' },
      { id: 2, title: '02. Advanced Photoshop Masking', duration: '22:30', type: 'video', info: 'Cutting out complex objects and hair.' },
      { id: 3, title: '03. Logo Design Principles', duration: '15:00', type: 'video', info: 'Scalability, simplicity, and color theory.' }
    ]
  },

  {
    "id": 14,
    "category": "Designing",
    "courseName": "UI/UX Design (Figma)",
    "courseDuration": "2.5 Months",
    "introduction": "Complete UI/UX workflow with Figma.",
    "projectMade": ["App UI", "Website UI"],
    "finalProjectMade": "Mobile App Prototype",
    "img": require("../assets/uiux.png"),
    "fees": "10000",
    "aboutCourse": "Wireframing, prototyping, color theory.",
    // "technology1": require("../assets/figma.png"),
    // "technology2": require("../assets/xd.png"),
    // "technology3": require("../assets/photoshop.png"),
    // "technology4": require("../assets/illustrator.png"),
    // "technology5": require("../assets/canva.png"),
    "Technologies": '✔ Figma: The industry-standard tool for collaborative UI/UX design and prototyping.\n ✔ Adobe XD/Sketch: Alternative tools for design.\n ✔ Design Systems: Creating reusable components and guidelines.\n ✔ User Research Tools: For collecting user feedback and testing.\n ✔ Principles: Usability, Accessibility, Information Architecture.',
    "What": 'Conducting user research and defining user personas.\nCreating low-fidelity wireframes (Blueprint) and high-fidelity prototypes.\nDesigning intuitive and aesthetically pleasing User Interfaces (UI).\nImproving User Experience (UX) through iterative testing and feedback.\nCreating interactive prototypes for developer handoff.',
    "why": 'UI/UX Designers are critical for the success of any digital product.\nIt is a high-demand, high-paying career focused on problem-solving.\nCombines creativity with analytical user psychology.\nOpportunity to work on mobile apps, websites, and new technologies.\nDirectly responsible for how users feel and interact with a product.',
    "slybs": [
      { id: 1, title: '01. User Persona Research', duration: '20:00', type: 'video', info: 'Defining who you are designing for.' },
      { id: 2, title: '02. Auto Layout in Figma', duration: '25:00', type: 'video', info: 'Creating responsive UI components.' },
      { id: 3, title: '03. Interactive Prototyping', duration: '15:10', type: 'video', info: 'Smart animate and screen transitions.' }
    ]
  },

  {
    "id": 15,
    "category": "Programming",
    "courseName": "Java",
    "courseDuration": "3 Months",
    "introduction": "Learn Java from basics to OOP.",
    "projectMade": ["Bank Management", "Billing System"],
    "finalProjectMade": "Hotel Management System",
    "img": require("../assets/java.png"),
    "fees": "15000",
    "aboutCourse": "OOP, JDBC, Servlet basics.",
    "technology1": require("../assets/java.png"),
    // "technology2": require("../assets/mysql.png"),
    // "technology3": require("../assets/eclipse.png"),
    // "technology4": require("../assets/intellij.png"),
    // "technology5": require("../assets/oop.png"),
     "Technologies": '✔ Java (Core & Advanced): The foundation of the language, including data structures and algorithms.\n ✔ OOP: Object-Oriented Programming concepts (Classes, Objects, Inheritance, Polymorphism).\n ✔ JDBC: Java Database Connectivity for connecting to databases (MySQL).\n ✔ IDEs: Eclipse/IntelliJ IDEA for writing and debugging code.\n ✔ Basic Servlets/JSP: For web application fundamentals.',
    "What": 'Mastering the core syntax and programming constructs.\nImplementing robust, scalable applications using Object-Oriented principles.\nWorking with Data Structures and Algorithms for efficient coding.\nConnecting applications to a database for data storage.\nDeveloping command-line and basic GUI applications.',
    "why": 'Java is one of the most stable and widely used languages in enterprise and large-scale systems.\nFoundation for Android Development and Big Data (Hadoop).\nExcellent job security and opportunities in banks, finance, and large IT firms.\nIt is platform-independent ("Write Once, Run Anywhere").\nStrong community and ecosystem.',
    "slybs": [
      { id: 1, title: '01. Java Virtual Machine (JVM)', duration: '14:00', type: 'video', info: 'How Java achieves platform independence.' },
      { id: 2, title: '02. Inheritance & Polymorphism', duration: '20:20', type: 'video', info: 'Core OOP concepts with real-world examples.' },
      { id: 3, title: '03. Exception Handling', duration: '12:00', type: 'video', info: 'Try-catch blocks and custom exceptions.' }
    ]
  },

  {
    "id": 16,
    "category": "Programming",
    "courseName": "Python",
    "courseDuration": "3 Months",
    "introduction": "Python for development and automation.",
    "projectMade": ["Automation Script", "GUI App"],
    "finalProjectMade": "Data Analytics Project",
    "img": require("../assets/python.png"),
    "fees": "12000",
    "aboutCourse": "Covers basics, OOP, APIs, database.",
    "technology1": require("../assets/python.png"),
    // "technology2": require("../assets/sql.png"),
    // "technology3": require("../assets/numpy.png"),
    // "technology4": require("../assets/pandas.png"),
    // "technology5": require("../assets/jupyter.png"),
        "Technologies": '✔ Python (Core): Syntax, control flow, functions, and data structures.\n ✔ OOP: Object-Oriented Programming principles.\n ✔ Libraries: NumPy, Pandas for data handling, and Matplotlib for visualization.\n ✔ Web Frameworks: Flask/Django for building APIs and web apps.\n ✔ Automation: Scripting for repetitive tasks.',
    "What": 'Writing clean, readable, and efficient Python code.\nApplying OOP principles to structure larger applications.\nPerforming data analysis and manipulation with Pandas.\nCreating simple web applications or APIs.\nAutomating system tasks and file operations.',
    "why": 'Python is the most versatile and beginner-friendly language (Data Science, AI/ML, Web Dev, Automation).\nHigh demand in almost every tech domain.\nSimple syntax reduces development time.\nMassive collection of powerful, free libraries (ecosystem).\nIdeal for rapid prototyping and scientific computing.',
    "slybs": [
      { id: 1, title: '01. Lists, Tuples & Dictionaries', duration: '18:00', type: 'video', info: 'Mastering Python data structures.' },
      { id: 2, title: '02. File I/O Operations', duration: '12:00', type: 'video', info: 'Reading and writing text and CSV files.' },
      { id: 3, title: '03. Web Scraping with Beautiful Soup', duration: '20:10', type: 'video', info: 'Extracting data from websites.' }
    ]
  },

  {
    "id": 17,
    "category": "Programming",
    "courseName": "C / C++",
    "courseDuration": "2 Months",
    "introduction": "Programming basics, pointers, logic building.",
    "projectMade": ["Library System", "Mini Game"],
    "finalProjectMade": "Bank System",
    "img": require("../assets/c.png"),
    "fees": "10000",
    "aboutCourse": "Memory, pointers, algorithms.",
    // "technology1": require("../assets/c.png"),
    // "technology2": require("../assets/cpp.png"),
    // "technology3": require("../assets/vscode.png"),
    // "technology4": require("../assets/clang.png"),
    // "technology5": require("../assets/dsa.png"),
    "Technologies": '✔ C: The foundational language for systems programming.\n ✔ C++: C with Object-Oriented capabilities (OOP).\n ✔ Pointers and Memory Management: Direct control over memory.\n ✔ Data Structures and Algorithms (DSA): Essential for competitive programming.\n ✔ IDEs: VS Code, Code::Blocks for development.',
    "What": 'Mastering fundamental programming concepts and logic.\nUnderstanding memory allocation and management (Pointers).\nImplementing efficient Data Structures (Arrays, Linked Lists, Trees).\nDeveloping fast, low-level applications (Operating Systems, Game Engines).\nBuilding a strong foundation for competitive programming.',
    "why": 'C/C++ provides the deepest understanding of how computers work.\nIt is the foundation for all modern languages and operating systems.\nEssential for careers in system programming, embedded systems, and high-frequency trading.\nDSA knowledge is crucial for clearing top tech company interviews.\nTeaches you to write highly optimized and fast code.',
    "slybs": [
      { id: 1, title: '01. Understanding Pointers', duration: '30:00', type: 'video', info: 'Address of variables and pointer arithmetic.' },
      { id: 2, title: '02. Class & Object (C++)', duration: '15:20', type: 'video', info: 'Introduction to Object Oriented concepts.' },
      { id: 3, title: '03. Memory Management', duration: '10:00', type: 'video', info: 'Malloc, calloc, and free functions.' }
    ]
  },

   {
    "id": 18,
    "category": "Mobile Development",
    "courseName": "React Native",
    "courseDuration": "6 Months",
    "introduction": "React Native is a JavaScript framework used to build mobile apps for Android and iOS using React.It lets developers write code once and run it on both platforms with native performance.React Native uses native components, making apps fast, smooth, and close to real native apps.",
    "projectMade": ["Login System", "Todo App", "Weather API App"],
    "finalProjectMade": "E-Commerce Mobile App",
    "img": require("../assets/react.png"),
    "fees": "15000",
    "aboutCourse": "Learn components, navigation, REST APIs, Firebase, and real apps.",
    "technology1": require("../assets/html.png"),
    "technology2": require("../assets/css.png"),
    "technology3": require("../assets/js.png"),
    "technology4": require("../assets/native.png"),
    "technology5": require("../assets/firebase.png"),
     "Technologies": '✔ React: The core library for building user interfaces. \n ✔ JavaScript/TypeScript: The primary language for all development.\n ✔ Native Modules: Used to access platform-specific code (Java/Kotlin for Android, Swift/Objective-C for iOS).\n ✔ Expo: A set of tools to speed up development, testing, and deployment.\n ✔ Firebase/Backend APIs: For data storage, authentication, and server-side logic.',
    "What": 'Creating cross-platform UI components\nState and Props management\nHandling navigation (React Navigation)\nWorking with native device features (Camera, GPS, Storage)\nIntegrating REST APIs and Firebase\nApp deployment on Play Store & App Store',
    "why": 'Build apps for both Android and iOS with a single codebase.\nSaves significant time and cost (nearly 50%).\nExcellent performance, close to real native apps.\nHuge community support from Meta (Facebook).\nJavaScript developers can easily transition to mobile development.',
    "slybs": [
      { id: 1, title: '01. Intro to Components', duration: '12:00', type: 'video', info: 'Core components like View, Text, Image.' },
      { id: 2, title: '02. Navigation Flow', duration: '20:00', type: 'video', info: 'Setting up Screen stacks.' }
    ]
  },

  {
    "id": 19,
    "category": "Popular",
    "courseName": "UI/UX Design (Figma)",
    "courseDuration": "2.5 Months",
    "introduction": "UI/UX using Figma.",
    "projectMade": ["App UI", "Website UI"],
    "finalProjectMade": "Mobile App Prototype",
    "img": require("../assets/uiux.png"),
    "fees": "10000",
    "aboutCourse": "Wireframe, color theory.",
    // "technology1": require("../assets/figma.png"),
    // "technology2": require("../assets/photoshop.png"),
    // "technology3": require("../assets/canva.png"),
    // "technology4": require("../assets/illustrator.png"),
    // "technology5": require("../assets/xd.png"),
      "Technologies": '✔ Figma: The industry-standard tool for collaborative UI/UX design and prototyping.\n ✔ Adobe XD/Sketch: Alternative tools for design.\n ✔ Design Systems: Creating reusable components and guidelines.\n ✔ User Research Tools: For collecting user feedback and testing.\n ✔ Principles: Usability, Accessibility, Information Architecture.',
    "What": 'Conducting user research and defining user personas.\nCreating low-fidelity wireframes (Blueprint) and high-fidelity prototypes.\nDesigning intuitive and aesthetically pleasing User Interfaces (UI).\nImproving User Experience (UX) through iterative testing and feedback.\nCreating interactive prototypes for developer handoff.',
    "why": 'UI/UX Designers are critical for the success of any digital product.\nIt is a high-demand, high-paying career focused on problem-solving.\nCombines creativity with analytical user psychology.\nOpportunity to work on mobile apps, websites, and new technologies.\nDirectly responsible for how users feel and interact with a product.',
    "slybs": [
      { id: 1, title: '01. Wireframing Basics', duration: '15:00', type: 'video', info: 'Building the skeleton of an app.' },
      { id: 2, title: '02. Typography Rules', duration: '10:00', type: 'video', info: 'How to pick fonts for readability.' }
    ]
  },

  {
    "id": 20,
    "category": "Popular",
    "courseName": "Data Science",
    "courseDuration": "6 Months",
    "introduction": "ML, analysis, visualization.",
    "projectMade": ["Sales Analysis", "Segmentation"],
    "finalProjectMade": "Predictive Analysis",
    "img": require("../assets/ds.png"),
    "fees": "35000",
    "aboutCourse": "Python, SQL, PowerBI.",
    // "technology1": require("../assets/python.png"),
    // "technology2": require("../assets/sql.png"),
    // "technology3": require("../assets/powerbi.png"),
    // "technology4": require("../assets/tableau.png"),
    // "technology5": require("../assets/pandas.png"),
      "Technologies": '✔ Python (Pandas, NumPy, Scikit-learn): For data cleaning, analysis, and ML.\n ✔ SQL: For database querying and data extraction.\n ✔ Visualization Tools (Tableau/PowerBI/Matplotlib): For creating insightful reports.\n ✔ Statistics & Probability: The mathematical foundation for analysis.\n ✔ Excel: For initial data cleaning and reporting.',
    "What": 'Collecting, cleaning, and transforming raw data into a usable format.\nPerforming exploratory data analysis (EDA) to find patterns and trends.\nBuilding statistical and Machine Learning models to make predictions.\nCreating compelling data visualizations and dashboards.\nCommunicating data-driven insights to stakeholders (Storytelling).',
    "why": 'Data is the new oil; Data Scientists turn data into actionable business value.\nHigh demand across all sectors (E-commerce, Healthcare, Finance).\nIt is a blend of coding, statistics, and business strategy.\nExcellent job growth and opportunities for leadership roles.\nDirectly impact business decisions and growth strategies.',
    "slybs": [
      { id: 1, title: '01. Data Cleaning', duration: '18:00', type: 'video', info: 'Fixing missing data points.' },
      { id: 2, title: '02. Probability Basics', duration: '20:00', type: 'video', info: 'Math behind the data.' }
    ]
  },

  {
    "id": 21,
    "category": "Popular",
    "courseName": "Network Security",
    "courseDuration": "3 Months",
    "introduction": "Protect networks.",
    "projectMade": ["Firewall Setup", "Sniffing"],
    "finalProjectMade": "Security Audit",
    "img": require("../assets/network.png"),
    "fees": "18000",
    "aboutCourse": "Secure protocols, encryption.",
    // "technology1": require("../assets/firewall.png"),
    // "technology2": require("../assets/wireshark.png"),
    // "technology3": require("../assets/linux.png"),
    // "technology4": require("../assets/encryption.png"),
    // "technology5": require("../assets/vpn.png"),
    "Technologies": '✔ Firewalls (e.g., Cisco, Juniper): To control incoming and outgoing network traffic.\n ✔ IDS/IPS (Intrusion Detection/Prevention Systems): To monitor and stop malicious activity.\n ✔ VPNs (Virtual Private Networks): For secure, encrypted communication.\n ✔ Wireshark: For in-depth network packet analysis.\n ✔ Cryptography: Understanding encryption, hashing, and digital signatures.',
    "What": 'Designing and implementing secure network architectures.\nConfiguring and managing firewalls and security devices.\nMonitoring networks for suspicious activity and threats.\nImplementing and managing VPNs for remote access security.\nEnsuring data confidentiality and integrity through encryption and secure protocols.',
    "why": 'Every organization depends on a secure network infrastructure.\nCritical and highly specialized role in the IT industry.\nExcellent career growth and global job opportunities.\nHigh salary due to the critical nature of the job.\nDirectly responsible for protecting an organization\'s most valuable assets (data).',
    "slybs": [
      { id: 1, title: '01. Network Monitoring', duration: '25:00', type: 'video', info: 'Using Wireshark to trace packets.' },
      { id: 2, title: '02. Firewall Rules', duration: '15:00', type: 'video', info: 'Configuring access control lists.' }
    ]
  }
];