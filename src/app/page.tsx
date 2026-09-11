"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ThreeFluidWave } from "@/components/ThreeFluidWave";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
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
  Check, 
  Copy, 
  ExternalLink,
  Code2,
  Smartphone,
  Globe,
  Bot,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Lock,
  Eye,
  Scissors,
  QrCode,
  WifiOff,
  Database
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("irsydfchrynto@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden relative">
      <Navbar />

      {/* ThreeUI-inspired Ambient Fluid Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <ThreeFluidWave className="opacity-55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* 1. HERO SECTION (AUTHORITATIVE, HONEST, CLEAN) */}
        {/* ============================================================ */}
        <header className="min-h-[88vh] flex flex-col justify-center pt-28 pb-16">
          <div className="space-y-6 max-w-4xl">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Full-Stack &amp; Mobile Software Developer</span>
            </div>

            {/* Grand Authoritative Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Muhammad Irsyad Fachryanto
            </h1>

            {/* Simple, Clear, Direct Bio */}
            <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-relaxed">
              I build reliable mobile applications with <strong className="text-slate-900 font-semibold">Flutter &amp; Android (Kotlin)</strong>, modern web platforms with <strong className="text-slate-900 font-semibold">Next.js</strong>, and practical <strong className="text-slate-900 font-semibold">AI assistants</strong>.
            </p>

            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed">
              Based in Indonesia. Focused on production stability, OS-level hardware security, and clear user experiences that solve real daily problems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 text-sm font-semibold transition-all shadow-sm active:scale-95"
              >
                <span>Explore Selected Works</span>
                <ArrowDown size={16} />
              </a>

              <a
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="CV MUHAMMAD IRSYAD FACHRYANTO.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-900 bg-white text-slate-800 text-sm font-semibold transition-all shadow-xs"
              >
                <Download size={16} className="text-blue-600" />
                <span>{downloading ? "Downloading..." : "Curriculum Vitae (PDF)"}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
              >
                {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                <span>{copied ? "Email Copied!" : "irsydfchrynto@gmail.com"}</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-600">
              <a 
                href="https://wa.me/6285865826621" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://github.com/mirsydfchrynto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <GitHubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/mirsydfchrynto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <LinkedInIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>
        </header>

        {/* ============================================================ */}
        {/* 2. SELECTED WORKS (THREEUI & ACETERNITY BENTO GRID) */}
        {/* ============================================================ */}
        <section id="projects" className="py-20 border-t border-slate-200">
          <div className="space-y-12">
            
            {/* Section Heading */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Selected Works
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                  Real Projects &amp; Products
                </h2>
              </div>
              <p className="text-xs font-mono text-slate-500 uppercase">
                4 CORE CODEBASES &amp; SYSTEMS
              </p>
            </div>

            {/* ThreeUI-Style Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* ======================================================= */}
              {/* BENTO CARD 1: OKEY BIMBEL CBT (LARGE FEATURED HERO CARD) */}
              {/* ======================================================= */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="lg:col-span-12 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 hover:border-blue-500/80 transition-all shadow-sm space-y-8 relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-700">
                      Live in Active School Operations
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    FEATURED PRODUCTION SYSTEM
                  </span>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Summary */}
                  <div className="md:col-span-7 space-y-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
                      Okey Bimbel CBT Ecosystem
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-blue-600">
                      High-integrity digital exam platform that completely prevents student cheating on Android devices.
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      Built for schools to turn regular student phones and tablets into locked test terminals. Students cannot open Google, switch apps, or screenshot questions, while teachers track student progress and scoring live from a web portal.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-mono font-medium border border-blue-100">
                        Flutter Mobile
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                        Kotlin Native (Kiosk Mode)
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                        Next.js Supervisor Portal
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                        Firebase Firestore
                      </span>
                    </div>
                  </div>

                  {/* Right: 3 Concrete Solutions */}
                  <div className="md:col-span-5 space-y-3.5 bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                      Key Technical Breakthroughs:
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Lock size={16} className="text-blue-600 shrink-0 mt-0.5" />
                        <div className="text-xs text-slate-700 leading-relaxed">
                          <strong className="text-slate-900 block font-semibold">OS-Level Kiosk Lock:</strong>
                          Calls native Kotlin <code className="text-blue-600">startLockTask()</code> and <code className="text-blue-600">FLAG_SECURE</code> to block multitasking and screenshots.
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <QrCode size={16} className="text-blue-600 shrink-0 mt-0.5" />
                        <div className="text-xs text-slate-700 leading-relaxed">
                          <strong className="text-slate-900 block font-semibold">5-Second Dynamic QR Code:</strong>
                          Rotating token on teacher&apos;s screen ensures physical classroom presence and prevents sharing.
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <WifiOff size={16} className="text-blue-600 shrink-0 mt-0.5" />
                        <div className="text-xs text-slate-700 leading-relaxed">
                          <strong className="text-slate-900 block font-semibold">Offline-Safe Local Cache:</strong>
                          AES-256 encrypted storage safely preserves answers during Wi-Fi drops, recovering automatically.
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Action Row */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedProject(productionExperience)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95"
                  >
                    <span>Read Architecture Case Study</span>
                    <ArrowUpRight size={14} />
                  </button>

                  {productionExperience.url && (
                    <a
                      href={productionExperience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-900 bg-white text-slate-700 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <Download size={14} className="text-blue-600" />
                      <span>Download Release APK</span>
                    </a>
                  )}
                </div>
              </motion.div>

              {/* ======================================================= */}
              {/* BENTO CARD 2: GEGES SMART BARBER (CAPSTONE 1) */}
              {/* ======================================================= */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-400 transition-all shadow-sm space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-100">
                      CAPSTONE 1
                    </span>
                    <span className="text-slate-400">BUSINESS ECOSYSTEM</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-slate-900">
                    Geges Smart Barber
                  </h3>

                  <p className="text-sm font-semibold text-blue-600">
                    All-in-one barbershop app with live queue tracking and fair barber workload balancing.
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Eliminates crowded barbershop waiting rooms. Customers can check live wait times and take queue numbers from home, book preferred barbers, and purchase grooming products directly in-app.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-mono font-semibold text-slate-700">Highlights:</div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                        <span>Real-time digital queue with live waiting time estimates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                        <span>Fair-Work distribution algorithm balancing haircut turns among barbers</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                        <span>Clean Architecture with isolated BLoC state management</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {blueprints[0].tags.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-xs font-mono text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(blueprints[0])}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={blueprints[0].links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1"
                  >
                    <GitHubIcon size={13} />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </motion.div>

              {/* ======================================================= */}
              {/* BENTO CARD 3: VISIONSAFE (CAPSTONE 2) */}
              {/* ======================================================= */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-400 transition-all shadow-sm space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-100">
                      CAPSTONE 2
                    </span>
                    <span className="text-slate-400">EDGE AI / HEALTH TECH</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-slate-900">
                    VisionSafe
                  </h3>

                  <p className="text-sm font-semibold text-blue-600">
                    Smart eye guardian: automatically blurs phone screen when held dangerously close.
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Protects children and heavy phone users from screen fatigue and myopia. Uses front camera AI to measure eye-to-screen distance; if held closer than 30cm, it gently blurs the screen until you back away—zero cloud upload.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-mono font-semibold text-slate-700">Highlights:</div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                        <span>MediaPipe Face Mesh calculating 3D Z-depth coordinates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                        <span>100% private on-device processing in isolated Dart thread</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                        <span>Dynamic frame sampling loop to preserve Android battery life</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {blueprints[1].tags.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-xs font-mono text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(blueprints[1])}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={blueprints[1].links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1"
                  >
                    <GitHubIcon size={13} />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </motion.div>

              {/* ======================================================= */}
              {/* BENTO CARD 4: FEBRIAN BARBERSHOP AI AGENT */}
              {/* ======================================================= */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="lg:col-span-12 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 hover:border-blue-400 transition-all shadow-sm space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-blue-600" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600">
                      Autonomous WhatsApp Agent
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    GROQ LLAMA 3.3 70B · SUB-400MS
                  </span>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-7 space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900">
                      Febrian Barbershop AI Agent
                    </h3>
                    <p className="text-base font-semibold text-blue-600">
                      24/7 WhatsApp AI concierge automating customer appointment bookings and walk-in logging.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      Deployed for Febrian Barbershop. It chats with clients on WhatsApp, answers pricelist queries, verifies available barber slots, and writes confirmed bookings into a persistent SQLite database so barbers never miss calls during busy haircut sessions.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {blueprints[2].tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-3 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 text-xs">
                    <div className="font-mono font-bold uppercase tracking-wider text-slate-700">
                      Technical Implementation:
                    </div>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>Structured LLM function calling to commit validated booking records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>Multi-file WhatsApp socket authentication with auto-reconnect logic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>Sub-second response turnarounds powered by Groq fast inference</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(blueprints[2])}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={blueprints[2].links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1"
                  >
                    <GitHubIcon size={13} />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. SKILLS & TECHNOLOGIES (PRACTICAL MATRIX) */}
        {/* ============================================================ */}
        <section id="skills" className="py-20 border-t border-slate-200">
          <div className="space-y-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Skills &amp; Technologies
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                  What I Build With
                </h2>
              </div>
              <p className="text-xs font-mono text-slate-500 uppercase">
                TOOLS USED IN REAL PRODUCTION &amp; LAB
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Mobile Development",
                  items: ["Flutter SDK", "Dart", "Android (Kotlin Native)", "Kiosk Mode (startLockTask)", "MethodChannel", "Riverpod", "Hive Cache"]
                },
                {
                  title: "Web & Full-Stack",
                  items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Firebase Firestore", "Supabase", "REST APIs"]
                },
                {
                  title: "AI & Automations",
                  items: ["MediaPipe Face Mesh", "Edge AI (TFLite)", "Groq AI (Llama 3.3)", "Tool / Function Calling", "WhatsApp Bots (Baileys)"]
                },
                {
                  title: "Developer Tools",
                  items: ["Linux / Bash", "Git & GitHub", "Docker Basics", "Figma", "Android Studio / VS Code", "Three.js Canvas"]
                }
              ].map((cat) => (
                <div key={cat.title} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
                  <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. WORK TIMELINE (HONEST & CONCISE) */}
        {/* ============================================================ */}
        <section id="experience" className="py-20 border-t border-slate-200">
          <div className="space-y-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Experience &amp; Community
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                  Work Timeline
                </h2>
              </div>
              <p className="text-xs font-mono text-slate-500 uppercase">
                PRODUCTION &amp; MENTORSHIP
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {engineeringJourney.map((job, i) => (
                <div key={i} className="py-6 grid md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-3 font-mono text-xs font-bold text-blue-600">
                    {job.period}
                  </div>
                  <div className="md:col-span-4 space-y-0.5">
                    <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                    <div className="text-xs font-mono text-slate-500">{job.location}</div>
                  </div>
                  <div className="md:col-span-5 text-sm text-slate-600 leading-relaxed font-normal">
                    {job.description}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. CONTACT (CLEAR, DIRECT, 1-CLICK ACTIONS) */}
        {/* ============================================================ */}
        <section id="contact" className="py-24 border-t border-slate-200">
          <div className="space-y-8 max-w-3xl">
            
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              Contact
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight">
              Let&apos;s build something together.
            </h2>

            <p className="text-lg text-slate-700 font-normal leading-relaxed">
              Available for full-time software engineering roles, mobile development, or contract work. Whether you have an open role or a product in mind, feel free to reach out.
            </p>

            {/* Email Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-500 uppercase">Direct Email</span>
                <div className="text-lg sm:text-xl font-bold font-mono text-slate-900">
                  irsydfchrynto@gmail.com
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                {copied ? "Copied to Clipboard!" : "Copy Email"}
              </button>
            </div>

            {/* Direct Social Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/6285865826621"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-xs"
              >
                <WhatsAppIcon size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="https://linkedin.com/in/mirsydfchrynto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-900 bg-white text-slate-800 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <LinkedInIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/mirsydfchrynto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-900 bg-white text-slate-800 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <GitHubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="CV MUHAMMAD IRSYAD FACHRYANTO.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-900 bg-white text-slate-800 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <Download size={15} className="text-blue-600" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* FOOTER */}
        {/* ============================================================ */}
        <footer className="py-10 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div>
            Muhammad Irsyad Fachryanto &copy; 2026
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js &amp; Tailwind CSS</span>
            <a href="#" className="text-blue-600 hover:underline">Back to top ↑</a>
          </div>
        </footer>

      </div>

      {/* Case Study Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
