export const introduction = {
  title: "M. Irsyad Fachryanto",
  subtitle: "Software Architect & Full-Stack Engineer",
  bio: "I am a computer science student dedicated to engineering high-integrity digital ecosystems. My core expertise lies in Flutter, Kotlin Native, and Next.js. I prioritize scalable architecture, operational reliability, and clean structures over complex but fragile solutions. This archive documents my engineering journey, problem-solving methodologies, and system-level explorations."
};

export const productionExperience = {
  id: "okey-bimbel",
  title: "Okey Bimbel (CBT System)",
  role: "Lead Full-Stack Developer",
  period: "FEB 2025 - PRESENT",
  tagline: "High-integrity dual-platform exam ecosystem featuring native Android Kiosk Mode and dynamic QR handshake authentication.",
  url: "https://okeybimbel.web.app/",
  image: "/okey_bimbel_preview.webp",
  metrics: [
    "Managing live exam operations for hundreds of concurrent students with zero data loss.",
    "Automated centralized exam distribution and real-time monitoring workflows.",
    "Eliminated 100% of cheating vectors via native-level window locking and hardware restrictions."
  ],
  failureRecovery: {
    incident: "Real-time synchronization bottleneck during high-concurrency exam session (100+ students).",
    rootCause: "Firestore snapshot listeners triggered excessive reads, nearing usage quotas within minutes.",
    recovery: "Restructured data flow from global streams to pull-based heartbeats with local state caching. Implemented Unsub Guard to prevent memory leaks during listener teardown."
  },
  timeline: [
    { label: "Security Analysis", description: "Standard web exams are vulnerable to tab-switching and screen capturing. Native intervention was required." },
    { label: "QR Handshake", description: "Developed rotating dynamic tokens (5s intervals) to prevent replay attacks and ensure student identity." },
    { label: "Kiosk Mode", description: "Integrated startLockTask() and WindowManager.FLAG_SECURE via MethodChannel in Kotlin Native." },
    { label: "Performance", description: "Reduced database costs by 70% by transitioning to on-demand session listeners and optimized indexing." }
  ],
  journal: {
    context: "At Okey Bimbel, daily operations required a reliable digital exam platform to replace vulnerable standard web forms. The goal was total integrity with zero educator supervision required.",
    whyBuilt: "Designed to allow teachers to manage question banks via Next.js while students scanned dynamic QRs to enter a locked Android environment. Flutter monitors lifecycle events, logging all background attempts.",
    systemThinking: "Built on decentralized dual-platform architecture. Question mappings are processed in background Isolates and stored locally with AES-256 encryption.",
    exploration: "Explored Kotlin-Dart interop for hardware-level security. Leveraged Lifecycle Listeners to detect window focus loss and trigger automated violation reports.",
    constraints: "Managed high-concurrency limitations by restructuring data flow from real-time global streams to isolated per-session heartbeats.",
    reflection: "For future scaling, I plan to migrate the QR handshake logic to an edge-cached WebSocket endpoint to further reduce NoSQL overhead.",
    lessons: "This project demonstrated the importance of database-UI decoupling and OS-level vulnerability mitigation in Android."
  }
};

