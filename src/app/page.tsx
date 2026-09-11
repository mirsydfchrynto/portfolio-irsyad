"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ThreeFluidWave } from "@/components/ThreeFluidWave";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
import { InteractiveDevicePreview } from "@/components/InteractiveDevicePreview";
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
  Mail
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState(0);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("irsydfchrynto@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Projects list for the interactive phone showcase
  const showcaseProjects = [
    {
      title: "Okey Bimbel CBT (Exam App)",
      tagline: "Android exam app that completely blocks cheating.",
      whatItIs: "An exam app for schools that locks students' phones into kiosk mode so they cannot switch apps, open Google, or take screenshots during tests.",
      highlights: [
        "Hardware Kiosk Lock: Android OS disables home button, split screen, and notifications.",
        "Anti-Cheat QR: 5-second rotating QR code on teacher's screen to join exam.",
        "Offline-Safe: Wi-Fi disconnects do not lose answers; everything syncs back automatically."
      ],
      stack: ["Flutter", "Kotlin Native", "Next.js", "Firestore"],
      data: productionExperience,
      repo: (productionExperience as any).url,
      apk: (productionExperience as any).url,
    },
    {
      title: "Geges Smart Barber",
      tagline: "All-in-one barbershop app with live queue tracking.",
      whatItIs: "A complete mobile app for barbershop customers to take queue numbers from home, see live wait times, book their favorite barber, and buy styling products.",
      highlights: [
        "Live Queue: See current haircut number and estimated waiting time in minutes.",
        "Fair Barber Allocation: Algorithm balances customer assignments among active barbers.",
        "Integrated Store: Buy pomade and hair care products directly in-app."
      ],
      stack: ["Flutter", "Clean Architecture", "Firestore", "React Admin"],
      data: blueprints[0],
      repo: blueprints[0].links.repo,
      apk: "",
    },
    {
      title: "VisionSafe (Eye Guardian)",
      tagline: "Smart eye protector that blurs screen when held too close.",
      whatItIs: "An on-device health app that uses camera AI to calculate the distance between your eyes and the phone. If you hold the screen closer than 30cm, it gently blurs the screen until you move back.",
      highlights: [
        "100% On-Device AI: MediaPipe Face Mesh runs locally on your phone CPU.",
        "Zero Privacy Risk: Camera stream never leaves your phone and is never uploaded.",
        "Gentle Reminder: Gaussian blur stops screen fatigue without sudden shutdowns."
      ],
      stack: ["Flutter", "MediaPipe AI", "Android Kotlin", "Edge AI"],
      data: blueprints[1],
      repo: blueprints[1].links.repo,
      apk: "",
    },
    {
      title: "Febrian Barbershop AI Bot",
      tagline: "24/7 WhatsApp AI assistant automating haircut bookings.",
      whatItIs: "An AI chatbot connected to WhatsApp for a local barbershop. It answers price questions, checks available time slots, and records haircut bookings into the database automatically.",
      highlights: [
        "Fast AI Response: Powered by Groq Llama 3.3 70B with sub-400ms turnaround.",
        "Database Tool Calling: Automatically checks and saves bookings to SQLite.",
        "24/7 Active: Barbers never miss customer inquiries while busy cutting hair."
      ],
      stack: ["TypeScript", "Groq Llama 3.3", "WhatsApp API", "SQLite"],
      data: blueprints[2],
      repo: blueprints[2].links.repo,
      apk: "",
    },
  ];

  const currentShowcase = showcaseProjects[activeProjectTab];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden relative">
      <Navbar />

      {/* Subtle background ambient wave */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <ThreeFluidWave className="opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* 1. HERO SECTION (HONEST, CLEAR, DIRECT) */}
        {/* ============================================================ */}
        <header className="min-h-[85vh] flex flex-col justify-center pt-28 pb-16">
          <div className="space-y-6 max-w-4xl">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Available for Full-Time Roles · Remote / Anywhere</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Hi, I&apos;m <span className="text-blue-600">Muhammad Irsyad Fachryanto</span>.
            </h1>

            <p className="text-xl sm:text-2xl text-slate-700 font-normal leading-relaxed">
              I&apos;m a software developer specializing in <strong className="text-slate-900 font-semibold">Flutter &amp; Android (Kotlin)</strong> mobile apps, modern <strong className="text-slate-900 font-semibold">Next.js</strong> web applications, and practical <strong className="text-slate-900 font-semibold">AI tools</strong>.
            </p>

            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl leading-relaxed">
              Based in Indonesia. I focus on building reliable software with clean architecture, strong security under the hood, and intuitive user experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#interactive-showcase"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white hover:bg-blue-600 text-sm font-semibold transition-all shadow-sm active:scale-95"
              >
                <span>Try Interactive Apps</span>
                <ArrowDown size={16} />
              </a>

              <a
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="CV MUHAMMAD IRSYAD FACHRYANTO.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-900 bg-white text-slate-800 text-sm font-semibold transition-all shadow-xs"
              >
                <Download size={16} className="text-blue-600" />
                <span>{downloading ? "Downloading..." : "Download Resume (CV)"}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
              >
                {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                <span>{copied ? "Email Copied!" : "irsydfchrynto@gmail.com"}</span>
              </button>
            </div>

            {/* Direct Social Links */}
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
        {/* 2. INTERACTIVE LIVE PHONE SHOWCASE (FUN, VISUAL, ZERO FLUFF) */}
        {/* ============================================================ */}
        <section id="interactive-showcase" className="py-20 border-t border-slate-200">
          <div className="space-y-12">
            
            {/* Header */}
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Interactive Showcase
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                Try the apps directly on the screen.
              </h2>
              <p className="text-base text-slate-600 font-normal">
                Click the tabs or tap buttons on the phone to see how each project actually works in real life.
              </p>
            </div>

            {/* Two Column Showcase Layout */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Clear Honest Details */}
              <div className="lg:col-span-6 space-y-6">
                
                <div className="space-y-2">
                  <div className="text-xs font-mono font-semibold text-blue-600 uppercase">
                    PROJECT 0{activeProjectTab + 1} OF 04
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                    {currentShowcase.title}
                  </h3>
                  <p className="text-base font-semibold text-slate-700">
                    {currentShowcase.tagline}
                  </p>
                </div>

                {/* What it is */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                    What It Does:
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {currentShowcase.whatItIs}
                  </p>
                </div>

                {/* How it solves problems */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                    Key Features:
                  </span>
                  <ul className="space-y-2 text-sm text-slate-600 font-normal">
                    {currentShowcase.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack Tags */}
                <div className="space-y-2 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {currentShowcase.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setSelectedProject(currentShowcase.data)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95"
                  >
                    <span>Read Architecture Case Study</span>
                    <ArrowUpRight size={14} />
                  </button>

                  {currentShowcase.repo && (
                    <a
                      href={currentShowcase.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-900 text-slate-700 text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      <GitHubIcon size={14} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column: The Interactive Phone */}
              <div className="lg:col-span-6 flex justify-center">
                <InteractiveDevicePreview
                  activeTab={activeProjectTab}
                  onTabChange={(idx) => setActiveProjectTab(idx)}
                />
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. ALL PROJECTS (CLEAN GRID, NO DUPLICATE FLUFF) */}
        {/* ============================================================ */}
        <section id="projects" className="py-20 border-t border-slate-200">
          <div className="space-y-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Portfolio Index
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                  Selected Projects
                </h2>
              </div>
              <p className="text-xs font-mono text-slate-500 uppercase">
                4 REAL PROJECTS
              </p>
            </div>

            {/* Clean 4-Card Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {showcaseProjects.map((p, idx) => (
                <div 
                  key={p.title}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-blue-400 transition-all space-y-6 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-100">
                        PROJ 0{idx + 1}
                      </span>
                      <span className="text-slate-500">{p.stack[0]}</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      {p.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {p.whatItIs}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.stack.map((s) => (
                        <span key={s} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-xs font-mono text-slate-600">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(p.data)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowUpRight size={14} />
                    </button>

                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1"
                      >
                        <GitHubIcon size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. SKILLS & TOOLS (HONEST & PRACTICAL) */}
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
                TOOLS USED IN REAL PROJECTS
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Mobile Development",
                  items: ["Flutter SDK", "Dart", "Android (Kotlin)", "Kiosk Mode (startLockTask)", "MethodChannel", "Riverpod", "Hive Cache"]
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
                  items: ["Linux / Bash", "Git & GitHub", "Docker Basics", "Figma", "VS Code / Android Studio", "Web Audio API"]
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
        {/* 5. EXPERIENCE & MENTORSHIP */}
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
        {/* 6. CONTACT (DIRECT, CLEAR, 1-CLICK ACTIONS) */}
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
              I&apos;m available for full-time engineering roles, mobile development, or contract work. Whether you have a project in mind or want to talk tech, feel free to reach out.
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
