export const introduction = {
  title: "M. Irsyad Fachryanto",
  subtitle: "Mobile & Full-Stack Software Developer",
  bio: "Software developer based in Indonesia specializing in Flutter, native Android (Kotlin), and modern web engineering with Next.js and TypeScript. I build high-integrity systems, kiosk-mode client security, and practical agentic AI workflows. Grounded in clean architecture, operational reliability, and real-world results."
};

export const productionExperience = {
  id: "okey-bimbel",
  title: "Okey Bimbel (CBT System)",
  role: "Full-Stack Developer",
  period: "FEB 2026 - PRESENT",
  tagline: "High-integrity dual-platform exam ecosystem featuring native Android Kiosk Mode and dynamic QR handshake authentication.",
  url: "https://github.com/mirsydfchrynto/okeybimbel-cbt-release",
  image: "/okey_bimbel_preview.webp",
  collaborators: [
    { name: "M. Irsyad Fachryanto", role: "Full-Stack Developer", github: "https://github.com/mirsydfchrynto" }
  ],
  metrics: [
    "Managing live exam operations for hundreds of concurrent students with zero data loss.",
    "Centralized question banking, student session monitoring, and real-time grading.",
    "Restricted cheating vectors via native OS-level window locking and hardware restrictions."
  ],
  failureRecovery: {
    incident: "Real-time synchronization bottleneck during high-concurrency exam session (100+ students).",
    rootCause: "Firestore snapshot listeners triggered excessive reads, nearing usage quotas within minutes.",
    recovery: "Restructured data flow from global streams to pull-based heartbeats with local state caching. Implemented Unsub Guard to prevent memory leaks during listener teardown."
  },
  timeline: [
    { label: "Security Analysis", description: "Standard web exams are vulnerable to tab-switching and screen capturing. Native OS intervention was required." },
    { label: "QR Handshake", description: "Developed rotating dynamic tokens (5s intervals) to prevent replay attacks and authenticate student identity." },
    { label: "Kiosk Mode", description: "Integrated startLockTask() and WindowManager.FLAG_SECURE via MethodChannel in Kotlin Native." },
    { label: "Performance", description: "Reduced database overhead by 70% transitioning to on-demand session listeners and optimized indexing." }
  ],
  journal: {
    context: "At Okey Bimbel, daily operations required a reliable digital exam platform to replace vulnerable standard web forms. The goal was total integrity with zero educator supervision required.",
    whyBuilt: "Designed to allow teachers to manage question banks via Next.js while students scan dynamic QRs to enter a locked Android environment. Flutter monitors lifecycle events, logging all background attempts.",
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
    title: "Geges Smart Barber (Capstone 1)",
    tagline: "Unified multi-tenant barbershop ecosystem with real-time queue management, bookings, product marketplace, and admin chat.",
    curiosity: "How to unify fragmented barbershop operations into one platform with fair barber workload distribution?",
    systemsExplored: "Flutter Mobile, Clean Architecture, BLoC State Isolation, Firestore Real-Time Streams, React Admin Portal, WhatsApp Gateway.",
    technicalChallenge: "Developing a fair-work distribution algorithm that balances queue allocations among barbers based on monthly workload and shifts.",
    learnings: "Deepened understanding of Separation of Concerns (SoC), real-time concurrency handling, and multi-tenant business provisioning.",
    tags: ["Flutter", "Dart", "Clean Architecture", "Firestore", "React", "Live Queue"],
    links: { visit: "", repo: "https://github.com/MyCampusLab/capstone-pt1" },
    image: "/geges_barber_ui.webp",
    collaborators: [
      { name: "M. Irsyad Fachryanto", role: "Lead Full-Stack Developer", github: "https://github.com/mirsydfchrynto" }
    ],
    overview: "Geges Smart Barber is my dream business platform designed to modernize the barbershop industry. Customers can join live queues, book appointments, order grooming products, and chat directly with shop admins, while barbers receive fair work distribution.",
    folderStructure: `geges-barber/
├── customer-app/ (Flutter)
│   ├── lib/core/          # Clean architecture layers
│   ├── lib/features/queue # Live queue sync
│   └── lib/features/store # Product marketplace
└── web-admin/ (React)
    ├── src/tenants/       # Multi-barber management
    └── src/services/      # Fair-work scheduling algorithm`,
    failureRecovery: {
      incident: "Queue screen lag during peak weekend customer influx.",
      rootCause: "Unbounded Firestore listeners and un-indexed compound queries.",
      recovery: "Implemented state-driven local caching with optimistic UI updates and composite query indexes."
    },
    journal: {
      context: "Traditional barbershops face chaotic queue lines, unfair tip/revenue splits among barbers, and lack of digital store integration.",
      whyBuilt: "Built as an all-in-one platform uniting barbers under one roof with transparent live wait-times and integrated product sales.",
      systemThinking: "Isolated business logic into distinct use-cases within Clean Architecture to enable rigorous automated testing.",
      exploration: "Implemented the 'Fair Available Barber' algorithm accounting for weekly off-days and historical cut times.",
      constraints: "Ensured low-latency sync so walk-in customers and app bookings never double-book barbers.",
      lessons: "Production reliability depends heavily on decoupled state management and graceful network offline handling."
    }
  },
  {
    id: "02",
    title: "VisionSafe (Capstone 2)",
    tagline: "On-device AI eye-fatigue mitigation system using MediaPipe Face Mesh for real-time distance monitoring.",
    curiosity: "Can we protect user eye health from screen fatigue on Android without transmitting sensitive camera feeds to remote servers?",
    systemsExplored: "Flutter, MediaPipe Face Mesh (Edge AI), Android Foreground Service (Kotlin), Gaussian Blur Overlay, Dynamic Sampling.",
    technicalChallenge: "Maintaining continuous Face Mesh landmark processing in the background without rapid battery depletion or OS process termination.",
    learnings: "TensorFlow Lite & MediaPipe pipeline optimization, Android process lifecycles, and privacy-by-design edge computation.",
    tags: ["Flutter", "MediaPipe", "Edge AI", "Computer Vision", "Kotlin Service"],
    links: { visit: "", repo: "https://github.com/MyCampusLab/capstone-pt2" },
    image: "/avatar.jpg",
    collaborators: [
      { name: "M. Irsyad Fachryanto", role: "AI & Native Systems Lead", github: "https://github.com/mirsydfchrynto" },
      { name: "Marsha Dwi Lucyana", role: "UI/UX & Research Analyst", github: "https://github.com/marshadwi" }
    ],
    overview: "VisionSafe utilizes on-device MediaPipe Face Mesh to calculate the Z-coordinate distance from the user's eyes to the screen. When the distance drops below 30cm, it triggers an intelligent Gaussian blur overlay to safeguard vision health.",
    folderStructure: `visionsafe/
├── lib/ai/              # MediaPipe landmark processor
├── lib/service/         # Dynamic sampling controller
└── android/src/main/    # Kotlin Foreground Service & Window Overlay`,
    failureRecovery: {
      incident: "Background landmark detection terminated by Android battery manager.",
      rootCause: "High continuous CPU cycle consumption exceeding background limits.",
      recovery: "Engineered an adaptive frame-sampling loop that scales detection frequency dynamically based on battery state and device movement."
    },
    journal: {
      context: "Computer Vision Syndrome is pervasive due to screen overuse and poor ergonomic distance habits.",
      whyBuilt: "To create an unobtrusive, zero-privacy-compromise eye guardian that actively enforces healthy viewing distance.",
      systemThinking: "All image analysis occurs exclusively in local memory via isolated Dart threads without external network transmissions.",
      exploration: "Tuned 3D landmark mesh coordinates to derive precise eye-to-sensor depth metrics in varying ambient lighting.",
      constraints: "Optimized frame buffer handoffs between camera sensor and ML model to maintain sub-50ms inference latency.",
      lessons: "Edge AI requires strict balance between model precision and device thermal constraints."
    }
  },
  {
    id: "03",
    title: "Febrian Barbershop AI Agent",
    tagline: "Production WhatsApp conversational agent powered by Llama 3.3 70B (Groq) with tool calling and SQLite memory.",
    curiosity: "How to automate customer booking and walk-in logging for local service businesses with zero missed inquiries?",
    systemsExplored: "Node.js, TypeScript, Baileys WhatsApp Gateway, Groq SDK (Llama 3.3 70B), SQLite Persistent Storage, Cron Automations.",
    technicalChallenge: "Parsing natural language intent into deterministic database records and scheduling reminders reliably.",
    learnings: "Function calling schemas, WhatsApp socket lifecycle persistence, and multi-turn conversational context preservation.",
    tags: ["TypeScript", "Llama 3.3 70B", "Groq", "Baileys", "SQLite", "Tool Calling"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/barbershop-wa-bot" },
    image: "/secure_cbt_ui.webp",
    collaborators: [
      { name: "M. Irsyad Fachryanto", role: "Lead Developer", github: "https://github.com/mirsydfchrynto" }
    ],
    overview: "A WhatsApp AI business assistant actively deployed for Febrian Barbershop. Handles inquiries, books appointments, records walk-ins, and manages business knowledge with tool calling and SQLite persistence.",
    folderStructure: `barbershop-wa-bot/
├── src/services/whatsapp.ts  # Baileys socket gateway
├── src/services/ai.ts        # Groq Llama 3.3 tool-calling
└── src/database.ts           # SQLite booking & memory schema`,
    failureRecovery: {
      incident: "WhatsApp session disconnect on network drop.",
      rootCause: "Transient socket termination not handled with auto-reconnection credentials.",
      recovery: "Configured multi-file auth persistence and exponential backoff retry with pino logging."
    },
    journal: {
      context: "Local barbershop owners lose revenue when phone inquiries go unanswered during busy haircut sessions.",
      whyBuilt: "Automate booking confirmation, pricelist explanations, and operational queries 24/7 without human delay.",
      systemThinking: "Structured tools allow the LLM to emit deterministic booking tokens that update the SQLite queue directly.",
      exploration: "Experimented with Groq fast inference for sub-second WhatsApp response turnarounds.",
      constraints: "Prevented prompt injection and hallucinated pricing by enforcing strict system constraints and static business pricelists.",
      lessons: "Real-world agentic value lies in deterministic tool invocation over open-ended conversation."
    }
  },
  {
    id: "04",
    title: "kartunikah-template-live",
    tagline: "Interactive digital wedding invitation web platform with real-time RSVP and custom styling.",
    curiosity: "How to build ultra-lightweight, customizable digital invitations with smooth animations and instant RSVP capture?",
    systemsExplored: "Next.js, React, Tailwind CSS, Serverless Functions, Audio API.",
    technicalChallenge: "Optimizing media delivery and music playback across restrictive mobile browser auto-play policies.",
    learnings: "Modern responsive CSS styling, audio gesture unlock mechanisms, and serverless form handling.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Live Demo"],
    links: { visit: "https://kartunikah-template-live.vercel.app", repo: "https://github.com/mirsydfchrynto/kartunikah-template-live" },
    image: "/okey_bimbel_preview.webp",
    collaborators: [
      { name: "M. Irsyad Fachryanto", role: "Developer", github: "https://github.com/mirsydfchrynto" }
    ],
    overview: "A published, live digital wedding invitation web template enabling customizable couple stories, event timelines, gift registry, and guest RSVP tracking.",
    folderStructure: `kartunikah/
├── src/components/   # Animated invitation scenes
└── src/app/          # Next.js app router`,
    failureRecovery: {
      incident: "Background music blocked by mobile Safari and Chrome policies.",
      rootCause: "Browsers reject unprompted audio autoplay.",
      recovery: "Coupled audio play with the initial 'Open Invitation' user tap gesture."
    },
    journal: {
      context: "Digital invitations require fast loading speeds on slow cellular networks and elegant responsive styling.",
      whyBuilt: "Provide couples with a modern, paperless alternative featuring instant guest RSVP collection.",
      systemThinking: "Designed component-first for zero layout shift and minimal JavaScript bundle overhead.",
      exploration: "Tailwind animation utilities for subtle floral and typography entrance effects.",
      constraints: "Kept initial bundle payload under 150KB for rapid load times.",
      lessons: "User gesture handling is essential when orchestrating rich multimedia web experiences."
    }
  }
];

