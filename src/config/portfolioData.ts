export const introduction = {
  title: "M. Irsyad Fachryanto",
  subtitle: "Mahasiswa Informatika & Developer",
  bio: "Saya adalah mahasiswa informatika yang gemar merakit antarmuka pengguna yang bersih dan mengeksplorasi arsitektur sistem. Fokus utama saya ada pada ekosistem Flutter, Kotlin, dan Next.js. Dibandingkan membuat kode yang terlihat pintar tapi rumit, saya lebih suka mengejar struktur yang bersih, mudah dipelihara, dan bisa diandalkan dalam operasional nyata. Portofolio sederhana ini adalah catatan jujur dari proses belajar, kendala teknis yang saya temui, dan sistem-sistem yang sedang saya coba pecahkan dari waktu ke waktu."
};

export const productionExperience = {
  id: "okey-bimbel",
  title: "Okey Bimbel (CBT System)",
  role: "Full Stack Developer",
  period: "FEB 2025 - SEKARANG",
  tagline: "Ekosistem ujian digital anti-curang dual-platform terintegrasi (Web Admin Next.js & Client Mobile Flutter) dengan sistem penguncian layar Kiosk Mode tingkat native dan sinkronisasi token QR dinamis.",
  url: "https://okeybimbel.web.app/",
  image: "/okey_bimbel_preview.webp",
  metrics: [
    "Aktif digunakan secara live dalam operasional ujian harian bimbingan belajar untuk ratusan siswa.",
    "Mengotomatiskan pengawasan dan pendistribusian materi ujian secara terpusat dan aman.",
    "Mengunci total layar ujian siswa (startLockTask & FLAG_SECURE di native Android Kotlin) untuk menutup 100% celah kecurangan."
  ],
  timeline: [
    { label: "Analisis Masalah", description: "Google Forms/web ujian konvensional sangat rentan terhadap kecurangan seperti berpindah tab, menyalin soal, and screenshot pengerjaan." },
    { label: "Desain Sistem & Keamanan", description: "Merancang arsitektur Next.js 16 (Turbopack) untuk portal admin/pengawas, terintegrasi dengan Firestore real-time monitoring." },
    { label: "Mekanisme Handshake QR", description: "Mengembangkan protokol masuk sesi ujian berbasis sinkronisasi token QR dinamis (berotasi per 5 detik) untuk otentikasi identitas mandiri." },
    { label: "Kiosk Mode & Secure Window", description: "Mengintegrasikan startLockTask() dan FLAG_SECURE via MethodChannel di Kotlin untuk menonaktifkan navigasi, status bar, and screenshot." },
    { label: "Optimasi Throughput Firestore", description: "Memangkas reads/writes database sebesar 70% dengan memigrasikan monitoring real-time global ke listener per-sesi on-demand." },
    { label: "State Recovery & Offline Cache", description: "Menerapkan Hive storage terenkripsi AES-256 untuk memulihkan progres jawaban siswa secara mulus jika terjadi crash/putus daya." }
  ],
  journal: {
    context: "Di Okey Bimbel, operasional ujian bimbingan belajar harian membutuhkan platform ujian digital mandiri yang aman dan otomatis untuk menggantikan Google Forms yang rentan kecurangan. Kebutuhan utamanya adalah meminimalkan celah siswa menyalin soal, bertukar tab pencarian, atau berbuat curang saat ujian berlangsung, seraya mempermudah guru dalam memanajemen nilai dan merancang bank soal secara terpusat.",
    whyBuilt: "Sistem operasional ini dirancang agar guru/admin dapat merancang bank soal dan mengelola sesi ujian via Next.js web portal. Siswa masuk ke sesi ujian dengan memindai kode QR dinamis yang berotasi di kelas, mengisi biodata pengerjaan di aplikasi mobile, dan mengerjakan soal dalam keadaan layar terkunci. Aplikasi Flutter mendeteksi upaya meminimalkan jendela atau tangkapan layar, lalu mengirimkan log pelanggaran langsung ke dashboard guru.",
    systemThinking: "Sistem menggunakan arsitektur dual-platform terdesentralisasi berbasis client-side state. Soal ujian beserta mapping acak (shuffling) diunduh dan diproses di background thread (Isolate) saat pertama kali memindai QR, lalu disimpan terenkripsi di memori lokal (Hive AES-256). Sesi aktif dipantau secara periodic lewat heartbeat untuk mendeteksi status dan memperbarui progres ke Firestore tanpa membebani limit kueri baca/tulis.",
    exploration: "Pengerjaan client mobile dibangun dengan Flutter dan state management minimalis. Logika enkripsi Hive dikombinasikan dengan secure key storage di Keystore/Keychain Android. Untuk deteksi kecurangan, Flutter Lifecycle Listener memantau window focus event. Begitu fokus hilang (aplikasi masuk background/inactive), sistem secara otomatis mencatat violation strike.",
    constraints: "Salah satu kendala terbesar dalam operasional nyata dengan 100+ siswa bersamaan adalah limitasi throughput Firestore. Awalnya, monitoring progress menggunakan real-time snapshot listener global yang membengkak menjadi ribuan reads per menit. Kendala ini diselesaikan dengan menonaktifkan real-time listener global pada beranda dashboard admin dan menggantinya dengan listener per-sesi on-demand, serta merestrukturisasi heartbeat mobile menjadi berkala 60 detik.",
    reflection: "Jika merancang ulang hari ini, saya akan menggantikan kueri snap Firestore untuk token handshake QR dengan endpoint HTTP REST atau koneksi WebSocket terisolasi untuk menghindari biaya baca Firestore dari polling rotasi token 5 detik.",
    lessons: "Proyek ini mengajarkan saya pentingnya optimasi database NoSQL di bawah tekanan beban pengguna riil, penanganan enkripsi data lokal untuk integritas sistem, serta bagaimana membatasi celah keamanan aplikasi di sistem operasi Android."
  }
};

