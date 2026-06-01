"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CodeWorkspace } from "@/components/CodeWorkspace";
import { KernelTerminalExplorer } from "@/components/KernelTerminalExplorer";
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
import { ArrowUpRight, GitBranch, Shield, Cpu, ExternalLink, Zap, Clock, CheckCircle2, Monitor } from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: easeCubic }
  };

  return (
    <div className="min-h-screen bg-[#060608] text-white relative selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <CommandPalette />
      <Navbar />
      
      {/* Absolute Perfection Grid */}
      <div className="fixed inset-0 z-0 architect-grid opacity-[0.03] pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#E31B23]/[0.02] to-transparent pointer-events-none z-0" />

      {/* 00. HERO SECTION */}
      <header className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 pt-20 md:pt-0 z-10">
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            <motion.div 
              className="lg:col-span-7 space-y-8 md:space-y-12"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: easeCubic }}
            >
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 md:w-10 h-[1px] bg-[#E31B23]" />
                  <span className="section-label tracking-[0.4em] md:tracking-[0.6em]">Software Student & Developer</span>
                </div>
                <h1 className="giant-type text-white group cursor-default">
                  M. Irsyad <br/>
                  <span className="text-white/10 group-hover:text-[#E31B23] transition-colors duration-1000 ease-out">Fachryanto</span>
                </h1>
                <p className="text-white/30 font-display text-lg md:text-2xl tracking-tight lowercase max-w-xl">
                  Building High-Integrity Digital Ecosystems.
                </p>
              </div>
              
              <p className="text-white/50 text-base md:text-xl leading-relaxed max-w-2xl font-medium border-l border-white/10 pl-6 md:pl-8 py-2">
                Focused on engineering modern interfaces, native mobile integrations, and high-reliability systems with absolute operational integrity.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4">
                <a 
                  href="#production-experience" 
                  aria-label="View Production Projects"
                  className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-black text-[10px] md:text-[11px] font-mono font-black uppercase tracking-[0.2em] hover:text-white transition-all overflow-hidden"
                >
                  <span className="relative z-10">Initialize_Archive</span>
                  <div className="absolute inset-0 bg-[#E31B23] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
                <a 
                  href="#resume" 
                  aria-label="Jump to Career History"
                  className="px-8 md:px-10 py-4 md:py-5 border border-white/10 text-[10px] md:text-[11px] font-mono font-black uppercase tracking-[0.2em] text-white/40 hover:text-white hover:border-white/40 transition-all"
                >
                  Review_CV
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: easeCubic, delay: 0.2 }}
            >
              <div className="relative group w-full max-w-[320px] md:max-w-[420px] aspect-[4/5] bg-neutral-900 border border-white/5 overflow-hidden shadow-2xl">
                <img src="/avatar.jpg" alt="M. Irsyad Fachryanto Profile" className="w-full h-full object-cover grayscale contrast-[1.1] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-[1.02] group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 md:top-8 right-6 md:right-8 font-mono text-[8px] md:text-[10px] text-white/40 font-black uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 md:px-4 py-1.5 border border-white/5">LEARNING LOG</div>
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 flex flex-col gap-1">
                   <span className="font-mono text-[8px] md:text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">System_Status</span>
                   <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest bg-[#E31B23] px-3 py-1 shadow-2xl">Production_Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* 01. INTEGRATED WORKSTATION */}
      <section className="py-20 md:py-40 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 md:space-y-20">
          <motion.div className="flex flex-col md:flex-row justify-between items-end gap-8" {...fadeInUp}>
            <div className="space-y-4">
              <span className="section-label">[01] Engineering Terminal</span>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-display leading-none">Integrated <br/><span className="text-white/10">Workstation</span></h2>
            </div>
            <p className="text-white/30 font-mono text-[11px] uppercase tracking-widest max-w-[40ch] text-right leading-relaxed hidden md:block">
              System research, architecture implementation, and logic validation within a unified console.
            </p>
          </motion.div>

          <motion.div 
            className="w-full bg-[#0a0a0c] border border-white/10 shadow-[0_80px_150px_-30px_rgba(0,0,0,1)] flex flex-col lg:grid lg:grid-cols-12 h-[500px] md:h-[600px] relative group transition-all duration-700 hover:border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeCubic }}
          >
            <div className="absolute top-4 left-5 flex gap-1.5 z-30">
               <div className="w-2 h-2 rounded-full bg-[#E31B23]/40" />
               <div className="w-2 h-2 rounded-full bg-white/5" />
               <div className="w-2 h-2 rounded-full bg-white/5" />
            </div>

            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/5 p-6 md:p-12 pt-12 md:pt-16 bg-white/[0.01] flex flex-col overflow-hidden relative">
              <KernelTerminalExplorer />
              <div className="absolute inset-0 bg-scanline pointer-events-none opacity-[0.02]" />
            </div>

            <div className="lg:col-span-7 flex flex-col bg-black/40 overflow-hidden relative pt-2 lg:pt-0">
              <CodeWorkspace />
            </div>

            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#E31B23]/20 via-transparent to-[#E31B23]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          </motion.div>

          <motion.div className="flex justify-between items-center px-2 md:px-4" {...fadeInUp}>
            <div className="flex items-center gap-4 md:gap-6">
               <span className="flex items-center gap-2 font-mono text-[8px] md:text-[9px] text-white/20 uppercase font-black"><Zap size={10} className="text-[#E31B23]"/> Latency: 0.04ms</span>
               <span className="hidden xs:flex items-center gap-2 font-mono text-[8px] md:text-[9px] text-white/20 uppercase font-black"><Shield size={10} className="text-[#E31B23]"/> Encryption: AES-256</span>
            </div>
            <span className="font-mono text-[8px] md:text-[9px] text-white/20 uppercase font-black tracking-[0.2em] md:tracking-[0.4em] animate-pulse">Sync_Active</span>
          </motion.div>
        </div>
      </section>

      {/* 02. MANIFESTO */}
      <section id="about" className="py-20 md:py-40 bg-white/[0.01] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 md:gap-20">
          <div className="lg:col-span-5 space-y-8 md:space-y-12 lg:sticky lg:top-40 h-fit">
            <motion.div className="space-y-4 md:space-y-6" {...fadeInUp}>
              <span className="section-label">[02] Philosophy</span>
              <h3 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tighter leading-none">Engineering<br/>Manifesto</h3>
            </motion.div>
            <p className="paragraph-editorial text-sm md:text-lg text-white/40 italic leading-relaxed border-l-2 border-[#E31B23] pl-5 md:pl-10">
              "Instead of building code that looks smart but is fragile, I prioritize clean structures, maintainable patterns, and reliability in real-world operations."
            </p>
          </div>

          <div className="lg:col-span-7 space-y-12 md:space-y-20">
            <motion.div className="space-y-6 md:space-y-8" {...fadeInUp}>
              <h2 className="text-xl md:text-4xl font-black font-display uppercase tracking-tighter leading-tight text-white">
                Engineering high-integrity digital ecosystems through technical precision, native integrations, and bold minimalism.
              </h2>
              <p className="text-white/60 text-base md:text-xl font-medium leading-relaxed">
                {introduction.bio}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 pt-8 md:pt-12 border-t border-white/10">
              {exploredTools.map((exp, i) => (
                <motion.div key={i} className="space-y-4 md:space-y-6 group" {...fadeInUp}>
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="font-mono text-[10px] md:text-[11px] text-[#E31B23] font-black">0{i+1}</span>
                    <span className="font-mono text-[8px] md:text-[10px] text-white/40 uppercase tracking-[0.3em] md:tracking-[0.4em] font-black group-hover:text-white transition-colors">{exp.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 md:px-3 py-1 md:py-1.5 bg-white/[0.03] border border-white/5 text-[8px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest group-hover:border-[#E31B23]/20 group-hover:text-white transition-all">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. FEATURED WORK */}
      <section id="production-experience" className="py-20 md:py-40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 md:space-y-24">
          <motion.div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-10" {...fadeInUp}>
            <div className="space-y-4">
              <span className="section-label">[03] Feature Case Study</span>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-display leading-none text-[#E31B23]">Okey Bimbel</h2>
            </div>
            <p className="font-mono text-[10px] md:text-[11px] text-white/20 uppercase tracking-[0.2em] md:tracking-[0.3em] font-black text-right leading-loose hidden md:block">Dual-Platform Integrated <br/>Anti-Cheat Ecosystem.</p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start">
            <motion.div 
              className="lg:col-span-7 relative group cursor-pointer aspect-video" 
              {...fadeInUp} 
              onClick={() => setSelectedProject(productionExperience)}
            >
              <div className="absolute inset-0 border-2 border-white/5 group-hover:border-[#E31B23]/30 transition-all duration-1000 z-10" />
              <img src={productionExperience.image} alt="Okey Bimbel Dashboard" className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20 flex items-center gap-6">
                 <div className="bg-black/90 px-4 md:px-6 py-2 md:py-3 border border-white/10 font-mono text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#E31B23] shadow-2xl text-center">Technical_Journal &rarr;</div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-5 space-y-8 md:space-y-12" {...fadeInUp}>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-3xl font-black font-display uppercase tracking-tight text-white/90 leading-tight">
                  Eliminating 100% of Cheating Vectors via Native Android Interop.
                </h3>
                <p className="text-white/50 text-base md:text-lg leading-relaxed font-medium max-w-xl">
                  Engineered a high-stakes exam ecosystem with native Kiosk Mode locks and local database encryption for seamless student progress recovery.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10 py-8 md:py-12 border-y border-white/5">
                <div className="space-y-1 md:space-y-2">
                  <span className="font-mono text-[8px] md:text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Engine</span>
                  <span className="text-white font-black uppercase text-[10px] md:text-[11px] tracking-widest block">Next.js + Flutter</span>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <span className="font-mono text-[8px] md:text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Security</span>
                  <span className="text-white font-black uppercase text-[10px] md:text-[11px] tracking-widest block">Kiosk Native</span>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <span className="font-mono text-[8px] md:text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Storage</span>
                  <span className="text-white font-black uppercase text-[10px] md:text-[11px] tracking-widest block">Hive AES-256</span>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <span className="font-mono text-[8px] md:text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Scale</span>
                  <span className="text-white font-black uppercase text-[10px] md:text-[11px] tracking-widest block">100+ Students</span>
                </div>
              </div>

              <div className="flex gap-4 md:gap-6">
                 <button 
                  onClick={() => setSelectedProject(productionExperience)} 
                  className="flex-grow py-4 md:py-5 bg-white text-black text-[10px] md:text-[11px] font-mono font-black uppercase tracking-widest hover:bg-[#E31B23] hover:text-white transition-all rounded-sm"
                >
                  Read Full Journal
                </button>
                 {productionExperience.url && (
                    <a href={productionExperience.url} aria-label="Visit Live Project" target="_blank" className="p-4 md:p-5 border border-white/10 hover:border-[#E31B23] text-white/40 hover:text-white transition-all rounded-sm">
                      <ExternalLink size={18}/>
                    </a>
                 )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04. LABS */}
      <section id="blueprints" className="py-20 md:py-40 bg-white/[0.01] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 md:space-y-24">
          <motion.div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-10" {...fadeInUp}>
            <div className="space-y-4 text-center md:text-left">
              <span className="section-label">[04] Engineering Laboratory</span>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-display leading-none">The <span className="text-white/10">Archive</span></h2>
            </div>
            <p className="font-mono text-[11px] text-white/20 uppercase tracking-[0.4em] font-black hidden md:block">Experiments & Core Systems.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blueprints.map((project) => (
              <ProjectLabCard key={project.id} project={project} onOpenDetails={() => setSelectedProject(project as any)} />
            ))}
          </div>
        </div>
      </section>

      {/* 05. RESUME */}
      <section id="resume" className="py-20 md:py-40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 md:gap-24 items-start relative">
          <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-10 md:space-y-16">
            <motion.div className="space-y-4 md:space-y-6" {...fadeInUp}>
              <span className="section-label">[05] Record Synchronization</span>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter font-display leading-none text-white group cursor-default">
                Career<br/><span className="text-[#E31B23]">Journal</span>
              </h2>
            </motion.div>

            <motion.div className="p-8 md:p-12 border border-white/5 bg-black space-y-8 md:space-y-10 shadow-2xl relative overflow-hidden" {...fadeInUp}>
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E31B23]/20" />
              <div className="space-y-6 md:space-y-8">
                 <div className="space-y-2 md:space-y-3">
                    <span className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-widest font-black block">Performance_Metrics &rarr;</span>
                    <span className="text-white font-black text-2xl md:text-3xl tracking-tighter font-display uppercase italic">IPK: 3.92</span>
                 </div>
                 <div className="space-y-2 md:space-y-3 border-t border-white/5 pt-6 md:pt-8">
                    <span className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-widest font-black block">Active_Mode &rarr;</span>
                    <div className="flex items-center gap-3">
                       <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-emerald-500 font-black text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em]">Operational_Excellence</span>
                    </div>
                 </div>
              </div>

              <a 
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="CV M.IRSYAD FACHRYANTO.pdf"
                onClick={handleDownload}
                aria-label="Download Full CV"
                className="group relative flex items-center justify-between w-full p-6 md:p-7 bg-white text-black font-mono text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] overflow-hidden transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] rounded-sm"
              >
                <span className="relative z-10">{downloading ? "Syncing_Buffer..." : "Download_Full_CV"}</span>
                <GitBranch size={20} className="relative z-10 group-hover:rotate-180 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-[#E31B23] translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-16 md:space-y-24">
            {engineeringJourney.map((item, i) => (
              <motion.div key={i} className="group relative pl-10 md:pl-16 border-l-2 border-white/5 transition-all duration-700 hover:border-[#E31B23]/40" {...fadeInUp}>
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-neutral-900 border-2 border-white/10 group-hover:bg-[#E31B23] group-hover:border-[#E31B23] group-hover:scale-150 transition-all duration-700" />
                <div className="space-y-6 md:space-y-8">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter font-display leading-none text-white/90 group-hover:text-white transition-colors">{item.role} <span className="text-[#E31B23]">@</span> {item.location}</h3>
                    <span className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase font-black tracking-widest">{item.period}</span>
                  </div>
                  <p className="text-base md:text-xl text-white/40 leading-relaxed font-medium italic group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. CONTACT */}
      <section id="contact" className="py-32 md:py-60 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#E31B23]/[0.03] to-transparent pointer-events-none" />
        <motion.div className="max-w-7xl mx-auto p-8 md:p-32 border border-white/10 bg-[#0a0a0c] text-center space-y-10 md:space-y-16 shadow-[0_120px_200px_-50px_rgba(0,0,0,1)] relative z-10" {...fadeInUp}>
          <div className="space-y-4 md:space-y-6">
            <span className="section-label tracking-[0.6em] md:tracking-[0.8em]">[06] Termination</span>
            <h2 className="text-4xl md:text-[120px] font-black uppercase tracking-tighter font-display leading-[0.8] mb-4">Establish<br/><span className="text-[#E31B23]">Connection</span></h2>
            <p className="text-white/30 text-base md:text-2xl font-medium max-w-3xl mx-auto italic tracking-tight underline decoration-[#E31B23]/20 underline-offset-8">Open for discussions regarding mobile performance optimization, native integrations, or system architecture.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 md:pt-16 border-t border-white/5 max-w-4xl mx-auto font-mono text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">
            <a href="mailto:irsydfchrynto@gmail.com" className="group flex flex-col items-center gap-3 md:gap-4 text-white/30 hover:text-[#E31B23] transition-all">
               <span className="text-white/5 font-mono text-[7px] md:text-[8px] group-hover:text-[#E31B23]/30 transition-colors">01 // EMAIL</span>
               <span>Email</span>
            </a>
            <a href="https://wa.me/6285865826621" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 md:gap-4 text-white/30 hover:text-[#E31B23] transition-all">
               <span className="text-white/5 font-mono text-[7px] md:text-[8px] group-hover:text-[#E31B23]/30 transition-colors">02 // WHATSAPP</span>
               <span>WhatsApp</span>
            </a>
            <a href="https://github.com/mirsydfchrynto" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 md:gap-4 text-white/30 hover:text-[#E31B23] transition-all">
               <span className="text-white/5 font-mono text-[7px] md:text-[8px] group-hover:text-[#E31B23]/30 transition-colors">03 // GITHUB</span>
               <span>GitHub</span>
            </a>
            <a href="https://instagram.com/muhammadirsyadf" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 md:gap-4 text-white/30 hover:text-[#E31B23] transition-all">
               <span className="text-white/5 font-mono text-[7px] md:text-[8px] group-hover:text-[#E31B23]/30 transition-colors">04 // INSTAGRAM</span>
               <span>Instagram</span>
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-16 md:py-24 border-t border-white/5 text-center relative overflow-hidden">
        <div className="font-mono text-[8px] md:text-[10px] text-white/10 uppercase tracking-[0.4em] md:tracking-[0.6em] font-black relative z-10 px-6">
          M. Irsyad Fachryanto &copy; 2026 // <span className="text-white/5 italic">Handcrafted with focus on Architecture & System Integrity</span>
        </div>
        {/* Stealth Visitor Tracker - Elite Monitoring */}
        <div className="mt-8 flex justify-center opacity-5 hover:opacity-100 transition-opacity duration-500">
          <img 
            src="https://komarev.com/ghpvc/?username=mirsydfchrynto&label=SYSTEM_TRAFFIC&color=E31B23&style=flat-square" 
            alt="System Traffic Monitor" 
            className="h-5 pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none" />
      </footer>

      <ProjectDetailsModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
