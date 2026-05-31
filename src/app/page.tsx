"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
import { ArrowUpRight, GitBranch, Terminal, Shield, Cpu, ChevronRight, Download } from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: easeCubic }
  };

  return (
    <div className="min-h-screen bg-[#020203] text-white relative selection:bg-[#0070f3] selection:text-white">
      <CommandPalette />
      <Navbar />
      
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 z-0 architect-grid opacity-[0.03] pointer-events-none" />
      <div className="fixed inset-0 z-0 architect-grid-dense opacity-[0.02] pointer-events-none" />

      {/* Cyber Glow Overlays */}
      <div className="absolute top-[5%] left-[-10%] cyber-glow-blue opacity-40" />
      <div className="absolute top-[30%] right-[-10%] cyber-glow opacity-20" />
      <div className="absolute bottom-[5%] left-[5%] cyber-glow-blue opacity-30" />

      {/* SCENE 1 — ELITE HERO SECTION */}
      <motion.header 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 lg:py-0 z-10 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              className="lg:col-span-7 space-y-12 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: easeCubic }}
            >
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-8 h-[1px] bg-[#0070f3]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0070f3] font-bold block select-none">
                    Digital Architect &amp; Engineer
                  </span>
                </motion.div>
                
                <h1 className="giant-type select-none">
                  M. Irsyad <br />
                  <span className="text-[#0070f3]">Fachryanto</span>
                </h1>
                
                <div className="text-xl md:text-2xl font-display font-medium text-white/40 tracking-tight lowercase flex items-center gap-4">
                  <span>architecting digital experiences</span>
                  <span className="w-12 h-[1px] bg-white/10" />
                  <span className="text-white/20">v4.2.0</span>
                </div>
              </div>
              
              <div className="space-y-10">
                <p className="paragraph-editorial font-medium">
                  Focused on building high-integrity interfaces, native mobile integrations, and highly structured digital ecosystems with obsessive operational reliability.
                </p>
                
                <div className="flex flex-wrap gap-6 pt-4">
                  <a 
                    href="#production-experience"
                    className="group relative px-8 py-4 bg-white text-black text-[11px] font-mono tracking-widest font-bold uppercase overflow-hidden transition-all duration-500 hover:pr-12"
                  >
                    <span className="relative z-10">EXPLORE ARCHIVE</span>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" size={16} />
                    <div className="absolute inset-0 bg-[#0070f3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  </a>
                  
                  <a 
                    href="#resume"
                    className="px-8 py-4 border-2 border-white/10 hover:border-[#0070f3] text-[11px] font-mono tracking-widest text-white/60 hover:text-white transition-all bg-white/5 flex items-center gap-3 uppercase font-bold"
                  >
                    <span>ANALYZE CV</span>
                    <Download size={14} className="opacity-40 group-hover:opacity-100" />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 pt-10 border-t border-white/5 max-w-xl font-mono text-[10px] text-white/20 select-none uppercase tracking-widest">
                <div className="flex items-center gap-2 group cursor-crosshair">
                  <Shield size={14} className="text-[#0070f3] group-hover:scale-110 transition-transform" />
                  <span>Integrity: <strong className="text-white/60">Strict</strong></span>
                </div>
                <div className="flex items-center gap-2 group cursor-crosshair">
                  <Terminal size={14} className="text-[#0070f3] group-hover:scale-110 transition-transform" />
                  <span>Stack: <strong className="text-white/60">Full-System</strong></span>
                </div>
                <div className="flex items-center gap-2 group cursor-crosshair">
                  <Cpu size={14} className="text-[#0070f3] group-hover:scale-110 transition-transform" />
                  <span>Ops: <strong className="text-white/60">Linux-Native</strong></span>
                </div>
              </div>
            </motion.div>

            {/* Cinematic Hero Identity Image */}
            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-end w-full relative"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: easeCubic, delay: 0.2 }}
            >
              <div className="absolute -inset-10 bg-[#0070f3]/5 rounded-full blur-[120px] pointer-events-none" />
              
              <div className="relative group w-full max-w-[420px] aspect-[4/5] p-3 bg-[#0a0a0c] border-2 border-white/10 shadow-[24px_24px_0px_rgba(255,255,255,0.02)] hover:shadow-[0px_0px_50px_rgba(0,112,243,0.15)] hover:border-[#0070f3]/40 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 z-10 architect-grid-dense opacity-[0.05] pointer-events-none" />
                
                <img 
                  src="/avatar.jpg" 
                  alt="M. Irsyad Fachryanto" 
                  className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.8] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                
                {/* Visual Identity Overlays */}
                <div className="absolute top-6 left-6 z-20 font-mono text-[9px] text-[#0070f3] bg-black/80 px-3 py-1 border border-[#0070f3]/30 backdrop-blur-md uppercase tracking-[0.2em] font-bold">
                  System.Identity: IR-992
                </div>
                <div className="absolute bottom-6 right-6 z-20 font-mono text-[9px] text-white/50 bg-black/80 px-3 py-1 border border-white/10 backdrop-blur-md uppercase tracking-[0.2em]">
                  State: ACTIVE_PROD
                </div>
                
                {/* Geometric accents */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#0070f3]/20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#0070f3]/20 pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.header>

      {/* MAIN STORYTELLING CONTAINER */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-32 space-y-48 md:space-y-80 relative z-10">
        
        {/* SCENE 2 — KERNEL_TERMINAL_EXPLORER */}
        <motion.section 
          id="kernel-explorer" 
          className="brutal-card p-8 md:p-16 grid lg:grid-cols-12 gap-16 items-center relative overflow-hidden"
          {...fadeInUp}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0070f3]/5 blur-[80px] pointer-events-none" />
          
          <div className="lg:col-span-6 space-y-10 relative">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-[#0070f3] font-bold tracking-widest">[01]</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 block font-bold">
                  SYSTEM_MONITOR
                </span>
              </div>
              <h3 className="section-type text-white">Neural Monitoring &amp; Engineering Logs</h3>
              <p className="paragraph-editorial">
                Welcome to the digital nervous center. Here you can monitor real-time "vitals" of an engineering student—from caffeine levels to peak debugging stress. Use the terminal to explore the source artifacts.
              </p>
            </div>
            
            <KernelTerminalExplorer />
          </div>
          
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative">
            <CodeWorkspace />
          </div>
        </motion.section>

        {/* SCENE 3 — ABOUT MANIFESTO */}
        <motion.section 
          id="about" 
          className="grid md:grid-cols-12 gap-12 items-stretch"
          {...fadeInUp}
        >
          <div className="md:col-span-4 brutal-card p-10 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-[#0070f3] font-bold tracking-widest">[02]</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 block font-bold">
                  MANIFESTO
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display tracking-tight text-white/90 leading-tight">
                Foundations &amp; <br />
                Engineering Principles
              </h3>
            </div>
            <div className="font-mono text-[11px] text-white/20 block select-none leading-relaxed mt-20 uppercase tracking-[0.2em]">
              Est. 2023 // Tegal, ID <br />
              <span className="text-[#0070f3]">High integrity digital log</span>
            </div>
          </div>
          
          <div className="md:col-span-8 brutal-card p-10 md:p-16 space-y-12 relative group">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight leading-[1.2] text-white">
              I architect <span className="text-[#0070f3]">high-integrity</span> digital experiences through clean engineering and <span className="italic font-light">bold minimalism</span>.
            </h2>
            <p className="paragraph-editorial">
              {introduction.bio}
            </p>
            
            <div className="pt-10 border-t border-white/5 grid sm:grid-cols-3 gap-8 font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] select-none">
              {exploredTools.map((exp, i) => (
                <div key={i} className="space-y-4 group/tool">
                  <span className="text-[#0070f3] font-bold">0{i+1} // {exp.category}</span>
                  <ul className="space-y-2 text-white/50 font-sans text-[11px] normal-case tracking-normal font-medium group-hover/tool:text-white transition-colors duration-500">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#0070f3]/40 rounded-full" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SCENE 4 — FEATURED PRODUCTION CASE STUDY */}
        <motion.section 
          id="production-experience" 
          className="brutal-card p-8 md:p-16 space-y-12 relative overflow-hidden group"
          {...fadeInUp}
        >
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0070f3]/5 blur-[120px] pointer-events-none" />
          
          <div className="relative flex flex-wrap items-baseline justify-between gap-6 border-b border-white/5 pb-8">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#0070f3] font-bold tracking-widest">[03]</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 block font-bold">
                FEATURED PRODUCTION SYSTEM
              </span>
            </div>
            <span className="font-mono text-[10px] text-white/30 italic uppercase tracking-widest">
              Live Product &mdash; High Integrity Audit: PASS
            </span>
          </div>

          <div className="relative grid lg:grid-cols-12 gap-16 items-start">
            <div 
              onClick={() => setSelectedProject(productionExperience)}
              className="lg:col-span-5 aspect-[4/5] bg-[#020203] border-2 border-white/10 overflow-hidden relative group/img cursor-pointer transition-all duration-700 hover:border-[#0070f3]/50"
            >
              <img
                src={productionExperience.image}
                alt={productionExperience.title}
                className="w-full h-full object-cover grayscale opacity-40 group-hover/img:opacity-100 group-hover/img:grayscale-0 group-hover/img:scale-110 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-white text-black px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500">
                <span>View Case Study</span>
                <ArrowUpRight size={14} />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 border-2 border-[#0070f3]/30 bg-[#0070f3]/5 text-[#0070f3] font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                  Production Ready
                </div>
                <h3 className="section-type text-white">
                  {productionExperience.title}
                </h3>
                <p className="text-xs text-[#0070f3] font-mono tracking-[0.2em] uppercase font-bold">
                  Role: {productionExperience.role} &mdash; {productionExperience.period}
                </p>
              </div>

              <p className="paragraph-editorial text-white/70">
                Developed a high-integrity dual-platform exam ecosystem with Kotlin native Kiosk lock mechanisms, preventing 100% of cheating for hundreds of active students.
              </p>

              <ul className="space-y-4 font-sans text-sm text-white/50 leading-relaxed border-t border-b border-white/5 py-8">
                {productionExperience.metrics.map((metric, idx) => (
                  <li key={idx} className="flex gap-4 items-start group/metric">
                    <span className="text-[#0070f3] font-bold font-mono transition-transform group-hover/metric:translate-x-1">&rarr;</span>
                    <span className="group-hover/metric:text-white transition-colors duration-300">{metric}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-6">
                <button
                  onClick={() => setSelectedProject(productionExperience)}
                  className="px-10 py-5 bg-white text-black font-mono text-[11px] font-bold tracking-widest uppercase hover:bg-[#0070f3] hover:text-white transition-all duration-500"
                >
                  Deep Dive Analysis
                </button>
                {productionExperience.url && (
                  <a
                    href={productionExperience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-5 border-2 border-white/10 hover:border-[#0070f3] text-[11px] font-mono tracking-widest text-white/50 hover:text-white flex items-center gap-3 transition-all uppercase font-bold"
                  >
                    <span>Live Portal</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* SCENE 5 — BLUEPRINTS / SYSTEM EXPLORATIONS */}
        <motion.section 
          id="blueprints" 
          className="space-y-12"
          {...fadeInUp}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-6 border-b-2 border-[#0070f3]/20 pb-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#0070f3] font-bold tracking-widest">[04]</span>
              <h2 className="text-xl font-bold font-display uppercase tracking-widest">System Explorations</h2>
            </div>
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
              Source Code Analysis &amp; Custom Labs
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blueprints.map((project) => (
              <ProjectLabCard 
                key={project.id} 
                project={project} 
                onOpenDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </motion.section>

        {/* SCENE 6 — RESUME & ENGINEERING JOURNEY */}
        <motion.section 
          id="resume" 
          className="grid lg:grid-cols-12 gap-12 items-start pt-24 border-t-2 border-white/5"
          {...fadeInUp}
        >
          <div className="lg:col-span-4 space-y-10 sticky top-32">
            <div className="space-y-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0070f3] font-bold block">
                [05] ANALYZE CV
              </span>
              <h2 className="section-type text-white">Engineering <br /> Profile</h2>
            </div>

            <div className="brutal-card p-8 space-y-8">
              <div className="space-y-6 font-mono text-[10px] text-white/40 uppercase tracking-widest">
                <div className="space-y-2">
                  <span className="text-[#0070f3]/50 block">Identity &rarr;</span>
                  <span className="text-white text-[12px] normal-case tracking-normal font-sans font-bold">M. Irsyad Fachryanto</span>
                </div>
                <div className="space-y-2">
                  <span className="text-[#0070f3]/50 block">Focus &rarr;</span>
                  <span className="text-white text-[12px] normal-case tracking-normal font-sans font-bold">Full-Stack &amp; Mobile</span>
                </div>
                <div className="space-y-2">
                  <span className="text-[#0070f3]/50 block">Education &rarr;</span>
                  <span className="text-white text-[12px] normal-case tracking-normal font-sans font-bold">Informatics (IPK: 3.92)</span>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href={`data:application/pdf;base64,${pdfBase64}`}
                  download="muhammad-irsyad-fachryanto-resume.pdf"
                  onClick={handleDownload}
                  className="group relative flex items-center justify-between w-full h-[60px] px-6 bg-white text-black font-mono text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0px_0px_30px_rgba(255,255,255,0.2)]"
                >
                  <span className="relative z-10">{downloading ? "EXECUTING..." : "DOWNLOAD PDF"}</span>
                  <Download className="relative z-10 group-hover:translate-y-1 transition-transform" size={16} />
                  <div className="absolute inset-0 bg-[#0070f3] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <div className="brutal-card p-10 md:p-16 space-y-20">
              {/* Professional Summary */}
              <div className="space-y-6">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0070f3] font-bold">// EXEC_SUMMARY</h3>
                <p className="text-lg text-white/70 leading-relaxed font-medium">
                  {inlineResume.summary}
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-10">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0070f3] font-bold">// PROD_HISTORY</h3>
                <div className="space-y-12">
                  {inlineResume.experience.map((exp, i) => (
                    <div key={i} className="space-y-6 group/exp">
                      <div className="flex flex-wrap justify-between items-baseline gap-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-[#0070f3] transition-colors duration-500">{exp.role} @ {exp.company}</h4>
                        <span className="font-mono text-xs text-white/30 uppercase tracking-widest">{exp.period}</span>
                      </div>
                      <p className="paragraph-editorial text-sm">{exp.description}</p>
                      <ul className="space-y-3 font-sans text-sm text-white/50">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-4 items-start">
                            <span className="text-[#0070f3] font-bold font-mono">+</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Matrix */}
              <div className="space-y-10 pt-10 border-t border-white/5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0070f3] font-bold">// TECH_MATRIX</h3>
                <div className="grid sm:grid-cols-3 gap-10">
                  {inlineResume.skills.map((skill, i) => (
                    <div key={i} className="space-y-6 group/skill">
                      <span className="font-mono text-[10px] text-[#0070f3] font-bold tracking-widest block uppercase">0{i+1} / {skill.category}</span>
                      <ul className="space-y-3 text-sm text-white/40 font-medium group-hover/skill:text-white transition-colors duration-500">
                        {skill.tools.map((t) => (
                          <li key={t} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#0070f3]/20 border border-[#0070f3]/40" />
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

        {/* SCENE 7 — CONTACT EXPERIENCE */}
        <motion.section 
          id="contact" 
          className="brutal-card p-10 md:p-16 space-y-16 relative overflow-hidden group"
          {...fadeInUp}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0070f3]/5 blur-[120px] pointer-events-none" />
          
          <div className="flex flex-wrap items-baseline justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#0070f3] font-bold tracking-widest">[06]</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 block font-bold">
                ESTABLISH_CONNECTION
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-10">
              <h3 className="section-type text-white">Let's build <br /> <span className="text-[#0070f3]">High Integrity</span> Systems.</h3>
              <p className="paragraph-editorial text-lg">
                I'm always open to discussing mobile performance, hardware integration, or system architecture.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 font-mono">
              {[
                { label: "Email", value: "irsydfchrynto@gmail.com", href: "mailto:irsydfchrynto@gmail.com" },
                { label: "WhatsApp", value: "+62 858-6582-6621", href: "https://wa.me/6285865826621" },
                { label: "GitHub", value: "mirsydfchrynto", href: "https://github.com/mirsydfchrynto" },
                { label: "Instagram", value: "@muhammadirsyadf", href: "https://instagram.com/muhammadirsyadf" }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-card p-6 space-y-4 hover:border-[#0070f3]/50 transition-all duration-500 group/link"
                >
                  <span className="text-[10px] text-[#0070f3] font-bold uppercase tracking-widest block">{item.label}</span>
                  <span className="text-sm text-white/80 group-hover/link:text-white transition-colors">{item.value}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.section>

      </main>

      {/* ELITE FOOTER */}
      <footer className="p-12 md:p-24 border-t-2 border-white/5 bg-[#020203] text-white relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-display uppercase tracking-widest">M. Irsyad Fachryanto</h2>
              <p className="font-mono text-[11px] text-[#0070f3] font-bold uppercase tracking-[0.3em]">Digital Architect &amp; System Builder</p>
            </div>
            
            <div className="grid grid-cols-2 gap-20 font-mono text-[10px] uppercase tracking-widest text-white/30">
              <div className="space-y-6">
                <span className="text-white/10 font-bold block">// Navigation</span>
                <ul className="space-y-3">
                  <li><a href="#about" className="hover:text-[#0070f3] transition-colors">About</a></li>
                  <li><a href="#production-experience" className="hover:text-[#0070f3] transition-colors">Work</a></li>
                  <li><a href="#resume" className="hover:text-[#0070f3] transition-colors">Profile</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <span className="text-white/10 font-bold block">// Social</span>
                <ul className="space-y-3">
                  <li><a href="https://github.com/mirsydfchrynto" className="hover:text-[#0070f3] transition-colors">GitHub</a></li>
                  <li><a href="https://instagram.com/muhammadirsyadf" className="hover:text-[#0070f3] transition-colors">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
            <div className="flex items-center gap-4">
              <span>DESIGNED FOR PERFORMANCE</span>
              <span className="w-10 h-[1px] bg-white/10" />
              <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div className="text-[#0070f3] font-bold">STATE: PRODUCTION_STABLE</div>
            <div className="flex items-center gap-4">
              <span>TEGAL, INDONESIA</span>
              <span className="w-10 h-[1px] bg-white/10" />
              <span>V4.2.0</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Immersive Expansion */}
      <ProjectDetailsModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
}

