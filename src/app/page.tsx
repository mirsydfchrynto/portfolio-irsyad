"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CodeWorkspace } from "@/components/CodeWorkspace";
import { ProjectLabCard } from "@/components/ProjectLabCard";
import { CommandPalette } from "@/components/CommandPalette";
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
import { ArrowUpRight, GitBranch, Terminal, Shield, Cpu } from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: easeCubic }
  };

  return (
    <div className="min-h-screen bg-[#060608] text-white overflow-x-hidden relative selection:bg-white selection:text-black">
      <CommandPalette />
      <Navbar />
      
      {/* Background Subtle Grids */}
      <div className="fixed inset-0 z-0 architect-grid opacity-[0.02] pointer-events-none" />

      {/* Cyber Glow Overlays for Visual Depth */}
      <div className="absolute top-[10%] left-[-150px] cyber-glow-blue" />
      <div className="absolute top-[40%] right-[-150px] cyber-glow" />
      <div className="absolute bottom-[10%] left-[10%] cyber-glow-blue" />

      {/* SCENE 1 — HERO SECTION (SPLIT HERO OVERHAUL) */}
      <header className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-center px-4 md:px-12 py-20 lg:py-0 z-10 border-b border-white/5 mb-16 lg:mb-24">
        <div className="max-w-6xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              className="lg:col-span-7 space-y-8 flex flex-col justify-center text-left"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: easeCubic }}
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400 font-bold block select-none">// FRONTEND ENGINEER &amp; SYSTEM BUILDER</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold tracking-tight text-white leading-none font-display uppercase select-none">
                  MUHAMMAD IRSYAD
                </h1>
                <div className="text-lg md:text-xl font-display font-medium text-white/30 tracking-tight lowercase">
                  architecting digital experiences
                </div>
              </div>
              
              <div className="space-y-8">
                <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-[52ch] font-sans font-medium">
                  Focused on building modern interfaces, native mobile integrations, and highly structured digital experiences with complete operational reliability.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="#production-experience"
                    className="px-5 py-2.5 bg-white border border-white text-[10px] font-mono tracking-widest text-black hover:bg-black hover:text-white transition-all font-bold uppercase rounded-sm min-h-[44px] flex items-center justify-center cursor-pointer shadow-[6px_6px_0px_rgba(255,255,255,0.06)] hover:shadow-none"
                  >
                    VIEW WORK &rarr;
                  </a>
                  <a 
                    href="#resume"
                    className="px-5 py-2.5 border border-white/10 hover:border-white/30 text-[10px] font-mono tracking-widest text-white/60 hover:text-white transition-colors bg-white/5 rounded-sm min-h-[44px] flex items-center justify-center uppercase"
                  >
                    DOWNLOAD CV
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 border-t border-white/5 max-w-md font-mono text-[11px] text-white/30 select-none">
                <div className="flex items-center gap-1.5 hover:text-sky-400 transition-colors duration-300">
                  <Shield size={12} className="text-sky-400" />
                  <span>Focus: <strong className="text-white/70">Clean Code</strong></span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-teal-400 transition-colors duration-300">
                  <Terminal size={12} className="text-teal-400" />
                  <span>Stack: <strong className="text-white/70">Next.js &amp; Flutter</strong></span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-purple-400 transition-colors duration-300">
                  <Cpu size={12} className="text-purple-400" />
                  <span>Platform: <strong className="text-white/70">Linux Dev</strong></span>
                </div>
              </div>
            </motion.div>

            {/* Kolom Kanan: Foto Profil Besar Neo-Brutalist */}
            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-end w-full relative px-4 lg:px-0"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: easeCubic, delay: 0.15 }}
            >
              {/* Photo backdrop glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-teal-500/10 rounded-lg blur-xl opacity-60 pointer-events-none" />
              
              <div className="relative group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] aspect-[2/3] border-[3px] border-white/20 bg-[#0e0f14]/50 shadow-[16px_16px_0px_rgba(255,255,255,0.02)] hover:shadow-[12px_12px_0px_rgba(14,165,233,0.15)] hover:border-white/45 hover:scale-[1.02] transition-all duration-500 rounded-sm overflow-hidden select-none">
                <img 
                  src="/avatar.jpg" 
                  alt="M. Irsyad Fachryanto" 
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700"
                />
                
                {/* Overlay subtle brutalist design details */}
                <div className="absolute top-4 left-4 font-mono text-[9px] text-white/50 bg-black/60 px-2 py-0.5 border border-white/10 rounded-xs select-none">
                  SYS: ACTIVE
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[9px] text-teal-400 bg-black/60 px-2 py-0.5 border border-teal-500/20 rounded-xs select-none">
                  843 × 1264 PX
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* MAIN STORY CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 md:px-12 py-24 space-y-48 md:space-y-64 relative z-10">
        
        {/* SCENE 1.5 — INTERACTIVE CODE TERMINAL (CLEAN CENTERPIECE CARD) */}
        <motion.section 
          id="code-terminal" 
          className="border border-white/5 bg-[#0b0c11]/30 p-8 md:p-12 rounded-sm grid lg:grid-cols-12 gap-8 items-center relative group hover:border-white/10 transition-colors duration-300"
          {...fadeInUp}
        >
          <div className="lg:col-span-5 space-y-6 relative">
            <div className="flex items-center gap-2 select-none">
              <span className="text-[10px] font-mono text-sky-400 font-bold">[01]</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/40 block font-bold">// INTERACTIVE WORKSPACE</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white font-display">Log Solusi &amp; Eksplorasi Arsitektur</h3>
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-sans font-medium">
              Navigasikan tab editor di sebelah kanan untuk meninjau implementasi kode konkret yang saya terapkan pada proyek riil, mulai dari native Android interop (startLockTask) hingga mekanisme sinkronisasi database Firestore.
            </p>
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full relative">
            <CodeWorkspace />
          </div>
        </motion.section>

        {/* SCENE 2 — ABOUT MANIFESTO */}
        <motion.section 
          id="about" 
          className="grid md:grid-cols-12 gap-8 items-stretch py-12"
          {...fadeInUp}
        >
          {/* Side Info Box */}
          <div className="md:col-span-4 border border-white/5 bg-[#0a0a0d]/20 p-8 rounded-sm flex flex-col justify-between relative group hover:border-white/10 transition-colors">
            <div className="relative space-y-4">
              <div className="flex items-center gap-2 select-none">
                <span className="text-[10px] font-mono text-sky-400 font-bold">[02]</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-white/40 block font-bold">
                  ABOUT JOURNAL
                </span>
              </div>
              <h3 className="text-xl font-bold font-display tracking-tight text-white/90">
                Pondasi &amp; Prinsip Kerja
              </h3>
            </div>
            <div className="relative text-[10.5px] font-mono text-white/35 block select-none leading-relaxed mt-12">
              Est. 2023 // Tegal, ID <br />
              Personal engineering log.
            </div>
          </div>
          
          {/* Main Manifesto Bento Box */}
          <div className="md:col-span-8 border border-white/5 bg-[#0a0a0d]/20 p-8 md:p-10 rounded-sm space-y-8 relative group hover:border-white/10 transition-colors">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-display tracking-tight leading-relaxed text-white/90">
              I build structured digital experiences through clean frontend engineering, native system interop, and bold minimal design.
            </h2>
            <p className="text-sm md:text-base text-white/55 leading-relaxed font-sans font-medium">
              {introduction.bio}
            </p>
            
            <div className="relative pt-6 border-t border-white/5 grid sm:grid-cols-3 gap-6 font-mono text-[10px] text-white/35 select-none">
              {exploredTools.map((exp, i) => (
                <div key={i} className="space-y-2 group/tool">
                  <span className="text-white/25 block transition-colors group-hover/tool:text-sky-400/50">0{i+1} // {exp.category}</span>
                  <ul className="space-y-1 text-white/50 font-sans text-xs group-hover/tool:text-white/80 transition-colors duration-300">
                    {exp.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SCENE 3 — OKEY BIMBEL (CLEAN SEMI-BRUTAL WORK CARD) */}
        <motion.section 
          id="production-experience" 
          className="border border-white/5 bg-[#0b0c11]/30 p-8 md:p-10 rounded-sm space-y-8 relative group hover:border-white/10 transition-all duration-300"
          {...fadeInUp}
        >
          <div className="relative flex flex-wrap items-baseline justify-between gap-4 border-b border-white/5 pb-3 select-none">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-sky-400 font-bold">[03]</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/40 block font-bold">
                FEATURED PRODUCTION SYSTEM
              </span>
            </div>
            <span className="font-mono text-[9px] text-white/35 italic">
              Live Product &mdash; Active Client &amp; Tutor Usage
            </span>
          </div>

          <div className="relative grid lg:grid-cols-12 gap-8 items-start">
            {/* Screenshot Frame Left */}
            <div 
              onClick={() => setSelectedProject(productionExperience)}
              className="lg:col-span-5 aspect-[16/10] bg-neutral-950 border border-white/10 overflow-hidden relative rounded-sm flex items-center justify-center cursor-pointer group/img shadow-[6px_6px_0px_rgba(255,255,255,0.01)] transition-all duration-300 hover:shadow-[6px_6px_0px_rgba(14,165,233,0.1)] hover:scale-[1.01]"
            >
              <img
                src={productionExperience.image}
                alt="Okey Bimbel Dashboard"
                className="w-full h-full object-cover object-center opacity-40 group-hover/img:opacity-75 transition-all duration-500 filter grayscale group-hover/img:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors" />
              <div className="absolute bottom-3 left-3 bg-black/85 border border-white/10 text-[8px] font-mono tracking-wider text-white/50 px-2 py-1 rounded-sm select-none">
                Buka Jurnal Teknik &rarr;
              </div>
            </div>

            {/* Stories & Details Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 border border-sky-500/20 bg-sky-500/5 rounded-sm font-mono text-[8.5px] text-sky-400 uppercase tracking-widest font-bold select-none">
                  Live Production System
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white font-display">
                  {productionExperience.title}
                </h3>
                <p className="text-xs text-teal-400 font-mono tracking-wider uppercase select-none">
                  Role: {productionExperience.role} &mdash; {productionExperience.period}
                </p>
              </div>

              <div className="text-sm md:text-base text-white/60 leading-relaxed font-sans font-medium">
                Developed a high-integrity dual-platform exam ecosystem (Next.js 16 Web Admin &amp; Flutter Client Mobile) with Kotlin native Kiosk lock mechanisms to prevent 100% of cheating for hundreds of live active students.
              </div>

              {/* Core metrics details */}
              <ul className="space-y-2.5 font-mono text-[10px] text-white/50 leading-relaxed border-t border-b border-white/5 py-4">
                {productionExperience.metrics.map((metric, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <span className="text-sky-400 select-none font-bold">&rarr;</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>

              {/* Quick Proof Timeline Summary */}
              <div className="space-y-3 font-sans text-xs">
                <span className="font-mono text-[9px] text-sky-400/50 uppercase tracking-wider font-bold block select-none">Impact &amp; Engineering Solutions:</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px] leading-relaxed font-medium">
                  <div>
                    <span className="font-mono text-[9px] text-white/50 block font-bold select-none">01 / Security</span>
                    <span className="text-white/45"> startLockTask Kotlin Native locked 100% devices.</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-white/50 block font-bold select-none">02 / Scaling</span>
                    <span className="text-white/45"> Handshake QR rotating period of 5s.</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-white/50 block font-bold select-none">03 / Optimization</span>
                    <span className="text-white/45"> Firestore cost slashed by 70% using active session query.</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-white/50 block font-bold select-none">04 / Recovery</span>
                    <span className="text-white/45"> AES-256 encrypted Hive DB ensures zero state loss.</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setSelectedProject(productionExperience)}
                  className="px-5 py-2.5 border border-white/10 hover:border-white text-[10px] font-mono tracking-wider bg-white text-black hover:bg-black hover:text-white transition-all cursor-pointer font-bold uppercase rounded-sm min-h-[44px]"
                >
                  Buka Jurnal Lengkap &rarr;
                </button>
                {productionExperience.url && (
                  <a
                    href={productionExperience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/5 hover:border-white/20 text-[10px] font-mono tracking-wider flex items-center justify-center bg-white/5 text-white/60 hover:text-white transition-colors rounded-sm min-h-[44px]"
                  >
                    KUNJUNGI WEBSITE <ArrowUpRight size={10} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* SCENE 4 — BLUEPRINTS / SYSTEM EXPLORATIONS (MEDIUM BENTO GRID CARD) */}
        <motion.section 
          id="blueprints" 
          className="space-y-8"
          {...fadeInUp}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/5 pb-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-sky-400 font-bold">
              03 / System explorations
            </span>
            <span className="font-mono text-[9px] text-white/35">
              Eksplorasi Kode Sumber &amp; Modifikasi Mandiri
            </span>
          </div>

          <div className="space-y-6">
            {blueprints.map((project) => (
              <ProjectLabCard 
                key={project.id} 
                project={project} 
                onOpenDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </motion.section>

        {/* SCENE 5 — ENGINEERING JOURNEY (QUIET BENTO LIST) */}
        <motion.section 
          id="journey" 
          className="grid md:grid-cols-12 gap-8 items-start"
          {...fadeInUp}
        >
          <div className="md:col-span-4 border border-white/5 bg-[#0a0a0d]/40 p-8 rounded-md hover:border-white/10 transition-colors">
            <span className="font-mono text-[9px] uppercase tracking-wider text-sky-400 font-bold block">
              04 / Perjalanan tumbuh
            </span>
            <div className="text-[10px] font-mono text-white/20 block select-none leading-relaxed mt-4">
              Rekam jejak mentoring lab dan kolaborasi open-source.
            </div>
          </div>

          <div className="md:col-span-8 border border-white/5 bg-[#0a0a0d]/30 p-8 rounded-md space-y-12">
            <div className="space-y-8 font-sans">
              {engineeringJourney.map((item, idx) => (
                <div key={idx} className="border-b border-white/5 pb-8 space-y-3 last:border-b-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs font-mono text-white/40">
                    <span className="font-bold text-white text-[13px]">{item.role} @ {item.location}</span>
                    <span>{item.period}</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed max-w-[65ch] font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SCENE 5.5 — RESUME & EXPERIENCE (BENTO DUAL COLUMNS) */}
        <motion.section 
          id="resume" 
          className="grid md:grid-cols-12 gap-8 items-start pt-12 border-t border-white/5"
          {...fadeInUp}
        >
          <div className="md:col-span-4 space-y-8 sticky top-24 border border-white/5 bg-[#0a0a0d]/50 p-8 rounded-md hover:border-white/10 transition-colors">
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-sky-400 font-bold block">
                05 / Resume overview
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white font-display uppercase italic">Curriculum Vitae</h2>
            </div>

            {/* Editorial Preview Block (Metadata) */}
            <div className="space-y-4 font-mono text-[10px] text-white/40 leading-relaxed border-t border-white/5 pt-4">
              <div>
                <span className="text-white/20 block uppercase">Nama Lengkap &rarr;</span>
                <span className="text-white/70 text-[11px] font-sans font-medium">M. Irsyad Fachryanto</span>
              </div>
              <div>
                <span className="text-white/20 block uppercase">Lokasi / Asal &rarr;</span>
                <span className="text-white/70 text-[11px] font-sans font-medium">Kab. Tegal, Jawa Tengah, ID</span>
              </div>
              <div>
                <span className="text-white/20 block uppercase">Fokus Keahlian &rarr;</span>
                <span className="text-white/70 text-[11px] font-sans font-medium">Mobile (Flutter, Kotlin) • Full-Stack (Next.js)</span>
              </div>
              <div>
                <span className="text-white/20 block uppercase">Pendidikan Aktif &rarr;</span>
                <span className="text-white/70 text-[11px] font-sans font-medium">Universitas Harkat Negeri (Informatika)</span>
              </div>
              <div>
                <span className="text-white/20 block uppercase">Status Rilis &rarr;</span>
                <span className="text-white/70 text-[11px] font-sans font-medium">Okey Bimbel (CBT) &amp; Geges Smart Barber</span>
              </div>
            </div>

            {/* Interactive Download Box */}
            <div className="space-y-3 pt-6 border-t border-white/5">
              <a 
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="muhammad-irsyad-fachryanto-resume.pdf"
                onClick={handleDownload}
                className="group relative flex items-center justify-between w-full h-[48px] px-4 bg-white text-black font-sans text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all hover:bg-neutral-200 active:scale-95 shadow-lg shadow-black/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white cursor-pointer select-none"
                aria-label="Unduh CV M. Irsyad Fachryanto, format PDF, ukuran 128 KB"
              >
                <span>{downloading ? "Mengunduh..." : "Unduh CV (PDF)"}</span>
                <span className="font-mono text-[9px] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  PDF · 128 KB · 1 Page &rarr;
                </span>
              </a>

              {/* Layered Fallback Helper */}
              <p className="text-[9px] font-mono text-white/30 leading-normal text-justify select-none">
                Terkendala saat mengunduh? Gunakan{" "}
                <a 
                  href="/resume/muhammad-irsyad-fachryanto-resume.txt" 
                  download="muhammad-irsyad-fachryanto-resume.pdf"
                  className="text-white/50 underline hover:text-white transition-colors"
                >
                  Tautan Cadangan (Surge Bypass)
                </a>{" "}
                atau salin{" "}
                <button 
                  onClick={() => { 
                    navigator.clipboard.writeText("https://irsyad-architect.surge.sh/resume/muhammad-irsyad-fachryanto-resume.txt"); 
                    alert("Tautan cadangan disalin!"); 
                  }} 
                  className="text-white/50 underline hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0 font-mono text-[9px]"
                >
                  Tautan langsung
                </button>
                .
              </p>
            </div>
          </div>

          <div className="md:col-span-8 border border-white/5 bg-[#0a0a0d]/30 p-8 rounded-md space-y-12">
            {/* Professional Summary */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold font-mono">// Ringkasan Profesional</h3>
              <p className="text-sm text-white/70 leading-relaxed font-sans font-medium">
                {inlineResume.summary}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold font-mono">// Pendidikan</h3>
              {inlineResume.education.map((edu, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-baseline gap-2 font-mono text-xs text-white/60">
                    <span className="font-bold text-white text-[13px]">{edu.degree}</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-xs font-sans font-bold text-white/40 uppercase">{edu.institution}</p>
                  {edu.notes && (
                    <p className="text-xs font-sans text-white/50 leading-relaxed mt-1">
                      {edu.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold font-mono">// Pengalaman Utama</h3>
              {inlineResume.experience.map((exp, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-baseline gap-2 font-mono text-xs text-white/60">
                    <span className="font-bold text-white text-[13px]">{exp.role} &mdash; {exp.company}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed font-sans">{exp.description}</p>
                  <ul className="space-y-1.5 pl-4 list-disc text-xs text-white/55 leading-relaxed font-sans">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="marker:text-sky-500/40">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Community & Mentoring */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold font-mono">// Keterlibatan Komunitas</h3>
              {inlineResume.community.map((comm, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-baseline gap-2 font-mono text-xs text-white/60">
                    <span className="font-bold text-white text-[13px]">{comm.role} &mdash; {comm.organization}</span>
                    <span>{comm.period}</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed font-sans">{comm.description}</p>
                  <ul className="space-y-1.5 pl-4 list-disc text-xs text-white/55 leading-relaxed font-sans">
                    {comm.bullets.map((bullet, idx) => (
                      <li key={idx} className="marker:text-sky-500/40">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Detailed Skills Matrix */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold font-mono">// Matriks Keahlian</h3>
              <div className="grid sm:grid-cols-3 gap-6 font-mono text-[10px] text-white/40">
                {inlineResume.skills.map((skill, i) => (
                  <div key={i} className="space-y-2 group/skill">
                    <span className="text-white/20 block group-hover/skill:text-sky-400/50 transition-colors">0{i+1} // {skill.category}</span>
                    <ul className="space-y-1 text-white/60 font-sans text-xs group-hover/skill:text-white transition-colors duration-300">
                      {skill.tools.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* SCENE 6 — CONTACT EXPERIENCE (MINIMAL BENTO BOX) */}
        <motion.section 
          id="contact" 
          className="grid md:grid-cols-12 gap-8 items-start border border-white/5 bg-[#0a0a0d]/40 p-8 rounded-md hover:border-white/10 transition-colors"
          {...fadeInUp}
        >
          <div className="md:col-span-4">
            <span className="font-mono text-[9px] uppercase tracking-wider text-sky-400 font-bold block">
              06 / Correspondence
            </span>
          </div>

          <div className="md:col-span-8 space-y-6">
            <h3 className="text-xl font-bold tracking-tight text-white uppercase font-display">
              Mari berdiskusi.
            </h3>
            <p className="paragraph-editorial leading-relaxed">
              Saya senang mendiskusikan optimasi performa aplikasi mobile, integrasi hardware Android, kustomisasi Linux, atau kueri database. Silakan hubungi saya melalui jalur komunikasi di bawah ini.
            </p>

            <div className="pt-6 border-t border-white/5 space-y-4 font-mono text-xs text-white/60">
              <div className="flex items-center gap-3">
                <span className="text-white/20 select-none">&gt;</span>
                <span className="text-white/30 uppercase text-[9px] tracking-wider w-16">Email:</span>
                <a 
                  href="mailto:mirsyadf1005@gmail.com" 
                  className="text-white font-bold underline hover:text-white/80 transition-colors lowercase min-h-[44px] flex items-center"
                >
                  mirsyadf1005@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white/20 select-none">&gt;</span>
                <span className="text-white/30 uppercase text-[9px] tracking-wider w-16">GitHub:</span>
                <a 
                  href="https://github.com/mirsydfchrynto" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-bold underline hover:text-white/80 transition-colors lowercase min-h-[44px] flex items-center"
                >
                  github.com/mirsydfchrynto
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white/20 select-none">&gt;</span>
                <span className="text-white/30 uppercase text-[9px] tracking-wider w-16">Instagram:</span>
                <a 
                  href="https://instagram.com/muhammadirsyadf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-bold underline hover:text-white/80 transition-colors lowercase min-h-[44px] flex items-center"
                >
                  instagram.com/muhammadirsyadf
                </a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="p-8 md:px-12 border-t border-white/5 bg-[#060608] text-white relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-mono text-white/30 uppercase tracking-widest">
          <div>{introduction.title.toUpperCase()} &copy; {new Date().getFullYear()}</div>
          <div className="text-center md:max-w-md leading-relaxed font-sans normal-case text-[10px] text-white/40">
            Didesain dengan pendekatan bento grid minimalis &amp; tipografi eksekutif.
          </div>
          <div>Tegal, Indonesia</div>
        </div>
      </footer>

      {/* Immersive Case Study Expansion overlay */}
      <ProjectDetailsModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}
