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
  image: "/okey_bimbel_preview.png",
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
    learnings: "Membangun sistem interop MethodChannel Kotlin-Dart, merancang sinkronisasi waktu jaringan via server timestamp, dan mengotomatiskan ekspor nilai dalam bentuk berkas Excel (.xlsx).",
    tags: ["Flutter", "Dart", "Kotlin", "Next.js 16", "Firestore Rules"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto/CBT-System" },
    image: "/secure_cbt_ui.png",
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
      context: "Ujian daring menggunakan platform standar seperti Google Forms sangat rentan terhadap kecurangan. Siswa dapat dengan mudah beralih tab untuk mencari jawaban di Google, mengambil tangkapan layar untuk dibagikan, atau menyalin soal. Proyek ini dirancang sebagai laboratorium riset mandiri untuk membatasi celah kecurangan tersebut secara komprehensif pada mobile client (Android) milik siswa sekolah (SD/SMP), terintegrasi langsung dengan dashboard portal monitoring dan bank soal pengajar.",
      whyBuilt: "Sistem operasional ini menggunakan alur berbasis Handshake QR dinamis. Pengajar mengaktifkan sesi ujian dari dashboard web Next.js yang menampilkan kode QR berisi parameter token berotasi cepat. Klien mobile Flutter memindai QR, memicu token validation di sisi server, mengaktifkan Kiosk Mode di tingkat sistem Android, dan mengunci navigasi di layar ujian. Jika siswa mencoba berpindah layar atau meminimalkan aplikasi, sistem langsung mencatat log pelanggaran dan mengirimkannya sebagai log heartbeat pengawasan.",
      systemThinking: "Arsitektur dual-platform ini mengandalkan isolasi data yang ketat. Siswa didaftarkan secara temporal menggunakan format id 'STD-timestamp' untuk mengurangi gesekan registrasi. Token masuk dikonstruksi secara dinamis dengan format 'SCBT|examId|sessionId|random|timestamp' dan berotasi setiap 5 detik untuk mencegah replay attacks. Untuk menghindari manipulasi waktu lokal pada ponsel siswa, sistem mengimplementasikan network handshake: perangkat klien menulis server timestamp ke '/server_time/{student_id}' di Firestore, membacanya kembali untuk mendeteksi clock drift, lalu menyesuaikan sisa waktu secara akurat sesuai clock server.",
      exploration: "Pintu gerbang keamanan mobile didesain menggunakan MethodChannel ke modul native Kotlin (MainActivity.kt). API native startLockTask() mengunci status bar, tombol Home, dan menu Recents. flag hardware WindowManager.LayoutParams.FLAG_SECURE diaktifkan untuk mematikan screenshot dan screencast secara hardware-level. Untuk menjaga rendering UI tetap berada di 60fps tanpa lagging, proses pemetaan acak (shuffling) pertanyaan dan opsi soal dijalankan secara asinkronus di background thread menggunakan Dart compute Isolate. Hasil mapping disimpan terenkripsi secara lokal menggunakan database Hive AES-256, dengan kunci enkripsi yang diamankan di Android Keystore via Flutter Secure Storage. Di sisi pengawas, Next.js web portal menyediakan fitur analisis lembar jawaban 3-level drill-down (Sesi -> Hasil Siswa -> Rincian Jawaban Butir Soal) lengkap dengan ekspor rekap Excel.",
      constraints: "Kendala operasional terbesar muncul saat menguji sistem dengan 100+ siswa bersamaan pada Spark tier Firebase. Listener real-time global pada dashboard pengawas (/active_exams) memicu jutaan reads per menit dan menyebabkan pembengkakan kuota. Masalah ini diselesaikan dengan menonaktifkan monitoring real-time global pada beranda dashboard (hanya memuat data on-demand), memperpanjang siklus heartbeat mobile client menjadi berkala 60 detik, serta menulis composite indexing pada Firestore. Selain itu, rotasi token QR 5 detik sering gagal tervalidasi akibat jeda jaringan; kendala ini diselesaikan dengan menerapkan grace-period token validation yang memverifikasi kecocokan scan terhadap activeToken dan lastToken sekaligus. Terjadi pula kendala Firestore Internal Assertion errors akibat pemutusan koneksi yang mendadak, yang berhasil diatasi dengan memasang Unsub Guard global pada saat teardown active listener Firestore.",
      reflection: "Jika merancang ulang hari ini, saya akan menggantikan kueri snap Firestore untuk handshake token QR dengan REST API serverless atau koneksi WebSocket terisolasi guna memangkas biaya operasional database. Saya juga akan menambahkan sensor deteksi ADB/USB debugging tingkat native Kotlin untuk memblokir siswa yang mencoba mengakali runtime sistem via PC.",
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
    image: "/geges_barber_ui.png",
    overview: "Geges Smart Barber dirancang untuk memecahkan masalah antrean fisik yang membosankan di barbershop lokal. Proyek ini tidak hanya menyediakan aplikasi pemesanan bagi pelanggan, tetapi juga menyediakan dashboard manajemen terpadu bagi pemilik barbershop untuk mengatur jadwal kerja, off-day mingguan, alokasi tugas yang adil bagi barberman, dan pelacakan pembayaran.",
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
      whyBuilt: "Sistem ini dibuat sebagai solusi capstone untuk mendistribusikan antrean secara adil di antara barberman berdasarkan jumlah pencapaian potong bulanan mereka, serta mengizinkan admin memproses pemesanan manual lewat AddManualBookingScreen yang mengizinkan input tanggal lampau dan bypass validasi jam operasional.",
      systemThinking: "Menggunakan Clean Architecture pada Flutter dengan pembagian lapisan data, domain, dan presentasi. Komunikasi antar kelas dijaga ketat menggunakan state manager Provider/BLoC agar visual UI tidak tercampur dengan logika bisnis antrean. Pada sisi Web Admin, disediakan enterprise-grade tenant lifecycle management yang mendukung pemrosesan refund dengan biaya admin 10% dan cascading permanent delete (deleteDoc) untuk membersihkan seluruh dokumen shop, tenant, dan admin user terkait.",
      exploration: "Saya memprogram QueueService dengan algoritma 'getFairAvailableBarberman' yang mencari ketersediaan barberman secara adil. Logika ini memeriksa off-days mingguan, cuti (onLeave), serta jam sibuk layanan berdasarkan estimasi durasi gaya rambut yang dipilih pelanggan secara case-insensitive. Di sisi keamanan, kami mengintegrasikan Firebase App Check (debug provider) dan mengoptimalkan inisialisasi startup di main.dart. Kami juga mendesain ulang PaymentScreen dengan tema gelap beraksen emas yang menghitung 'Biaya Reservasi' secara dinamis dengan mencocokkan total harga terhadap harga riil layanan hasil query database, serta menyediakan Success Screen interaktif pasca registrasi tenant agar user mengecek status verifikasi di 'Profile > Pesanan Saya'.",
      constraints: "Saat uji coba awal, kami mengalami crash database di Firestore (failed-precondition) ketika pengguna memuat daftar antrean yang sedang menunggu karena indeks database komposit Firebase belum selesai diproses. Untuk mencegah downtime bisnis, saya menerapkan fallback in-memory filtering: sistem mendeteksi kegagalan kueri, lalu memuat seluruh dokumen antrean hari itu secara global dan menyaring status 'waiting' di memori aplikasi klien. Di sisi web admin, kami memperbaiki kendala Service Worker Rejected dengan menyetel Content-Type dan Cache-Control headers pada firebase.json untuk sw.js dan registerSW.js.",
      lessons: "Pentingnya memisahkan dependensi database dari UI. Dengan clean architecture, ketika saya harus mengganti cara memfilter data dari database kueri ke in-memory filter, saya hanya perlu memodifikasi file Service tanpa menyentuh widget UI sama sekali. Proyek ini membuktikan kekuatan codebase terstruktur dengan meloloskan 188 unit/widget/integration tests (100% lulus, 0 warnings)."
    }
  },
  {
    id: "03",
    title: "The Ghost Customization",
    tagline: "Eksplorasi modifikasi lingkungan kerja minimalis berbasis efisiensi memori",
    curiosity: "Bagaimana membangun lingkungan kerja yang bersih, estetis, dan hemat memori pada sistem operasi Linux tanpa mengorbankan kenyamanan coding sehari-hari?",
    systemsExplored: "Modifikasi window manager, scripting bash otomatis untuk perawatan sistem, konfigurasi GRUB, instalasi driver backlight, dan optimasi runtime aplikasi di memori.",
    technicalChallenge: "Memastikan konsistensi gaya visual GTK/Libadwaita secara global sembari menjaga agar daemon latar belakang tetap hemat konsumsi memori RAM.",
    learnings: "Belajar memahami bagaimana Linux mengelola sesi grafis, penanganan input gesture tingkat OS, serta pembuatan daemon pemeliharaan sistem dengan systemd.",
    tags: ["Bash", "Linux System", "GTK config", "systemd daemon"],
    links: { visit: "", repo: "https://github.com/mirsydfchrynto" },
    image: "/ghost_linux_desktop.png",
    overview: "Modifikasi sistem Linux ini merupakan laboratorium personal tempat saya bereksperimen dengan workflow, manajemen memori tingkat OS, dan estetika minimalis. Proyek ini bukan tentang membuat OS baru, melainkan mengoptimalkan ekosistem Fedora/Ubuntu menjadi lingkungan kerja yang sangat personal, bersih dari branding berlebih, dan efisien.",
    folderStructure: `~/Gudang/setup linux/
├── config/
│   ├── gtk-4.0/                     # Kustomisasi WhiteSur Dark Theme
│   └── Touchegg/
│       └── touchegg.conf            # Gesture 3-jari macOS style
├── scripts/
│   ├── clean_ram.sh                 # Otomasi pembersihan RAM cache
│   └── restore-elite-ui             # Script sinkronisasi UI Flatpak`,
    journal: {
      context: "Lingkungan desktop standar sering kali memuat banyak background process yang tidak perlu, memakan resource memori RAM laptop pemrograman yang terbatas.",
      whyBuilt: "Saya ingin membuat workflow kustom berbasis window manager yang sangat efisien, teroptimasi untuk keyboard shortcut, dan terintegrasi dengan program pembersih memori otomatis.",
      systemThinking: "Lingkungan desktop didesain menggunakan GNOME minimalis yang dimodifikasi tanpa bloatware. Di belakang layar, sebuah sistem daemon berbasis systemd berjalan di latar belakang untuk mengontrol kesehatan memori RAM.",
      exploration: "Saya menulis script pembersih memori otomatis `clean_ram.sh` and mendaftarkannya sebagai daemon systemd (`sda-guardian.service`). Script ini memantau penggunaan RAM secara berkala. Ketika RAM terdeteksi melampaui 85%, script otomatis membersihkan cache memori yang tidak aktif (`drop_caches`) secara aman.",
      constraints: "Kendala teknis muncul saat menyelaraskan rendering font retina SF Pro pada layar non-HiDPI. Font terlihat buram atau terlalu tebal. Solusinya adalah melakukan tweak manual pada subpixel antialiasing and tingkat hinting di file konfigurasi X11 dan profil fontconfig.",
      reflection: "Ke depan, saya berencana memigrasikan seluruh setup kustomisasi desktop ini ke Wayland dan Hyprland untuk manajemen window yang lebih ringan serta dukungan animasi modern yang lebih hemat daya baterai.",
      lessons: "Kustomisasi sistem ini mengajari saya cara kerja internal sistem operasi Linux dalam mengelola sesi grafis, penanganan sinyal input, dan pentingnya efisiensi daemon latar belakang."
    }
  }
];

