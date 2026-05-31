export const introduction = {
  title: "M. Irsyad Fachryanto",
  subtitle: "System Architect & Frontend Engineer",
  bio: "I am a software architect focused on building high-integrity digital ecosystems through clean engineering and native system interoperability. My work bridges the gap between complex backend architectures (Firebase/Next.js) and high-performance mobile clients (Flutter/Kotlin). I prioritize operational reliability and structural clarity, ensuring that every system I build is not only powerful but maintainable and robust under real-world production stress."
};

export const productionExperience = {
  id: "okey-bimbel",
  title: "Okey Bimbel (CBT System)",
  role: "Lead Full Stack Developer",
  period: "FEB 2025 - PRESENT",
  tagline: "Enterprise-grade digital exam ecosystem with Pro QR Handshake Protocol and Kotlin Native Kiosk isolation.",
  url: "https://okeybimbel.web.app/",
  image: "/okey_bimbel_preview.png",
  metrics: [
    "Mitigated 100% of cheating attempts via startLockTask & FLAG_SECURE native Android interop.",
    "Engineered a Pro QR Handshake Protocol with 5-second rotating dynamic tokens for secure session syncing.",
    "Optimized Firestore throughput by 70% through on-demand session listeners and 60s heartbeat intervals."
  ],
  timeline: [
    { label: "Architecture", description: "Designed a dual-platform system using Next.js 16 (Turbopack) for admin monitoring and Flutter for secure clients." },
    { label: "Security", description: "Implemented native Kiosk Mode to lock status bars, home buttons, and block screenshots at the hardware level." },
    { label: "Integrity", description: "Developed a 60-second Auto-Save mechanism and AES-256 encrypted Hive local storage for zero-loss state recovery." }
  ],
  journal: {
    context: "Conventional exam platforms are vulnerable to tab-switching and screen capture. Okey Bimbel required a system that could handle 100+ simultaneous students while ensuring absolute data integrity and zero cheating.",
    whyBuilt: "Built as a production-ready solution to automate exam distribution. It features real-time monitoring of student 'vitals' (violations, progress, and connectivity) directly from a centralized Next.js web portal.",
    systemThinking: "The system relies on a decentralized client-side state. Exam content is processed in background isolates and encrypted locally, reducing server load while maintaining peak security standards.",
    exploration: "Explored deep Android OS lifecycles to detect window focus loss. Integrated Flutter MethodChannels with Kotlin to access system-level APIs for device locking.",
    constraints: "Handled Firestore failed-precondition errors by implementing composite indexing and in-memory filtering fallback strategies.",
    reflection: "Refining this system taught me the importance of NoSQL schema optimization and native-level security protocols for mobile applications.",
    lessons: "High-integrity systems require a 'Security-First' mindset where every edge case—from power failure to network drift—is handled autonomously."
  }
};

