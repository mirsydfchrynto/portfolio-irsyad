"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GitBranch, ArrowUpRight, Zap, Terminal } from "lucide-react";
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
                <div className="w-2 h-2 bg-[#E31B23] rounded-full" />
                <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-white/40 font-bold truncate max-w-[150px] md:max-w-none">
                  Detail Proyek // {project.title}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold hidden md:block">Tutup</span>
                <div className="p-2 border border-white/10 group-hover:border-white/30 transition-colors">
                  <X size={16} />
                </div>
              </button>
            </div>

            {/* Content Body */}
            <article className="w-full max-w-5xl mx-auto px-6 md:px-16 py-12 md:py-24 space-y-24 md:space-y-40 relative z-10">
              
              {/* Header Title */}
              <motion.div {...sectionReveal} className="space-y-6 md:space-y-10">
                <div className="flex flex-wrap items-center gap-3 md:gap-6 font-mono text-[10px] text-[#E31B23] uppercase font-bold tracking-widest">
                  {project.role && <span className="px-2 py-1 bg-[#E31B23]/5 border border-[#E31B23]/10">{project.role}</span>}
                  {project.period && (
                    <>
                      <span className="text-white/10">|</span>
                      <span className="text-white/30">{project.period}</span>
                    </>
                  )}
                </div>
                <h1 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  {project.title}
                </h1>
                <p className="text-lg md:text-2xl text-white/40 leading-relaxed max-w-3xl font-medium border-l-2 border-[#E31B23] pl-6 py-2 italic">
                  {project.tagline}
                </p>
              </motion.div>

              {/* Konteks Proyek */}
              <motion.section {...sectionReveal} className="space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold border-b border-white/5 pb-2 flex-grow">
                    Konteks & Masalah
                  </h2>
                </div>
                <div className="text-lg text-white/60 leading-relaxed font-medium">
                  {project.journal.context}
                </div>
              </motion.section>

              {/* Visual Showcase */}
              {project.image && (
                <motion.section {...sectionReveal} className="space-y-12">
                  <div className="flex items-center gap-4">
                    <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold border-b border-white/5 pb-2 flex-grow">
                      Tampilan Antarmuka
                    </h2>
                  </div>
                  <div className="border border-white/10 p-2 bg-[#0a0a0c]">
                    <div className="relative aspect-[16/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                      <img 
                        src={project.image} 
                        alt={`${project.title} UI`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="grid md:grid-cols-3 gap-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="p-6 border border-white/5 bg-white/[0.02] space-y-4">
                          <Zap size={18} className="text-[#E31B23]" />
                          <p className="text-[11px] text-white/50 font-bold leading-relaxed uppercase tracking-wider">{metric}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              )}

              {/* Proses Pengerjaan */}
              <motion.section {...sectionReveal} className="space-y-12">
                <div className="flex items-center gap-4">
                  <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold border-b border-white/5 pb-2 flex-grow">
                    Alasan Dibangun
                  </h2>
                </div>
                <div className="text-lg text-white/60 leading-relaxed font-medium">
                  {project.journal.whyBuilt}
                </div>

                {project.timeline && (
                  <div className="space-y-8 pl-8 border-l border-white/10">
                    {project.timeline.map((step, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[33px] top-1.5 w-2 h-2 bg-[#E31B23]" />
                        <span className="font-mono text-[10px] text-[#E31B23] font-bold uppercase tracking-widest block mb-2">{step.label}</span>
                        <p className="text-white/50 leading-relaxed max-w-2xl font-medium">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>

              {/* Arsitektur Sistem */}
              <motion.section {...sectionReveal} className="space-y-12">
                <div className="flex items-center gap-4">
                  <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold border-b border-white/5 pb-2 flex-grow">
                    Arsitektur & Logika
                  </h2>
                </div>
                <div className="text-white/50 text-base leading-relaxed">
                  {project.journal.systemThinking}
                </div>

                <div className="p-8 md:p-16 flex flex-col items-center justify-center bg-[#050507] border border-white/5">
                  <span className="font-mono text-[9px] text-[#E31B23] font-bold uppercase tracking-[0.4em] mb-8">Peta Logika Sistem</span>
                  
                  <div className="w-full max-w-2xl">
                    {project.id === "okey-bimbel" && <OkeyBimbelDiagram />}
                    {project.id === "01" && <SecureCBTDiagram />}
                    {project.id === "02" && <GegesBarberDiagram />}
                    {project.id === "03" && <SecureCBTDiagram />} {/* Placeholder for VisionSafe */}
                    {project.id === "04" && <LinuxCustomizationDiagram />}
                  </div>
                </div>
              </motion.section>

              {/* Eksplorasi Teknis */}
              <motion.section {...sectionReveal} className="space-y-12">
                <div className="flex items-center gap-4">
                  <h2 className="font-mono text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold border-b border-white/5 pb-2 flex-grow">
                    Eksplorasi Teknis
                  </h2>
                </div>
                <div className="text-white/50 text-base leading-relaxed">
                  {project.journal.exploration}
                </div>

                {project.folderStructure && (
                  <div className="p-6 md:p-10 border border-white/5 bg-black/40 font-mono">
                    <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest block mb-6">Struktur Folder</span>
                    <pre className="text-[11px] text-[#E31B23]/80 whitespace-pre overflow-x-auto leading-relaxed border-l border-[#E31B23]/30 pl-6">
                      {project.folderStructure}
                    </pre>
                  </div>
                )}
              </motion.section>

              {/* Analisis & Refleksi */}
              <motion.section {...sectionReveal} className="grid md:grid-cols-2 gap-16 pt-16 border-t border-white/5">
                <div className="space-y-6">
                  <h3 className="font-mono text-[10px] text-[#E31B23] font-bold uppercase tracking-widest">Kendala & Solusi</h3>
                  <p className="text-white/40 leading-relaxed font-medium">
                    {project.journal.constraints}
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="font-mono text-[10px] text-white/60 font-bold uppercase tracking-widest">Refleksi & Pengembangan</h3>
                  <p className="text-white/40 leading-relaxed font-medium">
                    {project.journal.reflection}
                  </p>
                </div>
              </motion.section>

              {/* Kesimpulan */}
              <motion.section {...sectionReveal} className="p-12 md:p-20 space-y-8 bg-white/[0.01] border border-white/5">
                <h2 className="font-mono text-[10px] text-[#E31B23] font-bold uppercase tracking-widest text-center">
                  Pelajaran Utama
                </h2>
                <div className="text-2xl md:text-3xl text-white font-black text-center leading-tight tracking-tighter">
                  &quot;{project.journal.lessons}&quot;
                </div>
              </motion.section>

              {/* Links */}
              <div className="pt-24 flex flex-wrap justify-center gap-8">
                {repoLink && (
                  <a 
                    href={repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-white text-black text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-[#E31B23] hover:text-white transition-all"
                  >
                    Source Code
                  </a>
                )}
                {liveLink && (
                  <a 
                    href={liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-10 py-5 border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-white/60 hover:text-white hover:border-white transition-all"
                  >
                    Lihat Demo
                  </a>
                )}
              </div>
            </article>

            {/* Footer */}
            <footer className="mt-auto py-24 border-t border-white/5 bg-black/60 text-center">
              <div className="font-mono text-[10px] text-white/10 uppercase tracking-[0.4em] font-bold">
                M. Irsyad Fachryanto &copy; {new Date().getFullYear()}
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
      <text x="360" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Sistem Peringatan</text>
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
      <text x="370" y="152" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">Integritas</text>
    </svg>
  );
}

/* 4. Diagram SVG Linux Customization */
function LinuxCustomizationDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="70" width="110" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="65" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">systemd</text>
      <path d="M120 90 H170" stroke="#E31B23" strokeWidth="2" />
      <rect x="175" y="70" width="100" height="40" rx="0" stroke="#E31B23" strokeWidth="2" fill="#000" />
      <text x="225" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Guardian</text>
      <path d="M275 90 H325" stroke="#ffffff" strokeWidth="1" />
      <rect x="330" y="70" width="80" height="40" rx="0" stroke="#ffffff" strokeWidth="2" fill="#000" />
      <text x="370" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Otomasi RAM</text>
    </svg>
  );
}