export const engineeringJourney = [
  {
    period: "2025 - SEKARANG",
    role: "Flutter Mentor",
    location: "Harkat University Lab",
    description: "Membantu mahasiswa memahami cara membangun aplikasi Flutter yang maintainable dan terstruktur. Fokus saya adalah mengenalkan penulisan kode dengan prinsip SOLID dan memisahkan logika bisnis dari UI sejak awal pengerjaan proyek praktikum."
  },
  {
    period: "FEB 2025 - SEKARANG",
    role: "Full Stack Developer",
    location: "Okey Bimbel",
    description: "Merekayasa dan memelihara ekosistem ujian digital (CBT) anti-curang dual-platform. Mengembangkan portal Next.js pengawas, MethodChannel native Kiosk Mode Android, dan mengoptimalkan kueri Firestore NoSQL."
  },
  {
    period: "2024 - SEKARANG",
    role: "Core Member",
    location: "Plug-In Linux Community",
    description: "Berkolaborasi dengan sesama antusias open-source untuk menyelenggarakan sesi diskusi teknis, berbagi tips optimasi sistem operasi, dan mengenalkan kenyamanan workflow CLI kepada mahasiswa tingkat awal."
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
  summary: "Saya adalah mahasiswa Informatika Universitas Harkat Negeri dengan ketertarikan mendalam pada Mobile Engineering (Flutter & Kotlin) dan System Architecture. Berfokus pada perancangan aplikasi yang andal untuk memecahkan masalah operasional riil. Berpengalaman langsung mengoptimalkan database NoSQL, mengintegrasikan interop native OS, dan aktif berkontribusi dalam membagikan pengetahuan pemrograman di komunitas Linux.",
  education: [
    {
      institution: "Universitas Harkat Negeri",
      degree: "Teknik Informatika (Sarjana Terapan)",
      period: "2023 - Sekarang (Aktif)",
      notes: "Indeks Prestasi Kumulatif: 3.92 / 4.00. Aktif membagikan pemahaman Clean Architecture dan SOLID di laboratorium kampus."
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
      role: "Full Stack Developer",
      period: "FEB 2025 - SEKARANG",
      description: "Memikul tanggung jawab atas rekayasa dan siklus operasional ekosistem ujian digital anti-curang (CBT) terintegrasi.",
      bullets: [
        "Membangun portal admin Next.js 16 (Turbopack) & klien mobile Flutter terintegrasi untuk pengawasan real-time dan manajemen bank soal.",
        "Mengembangkan interop native Android Kotlin (startLockTask & FLAG_SECURE) untuk mematikan screenshot/overlay dan mengunci total layar ujian.",
        "Mengoptimalkan performa Firestore NoSQL sebesar 70% melalui restrukturisasi kueri per-sesi on-demand dan state recovery Hive AES-256 lokal."
      ]
    }
  ],
  community: [
    {
      organization: "Plug-In Linux Community",
      role: "Core Member & Flutter Class Mentor",
      period: "2024 - SEKARANG",
      description: "Mengembangkan ekosistem belajar open-source di lingkungan mahasiswa.",
      bullets: [
        "Menyelenggarakan workshop pengenalan shell scripting, otomasi CLI, dan manajemen workflow.",
        "Menjadi mentor kelas pemrograman Flutter gratis bagi 40+ mahasiswa tingkat awal untuk menanamkan pondasi Separation of Concerns (SoC) sejak dini."
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
