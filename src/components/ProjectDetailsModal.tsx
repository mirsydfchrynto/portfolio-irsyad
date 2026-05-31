"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GitBranch, ArrowUpRight, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { Magnetic } from "./Magnetic";

interface TimelineItem {
  label: string;
  description: string;
}

interface ProjectDetails {
  id: string;
  title: string;
  role?: string;
  period?: string;
  tagline: string;
  url?: string;
  repo?: string;
  links?: { visit: string; repo: string };
  image?: string;
  metrics?: string[];
  timeline?: TimelineItem[];
  folderStructure?: string;
  journal: {
    context: string;
    whyBuilt: string;
    systemThinking: string;
    exploration: string;
    constraints: string;
    reflection: string;
    lessons: string;
  };
}

interface ProjectDetailsModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  const repoLink = project.repo || (project.links && project.links.repo) || "";
  const liveLink = project.url || (project.links && project.links.visit) || "";

  const sectionReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[1000] bg-[#020203] overflow-y-auto selection:bg-[#ff0055] selection:text-white"
        >
          {/* Main Overlay Container */}
          <div className="min-h-screen w-full flex flex-col relative z-50">
            <div className="fixed inset-0 z-0 architect-grid opacity-[0.04] pointer-events-none" />
            <div className="fixed inset-0 z-0 architect-grid-dense opacity-[0.02] pointer-events-none" />
            
            {/* Minimal Sticky Top Navigation */}
            <div className="sticky top-0 z-[100] bg-black/90 backdrop-blur-xl px-8 py-6 md:px-16 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div className="w-2 h-2 bg-[#ff0055] rounded-full animate-pulse shadow-[0_0_15px_rgba(255,0,85,0.6)]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/40 font-black">
                  DEEP_DIVE_PROTOCOL // {project.title}
                </span>
              </div>
              <Magnetic strength={0.15}>
                <button 
                  onClick={onClose}
                  className="group relative px-8 py-3 bg-white text-black text-[11px] font-mono font-black uppercase tracking-widest overflow-hidden transition-all duration-500 hover:pr-14 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  aria-label="Close Journal"
                >
                  <span className="relative z-10">TERMINATE_LINK</span>
                  <X className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" size={16} />
                  <div className="absolute inset-0 bg-[#ff0055] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </Magnetic>
            </div>

            {/* Cinematic Article Body */}
            <article className="w-full max-w-6xl mx-auto px-8 md:px-16 py-32 space-y-48 relative z-10">
              
              {/* Header Title */}
              <motion.div {...sectionReveal} className="space-y-12">
                <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] text-[#ff0055] uppercase font-black tracking-[0.3em]">
                  {project.role && <span className="px-3 py-1 bg-[#ff0055]/5 border border-[#ff0055]/20 shadow-[0_0_20px_rgba(255,0,85,0.1)]">{project.role}</span>}
                  {project.period && (
                    <>
                      <span className="text-white/10">|</span>
                      <span className="text-white/30">{project.period}</span>
                    </>
                  )}
                </div>
                <h1 className="section-type text-white lg:text-7xl xl:text-8xl tracking-tighter leading-[0.9] font-black">
                  {project.title}
                </h1>
                <p className="text-2xl md:text-3xl text-white/40 leading-tight max-w-4xl font-display font-medium border-l-4 border-[#ff0055] pl-10 py-4 italic">
                  {project.tagline}
                </p>
              </motion.div>

              {/* SECTION 1 — Context */}
              <motion.section {...sectionReveal} className="space-y-12">
                <div className="flex items-center gap-4">
                  <span className="text-[#ff0055] font-mono text-sm font-black">[01]</span>
                  <h2 className="font-mono text-[12px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-3 flex-grow">
                    MISSION_PARAMETER
                  </h2>
                </div>
                <div className="paragraph-editorial text-xl text-white/60 leading-relaxed font-medium">
                  {project.journal.context}
                </div>
              </motion.section>

              {/* SECTION 2 — Visual Showcase */}
              {project.image && (
                <motion.section {...sectionReveal} className="space-y-16">
                  <div className="flex items-center gap-4">
                    <span className="text-[#ff0055] font-mono text-sm font-black">[02]</span>
                    <h2 className="font-mono text-[12px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-3 flex-grow">
                      VISUAL_EVIDENCE
                    </h2>
                  </div>
                  <div className="brutal-card p-6 group overflow-hidden bg-[#0a0a0c]">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={`${project.title} Interface`}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-8 left-8 bg-black/90 backdrop-blur-xl px-6 py-3 border border-[#ff0055]/30 text-[11px] font-mono text-[#ff0055] font-black tracking-[0.4em] uppercase shadow-2xl">
                        NODE_SNAPSHOT // ARCHIVE_01
                      </div>
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="grid md:grid-cols-3 gap-8">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="brutal-card p-10 space-y-6 hover:border-[#ff0055]/30 transition-all duration-500">
                          <Zap size={20} className="text-[#ff0055] opacity-50" />
                          <p className="text-[13px] text-white/50 font-black leading-relaxed uppercase tracking-[0.2em]">{metric}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              )}

              {/* SECTION 3 — Engineering Narrative */}
              <motion.section {...sectionReveal} className="space-y-16">
                <div className="flex items-center gap-4">
                  <span className="text-[#ff0055] font-mono text-sm font-black">[03]</span>
                  <h2 className="font-mono text-[12px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-3 flex-grow">
                    SYSTEM_STORY
                  </h2>
                </div>
                <div className="paragraph-editorial text-xl text-white/60 leading-relaxed font-medium">
                  {project.journal.whyBuilt}
                </div>

                {project.timeline && (
                  <div className="space-y-12 pl-12 border-l-2 border-[#ff0055]/10 relative">
                    {project.timeline.map((step, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[54px] top-0 w-8 h-[2px] bg-[#ff0055] group-hover:w-12 transition-all duration-700" />
                        <span className="font-mono text-[11px] text-[#ff0055] font-black uppercase tracking-[0.4em] block mb-3 opacity-60 group-hover:opacity-100 transition-opacity">{step.label}</span>
                        <p className="text-white/50 leading-relaxed max-w-3xl font-bold group-hover:text-white transition-colors duration-500 text-lg">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>

              {/* SECTION 4 — System Architecture */}
              <motion.section {...sectionReveal} className="space-y-16">
                <div className="flex items-center gap-4">
                  <span className="text-[#ff0055] font-mono text-sm font-black">[04]</span>
                  <h2 className="font-mono text-[12px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-3 flex-grow">
                    ARCHITECTURE_MAP
                  </h2>
                </div>
                <div className="paragraph-editorial text-white/50 text-lg leading-relaxed">
                  {project.journal.systemThinking}
                </div>

                <div className="brutal-card p-12 md:p-20 flex flex-col items-center justify-center bg-[#050507] hover:border-[#ff0055]/20 transition-all duration-1000">
                  <span className="font-mono text-[10px] text-[#ff0055] font-black uppercase tracking-[0.5em] mb-12 animate-pulse">Logical_Dependency_Map</span>
                  
                  <div className="w-full max-w-3xl">
                    {project.id === "okey-bimbel" && <OkeyBimbelDiagram />}
                    {project.id === "01" && <SecureCBTDiagram />}
                    {project.id === "02" && <GegesBarberDiagram />}
                    {project.id === "03" && <LinuxCustomizationDiagram />}
                  </div>
                </div>
              </motion.section>

              {/* SECTION 5 — Technical Deep Dive */}
              <motion.section {...sectionReveal} className="space-y-16">
                <div className="flex items-center gap-4">
                  <span className="text-[#ff0055] font-mono text-sm font-black">[05]</span>
                  <h2 className="font-mono text-[12px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-3 flex-grow">
                    TECHNICAL_SYNC
                  </h2>
                </div>
                <div className="paragraph-editorial text-white/50 text-lg leading-relaxed">
                  {project.journal.exploration}
                </div>

                {project.folderStructure && (
                  <div className="brutal-card p-10 relative overflow-hidden bg-black/60 font-mono">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Terminal size={100} className="text-[#ff0055]" />
                    </div>
                    <span className="font-mono text-[10px] text-white/10 uppercase tracking-[0.4em] block mb-8">Node_FileSystem_Tree</span>
                    <pre className="text-[12px] text-[#ff0055]/80 whitespace-pre overflow-x-auto leading-relaxed border-l-2 border-[#ff0055]/30 pl-8 font-black">
                      {project.folderStructure}
                    </pre>
                  </div>
                )}
              </motion.section>

              {/* SECTION 6 — Critical Analysis */}
              <motion.section {...sectionReveal} className="grid md:grid-cols-2 gap-16 pt-16 border-t-2 border-white/5">
                <div className="space-y-8">
                  <h3 className="font-mono text-[11px] text-[#ff0055] font-black uppercase tracking-[0.4em]">06 // CONSTRAINTS_REPORT</h3>
                  <p className="text-white/40 leading-relaxed font-bold text-lg italic">
                    {project.journal.constraints}
                  </p>
                </div>
                <div className="space-y-8">
                  <h3 className="font-mono text-[11px] text-emerald-400 font-black uppercase tracking-[0.4em]">07 // SYSTEM_EVOLUTION</h3>
                  <p className="text-white/40 leading-relaxed font-bold text-lg">
                    {project.journal.reflection}
                  </p>
                </div>
              </motion.section>

              {/* SECTION 8 — Key Lessons */}
              <motion.section {...sectionReveal} className="brutal-card p-12 md:p-24 space-y-10 bg-[#ff0055]/[0.03] border-[#ff0055]/30 shadow-[0_0_80px_rgba(255,0,85,0.1)]">
                <h2 className="font-mono text-[12px] text-[#ff0055] font-black uppercase tracking-[0.5em]">
                  08 / ARCHITECT_TAKEAWAY
                </h2>
                <div className="text-2xl md:text-4xl text-white font-black leading-tight font-display tracking-tighter">
                  "{project.journal.lessons}"
                </div>
              </motion.section>

              {/* Journal Footer Links */}
              <div className="pt-32 flex flex-wrap justify-center gap-12">
                {repoLink && (
                  <Magnetic strength={0.2}>
                    <a 
                      href={repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative px-14 py-7 bg-white text-black text-[12px] font-mono font-black uppercase tracking-widest overflow-hidden transition-all duration-500 hover:pr-20 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                    >
                      <span className="relative z-10">SOURCE_MANIFEST</span>
                      <GitBranch className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" size={20} />
                      <div className="absolute inset-0 bg-[#ff0055] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    </a>
                  </Magnetic>
                )}
                {liveLink && (
                  <Magnetic strength={0.2}>
                    <a 
                      href={liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-14 py-7 border border-white/10 hover:border-[#ff0055] text-[12px] font-mono font-black uppercase tracking-widest text-white/30 hover:text-white flex items-center gap-5 transition-all duration-500 bg-white/[0.02]"
                    >
                      <span>PRODUCTION_SYNC</span>
                      <ArrowUpRight size={20} className="text-[#ff0055]" />
                    </a>
                  </Magnetic>
                )}
              </div>
            </article>

            {/* Bottom Credit */}
            <footer className="mt-auto py-32 border-t border-white/5 bg-black/60 text-center space-y-10">
              <div className="font-mono text-[11px] text-white/10 uppercase tracking-[0.6em] font-black">
                M. Irsyad Fachryanto // Technical Engineering Log
              </div>
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#ff0055]/50 to-transparent mx-auto" />
              <div className="font-mono text-[10px] text-white/5 uppercase tracking-[0.3em] font-bold">
                &copy; {new Date().getFullYear()} IDENTITY_ENFORCED
              </div>
            </footer>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* 1. Diagram SVG Okey Bimbel */
function OkeyBimbelDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="90" height="40" rx="0" stroke="#ff0055" strokeWidth="2" fill="#000" />
      <text x="55" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Next.js Admin</text>
      <path d="M100 90 H150" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,4" />
      <polygon points="150,90 145,87 145,93" fill="#ffffff" />
      <rect x="155" y="70" width="100" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="205" y="88" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Pro QR</text>
      <text x="205" y="99" fill="#ff0055" fontSize="8" fontFamily="monospace" textAnchor="middle">Handshake</text>
      <path d="M255 90 H305" stroke="#ffffff" strokeWidth="1" />
      <polygon points="305,90 300,87 300,93" fill="#ffffff" />
      <rect x="310" y="70" width="100" height="55" rx="0" stroke="#ff0055" strokeWidth="2" fill="#000" />
      <text x="360" y="88" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Firebase</text>
      <text x="360" y="99" fill="#ff0055" fontSize="8" fontFamily="monospace" textAnchor="middle">Realtime Stream</text>
      <path d="M360 125 V160 H55 V110" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,4" opacity="0.1" />
    </svg>
  );
}

/* 2. Diagram SVG Secure CBT */
function SecureCBTDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="100" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="60" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Edge AI</text>
      <path d="M110 90 H160" stroke="#ff0055" strokeWidth="2" />
      <polygon points="160,90 155,87 155,93" fill="#ff0055" />
      <rect x="165" y="70" width="90" height="40" rx="0" stroke="#ff0055" strokeWidth="2" fill="#000" />
      <text x="210" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Face Mesh</text>
      <path d="M255 90 H305" stroke="#ff0055" strokeWidth="2" strokeDasharray="4,4" />
      <polygon points="305,90 300,87 300,93" fill="#ff0055" />
      <rect x="310" y="70" width="100" height="45" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="360" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Blur Overlay</text>
    </svg>
  );
}

/* 3. Diagram SVG Geges Barber */
function GegesBarberDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="90" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="55" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Clean Arch</text>
      <path d="M100 90 H150" stroke="#ff0055" strokeWidth="1" />
      <rect x="155" y="70" width="110" height="40" rx="0" stroke="#ff0055" strokeWidth="2" fill="#000" />
      <text x="210" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Fair Algo</text>
      <path d="M265 85 H325" stroke="#ffffff" strokeWidth="1" />
      <rect x="330" y="70" width="80" height="30" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="370" y="88" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">188+ Tests</text>
      <path d="M210 110 V150 H330" stroke="#ff0055" strokeWidth="1" strokeDasharray="3,3" />
      <rect x="330" y="135" width="80" height="30" rx="0" stroke="#ff0055" strokeWidth="1" fill="#000" />
      <text x="370" y="152" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">Integrity</text>
    </svg>
  );
}

/* 4. Diagram SVG Linux Customization */
function LinuxCustomizationDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="110" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="65" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">systemd</text>
      <path d="M120 90 H170" stroke="#ff0055" strokeWidth="2" />
      <rect x="175" y="70" width="100" height="40" rx="0" stroke="#ff0055" strokeWidth="2" fill="#000" />
      <text x="225" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Guardian</text>
      <path d="M275 90 H325" stroke="#ffffff" strokeWidth="1" />
      <rect x="330" y="70" width="80" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="370" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RAM_Sync</text>
    </svg>
  );
}