export const blueprints = [
  {
    id: "01",
    title: "VisionSafe (EyeGuardian)",
    tagline: "Real-time AI system mitigating Myopia through Computer Vision and Android system-level interventions.",
    curiosity: "How can we use Edge AI to protect user eye health by monitoring viewing distance in the background of a mobile OS?",
    systemsExplored: "Google MediaPipe Face Mesh, Android Foreground Services, System Overlay Window APIs, and Edge AI Z-coordinate precision.",
    technicalChallenge: "Ensuring high-accuracy distance detection while maintaining 60FPS UI performance and minimal battery drain as a background service.",
    learnings: "Mastered real-time coordinate mapping using MediaPipe and managing high-priority system overlays in Android.",
    tags: ["Flutter", "Edge AI", "Computer Vision", "Android Native"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/visionsafe-app" },
    image: "/secure_cbt_ui.png", // Placeholder for now
    overview: "VisionSafe acts as a digital guardian. Using Face Mesh technology, it calculates the distance between the eyes and the screen. If a user moves closer than 30cm, the app triggers an intelligent Gaussian Blur overlay over the entire OS to force distance correction.",
    folderStructure: `visionsafe-app/
├── lib/
│   ├── services/
│   │   ├── face_detector_service.dart # MediaPipe coordinate logic
│   │   └── background_service.dart     # Android Foreground integration
│   └── widgets/
│       └── blur_overlay.dart          # Intelligent UI intervention`,
    journal: {
      context: "Modern screen habits contribute heavily to Myopia. VisionSafe was designed to provide a non-intrusive yet effective intervention using real-time AI.",
      whyBuilt: "Built to run as a persistent background service that monitors user habits across all applications, from gaming to reading.",
      systemThinking: "Used Edge AI to keep all processing on-device, ensuring user privacy while providing sub-millisecond response times for distance alerts.",
      exploration: "Deep-dived into Face Mesh landmarks to calculate the precise depth (Z-axis) of eyes relative to the front camera hardware.",
      constraints: "Optimized frame-processing intervals to balance AI accuracy with device thermal management.",
      reflection: "Edge AI is the future of personal health monitoring, offering a private and high-performance way to intervene in harmful habits.",
      lessons: "Learned to manage persistent Android services and bridge high-frequency AI data to smooth UI transitions."
    }
  },
  {
    id: "02",
    title: "Geges Smart Barber",
    tagline: "AI-integrated queue ecosystem with fair workload balancing and 100% verified structural integrity.",
    curiosity: "Can we modernize local business operations using AI-based queue optimization and a 100% test-covered codebase?",
    systemsExplored: "Clean Architecture, BLoC/Provider, NLP Chatbots, Computer Vision for hairstyle recommendations, and Firestore real-time streams.",
    technicalChallenge: "Implementing a Fair Assignment Algorithm that balances monthly barberman workload and handling missing composite indexes with in-memory fallbacks.",
    learnings: "Achieved 100% test pass rate across 188+ unit/widget/integration tests and mastered multi-tenant cascading deletions.",
    tags: ["Flutter", "Firebase", "NLP", "Clean Architecture"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/GEGES_Capstone" },
    image: "/geges_barber_ui.png",
    overview: "A comprehensive barbershop management system. It features AI-driven hairstyle recommendations, an NLP chatbot for bookings, and a rigorous backend that ensures fair work distribution among employees.",
    folderStructure: `geges-smart-barber/
├── lib/
│   ├── core/                       # 188+ Verified Tests
│   ├── services/
│   │   ├── queue_service.dart      # Fair Assignment Logic
│   │   └── ai_recommendation.dart  # Computer Vision module
└── web-admin/                      # Tenant Lifecycle Management`,
    journal: {
      context: "Local barbershops suffer from inefficient manual queuing. Geges provides a digital-first approach to optimize both customer experience and business auditing.",
      whyBuilt: "Designed as a full-stack solution for modernizing queue culture, integrated with payment gateways and AI recommendation engines.",
      systemThinking: "Separation of concerns is maintained via Clean Architecture, ensuring that the UI remains reactive regardless of backend filtering strategies.",
      exploration: "Developed a custom in-memory filtering fallback to prevent business downtime when Firestore indexes are building.",
      constraints: "Faced 'failed-precondition' errors on peak load, solved by restructuring query patterns and implementing local caching.",
      reflection: "System stability is a product of rigorous testing; the 188+ tests in this project proved essential for high-load reliability.",
      lessons: "Learned the power of automated testing in building trust for production-level local business software."
    }
  },
  {
    id: "03",
    title: "The Ghost Liquid-Glass",
    tagline: "High-performance Linux work environment optimized for memory efficiency and aesthetic dominance.",
    curiosity: "How can we build a world-class hybrid OS experience on Linux that maintains 'Retina' fidelity while clearing 85% RAM load autonomously?",
    systemsExplored: "GNOME Minimalist Tweak, Systemd Daemon engineering, GTK4/Libadwaita configurations, and automated memory management scripts.",
    technicalChallenge: "Ensuring global UI consistency across Flatpak and Native apps while running background 'Guardian' daemons for real-time system maintenance.",
    learnings: "Mastered Linux process lifecycles, gesture handling (Touchegg), and building persistent maintenance daemons with systemd.",
    tags: ["Bash", "Systemd", "Linux Kernel", "GTK config"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto" },
    image: "/ghost_linux_desktop.png",
    overview: "A custom Fedora/Ubuntu setup designed for elite engineering workflows. It features a 'God Mode' daemon (SDA Guardian) that monitors system health and maintains macOS-level UI smoothness with minimal resource overhead.",
    folderStructure: `~/setup-linux/
├── sda-guardian.service         # Systemd Maintenance Daemon
├── clean_ram.sh                 # Memory Optimization Script
└── restore-elite-ui             # Global UI Sync Script`,
    journal: {
      context: "Standard Linux desktops often carry bloat that degrades performance. This project explores building a 'Retina' quality workspace that remains fast on limited hardware.",
      whyBuilt: "Built as a personal productivity laboratory to automate system maintenance and achieve visual perfection.",
      systemThinking: "The environment is built around keyboard-centric workflows and automated resource management to minimize distractions.",
      exploration: "Engineered a custom bash script that triggers kernel cache drops when RAM usage exceeds 85%, ensuring zero-lag during heavy builds.",
      constraints: "Solved HiDPI font blurring on non-native displays through advanced fontconfig profiling and X11 hinting tweaks.",
      reflection: "Customizing your OS is the ultimate lesson in understanding the hardware-software stack.",
      lessons: "Efficiency is not about having more resources, but about managing what you have with surgical precision."
    }
  }
];

export const engineeringJourney = [
  {
    period: "FEB 2025 - PRESENT",
    role: "Lead Full Stack Developer",
    location: "Okey Bimbel",
    description: "Architecting high-integrity CBT ecosystems. Developing Next.js 16 portals, native Android Kiosk locks, and optimizing NoSQL throughput for 100+ active sessions."
  },
  {
    period: "2024 - PRESENT",
    role: "Flutter Mentor",
    location: "Community Plug-in",
    description: "Mentoring 40+ students in Clean Architecture and SOLID principles. Focused on building foundations for high-integrity mobile engineering."
  },
  {
    period: "2023 - PRESENT",
    role: "Core Member",
    location: "Community Plug-in",
    description: "Leading technical workshops and introducing CLI-centric workflows. Collaborating on system-wide architectural audits for student projects."
  }
];

export const exploredTools = [
  {
    category: "Mobile Architectures",
    technologies: ["Flutter 3.x", "Kotlin Native", "MediaPipe AI", "Hive AES-256"]
  },
  {
    category: "Full-Stack Systems",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Firebase 12", "NoSQL Optimization"]
  },
  {
    category: "Infrastructure & Ops",
    technologies: ["Linux Kernel", "Bash Scripting", "Systemd Services", "Automated Testing"]
  }
];

export const inlineResume = {
  summary: "Software Architect and Flutter Mentor with a 3.92/4.00 GPA. Specialized in building high-integrity digital ecosystems, AI-driven mobile applications, and optimized full-stack architectures. Proven track record in delivering production-ready systems with rigorous 100% test coverage and native system interoperability.",
  education: [
    {
      institution: "Universitas Harkat Negeri Tegal",
      degree: "Bachelor of Applied Informatics",
      period: "2023 - PRESENT",
      notes: "GPA: 3.92 / 4.00. Active Flutter Mentor and Core Member in Plug-in community."
    }
  ],
  experience: [
    {
      company: "Okey Bimbel",
      role: "Lead IT Solutions Architect",
      period: "FEB 2025 - PRESENT",
      description: "Driving the engineering of a high-security exam ecosystem used daily by hundreds of students.",
      bullets: [
        "Engineered Pro QR Handshake Protocol for secure multi-device synchronization.",
        "Implemented Kotlin Native Kiosk locks to eliminate 100% of device-level cheating.",
        "Managed and optimized full-stack cloud infrastructure using Next.js 16 and Firebase."
      ]
    }
  ],
  community: [
    {
      organization: "Community Plug-in",
      role: "Senior Flutter Mentor",
      period: "2024 - PRESENT",
      description: "Establishing industry-standard engineering foundations for the next generation of developers.",
      bullets: [
        "Architected a curriculum focused on Clean Architecture and Separation of Concerns.",
        "Delivered weekly workshops on state management and native system interop."
      ]
    }
  ],
  skills: [
    {
      category: "Engineering",
      tools: ["Clean Architecture", "SOLID", "TDD", "Bento Grid Design", "Systemic Auditing"]
    },
    {
      category: "Tech Stack",
      tools: ["Flutter", "Kotlin", "Next.js 16", "React 19", "Firebase", "Supabase", "TypeScript"]
    },
    {
      category: "Specialized",
      tools: ["Edge AI", "Computer Vision", "Kiosk Mode", "Linux Customization", "Bash Scripting"]
    }
  ]
};