export const blueprints = [
  {
    id: "01",
    title: "Secure CBT Master",
    tagline: "Sistem Kiosk Mode Android terintegrasi web pengawas dengan rotasi token QR dinamis berbasis Next.js 16 (Turbopack) & Firestore.",
    curiosity: "Bagaimana cara membatasi celah kecurangan siswa pada ujian digital tingkat sekolah menggunakan penguncian native Android tanpa mengharuskan rooting perangkat?",
    systemsExplored: "Flutter Kiosk mode (MethodChannel), lock native Android system (startLockTask & FLAG_SECURE), Next.js 16 (Turbopack), Firestore Security Rules (createdBy & isOwner), State-Driven Fallback & Unsub Guard.",
    technicalChallenge: "Menghindari Firestore Internal Assertion errors akibat state monitoring real-time yang tidak stabil pada jaringan sekolah, serta menyinkronkan clock drift server untuk sisa waktu ujian.",
    learnings: "Membangun sistem interop MethodChannel Kotlin-Dart, merancang sinkronisasi waktu jaringan via server timestamp, and mengotomatiskan ekspor nilai dalam bentuk berkas Excel (.xlsx).",
    tags: ["Flutter", "Dart", "Kotlin", "Next.js 16", "Firestore Rules"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/CBT-System" },
    image: "/secure_cbt_ui.webp",
    overview: "Secure CBT Master lahir dari keresahan nyata saat mendapati metode ujian daring sering kali terganggu oleh celah kecurangan siswa (seperti membuka tab pencarian, menyalin jawaban, atau mengambil tangkapan layar). Proyek ini berupaya membangun lingkungan ujian yang terisolasi menggunakan Kiosk Mode tingkat aplikasi di Android dan antarmuka pemantauan real-time bagi pengajar.",
    folderStructure: `cbt-system/
├── mobile-cbt-system/ (Flutter Client)
│   ├── android/app/src/main/kotlin/com/securecbt/cbt_mobile/
│   │   └── MainActivity.kt          # MethodChannel Kiosk Mode & FLAG_SECURE
│   └── lib/core/utils/
│       ├── local_db_service.dart     # Database Hive AES-256 & Secure Storage key
│       └── remote_data_source.dart   # Sinkronisasi server_time & active_exams
└── cbt-web-admin/ (Next.js Web Portal)
    ├── src/app/monitoring/page.tsx   # Real-time monitor progress & force submit
    └── src/app/results/page.tsx      # 3-level drill-down grading & XLSX export`,
    journal: {
      context: "Ujian daring menggunakan platform standar seperti Google Forms sangat rentan terhadap kecurangan. Siswa dapat dengan mudah beralih tab untuk mencari jawaban di Google, mengambil tangkapan layar untuk dibagikan, atau menyalin soal.",
      whyBuilt: "Sistem operasional ini menggunakan alur berbasis Handshake QR dinamis. Pengajar mengaktifkan sesi ujian dari dashboard web Next.js yang menampilkan kode QR berisi parameter token berotasi cepat. Klien mobile Flutter memindai QR, memicu token validation di sisi server, mengaktifkan Kiosk Mode di tingkat sistem Android, dan mengunci navigasi di layar ujian.",
      systemThinking: "Arsitektur dual-platform ini mengandalkan isolasi data yang ketat. Siswa didaftarkan secara temporal menggunakan format id 'STD-timestamp' untuk mengurangi gesekan registrasi. Token masuk dikonstruksi secara dinamis dengan format 'SCBT|examId|sessionId|random|timestamp' and berotasi setiap 5 detik untuk mencegah replay attacks.",
      exploration: "Pintu gerbang keamanan mobile didesain menggunakan MethodChannel ke modul native Kotlin (MainActivity.kt). API native startLockTask() mengunci status bar, tombol Home, dan menu Recents. flag hardware WindowManager.LayoutParams.FLAG_SECURE diaktifkan untuk mematikan screenshot dan screencast secara hardware-level.",
      constraints: "Kendala operasional terbesar muncul saat menguji sistem dengan 100+ siswa bersamaan pada Spark tier Firebase. Listener real-time global pada dashboard pengawas (/active_exams) memicu jutaan reads per menit dan menyebabkan pembengkakan kuota.",
      reflection: "Jika merancang ulang hari ini, saya akan menggantikan kueri snap Firestore untuk handshake token QR dengan REST API serverless atau koneksi WebSocket terisolasi guna memangkas biaya operasional database.",
      lessons: "Eksplorasi ini mengajarkan saya untuk memahami siklus hidup proses internal sistem operasi Android secara native (process lifecycle), cara menangani asynchrony dan interop MethodChannel, serta pentingnya mendesain optimasi skema database NoSQL di bawah tekanan beban pengguna riil."
    }
  },
  {
    id: "02",
    title: "Geges Smart Barber",
    tagline: "Sistem penjadwalan antrean pangkas rambut terintegrasi dengan deteksi ketersediaan barberman berbasis pembagian tugas yang adil.",
    curiosity: "Bagaimana menjembatani kebutuhan antrean fisik pelaku bisnis lokal dengan arsitektur software yang responsif saat menghadapi kendala komposit database NoSQL?",
    systemsExplored: "Penerapan Clean Architecture pada Flutter, isolasi state management dengan BLoC/Provider, integrasi pembayaran, mekanisme sinkronisasi Firestore real-time, Firebase App Check (debug provider), dan PWA Service Worker caching.",
    technicalChallenge: "Mengembangkan fallback in-memory filtering untuk menangani kendala limitasi query Firestore (failed-precondition) saat memproses antrean aktif secara real-time di sisi pengguna, serta merancang cascading permanent delete untuk data tenant.",
    learnings: "Memahami konsep Separation of Concerns (SoC) secara mendalam, memblokir booking barberman saat hari libur/cuti (weekly off-days & leave), mendesain UI Payment yang modern dengan tema gelap aksen emas, dan mengonfigurasi sw.js agar PWA andal.",
    tags: ["Flutter", "Dart", "Firebase App Check", "Next.js", "NoSQL"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/GEGES_Capstone" },
    image: "/geges_barber_ui.webp",
    overview: "Geges Smart Barber dirancang untuk memecahkan masalah antrean fisik yang membosankan di barbershop lokal. Proyek ini tidak hanya menyediakan aplikasi pemesanan bagi pelanggan, tetapi juga menyediakan dashboard manajemen terpadu bagi pemilik barbershop.",
    folderStructure: `geges-smart-barber/
├── lib/
│   ├── main.dart                   # Firebase App Check & startup init
│   ├── services/
│   │   ├── queue_service.dart      # Algoritma getFairAvailableBarberman & in-memory fallback
│   │   └── barbershop_service.dart # Fetch data layanan & harga
│   └── screens/
│       ├── appointment_screen.dart  # Deteksi & pemblokiran off-days / cuti barberman
│       └── payment_screen.dart      # UI gelap aksen emas, Firestore status streams, Success route
└── web-super-admin-geges/ (Next.js Web Admin)
    ├── firebase.json                # PWA Service Worker caching headers
    └── src/services/
        └── provisioningService.ts   # Cascading permanent delete (deleteDoc) untuk data shop/user`,
    journal: {
      context: "Antrean fisik di barbershop sering kali tidak teratur dan menumpuk di jam sibuk, membuat pelanggan frustrasi dan alokasi kerja barberman menjadi tidak adil.",
      whyBuilt: "Sistem ini dibuat sebagai solusi capstone untuk mendistribusikan antrean secara adil di antara barberman berdasarkan jumlah pencapaian potong bulanan mereka.",
      systemThinking: "Menggunakan Clean Architecture pada Flutter dengan pembagian lapisan data, domain, dan presentasi. Komunikasi antar kelas dijaga ketat menggunakan state manager Provider/BLoC agar visual UI tidak tercampur dengan logika bisnis antrean.",
      exploration: "Saya memprogram QueueService dengan algoritma 'getFairAvailableBarberman' yang mencari ketersediaan barberman secara adil. Logika ini memeriksa off-days mingguan, cuti (onLeave), serta jam sibuk layanan berdasarkan estimasi durasi gaya rambut yang dipilih pelanggan secara case-insensitive.",
      constraints: "Saat uji coba awal, kami mengalami crash database di Firestore (failed-precondition) ketika pengguna memuat daftar antrean yang sedang menunggu karena indeks database komposit Firebase belum selesai diproses.",
      lessons: "Pentingnya memisahkan dependensi database dari UI. Dengan clean architecture, ketika saya harus mengganti cara memfilter data dari database kueri ke in-memory filter, saya hanya perlu memodifikasi file Service tanpa menyentuh widget UI sama sekali."
    }
  },
  {
    id: "03",
    title: "VisionSafe (EyeGuardian)",
    tagline: "Sistem mitigasi kelelahan mata berbasis AI on-device menggunakan MediaPipe Face Mesh untuk pemantauan jarak pandang dan kedipan.",
    curiosity: "Bagaimana cara mengurangi ketegangan mata pengguna komputer dengan mendeteksi jarak wajah dan frekuensi kedipan tanpa mengirim data visual ke server?",
    systemsExplored: "Flutter, MediaPipe Face Mesh (Edge AI), Local Notifications, Background Services, SQLite.",
    technicalChallenge: "Menjalankan pemrosesan citra Face Mesh secara kontinu di background tanpa menguras daya baterai secara ekstrem dan menjaga privasi data pengguna 100% secara lokal.",
    learnings: "Integrasi TensorFlow Lite/MediaPipe di Flutter, optimasi loop deteksi citra, dan manajemen state notifikasi sistem.",
    tags: ["Flutter", "MediaPipe", "Edge AI", "Computer Vision"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/visionsafe-app" },
    image: "/avatar.jpg",
    overview: "VisionSafe dirancang untuk melindungi kesehatan mata pengguna gadget. Dengan memanfaatkan kamera depan dan teknologi Edge AI, aplikasi ini memantau apakah pengguna terlalu dekat dengan layar atau jarang berkedip, lalu memberikan peringatan secara real-time.",
    folderStructure: `visionsafe-app/
├── lib/
│   ├── core/ai/
│   │   └── face_mesh_detector.dart # MediaPipe integration
│   ├── services/
│   │   └── notification_service.dart # Local alert system
│   └── main.dart                   # Background isolate setup`,
    journal: {
      context: "Kelelahan mata digital (Computer Vision Syndrome) meningkat seiring tingginya penggunaan gadget. Masalah utamanya adalah jarak pandang yang terlalu dekat dan frekuensi berkedip yang menurun drastis saat fokus ke layar.",
      whyBuilt: "Aplikasi ini dibangun untuk memberikan pengingat proaktif yang menjaga jarak aman pandang dan mengingatkan pengguna untuk berkedip secara teratur, semuanya dilakukan secara privat di perangkat pengguna.",
      systemThinking: "Sistem menggunakan pipeline MediaPipe Face Mesh yang berjalan pada thread terpisah (Isolate) untuk menghindari stuttering pada UI. Data koordinat landmark wajah diproses untuk menghitung Eye Aspect Ratio (EAR) guna mendeteksi kedipan dan estimasi jarak berdasarkan ukuran bounding box wajah.",
      exploration: "Eksplorasi melibatkan optimasi model TFLite agar dapat berjalan lancar di berbagai perangkat Android kelas menengah. Saya menggunakan background service yang tetap berjalan meskipun aplikasi di-minimize, memberikan notifikasi overlay saat terdeteksi pelanggaran jarak atau durasi fokus yang terlalu lama.",
      constraints: "Tantangan utama adalah konsumsi daya kamera dan CPU. Hal ini diatasi dengan mengatur frekuensi pengambilan frame (sampling rate) yang dinamis, menyesuaikan beban deteksi berdasarkan status aktivitas pengguna.",
      lessons: "Proyek ini memperdalam pemahaman saya tentang Edge AI dan privasi data, serta bagaimana membangun aplikasi yang bermanfaat bagi kesehatan pengguna melalui pemrosesan citra real-time."
    }
  }
];

export const engineeringJourney = [
  {
    period: "FEB 2025 - SEKARANG",
    role: "Full Stack Developer",
    location: "Okey Bimbel",
    description: "Merekayasa dan memelihara ekosistem ujian digital (CBT) anti-curang dual-platform. Mengembangkan portal Next.js pengawas, MethodChannel native Kiosk Mode Android, dan mengoptimalkan kueri Firestore NoSQL."
  },
  {
    period: "2024 - SEKARANG",
    role: "Flutter Mentor",
    location: "Community Plug-in",
    description: "Dipercaya sebagai mentor kelas Flutter sejak semester 2 untuk membantu mahasiswa membangun pondasi pemrograman mobile yang maintainable. Berfokus pada penerapan Clean Architecture, prinsip SOLID, dan pemisahan logika bisnis dari UI."
  },
  {
    period: "2023 - SEKARANG",
    role: "Core Member",
    location: "Community Plug-in",
    description: "Bergabung sejak awal perkuliahan dan dipercaya sebagai anggota inti dalam organisasi. Berkolaborasi menyelenggarakan workshop teknis, diskusi arsitektur, dan mengenalkan workflow CLI yang efisien kepada sesama mahasiswa."
  }
];

export const exploredTools = [
  {
    category: "Mobile Systems",
    technologies: ["Flutter SDK", "Dart", "Kotlin Native", "Android APIs / Kiosk Mode"]
  },
  {
    category: "Web & API Architectures",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI Python", "NoSQL / Firestore Query Optimization"]
  },
  {
    category: "Systems & Security",
    technologies: ["Linux Core / Bash Scripting", "Firebase App Check", "Systemd Services", "Process Lifecycles"]
  }
];

export const inlineResume = {
  summary: "Saya adalah mahasiswa Semester 6 D4 Teknik Informatika Universitas Harkat Negeri Tegal dengan IPK 3.92/4.00. Memiliki ketertarikan mendalam pada Mobile Engineering (Flutter & Kotlin) dan System Architecture. Berperan aktif sebagai Flutter Mentor dan Core Member di Komunitas Plug-in sejak awal perkuliahan, saya berfokus pada penerapan Clean Architecture dan SOLID dalam membangun aplikasi yang andal.",
  education: [
    {
      institution: "Universitas Harkat Negeri Tegal",
      degree: "D4 Teknik Informatika (Sarjana Terapan)",
      period: "2023 - SEKARANG",
      notes: "Semester 6 | IPK: 3.92 / 4.00. Aktif sebagai Core Member & Flutter Mentor di komunitas Plug-in sejak semester 2."
    },
    {
      institution: "SMK Negeri 2 Tegal",
      degree: "Teknik Komputer dan Jaringan (TKJ)",
      period: "2020 - 2023",
      notes: "Pembelajaran dasar jaringan komputer, administrasi server Linux, infrastruktur jaringan, perakitan, dan dasar pemrograman."
    }
  ],
  experience: [
    {
      company: "Okey Bimbel",
      role: "Lead Freelance IT Support & Dev",
      period: "FEB 2025 - SEKARANG",
      description: "Memikul tanggung jawab sebagai mitra IT andalan untuk rekayasa berkelanjutan dan dukungan operasional ekosistem ujian digital.",
      bullets: [
        "Membangun dan memelihara portal admin Next.js 16 (Turbopack) & klien mobile Flutter untuk pengawasan real-time harian.",
        "Mengembangkan interop native Android Kotlin (startLockTask & FLAG_SECURE) untuk mematikan screenshot/overlay dan mengunci total layar ujian.",
        "Menjadi konsultan IT utama yang menangani seluruh kebutuhan teknologi dan optimasi cloud infrastruktur bimbingan belajar."
      ]
    }
  ],
  community: [
    {
      organization: "Community Plug-in",
      role: "Flutter Mentor",
      period: "2024 - SEKARANG",
      description: "Menjadi mentor kelas Flutter bagi mahasiswa untuk menanamkan pondasi Separation of Concerns (SoC) dan standar industri (Clean Architecture & SOLID).",
      bullets: [
        "Membimbing 40+ mahasiswa dalam memahami arsitektur Flutter yang terstruktur.",
        "Menyelenggarakan workshop pemrograman Flutter berkala."
      ]
    },
    {
      organization: "Community Plug-in",
      role: "Core Member",
      period: "2023 - SEKARANG",
      description: "Berkontribusi dalam pengembangan ekosistem belajar di lingkungan mahasiswa sebagai anggota inti organisasi.",
      bullets: [
        "Berkolaborasi dalam menyelenggarakan sesi diskusi teknis dan workshop.",
        "Mengenalkan kenyamanan workflow CLI kepada mahasiswa universitas."
      ]
    }
  ],
  skills: [
    {
      category: "Mobile Engineering",
      tools: ["Flutter SDK", "Dart OOP", "Kotlin Native", "Android APIs (Kiosk Mode)", "Riverpod / Provider", "Hive AES-256 Local DB"]
    },
    {
      category: "Web & Core Systems",
      tools: ["Next.js", "React", "TypeScript", "FastAPI Python", "Firestore Query Optimization", "NoSQL Architecture"]
    },
    {
      category: "Systems & Security",
      tools: ["Linux Core / Shell Scripting", "Firebase App Check", "Systemd Services", "Process Lifecycles", "MethodChannel Interop"]
    }
  ]
};
