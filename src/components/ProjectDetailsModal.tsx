"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GitBranch, ArrowUpRight, CheckCircle2 } from "lucide-react";

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
  // Prevent body scroll when details view is active
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[1000] bg-black overflow-y-auto"
        >
          {/* Main Overlay Container */}
          <div className="min-h-screen w-full bg-black flex flex-col relative z-50">
            
            {/* Minimal Sticky Top Navigation */}
            <div className="sticky top-0 z-[100] bg-black/90 backdrop-blur-md px-6 py-4 md:px-12 border-b border-white/5 flex justify-between items-center">
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                Jurnal Rekayasa &mdash; Proyek {project.title}
              </span>
              <button 
                onClick={onClose}
                className="px-3 py-1.5 border border-white/10 hover:border-white/40 text-white text-[10px] font-mono tracking-wider bg-white/5 hover:bg-white hover:text-black transition-colors rounded-sm flex items-center gap-2 cursor-pointer min-h-[44px]"
                aria-label="Tutup Jurnal"
              >
                <span>TUTUP</span>
                <X size={14} />
              </button>
            </div>

            {/* Cinematic Article Body */}
            <article className="w-full max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-16">
              
              {/* Header Title */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/45">
                  {project.role && <span>{project.role}</span>}
                  {project.period && (
                    <>
                      <span>/</span>
                      <span>{project.period}</span>
                    </>
                  )}
                  {project.id !== "okey-bimbel" && <span>Eksplorasi {project.id}</span>}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-white/60 leading-relaxed max-w-[70ch] italic font-sans border-l-2 border-white/15 pl-4 py-1">
                  {project.tagline}
                </p>
              </div>

              {/* SECTION 1 — Context */}
              <section className="space-y-4">
                <h2 className="text-sm font-mono text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">
                  01 / Context & Masalah
                </h2>
                <div className="paragraph-editorial leading-relaxed text-white/70">
                  {project.journal.context}
                </div>
              </section>

              {/* SECTION 2 — Visual Showcase */}
              {project.image && (
                <section className="space-y-4">
                  <h2 className="text-sm font-mono text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">
                    02 / Tampilan Nyata
                  </h2>
                  <div className="border border-white/5 bg-neutral-950 p-2 rounded-sm overflow-hidden aspect-[16/10] relative flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={`${project.title} Interface`}
                      className="w-full h-full object-cover rounded-sm opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/85 px-3 py-1.5 border border-white/5 text-[9px] font-mono text-white/55 tracking-wider rounded-sm select-none">
                      Tangkapan Layar &mdash; Antarmuka Pengguna
                    </div>
                  </div>

                  {/* Production Metrics (Only for Okey Bimbel) */}
                  {project.metrics && (
                    <div className="grid md:grid-cols-3 gap-4 pt-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="border border-white/5 bg-white/[0.01] p-5 rounded-sm">
                          <span className="font-mono text-[9px] text-white/30 uppercase block mb-1">Metrik Riil</span>
                          <p className="text-xs text-white/70 leading-relaxed">{metric}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* SECTION 3 — Narrative & Timeline */}
              <section className="space-y-6">
                <h2 className="text-sm font-mono text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">
                  03 / Catatan & Linimasa Rekayasa
                </h2>
                <div className="paragraph-editorial leading-relaxed text-white/70">
                  {project.journal.whyBuilt}
                </div>

                {/* Timeline Visualizer */}
                {project.timeline && (
                  <div className="pt-6 relative pl-6 border-l border-white/10 space-y-8 font-mono text-xs">
                    {project.timeline.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[30px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-black" />
                        <span className="text-white font-bold block">{step.label}</span>
                        <span className="text-white/50 block mt-1 leading-relaxed max-w-[65ch] font-sans text-[11px] normal-case">
                          {step.description}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* SECTION 4 — System Thinking (SVG Architecture Diagrams) */}
              <section className="space-y-6">
                <h2 className="text-sm font-mono text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">
                  04 / System Thinking
                </h2>
                <div className="paragraph-editorial leading-relaxed text-white/70">
                  {project.journal.systemThinking}
                </div>

                {/* Render SVG Diagrams based on Project ID */}
                <div className="border border-white/5 bg-neutral-950/40 p-6 rounded-sm flex flex-col items-center justify-center">
                  <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest mb-4">Diagram Arsitektur Sistem</div>
                  
                  {project.id === "okey-bimbel" && <OkeyBimbelDiagram />}
                  {project.id === "01" && <SecureCBTDiagram />}
                  {project.id === "02" && <GegesBarberDiagram />}
                  {project.id === "03" && <LinuxCustomizationDiagram />}
                </div>
              </section>

              {/* SECTION 5 — Technical Exploration */}
              <section className="space-y-6">
                <h2 className="text-sm font-mono text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">
                  05 / Eksplorasi Teknis
                </h2>
                <div className="paragraph-editorial leading-relaxed text-white/70">
                  {project.journal.exploration}
                </div>

                {/* Directory Structure if exists */}
                {project.folderStructure && (
                  <div className="border border-white/5 p-5 bg-white/[0.01] rounded-sm relative overflow-hidden">
                    <div className="text-[8px] font-mono text-white/35 uppercase tracking-widest mb-3">Struktur Folder Relevan</div>
                    <pre className="text-[10px] text-white/60 whitespace-pre overflow-x-auto leading-relaxed border-l border-white/10 pl-4 font-mono">
                      {project.folderStructure}
                    </pre>
                  </div>
                )}
              </section>

              {/* SECTION 6 — Constraints & Failure */}
              <section className="space-y-4">
                <h2 className="text-sm font-mono text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">
                  06 / Kendala Produksi & Kegagalan Uji Coba
                </h2>
                <div className="paragraph-editorial leading-relaxed text-white/70">
                  {project.journal.constraints}
                </div>
              </section>

              {/* SECTION 7 — Reflection */}
              <section className="space-y-4">
                <h2 className="text-sm font-mono text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">
                  07 / Refleksi Sistem
                </h2>
                <div className="paragraph-editorial leading-relaxed text-white/70">
                  {project.journal.reflection}
                </div>
              </section>

              {/* SECTION 8 — Lessons Learned */}
              <section className="space-y-4">
                <h2 className="text-sm font-mono text-white/30 uppercase tracking-widest border-b border-white/5 pb-2">
                  08 / Pelajaran Rekayasa
                </h2>
                <div className="paragraph-editorial leading-relaxed text-white/70">
                  {project.journal.lessons}
                </div>
              </section>

              {/* Journal Footer Links */}
              <div className="border-t border-white/5 pt-8 flex flex-wrap justify-end gap-4">
                {repoLink && (
                  <a 
                    href={repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-white/5 hover:border-white/20 text-[10px] font-mono tracking-wider flex items-center justify-center bg-white/5 text-white/60 hover:text-white transition-colors rounded-sm min-h-[44px]"
                  >
                    GITHUB KODE KELAS <GitBranch size={12} className="ml-2" />
                  </a>
                )}
                {liveLink && (
                  <a 
                    href={liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-white/10 hover:border-white text-[10px] font-mono tracking-wider flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-colors font-bold rounded-sm min-h-[44px]"
                  >
                    KUNJUNGI WEBSITE <ArrowUpRight size={12} className="ml-2" />
                  </a>
                )}
              </div>
            </article>

            {/* Bottom Credit */}
            <footer className="mt-auto py-12 border-t border-white/5 bg-neutral-950/20 text-center font-mono text-[9px] text-white/20 uppercase tracking-wider">
              Muhammad Irsyad Fachryanto &mdash; Catatan Jurnal Teknik &copy; {new Date().getFullYear()}
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
    <svg className="w-full max-w-md h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Node 1: React Client */}
      <rect x="10" y="70" width="90" height="40" rx="3" stroke="#555555" strokeWidth="1" fill="#111" />
      <text x="55" y="94" fill="#ffffff" fontSize="10" fontFamily="monospace" textAnchor="middle">React Client</text>
      <text x="55" y="104" fill="#666" fontSize="7" fontFamily="monospace" textAnchor="middle">(Tutor/Parent)</text>

      {/* Edge 1: Checkout request */}
      <path d="M100 90 H150" stroke="#555555" strokeWidth="1" strokeDasharray="3,3" />
      <polygon points="150,90 145,87 145,93" fill="#555555" />
      <text x="125" y="84" fill="#777" fontSize="7" fontFamily="monospace" textAnchor="middle">Transaksi</text>

      {/* Node 2: Pay Gateway / Webhook */}
      <rect x="155" y="70" width="100" height="40" rx="3" stroke="#ffffff" strokeWidth="1" fill="#111" />
      <text x="205" y="88" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">Payment Gateway</text>
      <text x="205" y="99" fill="#999" fontSize="8" fontFamily="monospace" textAnchor="middle">&amp; Webhook</text>

      {/* Edge 2: Callback trigger */}
      <path d="M255 90 H305" stroke="#555555" strokeWidth="1" />
      <polygon points="305,90 300,87 300,93" fill="#555555" />
      <text x="280" y="84" fill="#777" fontSize="7" fontFamily="monospace" textAnchor="middle">Callback</text>

      {/* Node 3: Firebase Functions & DB */}
      <rect x="310" y="70" width="100" height="55" rx="3" stroke="#555555" strokeWidth="1" fill="#111" />
      <text x="360" y="88" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">Firebase Hook</text>
      <text x="360" y="99" fill="#777" fontSize="8" fontFamily="monospace" textAnchor="middle">Functions → DB</text>
      <text x="360" y="112" fill="#555" fontSize="7" fontFamily="monospace" textAnchor="middle">(Updates Status)</text>

      {/* Flow lines back to parent notification */}
      <path d="M360 125 V160 H55 V110" stroke="#444" strokeWidth="1" strokeDasharray="2,2" />
      <polygon points="55,110 52,115 58,115" fill="#444" />
      <text x="205" y="154" fill="#666" fontSize="7" fontFamily="monospace" textAnchor="middle">Realtime Stream: Laporan Belajar &amp; Kuitansi Update</text>
    </svg>
  );
}

/* 2. Diagram SVG Secure CBT */
function SecureCBTDiagram() {
  return (
    <svg className="w-full max-w-md h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Node 1: Next.js Dashboard */}
      <rect x="10" y="70" width="100" height="40" rx="3" stroke="#555555" strokeWidth="1" fill="#111" />
      <text x="60" y="90" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">Dashboard Web</text>
      <text x="60" y="100" fill="#666" fontSize="7" fontFamily="monospace" textAnchor="middle">Next.js (Pengawas)</text>

      {/* Edge 1: QR Rotation */}
      <path d="M110 90 H160" stroke="#555555" strokeWidth="1" />
      <polygon points="160,90 155,87 155,93" fill="#555555" />
      <text x="135" y="84" fill="#777" fontSize="7" fontFamily="monospace" textAnchor="middle">Rotasi Token 5s</text>

      {/* Node 2: Scan QR Handshake */}
      <rect x="165" y="70" width="90" height="40" rx="3" stroke="#ffffff" strokeWidth="1" fill="#111" />
      <text x="210" y="90" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">Kamera Siswa</text>
      <text x="210" y="100" fill="#999" fontSize="8" fontFamily="monospace" textAnchor="middle">Scan &amp; Decode</text>

      {/* Edge 2: Drift Checking validation */}
      <path d="M255 90 H305" stroke="#555555" strokeWidth="1" strokeDasharray="3,3" />
      <polygon points="305,90 300,87 300,93" fill="#555555" />
      <text x="280" y="84" fill="#777" fontSize="7" fontFamily="monospace" textAnchor="middle">Drift Check</text>

      {/* Node 3: Flutter App Client */}
      <rect x="310" y="70" width="100" height="45" rx="3" stroke="#555555" strokeWidth="1" fill="#111" />
      <text x="360" y="90" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">Flutter Client</text>
      <text x="360" y="102" fill="#555" fontSize="8" fontFamily="monospace" textAnchor="middle">(Kiosk Mode Active)</text>

      {/* Background locking loop */}
      <path d="M360 115 V150 H60 V110" stroke="#444" strokeWidth="1" />
      <polygon points="60,110 57,115 63,115" fill="#444" />
      <text x="210" y="144" fill="#666" fontSize="7" fontFamily="monospace" textAnchor="middle">Broadcast Lock Intent &amp; Reorder Activity to Front</text>
    </svg>
  );
}

/* 3. Diagram SVG Geges Barber */
function GegesBarberDiagram() {
  return (
    <svg className="w-full max-w-md h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* UI layer BLoC */}
      <rect x="10" y="70" width="90" height="40" rx="3" stroke="#555555" strokeWidth="1" fill="#111" />
      <text x="55" y="94" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">UI / BLoC Layer</text>

      {/* Query fetch */}
      <path d="M100 90 H150" stroke="#555555" strokeWidth="1" />
      <polygon points="150,90 145,87 145,93" fill="#555555" />

      {/* Query Service */}
      <rect x="155" y="70" width="110" height="40" rx="3" stroke="#ffffff" strokeWidth="1" fill="#111" />
      <text x="210" y="90" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">QueueService</text>
      <text x="210" y="100" fill="#999" fontSize="7" fontFamily="monospace" textAnchor="middle">getWaitingQueues()</text>

      {/* Primary Path */}
      <path d="M265 85 H325" stroke="#555555" strokeWidth="1" />
      <polygon points="325,85 320,82 320,88" fill="#555555" />
      <text x="295" y="80" fill="#777" fontSize="7" fontFamily="monospace" textAnchor="middle">Kueri Indeks</text>

      {/* Firestore db */}
      <rect x="330" y="70" width="80" height="30" rx="3" stroke="#555555" strokeWidth="1" fill="#111" />
      <text x="370" y="88" fill="#777" fontSize="9" fontFamily="monospace" textAnchor="middle">Firestore</text>

      {/* Fallback Path */}
      <path d="M210 110 V150 H330" stroke="#555555" strokeWidth="1" strokeDasharray="3,3" />
      <polygon points="330,150 325,147 325,153" fill="#555555" />
      <text x="250" y="144" fill="#999" fontSize="7" fontFamily="monospace" textAnchor="middle">Fallback (failed-precondition)</text>

      {/* Local in-memory filter node */}
      <rect x="330" y="135" width="80" height="30" rx="3" stroke="#555555" strokeWidth="1" fill="#111" strokeDasharray="2,2" />
      <text x="370" y="152" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">In-Memory Filter</text>

      {/* Return to UI */}
      <path d="M370 165 V185 H55 V110" stroke="#444" strokeWidth="1" />
      <polygon points="55,110 52,115 58,115" fill="#444" />
      <text x="210" y="180" fill="#666" fontSize="7" fontFamily="monospace" textAnchor="middle">Stream antrean berhasil divalidasi ke UI</text>
    </svg>
  );
}

/* 4. Diagram SVG Linux Customization */
function LinuxCustomizationDiagram() {
  return (
    <svg className="w-full max-w-md h-auto" viewBox="0 0 420 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Node 1: Systemd Daemon */}
      <rect x="10" y="70" width="110" height="40" rx="3" stroke="#555555" strokeWidth="1" fill="#111" />
      <text x="65" y="90" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">systemd daemon</text>
      <text x="65" y="100" fill="#666" fontSize="7" fontFamily="monospace" textAnchor="middle">sda-guardian.service</text>

      {/* Loop line */}
      <path d="M120 90 H170" stroke="#555555" strokeWidth="1" />
      <polygon points="170,90 165,87 165,93" fill="#555555" />
      <text x="145" y="84" fill="#777" fontSize="7" fontFamily="monospace" textAnchor="middle">Ticking (3s)</text>

      {/* Node 2: Monitor RAM Script */}
      <rect x="175" y="70" width="100" height="40" rx="3" stroke="#ffffff" strokeWidth="1" fill="#111" />
      <text x="225" y="90" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">clean_ram.sh</text>
      <text x="225" y="100" fill="#999" fontSize="8" fontFamily="monospace" textAnchor="middle">Cek Load RAM</text>

      {/* Condition Path */}
      <path d="M275 90 H325" stroke="#555555" strokeWidth="1" />
      <polygon points="325,90 320,87 320,93" fill="#555555" />
      <text x="300" y="84" fill="#777" fontSize="7" fontFamily="monospace" textAnchor="middle">RAM &gt; 85%</text>

      {/* Node 3: Clear Cache cache */}
      <rect x="330" y="70" width="80" height="40" rx="3" stroke="#555555" strokeWidth="1" fill="#111" />
      <text x="370" y="90" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle">drop_caches</text>
      <text x="370" y="100" fill="#555" fontSize="7" fontFamily="monospace" textAnchor="middle">(Clear Cache)</text>

      {/* Logging path */}
      <path d="M370 110 V150 H65 V110" stroke="#444" strokeWidth="1" strokeDasharray="3,3" />
      <polygon points="65,110 62,115 68,115" fill="#444" />
      <text x="217" y="144" fill="#666" fontSize="7" fontFamily="monospace" textAnchor="middle">RAMCache cleared | Tulis status log di sda-guardian.log</text>
    </svg>
  );
}
