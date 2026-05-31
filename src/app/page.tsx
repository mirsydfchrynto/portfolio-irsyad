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
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 architect-grid opacity-[0.03] pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#E31B23]/[0.02] to-transparent pointer-events-none z-0" />

      {/* 00. HERO SECTION (Perfect 10/10 Focus) */}
      <header className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 lg:py-0 z-10">
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            <motion.div 
              className="lg:col-span-7 space-y-12"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: easeCubic }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-[1px] bg-[#E31B23]" />
                  <span className="section-label tracking-[0.6em]">Full-Stack Architect</span>
                </div>
                <h1 className="giant-type text-white group cursor-default">
                  M. Irsyad <br/>
                  <span className="text-white/10 group-hover:text-[#E31B23] transition-colors duration-1000 ease-out">Fachryanto</span>
                </h1>
                <p className="text-white/30 font-display text-xl md:text-2xl tracking-tight lowercase max-w-xl">
                  Building High-Integrity Digital Ecosystems.
                </p>
              </div>
              
              <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl font-medium border-l border-white/10 pl-8 py-2">
                Fokus pada pembangunan antarmuka modern, integrasi mobile native, dan struktur sistem dengan keandalan operasional mutlak.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <a href="#production-experience" className="group relative px-10 py-5 bg-white text-black text-[11px] font-mono font-black uppercase tracking-[0.2em] hover:text-white transition-all overflow-hidden">
                  <span className="relative z-10">Initialize_Archive</span>
                  <div className="absolute inset-0 bg-[#E31B23] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
                <a href="#resume" className="px-10 py-5 border border-white/10 text-[11px] font-mono font-black uppercase tracking-[0.2em] text-white/40 hover:text-white hover:border-white/40 transition-all">Review_CV</a>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: easeCubic, delay: 0.2 }}
            >
              <div className="relative group w-full max-w-[420px] aspect-[4/5] bg-neutral-900 border border-white/5 overflow-hidden shadow-2xl">
                <img src="/avatar.jpg" alt="M. Irsyad F" className="w-full h-full object-cover grayscale contrast-[1.1] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-[1.02] group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-8 right-8 font-mono text-[10px] text-white/40 font-black uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-1.5 border border-white/5">Batch 2005</div>
                <div className="absolute bottom-8 left-8 flex flex-col gap-1">
                   <span className="font-mono text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">System_Status</span>
                   <span className="text-white font-black text-xs uppercase tracking-widest bg-[#E31B23] px-3 py-1 shadow-2xl">Production_Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* 01. UNIFIED WORKSTATION (The 10/10 Masterpiece) */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          <motion.div className="flex flex-col md:flex-row justify-between items-end gap-8" {...fadeInUp}>
            <div className="space-y-4">
              <span className="section-label">[01] Engineering Terminal</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-display leading-none">Integrated <br/><span className="text-white/10">Workstation</span></h2>
            </div>
            <p className="text-white/30 font-mono text-[11px] uppercase tracking-widest max-w-[40ch] text-right leading-relaxed hidden md:block">
              Riset sistem, optimasi runtime, dan implementasi arsitektur eksperimental dalam satu konsol terpadu.
            </p>
          </motion.div>

          <motion.div 
            className="w-full bg-[#0a0a0c] border border-white/10 shadow-[0_80px_150px_-30px_rgba(0,0,0,1)] flex flex-col lg:grid lg:grid-cols-12 h-[750px] lg:h-[600px] relative group transition-all duration-700 hover:border-white/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeCubic }}
          >
            {/* Window Controls Overlay */}
            <div className="absolute top-5 left-6 flex gap-2 z-30">
               <div className="w-2.5 h-2.5 rounded-full bg-[#E31B23]/40" />
               <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
               <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
            </div>

            {/* Left Panel: Real-time Terminal */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/5 p-8 lg:p-12 pt-16 bg-white/[0.01] flex flex-col overflow-hidden relative">
              <KernelTerminalExplorer />
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-scanline pointer-events-none opacity-[0.02]" />
            </div>

            {/* Right Panel: Advanced Code Editor */}
            <div className="lg:col-span-7 flex flex-col bg-black/40 overflow-hidden relative pt-4 lg:pt-0">
              <CodeWorkspace />
            </div>

            {/* Active Border Glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#E31B23]/20 via-transparent to-[#E31B23]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          </motion.div>

          <motion.div className="flex justify-between items-center px-4" {...fadeInUp}>
            <div className="flex items-center gap-6">
               <span className="flex items-center gap-2 font-mono text-[9px] text-white/20 uppercase font-black"><Zap size={10} className="text-[#E31B23]"/> Latency: 0.04ms</span>
               <span className="flex items-center gap-2 font-mono text-[9px] text-white/20 uppercase font-black"><Shield size={10} className="text-[#E31B23]"/> Encryption: AES-256</span>
            </div>
            <span className="font-mono text-[9px] text-white/20 uppercase font-black tracking-[0.4em] animate-pulse">Sync_Active</span>
          </motion.div>
        </div>
      </section>

      {/* 02. MANIFESTO (Grid Perfection) */}
      <section id="about" className="py-40 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-40 h-fit">
            <motion.div className="space-y-6" {...fadeInUp}>
              <span className="section-label">[02] Philosophy</span>
              <h3 className="text-5xl font-black font-display uppercase tracking-tighter leading-none">Engineering<br/>Manifesto</h3>
            </motion.div>
            <p className="paragraph-editorial text-lg text-white/40 italic leading-relaxed border-l-2 border-[#E31B23] pl-10">
              "Dibandingkan membuat kode yang terlihat pintar tapi rumit, saya lebih suka mengejar struktur yang bersih, mudah dipelihara, dan bisa diandalkan dalam operasional nyata."
            </p>
          </div>

          <div className="lg:col-span-7 space-y-20">
            <motion.div className="space-y-8" {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tighter leading-tight text-white">
                Membangun pengalaman digital terstruktur melalui teknik frontend bersih, sistem interop native, dan desain minimalis.
              </h2>
              <p className="text-white/60 text-xl font-medium leading-relaxed">
                {introduction.bio}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
              {exploredTools.map((exp, i) => (
                <motion.div key={i} className="space-y-6 group" {...fadeInUp}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[11px] text-[#E31B23] font-black">0{i+1}</span>
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.4em] font-black group-hover:text-white transition-colors">{exp.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-white/[0.03] border border-white/5 text-[10px] font-bold text-white/30 uppercase tracking-widest group-hover:border-[#E31B23]/20 group-hover:text-white transition-all">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. FEATURED WORK (Okey Bimbel - Precision) */}
      <section id="production-experience" className="py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          <motion.div className="flex flex-col md:flex-row justify-between items-end gap-10" {...fadeInUp}>
            <div className="space-y-4">
              <span className="section-label">[03] Feature Case Study</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-display leading-none text-[#E31B23]">Okey Bimbel</h2>
            </div>
            <p className="font-mono text-[11px] text-white/20 uppercase tracking-[0.3em] font-black text-right leading-loose">Dual-Platform Integrated <br/>Anti-Cheat Ecosystem.</p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <motion.div className="lg:col-span-7 relative group cursor-pointer aspect-video" {...fadeInUp} onClick={() => setSelectedProject(productionExperience)}>
              <div className="absolute inset-0 border-2 border-white/5 group-hover:border-[#E31B23]/30 transition-all duration-1000 z-10" />
              <img src={productionExperience.image} alt="Work" className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 z-20 flex items-center gap-6">
                 <div className="bg-black/90 px-6 py-3 border border-white/10 font-mono text-[11px] font-black uppercase tracking-[0.4em] text-[#E31B23] shadow-2xl">Jurnal_Teknik &rarr;</div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-5 space-y-12" {...fadeInUp}>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-white/90 leading-tight">
                  Menutup 100% Celah Kecurangan via Native Android System Interop.
                </h3>
                <p className="text-white/50 text-lg leading-relaxed font-medium max-w-xl">
                  Mengembangkan aplikasi ujian digital dengan sistem penguncian Kiosk Mode dan enkripsi database lokal untuk memulihkan progres jawaban siswa secara mulus.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-x-12 gap-y-10 py-12 border-y border-white/5">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Engine</span>
                  <span className="text-white font-black uppercase text-[11px] tracking-widest block">Next.js + Flutter</span>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Security</span>
                  <span className="text-white font-black uppercase text-[11px] tracking-widest block">Kiosk Native</span>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Storage</span>
                  <span className="text-white font-black uppercase text-[11px] tracking-widest block">Hive AES-256</span>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Scale</span>
                  <span className="text-white font-black uppercase text-[11px] tracking-widest block">100+ Students</span>
                </div>
              </div>

              <div className="flex gap-6">
                 <button onClick={() => setSelectedProject(productionExperience)} className="flex-grow py-5 bg-white text-black text-[11px] font-mono font-black uppercase tracking-widest hover:bg-[#E31B23] hover:text-white transition-all">Baca Jurnal Lengkap</button>
                 {productionExperience.url && (
                    <a href={productionExperience.url} target="_blank" className="p-5 border border-white/10 hover:border-white text-white/40 hover:text-white transition-all"><ExternalLink size={18}/></a>
                 )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04. LABS (The Grid Master) */}
      <section id="blueprints" className="py-40 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          <motion.div className="flex flex-col md:flex-row justify-between items-end gap-10" {...fadeInUp}>
            <div className="space-y-4 text-center md:text-left">
              <span className="section-label">[04] Engineering Laboratory</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-display leading-none">The <span className="text-white/10">Archive</span></h2>
            </div>
            <p className="font-mono text-[11px] text-white/20 uppercase tracking-[0.4em] font-black hidden md:block">Experiments & Core Systems.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blueprints.map((project) => (
              <ProjectLabCard key={project.id} project={project} onOpenDetails={() => setSelectedProject(project as any)} />
            ))}
          </div>
        </div>
      </section>

      {/* 05. RESUME (Sidebar Logic Perfected) */}
      <section id="resume" className="py-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-24 items-start relative">
          <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-16">
            <motion.div className="space-y-6" {...fadeInUp}>
              <span className="section-label">[05] Record Synchronization</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter font-display leading-none text-white group cursor-default">
                Career<br/><span className="text-[#E31B23]">Journal</span>
              </h2>
            </motion.div>

            <motion.div className="p-12 border border-white/5 bg-black space-y-10 shadow-2xl relative overflow-hidden" {...fadeInUp}>
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E31B23]/20" />
              <div className="space-y-8">
                 <div className="space-y-3">
                    <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest font-black block">Performance_Metrics &rarr;</span>
                    <span className="text-white font-black text-3xl tracking-tighter font-display uppercase italic">IPK: 3.92</span>
                 </div>
                 <div className="space-y-3 border-t border-white/5 pt-8">
                    <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest font-black block">Active_Mode &rarr;</span>
                    <div className="flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-emerald-500 font-black text-[11px] uppercase tracking-[0.3em]">Operational_Excellence</span>
                    </div>
                 </div>
              </div>

              <a 
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="CV M.IRSYAD FACHRYANTO.pdf"
                onClick={handleDownload}
                className="group relative flex items-center justify-between w-full p-7 bg-white text-black font-mono text-[11px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">{downloading ? "Syncing_Buffer..." : "Download_Full_CV"}</span>
                <GitBranch size={20} className="relative z-10 group-hover:rotate-180 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-[#E31B23] translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-24">
            {engineeringJourney.map((item, i) => (
              <motion.div key={i} className="group relative pl-16 border-l-2 border-white/5 transition-all duration-700 hover:border-[#E31B23]/40" {...fadeInUp}>
                <div className="absolute -left-[7px] top-0 w-3 h-3 bg-neutral-900 border-2 border-white/10 group-hover:bg-[#E31B23] group-hover:border-[#E31B23] group-hover:scale-150 transition-all duration-700" />
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <h3 className="text-3xl font-black uppercase tracking-tighter font-display leading-none">{item.role} <span className="text-[#E31B23]">@</span> {item.location}</h3>
                    <span className="font-mono text-[10px] text-white/20 uppercase font-black tracking-widest">{item.period}</span>
                  </div>
                  <p className="text-xl text-white/40 leading-relaxed font-medium italic group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. CONTACT (System Termination Feel) */}
      <section id="contact" className="py-60 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#E31B23]/[0.03] to-transparent pointer-events-none" />
        <motion.div className="max-w-7xl mx-auto p-12 md:p-32 border border-white/10 bg-[#0a0a0c] text-center space-y-16 shadow-[0_120px_200px_-50px_rgba(0,0,0,1)] relative z-10" {...fadeInUp}>
          <div className="space-y-6">
            <span className="section-label tracking-[0.8em]">[06] Termination</span>
            <h2 className="text-6xl md:text-[120px] font-black uppercase tracking-tighter font-display leading-[0.8] mb-4">Establish<br/><span className="text-[#E31B23]">Connection</span></h2>
            <p className="text-white/30 text-xl md:text-2xl font-medium max-w-3xl mx-auto italic tracking-tight underline decoration-[#E31B23]/20 underline-offset-8">Terbuka untuk diskusi optimasi aplikasi mobile, integrasi native, atau kustomisasi kernel Linux.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/5 max-w-4xl mx-auto font-mono text-[10px] font-black uppercase tracking-[0.4em]">
            <a href="mailto:irsydfchrynto@gmail.com" className="group flex flex-col items-center gap-4 text-white/30 hover:text-[#E31B23] transition-all">
               <span className="text-white/5 font-mono text-[8px] group-hover:text-[#E31B23]/30 transition-colors">01 // EMAIL</span>
               <span>Email</span>
            </a>
            <a href="https://wa.me/6285865826621" target="_blank" className="group flex flex-col items-center gap-4 text-white/30 hover:text-[#E31B23] transition-all">
               <span className="text-white/5 font-mono text-[8px] group-hover:text-[#E31B23]/30 transition-colors">02 // WHATSAPP</span>
               <span>WhatsApp</span>
            </a>
            <a href="https://github.com/mirsydfchrynto" target="_blank" className="group flex flex-col items-center gap-4 text-white/30 hover:text-[#E31B23] transition-all">
               <span className="text-white/5 font-mono text-[8px] group-hover:text-[#E31B23]/30 transition-colors">03 // GITHUB</span>
               <span>GitHub</span>
            </a>
            <a href="https://instagram.com/muhammadirsyadf" target="_blank" className="group flex flex-col items-center gap-4 text-white/30 hover:text-[#E31B23] transition-all">
               <span className="text-white/5 font-mono text-[8px] group-hover:text-[#E31B23]/30 transition-colors">04 // INSTAGRAM</span>
               <span>Instagram</span>
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-24 border-t border-white/5 text-center relative overflow-hidden">
        <div className="font-mono text-[10px] text-white/10 uppercase tracking-[0.6em] font-black">
          M. Irsyad Fachryanto &copy; 2026 // <span className="text-white/5 italic">Handcrafted with focus on Architecture & System Integrity</span>
        </div>
        {/* Subtle Bottom Noise */}
        <div className="absolute inset-0 bg-noise opacity-[0.01] pointer-events-none" />
      </footer>

      <ProjectDetailsModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
