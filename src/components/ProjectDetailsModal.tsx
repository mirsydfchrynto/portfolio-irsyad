"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GitBranch, ArrowUpRight, CheckCircle2, ChevronRight, Zap } from "lucide-react";

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
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[1000] bg-[#020203] overflow-y-auto selection:bg-[#0070f3] selection:text-white"
        >
          {/* Main Overlay Container */}
          <div className="min-h-screen w-full flex flex-col relative z-50">
            <div className="fixed inset-0 z-0 architect-grid opacity-[0.03] pointer-events-none" />
            <div className="fixed inset-0 z-0 architect-grid-dense opacity-[0.02] pointer-events-none" />
            
            {/* Minimal Sticky Top Navigation */}
            <div className="sticky top-0 z-[100] bg-black/80 backdrop-blur-xl px-6 py-4 md:px-12 border-b-2 border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#0070f3] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,112,243,0.5)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                  DEEP_DIVE // {project.title}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="group relative px-6 py-2 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:pr-10"
                aria-label="Close Journal"
              >
                <span className="relative z-10">TERMINATE</span>
                <X className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" size={14} />
              </button>
            </div>

            {/* Cinematic Article Body */}
            <article className="w-full max-w-5xl mx-auto px-6 md:px-12 py-24 space-y-32 relative z-10">
              
              {/* Header Title */}
              <motion.div {...sectionReveal} className="space-y-8">
                <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] text-[#0070f3] uppercase font-bold tracking-[0.2em]">
                  {project.role && <span className="px-2 py-0.5 bg-[#0070f3]/10 border border-[#0070f3]/20">{project.role}</span>}
                  {project.period && (
                    <>
                      <span className="text-white/20">/</span>
                      <span className="text-white/40">{project.period}</span>
                    </>
                  )}
                  {project.id !== "okey-bimbel" && (
                    <>
                      <span className="text-white/20">/</span>
                      <span className="text-white/40">Lab_{project.id}</span>
                    </>
                  )}
                </div>
                <h1 className="section-type text-white lg:text-6xl">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl font-display font-medium border-l-4 border-[#0070f3] pl-8 py-2">
                  {project.tagline}
                </p>
              </motion.div>

              {/* SECTION 1 — Context */}
              <motion.section {...sectionReveal} className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="text-[#0070f3] font-mono text-xs font-bold">[01]</span>
                  <h2 className="font-mono text-[11px] text-white/30 uppercase tracking-[0.3em] font-bold border-b-2 border-white/5 pb-2 flex-grow">
                    Mission & Problem Context
                  </h2>
                </div>
                <div className="paragraph-editorial text-lg text-white/70">
                  {project.journal.context}
                </div>
              </motion.section>

              {/* SECTION 2 — Visual Showcase */}
              {project.image && (
                <motion.section {...sectionReveal} className="space-y-12">
                  <div className="flex items-center gap-3">
                    <span className="text-[#0070f3] font-mono text-xs font-bold">[02]</span>
                    <h2 className="font-mono text-[11px] text-white/30 uppercase tracking-[0.3em] font-bold border-b-2 border-white/5 pb-2 flex-grow">
                      Visual Evidence
                    </h2>
                  </div>
                  <div className="brutal-card p-4 group overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={`${project.title} Interface`}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
                      <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10 text-[10px] font-mono text-[#0070f3] font-bold tracking-widest uppercase">
                        System_Capture // PROD_RUNTIME
                      </div>
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="grid md:grid-cols-3 gap-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="brutal-card p-8 space-y-4">
                          <Zap size={16} className="text-[#0070f3]" />
                          <p className="text-xs text-white/60 font-medium leading-relaxed uppercase tracking-wider">{metric}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              )}

              {/* SECTION 3 — Engineering Narrative */}
              <motion.section {...sectionReveal} className="space-y-12">
                <div className="flex items-center gap-3">
                  <span className="text-[#0070f3] font-mono text-xs font-bold">[03]</span>
                  <h2 className="font-mono text-[11px] text-white/30 uppercase tracking-[0.3em] font-bold border-b-2 border-white/5 pb-2 flex-grow">
                    Engineering Narrative
                  </h2>
                </div>
                <div className="paragraph-editorial text-lg text-white/70">
                  {project.journal.whyBuilt}
                </div>

                {project.timeline && (
                  <div className="space-y-10 pl-10 border-l-2 border-[#0070f3]/20 relative">
                    {project.timeline.map((step, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[51px] top-0 w-[22px] h-[2px] bg-[#0070f3] group-hover:w-[30px] transition-all duration-500" />
                        <span className="font-mono text-[10px] text-[#0070f3] font-bold uppercase tracking-widest block mb-2">{step.label}</span>
                        <p className="text-white/60 leading-relaxed max-w-2xl font-medium">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>

              {/* SECTION 4 — System Architecture */}
              <motion.section {...sectionReveal} className="space-y-12">
                <div className="flex items-center gap-3">
                  <span className="text-[#0070f3] font-mono text-xs font-bold">[04]</span>
                  <h2 className="font-mono text-[11px] text-white/30 uppercase tracking-[0.3em] font-bold border-b-2 border-white/5 pb-2 flex-grow">
                    System Architecture
                  </h2>
                </div>
                <div className="paragraph-editorial text-white/70">
                  {project.journal.systemThinking}
                </div>

                <div className="brutal-card p-10 flex flex-col items-center justify-center bg-[#060608]">
                  <span className="font-mono text-[9px] text-[#0070f3] font-bold uppercase tracking-[0.4em] mb-10">Architectural_Logic_Map</span>
                  
                  <div className="w-full max-w-2xl">
                    {project.id === "okey-bimbel" && <OkeyBimbelDiagram />}
                    {project.id === "01" && <SecureCBTDiagram />}
                    {project.id === "02" && <GegesBarberDiagram />}
                    {project.id === "03" && <LinuxCustomizationDiagram />}
                  </div>
                </div>
              </motion.section>

              {/* SECTION 5 — Technical Deep Dive */}
              <motion.section {...sectionReveal} className="space-y-12">
                <div className="flex items-center gap-3">
                  <span className="text-[#0070f3] font-mono text-xs font-bold">[05]</span>
                  <h2 className="font-mono text-[11px] text-white/30 uppercase tracking-[0.3em] font-bold border-b-2 border-white/5 pb-2 flex-grow">
                    Technical Exploration
                  </h2>
                </div>
                <div className="paragraph-editorial text-white/70">
                  {project.journal.exploration}
                </div>

                {project.folderStructure && (
                  <div className="brutal-card p-8 relative overflow-hidden bg-black/40">
                    <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] block mb-6">Source_Tree</span>
                    <pre className="text-[11px] text-[#0070f3]/70 whitespace-pre overflow-x-auto leading-relaxed border-l-2 border-[#0070f3]/20 pl-6 font-mono">
                      {project.folderStructure}
                    </pre>
                  </div>
                )}
              </motion.section>

              {/* SECTION 6 — Critical Analysis */}
              <motion.section {...sectionReveal} className="grid md:grid-cols-2 gap-12 pt-12 border-t-2 border-white/5">
                <div className="space-y-6">
                  <h3 className="font-mono text-[10px] text-[#ff0055] font-bold uppercase tracking-[0.3em]">06 // CONSTRAINTS_FAILURE</h3>
                  <p className="text-white/60 leading-relaxed font-medium">
                    {project.journal.constraints}
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-[0.3em]">07 // SYSTEM_REFLECTION</h3>
                  <p className="text-white/60 leading-relaxed font-medium">
                    {project.journal.reflection}
                  </p>
                </div>
              </motion.section>

              {/* SECTION 8 — Key Lessons */}
              <motion.section {...sectionReveal} className="brutal-card p-10 md:p-16 space-y-8 bg-[#0070f3]/5 border-[#0070f3]/20">
                <h2 className="font-mono text-[11px] text-[#0070f3] font-bold uppercase tracking-[0.4em]">
                  08 / Engineering Lessons
                </h2>
                <div className="text-xl md:text-2xl text-white font-bold leading-relaxed font-display">
                  {project.journal.lessons}
                </div>
              </motion.section>

              {/* Journal Footer Links */}
              <div className="pt-20 flex flex-wrap justify-center gap-8">
                {repoLink && (
                  <a 
                    href={repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative px-10 py-5 bg-white text-black text-[11px] font-mono font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:pr-14"
                  >
                    <span className="relative z-10">SOURCE CODE</span>
                    <GitBranch className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" size={16} />
                    <div className="absolute inset-0 bg-[#0070f3] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </a>
                )}
                {liveLink && (
                  <a 
                    href={liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-10 py-5 border-2 border-white/10 hover:border-[#0070f3] text-[11px] font-mono font-bold uppercase tracking-widest text-white/50 hover:text-white flex items-center gap-4 transition-all duration-500"
                  >
                    <span>LIVE PRODUCTION</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>

            {/* Bottom Credit */}
            <footer className="mt-auto py-24 border-t-2 border-white/5 bg-black/40 text-center space-y-6">
              <div className="font-mono text-[10px] text-white/20 uppercase tracking-[0.5em]">
                Muhammad Irsyad Fachryanto // Technical Journal
              </div>
              <div className="w-12 h-[1px] bg-[#0070f3] mx-auto" />
              <div className="font-mono text-[9px] text-white/10 uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} All Rights Reserved
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
      <rect x="10" y="70" width="90" height="40" rx="0" stroke="#0070f3" strokeWidth="2" fill="#000" />
      <text x="55" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">React Client</text>
      <path d="M100 90 H150" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,4" />
      <polygon points="150,90 145,87 145,93" fill="#ffffff" />
      <rect x="155" y="70" width="100" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="205" y="88" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Pay Gateway</text>
      <text x="205" y="99" fill="#0070f3" fontSize="8" fontFamily="monospace" textAnchor="middle">Webhook</text>
      <path d="M255 90 H305" stroke="#ffffff" strokeWidth="1" />
      <polygon points="305,90 300,87 300,93" fill="#ffffff" />
      <rect x="310" y="70" width="100" height="55" rx="0" stroke="#0070f3" strokeWidth="2" fill="#000" />
      <text x="360" y="88" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Firebase</text>
      <text x="360" y="99" fill="#0070f3" fontSize="8" fontFamily="monospace" textAnchor="middle">Cloud Functions</text>
      <path d="M360 125 V160 H55 V110" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,4" opacity="0.2" />
    </svg>
  );
}

/* 2. Diagram SVG Secure CBT */
function SecureCBTDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="100" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="60" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Next.js Admin</text>
      <path d="M110 90 H160" stroke="#0070f3" strokeWidth="2" />
      <polygon points="160,90 155,87 155,93" fill="#0070f3" />
      <rect x="165" y="70" width="90" height="40" rx="0" stroke="#0070f3" strokeWidth="2" fill="#000" />
      <text x="210" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">QR Handshake</text>
      <path d="M255 90 H305" stroke="#0070f3" strokeWidth="2" strokeDasharray="4,4" />
      <polygon points="305,90 300,87 300,93" fill="#0070f3" />
      <rect x="310" y="70" width="100" height="45" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="360" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Flutter Client</text>
    </svg>
  );
}

/* 3. Diagram SVG Geges Barber */
function GegesBarberDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="90" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="55" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">UI Layer</text>
      <path d="M100 90 H150" stroke="#0070f3" strokeWidth="1" />
      <rect x="155" y="70" width="110" height="40" rx="0" stroke="#0070f3" strokeWidth="2" fill="#000" />
      <text x="210" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">QueueService</text>
      <path d="M265 85 H325" stroke="#ffffff" strokeWidth="1" />
      <rect x="330" y="70" width="80" height="30" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="370" y="88" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Firestore</text>
      <path d="M210 110 V150 H330" stroke="#ff0055" strokeWidth="1" strokeDasharray="3,3" />
      <rect x="330" y="135" width="80" height="30" rx="0" stroke="#ff0055" strokeWidth="1" fill="#000" />
      <text x="370" y="152" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">Fallback</text>
    </svg>
  );
}

/* 4. Diagram SVG Linux Customization */
function LinuxCustomizationDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="110" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="65" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">systemd unit</text>
      <path d="M120 90 H170" stroke="#0070f3" strokeWidth="2" />
      <rect x="175" y="70" width="100" height="40" rx="0" stroke="#0070f3" strokeWidth="2" fill="#000" />
      <text x="225" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">clean_ram.sh</text>
      <path d="M275 90 H325" stroke="#ffffff" strokeWidth="1" />
      <rect x="330" y="70" width="80" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="370" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Kernel</text>
    </svg>
  );
}
