"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CodeWorkspace } from "@/components/CodeWorkspace";
import { KernelTerminalExplorer } from "@/components/KernelTerminalExplorer";
import { ProjectLabCard } from "@/components/ProjectLabCard";
import { CommandPalette } from "@/components/CommandPalette";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
import { Magnetic } from "@/components/Magnetic";
import { 
  introduction, 
  productionExperience, 
  blueprints, 
  engineeringJourney, 
  exploredTools,
  inlineResume
} from "@/config/portfolioData";
import { pdfBase64 } from "@/config/pdfBase64";
import { ArrowUpRight, Terminal, Shield, Cpu, ChevronRight, Download, Zap } from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);

  // Mouse Tracking for Dynamic Lighting & Cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
  const imageParallax = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: easeCubic }
  };

  return (
    <div className="min-h-screen bg-[#020203] text-white relative selection:bg-[#ff0055] selection:text-white overflow-hidden cursor-none">
      <CommandPalette />
      <Navbar />

      {/* CUSTOM SYSTEM CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-[#ff0055]/50 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-1 h-1 bg-[#ff0055]" />
        <div className="absolute -top-1 -left-1 w-2 h-[1px] bg-[#ff0055]" />
        <div className="absolute -top-1 -left-1 w-[1px] h-2 bg-[#ff0055]" />
        <div className="absolute -bottom-1 -right-1 w-2 h-[1px] bg-[#ff0055]" />
        <div className="absolute -bottom-1 -right-1 w-[1px] h-2 bg-[#ff0055]" />
      </motion.div>
      
      {/* SCENE 0: Cinematic Environment */}
      <div className="fixed inset-0 z-0 architect-grid opacity-[0.03] pointer-events-none" />
      <div className="fixed inset-0 z-0 architect-grid-dense opacity-[0.02] pointer-events-none" />

      {/* Dynamic Lighting Spotlight */}
      <motion.div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 0, 85, 0.03), transparent 80%)`
          )
        }}
      />

      {/* Identity Red Atmospheric Lighting */}
      <div className="absolute top-[-5%] left-[-10%] cyber-glow-red opacity-30 animate-pulse" />
      <div className="absolute top-[25%] right-[-5%] cyber-glow opacity-10" />
      <div className="absolute bottom-[-10%] left-[5%] cyber-glow-red opacity-20" />

      {/* SCENE 1 — THE ARCHITECT (EST. 2005) */}
      <motion.header 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 lg:py-0 z-10 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              className="lg:col-span-7 space-y-16 flex flex-col justify-center"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: easeCubic }}
            >
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="flex items-center gap-4"
                >
                  <span className="w-12 h-[2px] bg-[#ff0055]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#ff0055] font-black block select-none">
                    Digital Architect &mdash; Est. 2005
                  </span>
                </motion.div>
                
                <h1 className="giant-type select-none leading-[0.9]">
                  M. Irsyad <br />
                  <span className="text-[#ff0055] drop-shadow-[0_0_30px_rgba(255,0,85,0.3)]">Fachryanto</span>
                </h1>
                
                <div className="text-xl md:text-2xl font-display font-medium text-white/30 tracking-tighter lowercase flex items-center gap-5">
                  <span className="animate-pulse text-[#ff0055]">●</span>
                  <span>architecting digital ecosystems</span>
                  <span className="w-16 h-[1px] bg-white/10" />
                  <span className="font-mono text-xs text-white/20 tracking-widest uppercase">System v5.0.0</span>
                </div>
              </div>
              
              <div className="space-y-12">
                <p className="paragraph-editorial text-lg md:text-xl font-medium leading-relaxed border-l-2 border-[#ff0055]/30 pl-8">
                  Engineering high-integrity interfaces, native system integrations, and highly structured digital environments with obsessive operational reliability.
                </p>
                
                <div className="flex flex-wrap gap-8 pt-4">
                  <Magnetic strength={0.2}>
                    <a 
                      href="#production-experience"
                      className="group relative px-10 py-5 bg-white text-black text-[12px] font-mono tracking-widest font-black uppercase overflow-hidden transition-all duration-500 hover:pr-14 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                    >
                      <span className="relative z-10">INITIALIZE ARCHIVE</span>
                      <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" size={18} />
                      <div className="absolute inset-0 bg-[#ff0055] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    </a>
                  </Magnetic>
                  
                  <Magnetic strength={0.2}>
                    <a 
                      href="#resume"
                      className="px-10 py-5 border border-white/10 hover:border-[#ff0055] text-[12px] font-mono tracking-widest text-white/50 hover:text-white transition-all bg-white/[0.02] flex items-center gap-4 uppercase font-black"
                    >
                      <span>ANALYZE CV</span>
                      <Download size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Magnetic>
                </div>
              </div>

              <div className="flex flex-wrap gap-10 pt-12 border-t border-white/5 max-w-2xl font-mono text-[10px] text-white/10 select-none uppercase tracking-[0.3em]">
                <div className="flex items-center gap-3 group cursor-crosshair hover:text-[#ff0055] transition-colors">
                  <Shield size={16} className="text-[#ff0055]/50 group-hover:scale-125 transition-transform" />
                  <span>Integrity: <strong className="text-white/40">Strict</strong></span>
                </div>
                <div className="flex items-center gap-3 group cursor-crosshair hover:text-[#ff0055] transition-colors">
                  <Terminal size={16} className="text-[#ff0055]/50 group-hover:scale-125 transition-transform" />
                  <span>Stack: <strong className="text-white/40">Full-System</strong></span>
                </div>
                <div className="flex items-center gap-3 group cursor-crosshair hover:text-[#ff0055] transition-colors">
                  <Cpu size={16} className="text-[#ff0055]/50 group-hover:scale-125 transition-transform" />
                  <span>Ops: <strong className="text-white/40">Linux-Native</strong></span>
                </div>
              </div>
            </motion.div>

            {/* SCENE 1.1: Physical Identity Image */}
            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-end w-full relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.8, ease: easeCubic, delay: 0.3 }}
              style={{ y: imageParallax }}
            >
              <div className="absolute -inset-20 bg-[#ff0055]/5 rounded-full blur-[150px] pointer-events-none" />
              
              <div className="relative group w-full max-w-[440px] aspect-[4/5] p-4 bg-[#0a0a0c] border border-white/10 shadow-[40px_40px_80px_rgba(0,0,0,0.8)] hover:border-[#ff0055]/50 transition-all duration-1000 overflow-hidden perspective-1000">
                <div className="absolute inset-0 z-10 architect-grid-dense opacity-[0.08] pointer-events-none" />
                
                <img 
                  src="/avatar.jpg" 
                  alt="M. Irsyad Fachryanto" 
                  className="w-full h-full object-cover grayscale contrast-[1.2] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Identity Metadata Overlays */}
                <div className="absolute top-8 left-8 z-20 font-mono text-[10px] text-[#ff0055] bg-black/90 px-4 py-1.5 border border-[#ff0055]/40 backdrop-blur-xl uppercase tracking-[0.3em] font-black shadow-[0_0_20px_rgba(255,0,85,0.2)]">
                  ID_NODE: IR-992
                </div>
                <div className="absolute bottom-8 right-8 z-20 font-mono text-[10px] text-white/40 bg-black/90 px-4 py-1.5 border border-white/10 backdrop-blur-xl uppercase tracking-[0.3em] font-bold">
                  STATE: ACTIVE_SYNC
                </div>
                
                {/* Physical Edge Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#ff0055]/40 pointer-events-none group-hover:w-full group-hover:h-full transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[#ff0055]/40 pointer-events-none group-hover:w-full group-hover:h-full transition-all duration-700" />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.header>

      {/* MAIN STORYTELLING ENGINE */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-48 space-y-64 md:space-y-96 relative z-10">
        
        {/* SCENE 2 — SYSTEM_MONITORING */}
        <motion.section 
          id="kernel-explorer" 
          className="brutal-card p-10 md:p-20 grid lg:grid-cols-12 gap-20 items-center relative overflow-hidden"
          {...fadeInUp}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff0055]/5 blur-[100px] pointer-events-none animate-pulse" />
          
          <div className="lg:col-span-6 space-y-12 relative">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_02]</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 block font-black">
                  NEURAL_SYNC
                </span>
              </div>
              <h3 className="section-type text-white lg:text-5xl leading-tight">Neural Monitoring &amp; Engineering Logs</h3>
              <p className="paragraph-editorial text-lg text-white/50">
                Visualizing the digital nervous center. Monitor real-time system vitals—from caffeine-induced focus to peak debugging stress. Explore the underlying source artifacts that power the machine.
              </p>
            </div>
            
            <KernelTerminalExplorer />
          </div>
          
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative">
            <div className="relative w-full">
              <div className="absolute -inset-1 bg-[#ff0055]/20 blur-2xl opacity-20" />
              <CodeWorkspace />
            </div>
          </div>
        </motion.section>

        {/* SCENE 3 — THE MANIFESTO */}
        <motion.section 
          id="about" 
          className="grid md:grid-cols-12 gap-16 items-stretch"
          {...fadeInUp}
        >
          <div className="md:col-span-4 brutal-card p-12 flex flex-col justify-between group hover:border-[#ff0055]/40">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_03]</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 block font-black">
                  MANIFESTO
                </span>
              </div>
              <h3 className="text-3xl font-bold font-display tracking-tighter text-white leading-[1.1]">
                Foundations &amp; <br />
                Engineering <br />
                Principles
              </h3>
            </div>
            <div className="font-mono text-[11px] text-white/10 block select-none leading-relaxed mt-24 uppercase tracking-[0.3em] font-bold">
              Archived 2023 // Tegal, ID <br />
              <span className="text-[#ff0055] opacity-50">High integrity technical log</span>
            </div>
          </div>
          
          <div className="md:col-span-8 brutal-card p-12 md:p-20 space-y-16 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff0055]/5 blur-[80px] pointer-events-none" />
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tighter leading-[1.1] text-white">
              Architecting <span className="text-[#ff0055]">high-integrity</span> digital experiences through clean engineering and <span className="italic font-light opacity-60">bold minimalism</span>.
            </h2>
            <p className="paragraph-editorial text-lg md:text-xl text-white/60">
              {introduction.bio}
            </p>
            
            <div className="pt-16 border-t border-white/5 grid sm:grid-cols-3 gap-12 font-mono text-[11px] text-white/10 uppercase tracking-[0.2em] select-none font-bold">
              {exploredTools.map((exp, i) => (
                <div key={i} className="space-y-6 group/tool">
                  <span className="text-[#ff0055] font-black">0{i+1} // {exp.category}</span>
                  <ul className="space-y-3 text-white/40 font-sans text-[12px] normal-case tracking-normal font-medium group-hover/tool:text-white transition-colors duration-500">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="flex items-center gap-3">
                        <span className="w-1.5 h-[1px] bg-[#ff0055]/40" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SCENE 4 — PRODUCTION_READY SYSTEMS */}
        <motion.section 
          id="production-experience" 
          className="brutal-card p-10 md:p-20 space-y-16 relative overflow-hidden group"
          {...fadeInUp}
        >
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ff0055]/5 blur-[150px] pointer-events-none" />
          
          <div className="relative flex flex-wrap items-baseline justify-between gap-8 border-b border-white/5 pb-10">
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_04]</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 block font-black">
                PRODUCTION_SYSTEMS
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-white/20 italic uppercase tracking-widest">
              <Zap size={14} className="text-[#ff0055] animate-pulse" />
              <span>Operational Integrity: VERIFIED</span>
            </div>
          </div>

          <div className="relative grid lg:grid-cols-12 gap-20 items-start">
            <div 
              onClick={() => setSelectedProject(productionExperience)}
              className="lg:col-span-5 aspect-[4/5] bg-[#020203] border border-white/10 overflow-hidden relative group/img cursor-pointer transition-all duration-700 hover:border-[#ff0055]/50 hover:shadow-[0_0_60px_rgba(255,0,85,0.1)]"
            >
              <img
                src={productionExperience.image}
                alt={productionExperience.title}
                className="w-full h-full object-cover grayscale opacity-30 group-hover/img:opacity-100 group-hover/img:grayscale-0 group-hover/img:scale-110 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 flex items-center gap-4 bg-white text-black px-6 py-3 font-mono text-[11px] font-black uppercase tracking-widest translate-y-6 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500 ease-out shadow-2xl">
                <span>LAUNCH ANALYSIS</span>
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4 px-5 py-2 border border-[#ff0055]/40 bg-[#ff0055]/5 text-[#ff0055] font-mono text-[11px] uppercase tracking-[0.3em] font-black shadow-[0_0_20px_rgba(255,0,85,0.1)]">
                  Production Stabilized
                </div>
                <h3 className="section-type text-white lg:text-6xl tracking-tighter">
                  {productionExperience.title}
                </h3>
                <p className="text-sm text-[#ff0055] font-mono tracking-[0.3em] uppercase font-black opacity-80">
                  Mission: {productionExperience.role} &mdash; {productionExperience.period}
                </p>
              </div>

              <p className="paragraph-editorial text-xl text-white/70 leading-relaxed font-medium">
                {productionExperience.tagline}
              </p>

              <ul className="space-y-6 font-sans text-base text-white/40 leading-relaxed border-y border-white/5 py-12">
                {productionExperience.metrics.map((metric, idx) => (
                  <li key={idx} className="flex gap-6 items-start group/metric">
                    <span className="text-[#ff0055] font-black font-mono transition-transform group-hover/metric:translate-x-2">&gt;&gt;</span>
                    <span className="group-hover/metric:text-white transition-colors duration-300 font-medium">{metric}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-8 pt-4">
                <Magnetic strength={0.2}>
                  <button
                    onClick={() => setSelectedProject(productionExperience)}
                    className="px-12 py-6 bg-white text-black font-mono text-[12px] font-black tracking-widest uppercase hover:bg-[#ff0055] hover:text-white transition-all duration-500 shadow-xl"
                  >
                    DEEP_DIVE_PROTOCOLS
                  </button>
                </Magnetic>
                {productionExperience.url && (
                  <Magnetic strength={0.2}>
                    <a
                      href={productionExperience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-6 border border-white/10 hover:border-[#ff0055] text-[12px] font-mono tracking-widest text-white/40 hover:text-white flex items-center gap-4 transition-all uppercase font-black bg-white/[0.02]"
                    >
                      <span>LIVE_SYNC</span>
                      <ArrowUpRight size={18} />
                    </a>
                  </Magnetic>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* SCENE 5 — THE ARCHIVE / LABS */}
        <motion.section 
          id="blueprints" 
          className="space-y-16"
          {...fadeInUp}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-8 border-b border-[#ff0055]/30 pb-10">
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_05]</span>
              <h2 className="text-2xl font-black font-display uppercase tracking-[0.2em] text-white">Source Archive</h2>
            </div>
            <span className="font-mono text-[11px] text-white/20 uppercase tracking-[0.3em] font-bold">
              Engineering Labs &mdash; System Explorations
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blueprints.map((project) => (
              <ProjectLabCard 
                key={project.id} 
                project={project} 
                onOpenDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </motion.section>

        {/* SCENE 6 — IDENTITY PROFILE */}
        <motion.section 
          id="resume" 
          className="grid lg:grid-cols-12 gap-16 items-start pt-32 border-t-2 border-white/5"
          {...fadeInUp}
        >
          <div className="lg:col-span-4 space-y-12 sticky top-32">
            <div className="space-y-6">
              <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-[#ff0055] font-black block">
                [SCENE_06] IDENTITY_SYNC
              </span>
              <h2 className="section-type text-white lg:text-5xl leading-tight tracking-tighter">Engineering Profile</h2>
            </div>

            <div className="brutal-card p-10 space-y-10 hover:border-[#ff0055]/40 transition-all duration-700">
              <div className="space-y-8 font-mono text-[11px] text-white/30 uppercase tracking-[0.2em] font-bold">
                <div className="space-y-3">
                  <span className="text-[#ff0055]/50 block">Identity_Tag &rarr;</span>
                  <span className="text-white text-[14px] normal-case tracking-normal font-sans font-black">M. Irsyad Fachryanto</span>
                </div>
                <div className="space-y-3">
                  <span className="text-[#ff0055]/50 block">Primary_Focus &rarr;</span>
                  <span className="text-white text-[14px] normal-case tracking-normal font-sans font-black">Full-Stack &amp; Systems</span>
                </div>
                <div className="space-y-3">
                  <span className="text-[#ff0055]/50 block">Performance_Index &rarr;</span>
                  <span className="text-white text-[14px] normal-case tracking-normal font-sans font-black text-[#ff0055]">IPK: 3.92 / 4.00</span>
                </div>
              </div>

              <div className="space-y-6">
                <Magnetic strength={0.15}>
                  <a 
                    href={`data:application/pdf;base64,${pdfBase64}`}
                    download="muhammad-irsyad-fachryanto-resume.pdf"
                    onClick={handleDownload}
                    className="group relative flex items-center justify-between w-full h-[70px] px-8 bg-white text-black font-mono text-[12px] font-black uppercase tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                  >
                    <span className="relative z-10">{downloading ? "SYNCHRONIZING..." : "GENERATE PDF"}</span>
                    <Download className="relative z-10 group-hover:translate-y-1 transition-transform" size={20} />
                    <div className="absolute inset-0 bg-[#ff0055] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-20">
            <div className="brutal-card p-12 md:p-20 space-y-24 bg-[#050507]">
              {/* Professional Summary */}
              <div className="space-y-8">
                <h3 className="font-mono text-[12px] uppercase tracking-[0.4em] text-[#ff0055] font-black">// EXEC_SUMMARY</h3>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-display font-medium tracking-tight">
                  {inlineResume.summary}
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-12">
                <h3 className="font-mono text-[12px] uppercase tracking-[0.4em] text-[#ff0055] font-black">// PROD_HISTORY</h3>
                <div className="space-y-20">
                  {inlineResume.experience.map((exp, i) => (
                    <div key={i} className="space-y-8 group/exp">
                      <div className="flex flex-wrap justify-between items-baseline gap-6">
                        <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#ff0055] transition-colors duration-500 tracking-tighter">{exp.role} @ {exp.company}</h4>
                        <span className="font-mono text-xs text-white/20 uppercase tracking-[0.2em] font-black">{exp.period}</span>
                      </div>
                      <p className="paragraph-editorial text-lg text-white/50">{exp.description}</p>
                      <ul className="space-y-4 font-sans text-base text-white/40 font-medium">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-6 items-start group/bullet">
                            <span className="text-[#ff0055] font-black font-mono transition-transform group-hover/bullet:translate-x-2">+</span>
                            <span className="group-hover/bullet:text-white transition-colors duration-300">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Matrix */}
              <div className="space-y-12 pt-16 border-t border-white/5">
                <h3 className="font-mono text-[12px] uppercase tracking-[0.4em] text-[#ff0055] font-black">// TECH_MATRIX</h3>
                <div className="grid sm:grid-cols-3 gap-12">
                  {inlineResume.skills.map((skill, i) => (
                    <div key={i} className="space-y-8 group/skill">
                      <span className="font-mono text-[11px] text-[#ff0055] font-black tracking-[0.3em] block uppercase">0{i+1} / {skill.category}</span>
                      <ul className="space-y-4 text-[14px] text-white/30 font-bold group-hover/skill:text-white transition-colors duration-500">
                        {skill.tools.map((t) => (
                          <li key={t} className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-[#ff0055]/10 border border-[#ff0055]/30 group-hover/skill:bg-[#ff0055]/50 group-hover/skill:border-[#ff0055] transition-all" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SCENE 7 — CONTACT_PROTOCOL */}
        <motion.section 
          id="contact" 
          className="brutal-card p-12 md:p-20 space-y-20 relative overflow-hidden group"
          {...fadeInUp}
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff0055]/5 blur-[150px] pointer-events-none animate-pulse" />
          
          <div className="flex flex-wrap items-baseline justify-between gap-8 border-b border-white/5 pb-10">
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_07]</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 block font-black">
                CONNECTION_SYNC
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-12">
              <h3 className="section-type text-white lg:text-6xl tracking-tighter leading-none">Initialize <br /> <span className="text-[#ff0055]">High Integrity</span> Link.</h3>
              <p className="paragraph-editorial text-xl text-white/50 leading-relaxed">
                Open for high-level technical discourse regarding mobile performance, Edge AI, or large-scale system architecture.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 font-mono">
              {[
                { label: "Channel_Email", value: "irsydfchrynto@gmail.com", href: "mailto:irsydfchrynto@gmail.com" },
                { label: "Channel_WhatsApp", value: "+62 858-6582-6621", href: "https://wa.me/6285865826621" },
                { label: "Source_Archive", value: "mirsydfchrynto", href: "https://github.com/mirsydfchrynto" },
                { label: "Channel_Identity", value: "@muhammadirsyadf", href: "https://instagram.com/muhammadirsyadf" }
              ].map((item) => (
                <Magnetic key={item.label} strength={0.1}>
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-card p-8 space-y-6 hover:border-[#ff0055]/60 transition-all duration-700 group/link bg-[#050507] h-full block"
                  >
                    <span className="text-[11px] text-[#ff0055] font-black uppercase tracking-[0.3em] block opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</span>
                    <span className="text-[15px] text-white/70 group-hover:text-white transition-colors font-bold tracking-tight">{item.value}</span>
                    <ArrowUpRight size={16} className="text-white/10 group-hover:text-[#ff0055] transition-colors ml-auto mt-4" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </motion.section>

      </main>

      {/* SCENE 8 — SYSTEM TERMINATION (FOOTER) */}
      <footer className="p-16 md:p-32 border-t-2 border-white/5 bg-[#020203] text-white relative z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff0055]/40 to-transparent" />
        
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-black font-display uppercase tracking-[0.3em] text-white leading-none">M. Irsyad <br /> Fachryanto</h2>
              <p className="font-mono text-[12px] text-[#ff0055] font-black uppercase tracking-[0.5em] animate-pulse">Architecting Digital Fate</p>
            </div>
            
            <div className="grid grid-cols-2 gap-24 font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 font-bold">
              <div className="space-y-8">
                <span className="text-[#ff0055]/40 block">// NAV_INDEX</span>
                <ul className="space-y-4">
                  <li><a href="#about" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> About</a></li>
                  <li><a href="#production-experience" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> Work</a></li>
                  <li><a href="#resume" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> Profile</a></li>
                </ul>
              </div>
              <div className="space-y-8">
                <span className="text-[#ff0055]/40 block">// DATA_REMOTE</span>
                <ul className="space-y-4">
                  <li><a href="https://github.com/mirsydfchrynto" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> GitHub</a></li>
                  <li><a href="https://instagram.com/muhammadirsyadf" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-mono text-white/10 uppercase tracking-[0.5em] font-black">
            <div className="flex items-center gap-6">
              <span>DESIGNED FOR PERFORMANCE</span>
              <span className="w-16 h-[1px] bg-white/10" />
              <span className="text-white/30">&copy; {new Date().getFullYear()}</span>
            </div>
            <div className="text-[#ff0055] drop-shadow-[0_0_10px_rgba(255,0,85,0.4)]">SYSTEM_STATE: STABLE_PROD</div>
            <div className="flex items-center gap-6 text-right">
              <span>TEGAL, INDONESIA</span>
              <span className="w-16 h-[1px] bg-white/10" />
              <span className="text-white/30">V5.0.0_GOD</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Immersive Modal Interface */}
      <ProjectDetailsModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}