export const blueprints = [
  {
    id: "01",
    title: "Secure CBT Master",
    tagline: "Android Kiosk system integrated with Next.js 16 supervisor portal for high-stakes assessments.",
    curiosity: "How to restrict cheating on Android devices at a system level without requiring device rooting?",
    systemsExplored: "Flutter Kiosk mode (MethodChannel), startLockTask (Kotlin), Next.js 16 (Turbopack), Firestore Security Rules (Isolation).",
    technicalChallenge: "Ensuring monitoring stability over unstable school networks while synchronizing server time to prevent local clock manipulation.",
    learnings: "Advanced MethodChannel interop, designed network-time synchronization logic, and automated XLSX report generation.",
    tags: ["Flutter", "Dart", "Kotlin Native", "Next.js 16", "Firestore"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/CBT-System" },
    image: "/secure_cbt_ui.webp",
    overview: "Secure CBT Master focuses on creating an isolated exam environment. It uses hardware-level window flags to block screenshots and screencasts.",
    folderStructure: `cbt-system/
├── mobile-cbt/ (Flutter)
│   ├── android/ MainActivity.kt  # Kiosk Mode
│   └── lib/ local_db_service.dart # Hive AES-256
└── web-admin/ (Next.js)
    ├── src/app/monitoring/      # Real-time
    └── src/app/results/         # Grading`,
    failureRecovery: {
      incident: "Token rotation mismatch caused by high network latency (clock drift).",
      rootCause: "Clients scanned tokens that already expired due to server-client time offsets.",
      recovery: "Implemented a 'Grace-Period' validation logic that accepts both current and previous tokens, coupled with server-timestamp sync."
    },
    journal: {
      context: "Digital exam platforms lack system-level security, allowing students to bypass restrictions easily.",
      whyBuilt: "Built as a research-led ecosystem to provide educators with a tamper-proof environment for high-stakes assessments.",
      systemThinking: "The architecture relies on strict data isolation. Tokens rotate every 5 seconds to prevent replay attacks.",
      exploration: "Utilized startLockTask() to pin the app, disabling the status bar and Home button hardware-level.",
      constraints: "Resolved Firestore Internal Assertion errors using a global Unsub Guard pattern.",
      reflection: "Future optimization: Move handshake logic to an edge-cached API for sub-10ms validation latency.",
      lessons: "Insights into Android process lifecycles and high-load NoSQL schema design."
    }
  },
  {
    id: "02",
    title: "Geges Smart Barber",
    tagline: "Integrated scheduling system with fair distribution algorithms and real-time availability tracking.",
    curiosity: "How to balance workload among employees in a high-traffic service business using NoSQL constraints?",
    systemsExplored: "Clean Architecture in Flutter, BLoC state isolation, Firestore real-time sync, PWA Service Worker caching.",
    technicalChallenge: "Developing an in-memory fallback filter to handle Firestore query limitations during peak load.",
    learnings: "Deepened understanding of Separation of Concerns (SoC), off-day logic, and enterprise tenant lifecycle management.",
    tags: ["Flutter", "Dart", "Firebase App Check", "Next.js", "NoSQL"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/GEGES_Capstone" },
    image: "/geges_barber_ui.webp",
    overview: "A comprehensive solution for barbershop management, featuring customer booking apps and owner dashboards for workforce management.",
    folderStructure: `geges-barber/
├── lib/
│   ├── services/ queue_service.dart # Fair-Work
│   └── screens/ payment_screen.dart # Modern UI
└── web-admin/
    └── src/ services/ provisioning.ts # Cascade Delete`,
    failureRecovery: {
      incident: "Application crash on queue screen due to missing composite indexes.",
      rootCause: "Production environment queries failed because indexing hadn't finished propagating.",
      recovery: "Implemented a 'State-Driven Fallback' that switches to in-memory filtering when a database query exception is caught."
    },
    journal: {
      context: "Physical queues at barbershops are often chaotic, leading to uneven workload distribution.",
      whyBuilt: "Designed to distribute queues fairly based on monthly performance metrics while providing a seamless booking experience.",
      systemThinking: "Follows Clean Architecture. Business logic is strictly isolated in the service layer for UI-independent testing.",
      exploration: "Programmed a 'Fair Available Barberman' algorithm accounting for weekly off-days and service duration estimates.",
      constraints: "Addressed PWA Service Worker rejection by configuring explicit Content-Type headers in firebase.json.",
      lessons: "Database-UI decoupling is critical for production stability. Successfully passed 188+ automated tests."
    }
  },
  {
    id: "03",
    title: "VisionSafe (EyeGuardian)",
    tagline: "On-device AI eye-fatigue mitigation system using MediaPipe Face Mesh for real-time distance monitoring.",
    curiosity: "Can we reduce Computer Vision Syndrome using Edge AI without sending visual data to a server?",
    systemsExplored: "Flutter, MediaPipe Face Mesh (Edge AI), Background Services, Local Notifications, SQLite.",
    technicalChallenge: "Maintaining continuous Face Mesh processing in the background without excessive battery drain.",
    learnings: "TensorFlow Lite integration, image processing loop optimization, and system-level notification management.",
    tags: ["Flutter", "MediaPipe", "Edge AI", "Computer Vision"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/visionsafe-app" },
    image: "/avatar.jpg",
    overview: "VisionSafe uses Edge AI to monitor if a user is too close to the screen or blinking infrequently, providing real-time alerts.",
    failureRecovery: {
      incident: "Background processing killed by Android System due to high resource usage.",
      rootCause: "The AI model consumed CPU cycles beyond the background threshold.",
      recovery: "Implemented a 'Dynamic Sampling Rate' that scales detection based on battery level, coupled with a Foreground Service."
    },
    journal: {
      context: "Digital eye strain is increasing globally due to improper viewing distance and decreased blink rates.",
      whyBuilt: "Built to provide a private, proactive health companion that ensures safe screen usage habits.",
      systemThinking: "Runs a MediaPipe pipeline on a separate Dart Isolate to prevent UI stuttering.",
      exploration: "Optimized TFLite models for mid-range Android devices. Developed an overlay notification system.",
      constraints: "Balanced CPU load and camera power consumption with adaptive frame-capture logic.",
      lessons: "Advanced Edge AI understanding and privacy-by-design principles."
    }
  }
];

export const engineeringJourney = [
  {
    period: "FEB 2025 - PRESENT",
    role: "Full-Stack Developer",
    location: "Okey Bimbel",
    description: "Engineering a dual-platform anti-cheat exam ecosystem. Developed supervisor portals, native Kiosk interop, and optimized NoSQL patterns for high-concurrency environments."
  },
  {
    period: "2024 - PRESENT",
    role: "Flutter Mentor",
    location: "Community Plug-in",
    description: "Mentoring 40+ students in mastering maintainable mobile architectures. Focused on Clean Architecture, SOLID principles, and effective state management."
  },
  {
    period: "2023 - PRESENT",
    role: "Core Member",
    location: "Community Plug-in",
    description: "Contributing to the university's engineering ecosystem by organizing technical workshops and introducing efficient CLI-based workflows."
  }
];

export const exploredTools = [
  {
    category: "Mobile Systems",
    technologies: ["Flutter SDK", "Dart", "Kotlin Native", "Android APIs / Kiosk Mode"]
  },
  {
    category: "Web & API Architectures",
    technologies: ["Next.js 16", "React", "TypeScript", "FastAPI", "NoSQL Optimization"]
  },
  {
    category: "Systems & Security",
    technologies: ["Linux Core / Bash", "Firebase App Check", "Systemd Daemons", "Process Lifecycles"]
  }
];

export const inlineResume = {
  summary: "6th-semester Computer Science student at Universitas Harkat Negeri Tegal with a 3.92/4.00 GPA. Specialized in Mobile Engineering (Flutter & Kotlin) and System Architecture. Dedicated to building high-integrity systems through Clean Architecture and SOLID principles.",
  education: [
    {
      institution: "Universitas Harkat Negeri Tegal",
      degree: "B.S. in Computer Science (Applied)",
      period: "2023 - PRESENT",
      notes: "GPA: 3.92 / 4.00. Active Mentor & Core Member at Community Plug-in."
    },
    {
      institution: "SMK Negeri 2 Tegal",
      degree: "Computer and Network Engineering",
      period: "2020 - 2023",
      notes: "Focus on server administration, Linux infrastructure, and networking fundamentals."
    }
  ],
  experience: [
    {
      company: "Okey Bimbel",
      role: "Lead IT Developer",
      period: "FEB 2025 - PRESENT",
      description: "Primary technology partner for engineering and operational support of the digital exam ecosystem.",
      bullets: [
        "Built and maintained Next.js 16 portals and Flutter clients for real-time exam supervision.",
        "Engineered native Kotlin interop (startLockTask) to enforce strict kiosk mode.",
        "Strategic IT consulting for cloud optimization and infrastructure scaling."
      ]
    }
  ],
  community: [
    {
      organization: "Community Plug-in",
      role: "Flutter Mentor",
      period: "2024 - PRESENT",
      description: "Mentoring students in mastering maintainable Flutter architectures and industrial standards.",
      bullets: [
        "Guided 40+ students through structured Flutter engineering courses.",
        "Organized recurring specialized mobile programming workshops."
      ]
    }
  ],
  skills: [
    {
      category: "Mobile Engineering",
      tools: ["Flutter", "Dart OOP", "Kotlin Native", "Android Kiosk Mode", "Riverpod", "Hive AES-256"]
    },
    {
      category: "Web & Core Systems",
      tools: ["Next.js", "React", "TypeScript", "FastAPI", "Firestore Optimization", "NoSQL Design"]
    },
    {
      category: "Systems & Security",
      tools: ["Linux / Shell", "Firebase App Check", "Systemd Services", "Process Lifecycle", "MethodChannel"]
    }
  ]
};
