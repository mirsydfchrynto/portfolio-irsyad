"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GitBranch, ArrowUpRight, Zap, ShieldAlert, CheckCircle2, FolderTree, Info, Users2, Sparkles } from "lucide-react";

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
  quickSummary?: string;
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm overflow-y-auto"
        >
          <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#F7F7F4] rounded-sm border border-[#E2E2DC] shadow-2xl overflow-hidden my-6"
            >
              {/* Sticky Architectural Modal Header */}
              <div className="sticky top-0 z-50 bg-[#F7F7F4]/98 backdrop-blur-md px-6 md:px-10 py-4 border-b border-[#E2E2DC] flex justify-between items-center">
                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#111215]" />
                  <span className="font-bold uppercase tracking-wider text-[#111215]">
                    SPECIFICATION DOSSIER // {project.title}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-1.5 rounded-sm border border-[#E2E2DC] text-[#525866] hover:text-[#111215] hover:bg-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-12 space-y-12">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.role && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {project.role}
                      </span>
                    )}
                    {project.period && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">
                        {project.period}
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-display tracking-tight leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal border-l-4 border-blue-500 pl-4 py-1">
                    {project.tagline}
                  </p>

                  {project.quickSummary && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-100/90 flex items-start gap-3 mt-4">
                      <span className="p-1.5 rounded-lg bg-blue-600 text-white shrink-0 mt-0.5 shadow-sm">
                        <Sparkles size={15} />
                      </span>
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-900 block">
                          At a Glance (Simple Overview)
                        </span>
                        <p className="text-sm text-slate-800 font-normal leading-relaxed">
                          {project.quickSummary}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Context & Metrics */}
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-8 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600">
                      Background &amp; Mission
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {project.journal.context}
                    </p>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {project.journal.whyBuilt}
                    </p>
                  </div>

                  <div className="md:col-span-4 space-y-6">
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                          Key Highlights
                        </span>
                        <div className="space-y-3">
                          {project.metrics.map((m, idx) => (
                            <div key={idx} className="flex gap-2.5 items-start">
                              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                              <p className="text-xs font-medium text-slate-700 leading-normal">{m}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.collaborators && project.collaborators.length > 0 && (
                      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                          <Users2 size={14} className="text-blue-600" />
                          Team &amp; Roles
                        </span>
                        <div className="space-y-2">
                          {project.collaborators.map((c, i) => (
                            <div key={i} className="flex justify-between items-center text-xs">
                              <span className="font-semibold text-slate-800">{c.name}</span>
                              <span className="text-slate-500 font-mono">{c.role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Architecture & Diagram */}
                <div className="space-y-6 pt-8 border-t border-slate-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600">
                    System Architecture &amp; Logic
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.journal.systemThinking}
                  </p>
                  <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center">
                    <span className="text-xs font-mono font-semibold text-slate-600 mb-6 uppercase tracking-wider">
                      Architecture Topology
                    </span>
                    <div className="w-full max-w-lg">
                      {project.id === "okey-bimbel" && <OkeyBimbelDiagram />}
                      {project.id === "01" && <GegesBarberDiagram />}
                      {project.id === "02" && <SecureCBTDiagram />}
                      {project.id === "03" && <OkeyBimbelDiagram />}
                    </div>
                  </div>
                </div>

                {/* Failure Recovery */}
                {project.failureRecovery && (
                  <div className="space-y-4 pt-8 border-t border-slate-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600">
                      Technical Challenge &amp; Resolution
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200/70 space-y-2">
                        <span className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldAlert size={14} /> The Incident
                        </span>
                        <p className="text-xs text-rose-900 leading-relaxed font-medium">
                          {project.failureRecovery.incident}
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2">
                        <span className="text-xs font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Info size={14} /> Root Cause
                        </span>
                        <p className="text-xs text-amber-900 leading-relaxed font-medium">
                          {project.failureRecovery.rootCause}
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Zap size={14} /> Resolution
                        </span>
                        <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                          {project.failureRecovery.recovery}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Code Structure */}
                {project.folderStructure && (
                  <div className="space-y-4 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <FolderTree size={16} className="text-blue-600" />
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                        Codebase Layout
                      </h3>
                    </div>
                    <pre className="p-5 rounded-2xl bg-slate-900 text-blue-200 font-mono text-xs overflow-x-auto leading-relaxed">
                      {project.folderStructure}
                    </pre>
                  </div>
                )}

                {/* Bottom Action CTAs */}
                <div className="pt-8 border-t border-[#E2E2DC] flex flex-wrap gap-4 justify-end">
                  {repoLink && (
                    <a
                      href={repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-[#E2E2DC] hover:border-[#111215] bg-white text-xs font-mono uppercase tracking-wider text-[#111215] transition-colors shadow-xs"
                    >
                      <GitBranch size={14} />
                      <span>INSPECT SOURCE CODE</span>
                    </a>
                  )}
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#111215] hover:bg-[#1D4ED8] text-[#F7F7F4] text-xs font-mono uppercase tracking-wider transition-all active:scale-95 shadow-xs"
                    >
                      <span>LAUNCH PRODUCTION SYSTEM</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function OkeyBimbelDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="60" width="100" height="44" rx="10" stroke="#2563EB" strokeWidth="2" fill="#FFFFFF" />
      <text x="60" y="86" fill="#0F172A" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Next.js Portal</text>
      <path d="M110 82 H155" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3,3" />
      <polygon points="155,82 148,78 148,86" fill="#94A3B8" />
      <rect x="160" y="60" width="105" height="44" rx="10" stroke="#0F172A" strokeWidth="2" fill="#FFFFFF" />
      <text x="212" y="80" fill="#0F172A" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Dynamic QR</text>
      <text x="212" y="93" fill="#2563EB" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">5s Handshake</text>
      <path d="M265 82 H310" stroke="#94A3B8" strokeWidth="1.5" />
      <polygon points="310,82 303,78 303,86" fill="#94A3B8" />
      <rect x="315" y="55" width="95" height="54" rx="10" stroke="#2563EB" strokeWidth="2" fill="#FFFFFF" />
      <text x="362" y="78" fill="#0F172A" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Kiosk Client</text>
      <text x="362" y="94" fill="#2563EB" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Kotlin Native</text>
    </svg>
  );
}

function SecureCBTDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="60" width="105" height="44" rx="10" stroke="#0F172A" strokeWidth="2" fill="#FFFFFF" />
      <text x="67" y="86" fill="#0F172A" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Camera Feed</text>
      <path d="M120 82 H165" stroke="#2563EB" strokeWidth="2" />
      <polygon points="165,82 158,78 158,86" fill="#2563EB" />
      <rect x="170" y="60" width="105" height="44" rx="10" stroke="#2563EB" strokeWidth="2" fill="#FFFFFF" />
      <text x="222" y="80" fill="#0F172A" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">MediaPipe AI</text>
      <text x="222" y="93" fill="#2563EB" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Z-Depth Calc</text>
      <path d="M275 82 H315" stroke="#2563EB" strokeWidth="2" strokeDasharray="3,3" />
      <polygon points="315,82 308,78 308,86" fill="#2563EB" />
      <rect x="320" y="60" width="90" height="44" rx="10" stroke="#0F172A" strokeWidth="2" fill="#FFFFFF" />
      <text x="365" y="86" fill="#0F172A" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Blur Overlay</text>
    </svg>
  );
}

function GegesBarberDiagram() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 420 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="60" width="95" height="44" rx="10" stroke="#0F172A" strokeWidth="2" fill="#FFFFFF" />
      <text x="62" y="86" fill="#0F172A" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Flutter App</text>
      <path d="M110 82 H155" stroke="#2563EB" strokeWidth="2" />
      <rect x="160" y="55" width="115" height="54" rx="10" stroke="#2563EB" strokeWidth="2" fill="#FFFFFF" />
      <text x="217" y="78" fill="#0F172A" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Fair Work Algo</text>
      <text x="217" y="94" fill="#2563EB" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Queue Balancing</text>
      <path d="M275 82 H320" stroke="#94A3B8" strokeWidth="1.5" />
      <rect x="325" y="60" width="85" height="44" rx="10" stroke="#0F172A" strokeWidth="2" fill="#FFFFFF" />
      <text x="367" y="86" fill="#0F172A" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Firestore</text>
    </svg>
  );
}