export const engineeringJourney = [
  {
    period: "FEB 2026 - PRESENT",
    role: "Full-Stack Developer",
    location: "Okey Bimbel",
    description: "Maintaining the live dual-platform exam ecosystem. Built Android Kiosk client with Kotlin native platform channels, Next.js supervisor portals, and optimized Firestore pipelines."
  },
  {
    period: "2024 - PRESENT",
    role: "Flutter Mentor",
    location: "Community Plug-in",
    description: "Mentoring students in mastering maintainable mobile architectures, Clean Architecture principles, state management (Riverpod/BLoC), and Android platform channels."
  },
  {
    period: "2024 - 2026",
    role: "Capstone Projects Lead",
    location: "Engineering Academic & Production Work",
    description: "Architected Geges Smart Barber (live queueing, booking & multi-tenant barbershop platform) and VisionSafe (on-device MediaPipe edge AI eye-health guardian)."
  }
];

export const exploredTools = [
  {
    category: "Mobile Systems",
    technologies: ["Flutter SDK", "Dart", "Kotlin Native", "Android SDK / Kiosk Mode", "MethodChannel", "Riverpod", "Hive"]
  },
  {
    category: "Web & Full-Stack",
    technologies: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Node.js", "Firebase Firestore", "Supabase", "PostgreSQL"]
  },
  {
    category: "AI & Agentic Systems",
    technologies: ["MediaPipe Face Mesh", "Edge AI / TFLite", "Groq SDK (Llama 3.3)", "Function / Tool Calling", "Baileys WhatsApp Gateway", "Hermes OS Automations"]
  },
  {
    category: "Tools & Environments",
    technologies: ["Linux / Shell", "Docker", "Git", "Figma", "Three.js", "REST APIs"]
  }
];

