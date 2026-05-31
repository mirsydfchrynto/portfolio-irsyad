"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GitBranch, ArrowUpRight, Zap, ShieldAlert, CheckCircle2, FolderTree, Info, Users2 } from "lucide-react";

interface TimelineItem {
  label: string;
  description: string;
}

interface FailureRecovery {
  incident: string;
  rootCause: string;
  recovery: string;
}

interface Collaborator {
  name: string;
  role: string;
  github?: string;
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
  failureRecovery?: FailureRecovery;
  folderStructure?: string;
  collaborators?: Collaborator[];
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
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[1000] bg-[#060608] overflow-y-auto selection:bg-[#E31B23] selection:text-white"
        >
          {/* Main Overlay Container */}
          <div className="min-h-screen w-full flex flex-col relative z-50">
            <div className="fixed inset-0 z-0 architect-grid opacity-[0.04] pointer-events-none" />
            
            {/* Sticky Top Navigation */}
            <div className="sticky top-0 z-[100] bg-black/90 backdrop-blur-xl px-6 py-4 md:px-16 md:py-6 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-[#E31B23] rounded-full shadow-[0_0_15px_rgba(227,27,35,0.6)]" />
                <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-white/40 font-bold truncate max-w-[150px] md:max-w-none">
                  Project_Archive // {project.title}
                </span>
              </div>
              <button 
                onClick={onClose}
                aria-label="Close Project Details"
                className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold hidden md:block">Exit_Archive</span>
                <div className="p-2.5 border border-white/10 group-hover:border-[#E31B23]/40 transition-all rounded-sm">
                  <X size={16} />
                </div>
              </button>
            </div>

            {/* Content Body */}
            <article className="w-full max-w-6xl mx-auto px-6 md:px-16 py-12 md:py-24 space-y-32 md:space-y-48 relative z-10">
              
              {/* 01. HEADER SECTION */}
              <motion.div {...sectionReveal} className="space-y-8 md:space-y-12">
                <div className="flex flex-wrap items-center gap-4 md:gap-8 font-mono text-[10px] md:text-[11px] text-[#E31B23] uppercase font-black tracking-[0.3em]">
                  {project.role && <span className="px-3 py-1.5 bg-[#E31B23]/5 border border-[#E31B23]/20">{project.role}</span>}
                  {project.period && (
                    <>
                      <span className="text-white/10 hidden sm:block">|</span>
                      <span className="text-white/40">{project.period}</span>
                    </>
                  )}
                </div>
                <h1 className="text-white text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.8]">
                  {project.title}
                </h1>
                <p className="text-xl md:text-3xl text-white/40 leading-tight max-w-4xl font-display font-medium italic border-l-4 border-[#E31B23]/40 pl-8 py-2">
                  {project.tagline}
                </p>
              </motion.div>

              {/* 02. CORE CONTEXT */}
              <div className="grid lg:grid-cols-12 gap-16 items-start">
                 <motion.section {...sectionReveal} className="lg:col-span-8 space-y-10">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-[#E31B23] font-black">[01]</span>
                      <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-2 flex-grow">
                        Mission_Context
                      </h2>
                    </div>
                    <div className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium">
                      {project.journal.context}
                    </div>
                 </motion.section>

                 <motion.aside {...sectionReveal} className="lg:col-span-4 space-y-10">
                    {/* Collaborators Section */}
                    {project.collaborators && project.collaborators.length > 0 && (
                      <div className="p-8 border border-white/5 bg-white/[0.01] space-y-8 mb-10">
                        <div className="flex items-center gap-3">
                          <Users2 size={14} className="text-[#E31B23]" />
                          <span className="font-mono text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Project_Collective</span>
                        </div>
                        <div className="space-y-6">
                          {project.collaborators.map((member, i) => (
                            <div key={i} className="group/member space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-[11px] text-white font-black uppercase tracking-widest">{member.name}</span>
                                {member.github && (
                                  <a 
                                    href={member.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white/20 hover:text-[#E31B23] transition-colors"
                                  >
                                    <GitBranch size={12} />
                                  </a>
                                )}
                              </div>
                              <p className="text-[10px] text-white/30 font-mono uppercase tracking-wider">{member.role}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="p-8 border border-white/5 bg-white/[0.01] space-y-8">
                       <span className="font-mono text-[9px] text-[#E31B23] font-black uppercase tracking-[0.4em]">Success_Metrics</span>
                       <div className="space-y-6">
                          {project.metrics?.map((m, i) => (
                             <div key={i} className="flex gap-4 items-start">
                                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <p className="text-[11px] text-white/40 font-black uppercase tracking-widest leading-relaxed">{m}</p>
                             </div>
                          ))}
                       </div>
                    </div>
                 </motion.aside>
              </div>

              {/* 03. VISUAL ENGINE */}
              {project.image && (
                <motion.section {...sectionReveal} className="space-y-16">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-[#E31B23] font-black">[02]</span>
                    <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-2 flex-grow">
                      Visual_System
                    </h2>
                  </div>
                  <div className="border border-white/10 p-3 bg-[#0a0a0c] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] relative group">
                    <div className="relative aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <img 
                        src={project.image} 
                        alt={`${project.title} Production Interface`}
                        className="w-full h-full object-cover scale-[1.01] group-hover:scale-100 transition-transform duration-1000"
                        loading="lazy"
                      />
                    </div>
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-20 h-[1px] bg-[#E31B23]/40" />
                    <div className="absolute top-0 left-0 w-[1px] h-20 bg-[#E31B23]/40" />
                    <div className="absolute bottom-0 right-0 w-20 h-[1px] bg-[#E31B23]/40" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-20 bg-[#E31B23]/40" />
                  </div>
                </motion.section>
              )}

              {/* 04. FAILURE & RECOVERY */}
              {project.failureRecovery && (
                <motion.section {...sectionReveal} className="space-y-12">
                   <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-[#E31B23] font-black">[03]</span>
                    <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-2 flex-grow">
                      System_Failure_Recovery
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
                     <div className="bg-[#0a0a0c] p-10 space-y-6">
                        <div className="flex items-center gap-3 text-rose-500">
                           <ShieldAlert size={18} />
                           <span className="font-mono text-[10px] font-black uppercase tracking-widest">Incident_Report</span>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed font-medium">{project.failureRecovery.incident}</p>
                     </div>
                     <div className="bg-[#0a0a0c] p-10 space-y-6">
                        <div className="flex items-center gap-3 text-amber-500">
                           <Info size={18} />
                           <span className="font-mono text-[10px] font-black uppercase tracking-widest">Root_Cause_Analysis</span>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed font-medium">{project.failureRecovery.rootCause}</p>
                     </div>
                     <div className="bg-[#0a0a0c] p-10 space-y-6">
                        <div className="flex items-center gap-3 text-emerald-500">
                           <Zap size={18} />
                           <span className="font-mono text-[10px] font-black uppercase tracking-widest">Architect_Recovery</span>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed font-medium">{project.failureRecovery.recovery}</p>
                     </div>
                  </div>
                </motion.section>
              )}

              {/* 05. ARCHITECTURE & LOGIC */}
              <motion.section {...sectionReveal} className="space-y-16">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-[#E31B23] font-black">[04]</span>
                  <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-2 flex-grow">
                    Architecture_Logic
                  </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div className="text-white/50 text-lg leading-relaxed font-medium">
                      {project.journal.systemThinking}
                   </div>
                   <div className="p-12 md:p-20 flex flex-col items-center justify-center bg-[#050507] border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 architect-grid-dense opacity-[0.03]" />
                      <span className="font-mono text-[9px] text-[#E31B23] font-black uppercase tracking-[0.6em] mb-12 relative z-10">System_Logic_Map</span>
                      <div className="w-full relative z-10">
                        {project.id === "okey-bimbel" && <OkeyBimbelDiagram />}
                        {project.id === "01" && <SecureCBTDiagram />}
                        {project.id === "02" && <GegesBarberDiagram />}
                        {project.id === "03" && <SecureCBTDiagram />}
                      </div>
                   </div>
                </div>
              </motion.section>

              {/* 06. ENGINEERING LOGS */}
              <motion.section {...sectionReveal} className="space-y-16">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-[#E31B23] font-black">[05]</span>
                  <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-2 flex-grow">
                    Engineering_Artifacts
                  </h2>
                </div>
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                   <div className="lg:col-span-4 space-y-10">
                      <div className="space-y-6">
                        <h3 className="text-xl font-black text-white uppercase tracking-tighter">System Implementation</h3>
                        <p className="text-white/40 text-sm leading-relaxed font-medium">
                           {project.journal.exploration}
                        </p>
                      </div>
                      
                      <div className="space-y-6 pt-10 border-t border-white/5">
                        <div className="flex items-center gap-3">
                           <FolderTree size={14} className="text-[#E31B23]" />
                           <span className="font-mono text-[9px] text-white/60 font-black uppercase tracking-widest">Project_Structure</span>
                        </div>
                        <pre className="text-[11px] text-[#E31B23]/70 font-mono leading-relaxed border-l-2 border-[#E31B23]/30 pl-8 py-2 overflow-x-auto whitespace-pre">
                          {project.folderStructure}
                        </pre>
                      </div>
                   </div>

                   <div className="lg:col-span-8 space-y-10">
                      <div className="space-y-10">
                         {project.timeline?.map((step, idx) => (
                           <div key={idx} className="group relative pl-12 border-l-2 border-white/5 transition-all duration-700 hover:border-[#E31B23]/40">
                              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#060608] border-2 border-white/10 group-hover:bg-[#E31B23] group-hover:border-[#E31B23] transition-all duration-700" />
                              <div className="space-y-2">
                                 <span className="font-mono text-[10px] text-[#E31B23] font-black uppercase tracking-widest">{step.label}</span>
                                 <p className="text-white/50 text-base leading-relaxed font-medium">{step.description}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </motion.section>

              {/* 07. REFLECTION & RETROSPECTIVE */}
              <motion.section {...sectionReveal} className="p-12 md:p-24 bg-white/[0.01] border border-white/5 space-y-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31B23]/[0.02] blur-[100px] rounded-full pointer-events-none" />
                
                <div className="grid md:grid-cols-2 gap-20 relative z-10">
                   <div className="space-y-8">
                      <span className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">Technical_Reflection</span>
                      <p className="text-white/50 text-lg leading-relaxed font-medium italic underline decoration-white/10 underline-offset-8">
                        {project.journal.reflection}
                      </p>
                   </div>
                   <div className="space-y-8">
                      <span className="font-mono text-[10px] text-[#E31B23] uppercase tracking-[0.4em] font-black">Core_Lessons_Learned</span>
                      <div className="text-2xl md:text-3xl text-white font-black leading-tight tracking-tighter uppercase">
                        &quot;{project.journal.lessons}&quot;
                      </div>
                   </div>
                </div>
              </motion.section>

              {/* ACTION CALLS */}
              <div className="pt-20 flex flex-wrap justify-center gap-8">
                {repoLink && (
                  <a 
                    href={repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-12 py-6 bg-white text-black text-[11px] font-mono font-black uppercase tracking-[0.2em] hover:bg-[#E31B23] hover:text-white transition-all shadow-2xl"
                  >
                    Source_Archive
                  </a>
                )}
                {liveLink && (
                  <a 
                    href={liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-12 py-6 border-2 border-white/10 text-[11px] font-mono font-black uppercase tracking-[0.2em] text-white/40 hover:text-white hover:border-white transition-all"
                  >
                    Live_Deployment
                  </a>
                )}
              </div>
            </article>

            {/* Footer */}
            <footer className="mt-auto py-24 border-t border-white/5 bg-black text-center relative overflow-hidden">
              <div className="font-mono text-[10px] text-white/10 uppercase tracking-[0.6em] font-black relative z-10">
                M. Irsyad Fachryanto &copy; 2026 // System_Verified
              </div>
              <div className="absolute inset-0 bg-noise opacity-[0.01]" />
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
      <rect x="10" y="70" width="90" height="40" rx="0" stroke="#E31B23" strokeWidth="2" fill="#000" />
      <text x="55" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Next.js Admin</text>
      <path d="M100 90 H150" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,4" />
      <polygon points="150,90 145,87 145,93" fill="#ffffff" />
      <rect x="155" y="70" width="100" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="205" y="88" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Pro QR</text>
      <text x="205" y="99" fill="#E31B23" fontSize="8" fontFamily="monospace" textAnchor="middle">Handshake</text>
      <path d="M255 90 H305" stroke="#ffffff" strokeWidth="1" />
      <polygon points="305,90 300,87 300,93" fill="#ffffff" />
      <rect x="310" y="70" width="100" height="55" rx="0" stroke="#E31B23" strokeWidth="2" fill="#000" />
      <text x="360" y="88" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Firebase</text>
      <text x="360" y="99" fill="#E31B23" fontSize="8" fontFamily="monospace" textAnchor="middle">Realtime Stream</text>
    </svg>
  );
}

/* 2. Diagram SVG Secure CBT */
function SecureCBTDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="100" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="60" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Edge AI</text>
      <path d="M110 90 H160" stroke="#E31B23" strokeWidth="2" />
      <polygon points="160,90 155,87 155,93" fill="#E31B23" />
      <rect x="165" y="70" width="90" height="40" rx="0" stroke="#E31B23" strokeWidth="2" fill="#000" />
      <text x="210" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Face Mesh</text>
      <path d="M255 90 H305" stroke="#E31B23" strokeWidth="2" strokeDasharray="4,4" />
      <polygon points="305,90 300,87 300,93" fill="#E31B23" />
      <rect x="310" y="70" width="100" height="45" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="360" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Warning System</text>
    </svg>
  );
}

/* 3. Diagram SVG Geges Barber */
function GegesBarberDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="90" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="55" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Clean Arch</text>
      <path d="M100 90 H150" stroke="#E31B23" strokeWidth="1" />
      <rect x="155" y="70" width="110" height="40" rx="0" stroke="#E31B23" strokeWidth="2" fill="#000" />
      <text x="210" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Fair Algo</text>
      <path d="M265 85 H325" stroke="#ffffff" strokeWidth="1" />
      <rect x="330" y="70" width="80" height="30" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="370" y="88" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">188+ Tests</text>
      <path d="M210 110 V150 H330" stroke="#E31B23" strokeWidth="1" strokeDasharray="3,3" />
      <rect x="330" y="135" width="80" height="30" rx="0" stroke="#E31B23" strokeWidth="1" fill="#000" />
      <text x="370" y="152" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">Integrity</text>
    </svg>
  );
}
