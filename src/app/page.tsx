"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ThreeFluidWave } from "@/components/ThreeFluidWave";
import { ArtisticAvatar } from "@/components/ArtisticAvatar";
import { ProjectLabCard } from "@/components/ProjectLabCard";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
import { 
  introduction, 
  productionExperience, 
  blueprints, 
  engineeringJourney, 
  exploredTools,
  inlineResume 
} from "@/config/portfolioData";
import { pdfBase64 } from "@/config/pdfBase64";
import { 
  ArrowUpRight, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Globe2, 
  Cpu, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  Layers,
  ExternalLink,
  Code2
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 relative selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Subtle Studio Grid */}
      <div className="fixed inset-0 z-0 studio-grid pointer-events-none opacity-80" />

      {/* 01. HERO SECTION */}
      <header className="relative min-h-[92svh] flex flex-col justify-center px-4 sm:px-6 lg:px-12 pt-28 pb-16 z-10 overflow-hidden">
        {/* Serene 3D Fluid Silk Wave */}
        <ThreeFluidWave className="opacity-90" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Human Pitch */}
            <motion.div 
              className="lg:col-span-7 space-y-8 text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-xs">
                  <Sparkles size={13} className="text-blue-600" />
                  <span>Open to Software Engineering Roles &amp; Collaborations</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 font-display tracking-tight leading-[1.05]">
                  Building high-impact <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
                    mobile &amp; full-stack
                  </span> systems.
                </h1>

                <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                  Hi, I&apos;m <span className="font-semibold text-slate-900">M. Irsyad Fachryanto</span> — a developer specializing in 
                  <span className="text-blue-700 font-semibold"> Flutter</span>, native <span className="text-blue-700 font-semibold">Android (Kotlin)</span>, and modern <span className="text-blue-700 font-semibold">Next.js</span> web systems. Grounded in clean architecture, operational reliability, and real-world results.
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#production-work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all active:scale-95"
                >
                  <span>Explore Production Work</span>
                  <ArrowUpRight size={16} />
                </a>

                <a 
                  href={`data:application/pdf;base64,${pdfBase64}`}
                  download="CV M.IRSYAD FACHRYANTO.pdf"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold shadow-xs hover:border-slate-300 transition-all active:scale-95"
                >
                  <Download size={16} className="text-blue-600" />
                  <span>{downloading ? "Preparing PDF..." : "Download Resume"}</span>
                </a>
              </div>

              {/* Quick Trust Signals */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <span>Kiosk &amp; Platform Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone size={16} className="text-blue-600" />
                  <span>Flutter &amp; Kotlin Native</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 size={16} className="text-blue-600" />
                  <span>Next.js &amp; Cloud Real-time</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Clean Artistic Emblem */}
            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <ArtisticAvatar />
            </motion.div>
          </div>
        </div>
      </header>

      {/* 02. RECRUITER QUICK SNAPSHOT (3 CORE PILLARS) */}
      <section className="py-12 border-y border-slate-200/70 bg-white/70 backdrop-blur-xs relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ● Live In Production
                </span>
                <span className="text-xs font-mono text-slate-400">01</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Okey Bimbel CBT Ecosystem</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dual-platform exam system running for hundreds of students with native Kotlin kiosk lockdown (<code className="text-blue-600">startLockTask</code>) and dynamic QR handshake authentication.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Capstone 1 · Business Vision
                </span>
                <span className="text-xs font-mono text-slate-400">02</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Geges Smart Barber</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                An all-in-one barbershop platform: live queue tracking, online booking, grooming marketplace, and an algorithm that distributes workload fairly among barbers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Capstone 2 · On-Device AI
                </span>
                <span className="text-xs font-mono text-slate-400">03</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">VisionSafe (EyeGuardian)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Privacy-first eye health guardian using MediaPipe Face Mesh. Calculates 3D eye-screen depth and triggers Gaussian blur if &lt;30cm without sending data to servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. FEATURED PRODUCTION CASE STUDY (OKEY BIMBEL) */}
      <section id="production-work" className="py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6" {...fadeInUp}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Layers size={14} />
                <span>Featured Production Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight">
                Okey Bimbel Exam Platform
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md md:text-right leading-relaxed">
              Eliminating 100% of exam cheating vectors on Android while providing teachers with instant real-time oversight.
            </p>
          </motion.div>

          {/* Featured Case Study Card */}
          <motion.div 
            className="p-8 md:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 grid lg:grid-cols-12 gap-10 items-center"
            {...fadeInUp}
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="badge-emerald">Live In Production</span>
                  <span className="badge-blue">Flutter Mobile</span>
                  <span className="badge-slate">Kotlin Native Kiosk</span>
                  <span className="badge-slate">Next.js Supervisor</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-display">
                  Hardware-Enforced Kiosk Mode &amp; Real-Time Supervision
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Traditional web forms fail high-stakes exams because students switch tabs, take screenshots, or manipulate device clocks. At Okey Bimbel, I engineered a locked-down Android client coupled with a dynamic Next.js supervision portal.
                </p>
              </div>

              {/* 4 Feature Points */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">Kiosk Mode Lockdown</span>
                  <span className="text-xs text-slate-500">Android startLockTask() disables Home button, notification shade, and multitasking.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">Dynamic QR Handshake</span>
                  <span className="text-xs text-slate-500">5-second rotating session tokens prevent credential sharing and replay attacks.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">Encrypted Local State</span>
                  <span className="text-xs text-slate-500">Hive AES-256 caching saves student progress locally even during intermittent school Wi-Fi.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                  <span className="text-xs font-bold text-slate-900 block">Real-time Web Admin</span>
                  <span className="text-xs text-slate-500">Teachers monitor active student status, question delivery, and automatic grading.</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProject(productionExperience)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
                >
                  <span>Read Full Technical Journal</span>
                  <ArrowUpRight size={14} />
                </button>

                {productionExperience.url && (
                  <a
                    href={productionExperience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <Download size={14} className="text-blue-600" />
                    <span>Download Release APK</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right: Interface Image or Visual Preview */}
            <div className="lg:col-span-5 relative group">
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-100 aspect-video lg:aspect-square flex items-center justify-center relative">
                {productionExperience.image ? (
                  <img
                    src={productionExperience.image}
                    alt="Okey Bimbel CBT Interface"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="p-8 text-center space-y-3">
                    <Smartphone size={40} className="text-blue-600 mx-auto" />
                    <span className="text-sm font-semibold text-slate-700 block">Okey Bimbel Mobile CBT</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xs font-semibold text-white">Click to View Architecture Details</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. PROJECTS & CAPSTONES */}
      <section id="projects" className="py-20 md:py-28 bg-white/50 border-t border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6" {...fadeInUp}>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Code2 size={14} />
                <span>Curated Projects &amp; Capstones</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-display tracking-tight">
                Architectural Work &amp; Research
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md md:text-right leading-relaxed">
              From on-device edge computer vision to conversational AI agents and unified barbershop platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blueprints.map((project) => (
              <ProjectLabCard
                key={project.id}
                project={project}
                onOpenDetails={() => setSelectedProject(project as any)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 05. TECHNICAL CAPABILITIES (CLEAR & READABLE) */}
      <section id="skills" className="py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <motion.div className="space-y-3 text-center max-w-2xl mx-auto" {...fadeInUp}>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
              <Cpu size={14} />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
              Technologies &amp; Engineering Skills
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Curated tools I utilize daily to build high-performance mobile clients and scalable web backends.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploredTools.map((group, idx) => (
              <motion.div
                key={group.category}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4"
                {...fadeInUp}
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-blue-600 font-bold">0{idx + 1}</span>
                  <h3 className="text-base font-bold text-slate-900 font-display">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-50 text-slate-700 border border-slate-200/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. EXPERIENCE & MENTORING (HUMAN STORY) */}
      <section id="experience" className="py-20 md:py-28 bg-white/50 border-t border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <motion.div className="space-y-3 text-left" {...fadeInUp}>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
              <CheckCircle2 size={14} />
              <span>Work &amp; Mentorship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
              Experience Timeline
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-4xl">
            {engineeringJourney.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-8 md:pl-10 border-l-2 border-blue-200 space-y-2 group"
                {...fadeInUp}
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {item.role} <span className="text-blue-600">@</span> {item.location}
                  </h3>
                  <span className="text-xs font-semibold font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. CONTACT & CONNECT */}
      <section id="contact" className="py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          
          <motion.div className="space-y-4" {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <MessageSquare size={13} className="text-blue-600" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-display tracking-tight">
              Let&apos;s build something great together.
            </h2>
            <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              I&apos;m actively open to junior/mid-level software engineering roles, mobile contract projects, and team collaborations. Feel free to reach out directly.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            {...fadeInUp}
          >
            <a
              href="mailto:irsydfchrynto@gmail.com"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <span className="text-xs font-bold text-slate-900">Email</span>
              <span className="text-[11px] text-slate-500 truncate max-w-full">irsydfchrynto@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/mirsydfchrynto"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <LinkedInIcon size={18} />
              </div>
              <span className="text-xs font-bold text-slate-900">LinkedIn</span>
              <span className="text-[11px] text-slate-500">/in/mirsydfchrynto</span>
            </a>

            <a
              href="https://wa.me/6285865826621"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <WhatsAppIcon size={18} />
              </div>
              <span className="text-xs font-bold text-slate-900">WhatsApp</span>
              <span className="text-[11px] text-slate-500">+62 858-6582-6621</span>
            </a>

            <a
              href="https://github.com/mirsydfchrynto"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <GitHubIcon size={18} />
              </div>
              <span className="text-xs font-bold text-slate-900">GitHub</span>
              <span className="text-[11px] text-slate-500">@mirsydfchrynto</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-200/80 text-center relative z-10 bg-white/60">
        <div className="text-xs text-slate-500">
          M. Irsyad Fachryanto &copy; 2026 · Built with Flutter, Kotlin Native &amp; Next.js expertise.
        </div>
      </footer>

      {/* MODAL */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