export const inlineResume = {
  summary: "Software developer specializing in Mobile Engineering (Flutter & Kotlin Native) and Full-Stack Web Development (Next.js & TypeScript). Focused on building high-integrity systems, kiosk-mode security, and practical agentic AI workflows.",
  education: [
    {
      institution: "Higher Education in Informatics Engineering",
      degree: "Informatics Engineering (Applied Computer Science)",
      period: "2023 - PRESENT",
      notes: "Active Flutter Mentor at Community Plug-in. Focus on Mobile Systems, Edge AI, and Scalable Web Architecture."
    },
    {
      institution: "SMK Negeri 2 Tegal",
      degree: "Computer and Network Engineering",
      period: "2020 - 2023",
      notes: "Foundations in server administration, Linux infrastructure, and networking protocols."
    }
  ],
  experience: [
    {
      company: "Okey Bimbel",
      role: "Full-Stack Developer",
      period: "FEB 2026 - PRESENT",
      description: "Core technology developer for the dual-platform digital exam ecosystem.",
      bullets: [
        "Built and maintain the Next.js supervisor portal and Flutter Android CBT client.",
        "Implemented Kotlin startLockTask() and FLAG_SECURE for hardware-level kiosk lockdown.",
        "Engineered dynamic 5-second QR token rotation preventing unauthorized exam entry."
      ]
    },
    {
      company: "Community Plug-in",
      role: "Flutter Mentor",
      period: "2024 - PRESENT",
      description: "Mentoring students in mastering maintainable mobile architectures and industrial standards.",
      bullets: [
        "Guiding students through Clean Architecture, BLoC/Riverpod, and platform channels.",
        "Hosting recurring practical code reviews and mobile development workshops."
      ]
    }
  ],
  community: [
    {
      organization: "Engineering & Open Source",
      role: "Project Contributor",
      period: "2024 - PRESENT",
      description: "Building production solutions including barbershop AI assistants, wedding platforms, and student productivity tools.",
      bullets: [
        "Published live Android CBT APK releases and open-source project documentation.",
        "Developing real-world AI agent integrations with tool calling and database persistence."
      ]
    }
  ],
  skills: [
    {
      category: "Mobile Engineering",
      tools: ["Flutter", "Dart", "Kotlin Native", "Android Kiosk Mode", "MethodChannel", "Riverpod", "Hive"]
    },
    {
      category: "Web & Backend",
      tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase Firestore", "Supabase", "PostgreSQL"]
    },
    {
      category: "AI & Systems",
      tools: ["MediaPipe Face Mesh", "Groq Llama 3.3", "Tool Calling", "Linux / Shell", "Docker", "Three.js", "Git"]
    }
  ]
};
