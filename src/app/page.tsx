"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ThreeFluidWave } from "@/components/ThreeFluidWave";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
import { 
  OkeyBimbelExhibit, 
  GegesBarberExhibit, 
  VisionSafeExhibit, 
  FebrianAIExhibit 
} from "@/components/InteractiveProjectExhibits";
import { 
  productionExperience, 
  blueprints, 
  engineeringJourney, 
  exploredTools 
} from "@/config/portfolioData";
import { pdfBase64 } from "@/config/pdfBase64";
import { 
  ArrowUpRight, 
  ArrowDown,
  Download, 
  Sparkles, 
  Check, 
  Copy, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  Terminal, 
  Cpu, 
  ShieldAlert 
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeRoom, setActiveRoom] = useState(0);
  const [timeStr, setTimeStr] = useState("12:00:00 WIB");

  // Real-time Indonesian clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });
        setTimeStr(`${formatter.format(now)} WIB`);
      } catch {}
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation for the project showroom (Arrow Left / Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return; // don't navigate rooms while modal is open
      if (e.key === "ArrowRight") {
        setActiveRoom((prev) => (prev + 1) % 4);
      } else if (e.key === "ArrowLeft") {
        setActiveRoom((prev) => (prev - 1 + 4) % 4);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("irsydfchrynto@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const easeOut = [0.16, 1, 0.3, 1] as any;

  // The 4 Curated Exhibition Rooms
  const rooms = [
    {
      index: "01",
      code: "PROD-LIVE",
      name: "Okey Bimbel CBT Ecosystem",
      type: "PRODUCTION SPOTLIGHT",
      tagline: "100% cheat-proof exam platform locking Android OS hardware.",
      benefit: "Eliminates cheating completely in high-school exams. Students cannot leave the app, take screenshots, or split-screen, while teachers track scores live.",
      pills: ["Kotlin Kiosk Lock", "5s Dynamic QR", "Offline-Safe Cache", "Next.js Portal"],
      data: productionExperience,
      component: <OkeyBimbelExhibit />
    },
    {
      index: "02",
      code: "CAPSTONE-1",
      name: "Geges Smart Barber",
      type: "BUSINESS ECOSYSTEM",
      tagline: "All-in-one barbershop app: live digital queue, bookings, and store.",
      benefit: "No more crowded barbershop waiting rooms. Customers monitor wait times from home, book preferred barbers, and shop styling products with fair barber turn allocation.",
      pills: ["Flutter Mobile", "Fair-Work Algorithm", "Real-Time Queue", "React Admin"],
      data: blueprints[0],
      component: <GegesBarberExhibit />
    },
    {
      index: "03",
      code: "CAPSTONE-2",
      name: "VisionSafe",
      type: "EDGE AI / HEALTH TECH",
      tagline: "Smart eye guardian: blurs screen automatically when held too close.",
      benefit: "Protects children and heavy phone users from screen fatigue. When held closer than 30cm, it gently blurs the screen until you back away—zero cloud upload.",
      pills: ["MediaPipe Face Mesh", "Edge AI (No Cloud)", "Background Isolate", "Kotlin Overlay"],
      data: blueprints[1],
      component: <VisionSafeExhibit />
    },
    {
      index: "04",
      code: "AGENTIC-AI",
      name: "Febrian Barbershop AI",
      type: "AUTONOMOUS AGENT",
      tagline: "24/7 WhatsApp AI concierge automating bookings & inquiries.",
      benefit: "Answers customer questions on WhatsApp, checks appointment slots, and commits bookings into SQLite database in sub-400ms so barbers never lose walk-ins.",
      pills: ["Groq Llama 3.3 70B", "Tool / Function Calling", "Baileys WhatsApp", "SQLite Memory"],
      data: blueprints[2],
      component: <FebrianAIExhibit />
    }
  ];

  const currentRoom = rooms[activeRoom];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden relative">
      <Navbar />

      {/* Ambient 3D Fluid Silk Wave Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <ThreeFluidWave className="opacity-60" />
      </div>

      <div className="relative z-10">
        
        {/* ============================================================ */}
        {/* ACT 01. THE MONOLITH CANVAS (HERO EXHIBIT) */}
        {/* ============================================================ */}
        <header className="min-h-screen w-full flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-28 pb-12 border-b border-slate-200">
          
          {/* Top Architectural HUD Ticker */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest uppercase text-slate-600 border-b border-slate-200/90 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-slate-900 font-bold">M. IRSYAD FACHRYANTO</span>
              <span className="text-slate-300">/</span>
              <span className="text-blue-600 font-semibold">SOFTWARE ARCHITECT</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-slate-900 font-medium">TEGAL // {timeStr}</span>
              </div>
              <span className="hidden md:inline text-slate-300">•</span>
              <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
                OPEN FOR FULL-TIME / REMOTE
              </span>
            </div>
          </div>

          {/* Frontal Monolithic Typography Statement */}
          <div className="my-auto py-12 md:py-20 max-w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="space-y-2"
            >
              <div className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-blue-600 font-bold">
                [ EXHIBITION // PORTFOLIO 2026 ]
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[128px] font-display font-black text-slate-900 tracking-tighter leading-[0.88] uppercase">
                SURGICAL <br />
                <span className="font-serif italic font-normal text-blue-600 lowercase tracking-normal">
                  resilience.
                </span> <br />
                HONEST CODE.
              </h1>
            </motion.div>

            {/* Frugal, Direct Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
              className="text-lg sm:text-2xl md:text-3xl text-slate-700 max-w-4xl font-normal leading-relaxed"
            >
              I build software that refuses to fail under pressure—from <strong className="text-slate-900 font-semibold">tamper-proof Android kiosk apps</strong> for live exams, to <strong className="text-slate-900 font-semibold">autonomous AI assistants</strong> running 24/7 on WhatsApp.
            </motion.p>

            {/* Frontal Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: easeOut }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#showroom"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-blue-600 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-xl active:scale-95"
              >
                <span>Enter Interactive Showroom</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="CV M.IRSYAD FACHRYANTO.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all"
              >
                <Download size={15} className="text-blue-600" />
                <span>{downloading ? "Syncing..." : "Download Resume PDF"}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-mono tracking-wider transition-colors"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? "Email Copied!" : "irsydfchrynto@gmail.com"}</span>
              </button>
            </motion.div>
          </div>

          {/* Bottom HUD Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200/90 text-xs font-mono text-slate-500 uppercase">
            <div>
              <span>DISCIPLINE: </span>
              <span className="text-slate-800 font-bold">FLUTTER · ANDROID KOTLIN · NEXT.JS · AGENTIC AI</span>
            </div>
            <div className="hidden sm:block">
              <span>LOCATION: </span>
              <span className="text-slate-800 font-bold">INDONESIA (READY FOR WORLDWIDE REMOTE)</span>
            </div>
            <div>
              <span>SCROLL OR USE [← →] ARROWS</span>
            </div>
          </div>
        </header>

        {/* ============================================================ */}
        {/* ACT 02. THE INTERACTIVE EXHIBITION SHOWROOM (DIRECTED FLOW) */}
        {/* ============================================================ */}
        <section id="showroom" className="min-h-screen w-full py-20 md:py-28 px-6 sm:px-10 lg:px-16 border-b border-slate-200">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold block mb-1">
                ACT 02 // CURATED EXHIBITION STAGE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight uppercase">
                Interactive Showroom
              </h2>
            </div>

            {/* Room Selector Pills */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-sm">
                {rooms.map((room, idx) => (
                  <button
                    key={room.index}
                    onClick={() => setActiveRoom(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                      activeRoom === idx
                        ? "bg-slate-900 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {room.index}
                  </button>
                ))}
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveRoom((prev) => (prev - 1 + 4) % 4)}
                  aria-label="Previous Room"
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setActiveRoom((prev) => (prev + 1) % 4)}
                  aria-label="Next Room"
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Active Room Stage (Edge-to-Edge Grid) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoom.index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: easeOut }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-stretch"
            >
              {/* Left Column: Bold Narrative & Tactical Capabilities */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-8 bg-white p-8 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-sm">
                <div className="space-y-6">
                  
                  {/* Room Meta Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                      ROOM {currentRoom.index} / 04 // {currentRoom.code}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {currentRoom.type}
                    </span>
                  </div>

                  {/* Project Grand Title */}
                  <div className="space-y-3">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
                      {currentRoom.name}
                    </h3>
                    <p className="text-lg sm:text-xl font-medium text-blue-600 leading-snug">
                      {currentRoom.tagline}
                    </p>
                  </div>

                  {/* Plain-English Real Benefit (Zero Fluff) */}
                  <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block">
                      Real-World Impact
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {currentRoom.benefit}
                    </p>
                  </div>

                  {/* Capability Tags */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Architectural Pillars
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentRoom.pills.map((pill) => (
                        <span 
                          key={pill}
                          className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-medium"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedProject(currentRoom.data)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md shadow-blue-500/20 active:scale-95"
                  >
                    <span>Open Technical Dossier</span>
                    <ArrowUpRight size={14} />
                  </button>

                  {(currentRoom.data as any).url && (
                    <a
                      href={(currentRoom.data as any).url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-300 hover:border-slate-900 text-slate-700 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <Download size={14} className="text-blue-600" />
                      <span>Download APK</span>
                    </a>
                  )}

                  {(currentRoom.data as any).links?.repo && (
                    <a
                      href={(currentRoom.data as any).links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-300 hover:border-slate-900 text-slate-700 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <GitHubIcon size={14} />
                      <span>Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Live Interactive Simulator Stage */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="h-full w-full">
                  {currentRoom.component}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Room Jump Footbar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200">
            {rooms.map((r, i) => (
              <div
                key={r.index}
                onClick={() => setActiveRoom(i)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeRoom === i
                    ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-600/10"
                    : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>ROOM {r.index}</span>
                  {activeRoom === i && <span className="text-blue-600 font-bold">● ACTIVE</span>}
                </div>
                <div className="text-sm font-bold text-slate-900 truncate">
                  {r.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* ACT 03. THE BRUTALIST ARCHITECTURAL MATRIX (CAPABILITIES) */}
        {/* ============================================================ */}
        <section id="matrix" className="w-full py-20 md:py-28 px-6 sm:px-10 lg:px-16 border-b border-slate-200">
          <div className="space-y-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold block mb-1">
                  ACT 03 // ARCHITECTURAL PILLARS
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight uppercase">
                  Engineering Matrix
                </h2>
              </div>
              <p className="text-xs font-mono text-slate-500 uppercase">
                4 CORE SUBSYSTEMS &amp; FOUNDATIONS
              </p>
            </div>

            {/* Edge-to-Edge Brutalist 4-Column Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  code: "SYS-01",
                  title: "Mobile OS Internals",
                  lead: "Hardware-level control via Kotlin Native and Flutter MethodChannels.",
                  skills: ["Kotlin Native", "startLockTask()", "FLAG_SECURE", "Flutter SDK", "Dart Isolates", "Riverpod", "Hive Cache"]
                },
                {
                  code: "SYS-02",
                  title: "Full-Stack Web Systems",
                  lead: "Clean, decoupling App Router architectures with sub-second responses.",
                  skills: ["Next.js 16", "TypeScript", "Tailwind CSS", "Firebase Firestore", "Supabase", "REST APIs", "Node.js"]
                },
                {
                  code: "SYS-03",
                  title: "On-Device & Agent AI",
                  lead: "Privacy-preserving local machine vision and deterministic LLM tool-calling.",
                  skills: ["MediaPipe Face Mesh", "TFLite Edge AI", "Groq Llama 3.3 70B", "Function Calling", "Baileys WhatsApp", "SQLite Memory"]
                },
                {
                  code: "SYS-04",
                  title: "Resilience Engineering",
                  lead: "Systems engineered to survive intermittent drops and high concurrency.",
                  skills: ["Offline-Tolerant Cache", "Fair Queue Balancing", "TOTP Dynamic QR", "AES-256 Storage", "Docker", "Linux Terminal"]
                }
              ].map((matrix) => (
                <div 
                  key={matrix.code}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 hover:border-blue-500 transition-all group flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                      <span>{matrix.code}</span>
                      <span className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {matrix.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {matrix.lead}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Stack Ledger:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {matrix.skills.map((s) => (
                        <span key={s} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ACT 04. PRODUCTION LEDGER (CHRONICLE) */}
        {/* ============================================================ */}
        <section id="ledger" className="w-full py-20 md:py-28 px-6 sm:px-10 lg:px-16 border-b border-slate-200">
          <div className="space-y-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold block mb-1">
                  ACT 04 // VERIFIED TIMELINE
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight uppercase">
                  Production Chronicle
                </h2>
              </div>
              <p className="text-xs font-mono text-slate-500 uppercase">
                OPERATIONAL ENGAGEMENTS
              </p>
            </div>

            {/* Brutalist Ledger Table */}
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {engineeringJourney.map((entry, idx) => (
                <div 
                  key={idx}
                  className="py-8 grid md:grid-cols-12 gap-6 items-baseline hover:bg-blue-50/40 transition-colors px-4 rounded-2xl"
                >
                  <div className="md:col-span-3 font-mono text-xs text-blue-600 font-bold uppercase">
                    {entry.period}
                  </div>
                  <div className="md:col-span-4 space-y-1">
                    <h3 className="text-xl font-bold text-slate-900">{entry.role}</h3>
                    <div className="text-xs font-mono text-slate-500">{entry.location}</div>
                  </div>
                  <div className="md:col-span-5 text-sm text-slate-600 leading-relaxed">
                    {entry.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ACT 05. MONOLITHIC FINALE & COMMAND CENTER */}
        {/* ============================================================ */}
        <section id="contact" className="min-h-[80vh] w-full py-24 md:py-36 px-6 sm:px-10 lg:px-16 flex flex-col justify-between">
          <div className="space-y-10 max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 font-bold block">
              ACT 05 // COMMAND CENTER
            </span>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-display font-black text-slate-900 tracking-tight leading-[0.92] uppercase">
              LET&apos;S BUILD <br />
              <span className="font-serif italic font-normal text-blue-600 lowercase tracking-normal">
                something solid.
              </span>
            </h2>

            <p className="text-lg sm:text-2xl text-slate-700 leading-relaxed font-normal max-w-3xl">
              Available for full-time engineering roles, mobile architecture, or performance contracting. Ready for remote worldwide or relocation.
            </p>

            {/* Giant Interactive Email Bar */}
            <div className="pt-4">
              <button
                onClick={handleCopyEmail}
                className="group flex flex-wrap items-center gap-4 text-2xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 hover:text-blue-600 transition-colors border-b-2 border-slate-300 hover:border-blue-600 pb-2 text-left"
              >
                <span>irsydfchrynto@gmail.com</span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {copied ? "COPIED TO CLIPBOARD" : "CLICK TO COPY"}
                </span>
              </button>
            </div>

            {/* Direct Connect Grid */}
            <div className="pt-8 flex flex-wrap gap-8 text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
              <a 
                href="https://wa.me/6285865826621" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp (+62 858-6582-6621)</span>
              </a>

              <a 
                href="https://linkedin.com/in/mirsydfchrynto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <LinkedInIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://github.com/mirsydfchrynto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <GitHubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Footer Bar */}
          <footer className="pt-20 border-t border-slate-200 mt-20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
            <div>
              M. Irsyad Fachryanto &copy; 2026 // Architectural Integrity
            </div>
            <div className="flex items-center gap-4">
              <span>Jakarta Time: {timeStr}</span>
              <a href="#" className="text-blue-600 hover:underline">Return to Top ↑</a>
            </div>
          </footer>
        </section>

      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
