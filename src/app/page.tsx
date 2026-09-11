"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ThreeFluidWave } from "@/components/ThreeFluidWave";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
import { TelemetryTerminal } from "@/components/TelemetryTerminal";
import { 
  productionExperience, 
  blueprints, 
  engineeringJourney, 
  exploredTools 
} from "@/config/portfolioData";
import { pdfBase64 } from "@/config/pdfBase64";
import { soundFX } from "@/utils/soundEffects";
import { 
  ArrowUpRight, 
  ArrowDown,
  Download, 
  Check, 
  Copy, 
  ExternalLink,
  Lock,
  QrCode,
  WifiOff,
  Cpu,
  Layers,
  Smartphone,
  Sparkles,
  Terminal,
  CheckCircle2,
  Eye,
  Bot,
  Globe,
  Radio,
  FileCode2,
  HardDrive,
  Image as ImageIcon
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Architectural View Toggles: Spec Logic vs Verified UI Proof
  const [viewModeSys01, setViewModeSys01] = useState<"spec" | "preview">("spec");
  const [viewModeSys02, setViewModeSys02] = useState<"spec" | "preview">("spec");
  const [viewModeSys03, setViewModeSys03] = useState<"spec" | "preview">("spec");

  const handleDownload = () => {
    soundFX.playClick();
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  const handleCopyEmail = () => {
    soundFX.playClick(900);
    navigator.clipboard.writeText("irsydfchrynto@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#111215] selection:bg-[#111215] selection:text-[#F7F7F4] font-sans antialiased overflow-x-hidden relative">
      <Navbar />

      {/* Subtle Fluid Wave Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden print:hidden">
        <ThreeFluidWave className="opacity-35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* 1. HERO: THE ARCHITECTURAL BROADSIDE & MANIFESTO */}
        {/* ============================================================ */}
        <header className="min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-12 border-b border-[#E2E2DC]">
          
          {/* Top Telemetry Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-[#525866] pt-2">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#111215]" />
              <span>REF: MIF-ARCHIVE-2026 // VOL. 04</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>LOCATION: SURABAYA, ID [7.2575° S, 112.7521° E]</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">STATUS: PRODUCTION ACTIVE</span>
            </div>
          </div>

          {/* Centerpiece: Grand Architectural Headline */}
          <div className="my-auto py-12 space-y-8">
            <div className="space-y-3">
              <span className="inline-block font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1D4ED8] bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-sm">
                SYSTEMS &amp; MOBILE CRAFTSMAN
              </span>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-[#111215] tracking-tight leading-[0.98]">
                Muhammad Irsyad<br />
                <span className="text-[#111215]">Fachryanto.</span>
              </h1>
            </div>

            {/* Editorial Manifesto */}
            <p className="text-lg sm:text-2xl md:text-3xl text-[#3A3D46] font-serif italic max-w-4xl leading-relaxed">
              &ldquo;I engineer resilient mobile operating environments, low-power edge computer vision, and native hardware lockdowns. Built for environments where software failure is not an option.&rdquo;
            </p>

            {/* Practical Technical Highlights */}
            <p className="text-sm sm:text-base text-[#525866] font-normal max-w-2xl leading-relaxed">
              Based in Indonesia, available worldwide for remote contracts. Specializing in <strong className="text-[#111215] font-semibold">Flutter</strong>, native <strong className="text-[#111215] font-semibold">Android (Kotlin)</strong>, <strong className="text-[#111215] font-semibold">Next.js</strong>, and on-device <strong className="text-[#111215] font-semibold">Edge AI</strong>.
            </p>

            {/* Tactile Action Keys */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 print:hidden">
              <a
                href="#projects"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#111215] text-[#F7F7F4] hover:bg-[#1D4ED8] font-mono text-xs uppercase tracking-wider transition-all shadow-xs active:scale-95"
              >
                <span>[01 // EXPLORE BLUEPRINTS]</span>
                <ArrowDown size={14} />
              </a>

              <a
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="CV MUHAMMAD IRSYAD FACHRYANTO.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-sm border border-[#E2E2DC] hover:border-[#111215] bg-white text-[#111215] font-mono text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                <Download size={14} className="text-[#1D4ED8]" />
                <span>{downloading ? "GENERATING..." : "DOWNLOAD SPEC SHEET / CV"}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-sm border border-transparent hover:border-[#E2E2DC] text-[#525866] hover:text-[#111215] font-mono text-xs tracking-wider transition-colors"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? "COPIED DISPATCH KEY" : "irsydfchrynto@gmail.com"}</span>
              </button>
            </div>
          </div>

          {/* Bottom Coordinate Bar & Quick Channels */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E2E2DC] font-mono text-xs text-[#525866]">
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/mirsydfchrynto" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick(1000)}
                className="flex items-center gap-2 text-[#111215] hover:text-[#1D4ED8] transition-colors"
              >
                <GitHubIcon size={14} />
                <span>GITHUB</span>
              </a>
              <a 
                href="https://linkedin.com/in/mirsydfchrynto" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick(1000)}
                className="flex items-center gap-2 text-[#111215] hover:text-[#1D4ED8] transition-colors"
              >
                <LinkedInIcon size={14} />
                <span>LINKEDIN</span>
              </a>
              <a 
                href="https://wa.me/6285865826621" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick(1000)}
                className="flex items-center gap-2 text-[#111215] hover:text-[#1D4ED8] transition-colors"
              >
                <WhatsAppIcon size={14} />
                <span>WHATSAPP</span>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#525866]">
              <span>CORE SPECIALIZATION:</span>
              <span className="text-[#111215] font-bold">MOBILE INTEGRITY · EDGE AI · FULLSTACK</span>
            </div>
          </div>

        </header>

        {/* ============================================================ */}
        {/* 2. EXHIBITIONS: ARCHITECTURAL SYSTEM SPEC SHEETS */}
        {/* ============================================================ */}
        <section id="projects" className="py-24 border-b border-[#E2E2DC]">
          <div className="space-y-14">
            
            {/* Architectural Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2E2DC] pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#1D4ED8]">
                  <span>[INDEX 01 // EXHIBITS]</span>
                  <span>—</span>
                  <span>VERIFIED CODEBASES</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-black text-[#111215] tracking-tight">
                  Selected Production Systems.
                </h2>
              </div>
              <p className="font-mono text-xs text-[#525866] uppercase tracking-wider max-w-xs text-left md:text-right">
                4 HIGH-CONSEQUENCE SPECIFICATIONS DESIGNED &amp; DEPLOYED FOR ACTUAL USAGE
              </p>
            </div>

            {/* Spec Sheet Grid */}
            <div className="space-y-12">
              
              {/* ======================================================= */}
              {/* SYSTEM 01: OKEY BIMBEL CBT ECOSYSTEM */}
              {/* ======================================================= */}
              <article className="spec-card rounded-sm p-6 sm:p-10 space-y-8 relative">
                
                {/* Spec Meta Strip with View Toggle */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E2DC] pb-4 font-mono text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded-sm bg-[#111215] text-[#F7F7F4] font-bold">
                      SYS.01
                    </span>
                    <span className="font-bold text-[#111215]">
                      OKEY BIMBEL CBT ECOSYSTEM
                    </span>
                    <span className="text-[#525866]">•</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      ACTIVE IN PRODUCTION
                    </span>
                  </div>

                  {/* View Mode Toggle: Spec vs UI Proof */}
                  <div className="flex items-center gap-1 bg-[#F0F0EB] p-1 border border-[#E2E2DC] rounded-xs print:hidden">
                    <button
                      onClick={() => {
                        soundFX.playClick(900);
                        setViewModeSys01("spec");
                      }}
                      className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-colors ${
                        viewModeSys01 === "spec"
                          ? "bg-[#111215] text-[#F7F7F4] font-bold"
                          : "text-[#525866] hover:text-[#111215]"
                      }`}
                    >
                      [SPEC PROTOCOL]
                    </button>
                    <button
                      onClick={() => {
                        soundFX.playClick(1100);
                        setViewModeSys01("preview");
                      }}
                      className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-colors ${
                        viewModeSys01 === "preview"
                          ? "bg-[#111215] text-[#F7F7F4] font-bold"
                          : "text-[#525866] hover:text-[#111215]"
                      }`}
                    >
                      [LIVE UI PROOF]
                    </button>
                  </div>
                </div>

                {/* Main Spec Content */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Summary & Architecture Intent */}
                  <div className="lg:col-span-7 space-y-5">
                    <h3 className="text-2xl sm:text-4xl font-display font-black text-[#111215] tracking-tight">
                      OS-Level Kiosk Exam Security Platform
                    </h3>

                    <p className="text-base sm:text-lg text-[#1D4ED8] font-medium leading-relaxed">
                      Turns regular Android devices into locked, tamper-proof examination terminals that completely eradicate digital cheating in classrooms.
                    </p>

                    <p className="text-sm sm:text-base text-[#525866] font-normal leading-relaxed">
                      Built for schools to ensure high-stakes exam integrity. Students cannot exit to Google, trigger split-screen multitasking, screenshot questions, or bypass timers. Teachers manage question banks and proctor live score streams from a central Next.js dashboard.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="tech-tag-cobalt">Flutter Client</span>
                      <span className="tech-tag">Kotlin Native (Kiosk Task)</span>
                      <span className="tech-tag">Next.js Supervisor Portal</span>
                      <span className="tech-tag">Firestore Real-Time Sync</span>
                      <span className="tech-tag">AES-256 Storage</span>
                    </div>
                  </div>

                  {/* Right: Toggleable Spec Box or Verified UI Proof */}
                  <div className="lg:col-span-5">
                    <AnimatePresence mode="wait">
                      {viewModeSys01 === "spec" ? (
                        <motion.div
                          key="sys01-spec"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="bg-[#F7F7F4] border border-[#E2E2DC] rounded-sm p-6 space-y-4"
                        >
                          <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#111215] border-b border-[#E2E2DC] pb-2 flex items-center justify-between">
                            <span>ENGINEERING BREAKTHROUGHS</span>
                            <Terminal size={14} className="text-[#1D4ED8]" />
                          </div>

                          <div className="space-y-3.5">
                            <div className="flex items-start gap-3">
                              <Lock size={15} className="text-[#1D4ED8] shrink-0 mt-0.5" />
                              <div className="text-xs text-[#525866] leading-relaxed">
                                <strong className="text-[#111215] block font-semibold">OS Kiosk Lock:</strong>
                                Invokes Kotlin <code className="text-[#1D4ED8] font-mono">startLockTask()</code> and <code className="text-[#1D4ED8] font-mono">FLAG_SECURE</code> to physically disallow task switching and capture.
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <QrCode size={15} className="text-[#1D4ED8] shrink-0 mt-0.5" />
                              <div className="text-xs text-[#525866] leading-relaxed">
                                <strong className="text-[#111215] block font-semibold">5-Second Dynamic QR Handshake:</strong>
                                Synchronized time-based QR on educator&apos;s proctor screen guarantees physical student classroom presence.
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <WifiOff size={15} className="text-[#1D4ED8] shrink-0 mt-0.5" />
                              <div className="text-xs text-[#525866] leading-relaxed">
                                <strong className="text-[#111215] block font-semibold">Resilient Local Fallback:</strong>
                                Encrypted local cache auto-saves question states during school Wi-Fi dips, syncing back with zero loss.
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sys01-preview"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="bg-[#111215] border border-[#2B2F3A] rounded-sm p-2.5 space-y-2"
                        >
                          <div className="flex items-center justify-between px-2 pt-1 font-mono text-[10px] text-[#A0A5B5] uppercase">
                            <span>VERIFIED SCREENSHOT // KIOSK TERMINAL</span>
                            <span className="text-emerald-400">● LIVE RUNTIME</span>
                          </div>
                          <div className="relative aspect-[16/10] w-full rounded-xs overflow-hidden bg-black border border-[#2B2F3A]">
                            <img
                              src="/okey_bimbel_preview.webp"
                              alt="Okey Bimbel CBT Production Interface"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Spec Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E2E2DC] print:hidden">
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setSelectedProject(productionExperience);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#111215] hover:bg-[#1D4ED8] text-[#F7F7F4] font-mono text-xs uppercase tracking-wider transition-all active:scale-95"
                  >
                    <span>[READ ARCHITECTURE SPEC]</span>
                    <ArrowUpRight size={14} />
                  </button>

                  {productionExperience.url && (
                    <a
                      href={productionExperience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFX.playClick()}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-[#E2E2DC] hover:border-[#111215] bg-white text-[#111215] font-mono text-xs uppercase tracking-wider transition-colors"
                    >
                      <Download size={14} className="text-[#1D4ED8]" />
                      <span>DOWNLOAD PRODUCTION APK</span>
                    </a>
                  )}

                  <a
                    href="https://github.com/mirsydfchrynto"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFX.playClick()}
                    className="inline-flex items-center gap-1.5 text-[#525866] hover:text-[#111215] font-mono text-xs uppercase tracking-wider ml-auto"
                  >
                    <span>INSPECT REPO</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

              </article>

              {/* Systems 02 & 03: Two-Column Split Architecture */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* ===================================================== */}
                {/* SYSTEM 02: GEGES SMART BARBER */}
                {/* ===================================================== */}
                <article className="spec-card rounded-sm p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs border-b border-[#E2E2DC] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-sm bg-[#111215] text-[#F7F7F4] font-bold">
                          SYS.02
                        </span>
                        <span className="font-bold text-[#111215]">CAPSTONE 01</span>
                      </div>

                      {/* View Toggle */}
                      <div className="flex items-center gap-1 bg-[#F0F0EB] p-0.5 border border-[#E2E2DC] rounded-xs print:hidden">
                        <button
                          onClick={() => {
                            soundFX.playClick(900);
                            setViewModeSys02("spec");
                          }}
                          className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-colors ${
                            viewModeSys02 === "spec"
                              ? "bg-[#111215] text-[#F7F7F4] font-bold"
                              : "text-[#525866] hover:text-[#111215]"
                          }`}
                        >
                          SPEC
                        </button>
                        <button
                          onClick={() => {
                            soundFX.playClick(1100);
                            setViewModeSys02("preview");
                          }}
                          className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-colors ${
                            viewModeSys02 === "preview"
                              ? "bg-[#111215] text-[#F7F7F4] font-bold"
                              : "text-[#525866] hover:text-[#111215]"
                          }`}
                        >
                          UI PROOF
                        </button>
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-black text-[#111215]">
                      Geges Smart Barber
                    </h3>

                    <p className="text-sm font-semibold text-[#1D4ED8]">
                      All-in-one barbershop ecosystem with real-time queue synchronization and fair barber workload allocation.
                    </p>

                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed font-normal">
                      Eliminates physical wait lines. Customers take live queue tokens from home, browse barbers, and order grooming products in one integrated mobile interface.
                    </p>

                    <AnimatePresence mode="wait">
                      {viewModeSys02 === "spec" ? (
                        <motion.div
                          key="sys02-spec"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="space-y-2 pt-2 border-t border-[#E2E2DC] font-mono text-xs"
                        >
                          <div className="text-[#111215] font-bold uppercase tracking-wider text-[11px]">Key Engineering Feats:</div>
                          <ul className="space-y-1.5 text-xs text-[#525866]">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={13} className="text-[#1D4ED8] shrink-0" />
                              <span>Fair-Work distribution algorithm balancing haircut turns</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={13} className="text-[#1D4ED8] shrink-0" />
                              <span>Clean Architecture with decoupled BLoC state isolation</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={13} className="text-[#1D4ED8] shrink-0" />
                              <span>Low-latency Firestore compound queries with local cache</span>
                            </li>
                          </ul>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sys02-preview"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="bg-[#111215] border border-[#2B2F3A] rounded-sm p-2 space-y-1"
                        >
                          <div className="flex items-center justify-between px-2 pt-1 font-mono text-[9px] text-[#A0A5B5] uppercase">
                            <span>VERIFIED UI // BARBER QUEUE &amp; SHOP</span>
                            <span className="text-emerald-400">FLUTTER BLOC</span>
                          </div>
                          <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden bg-black border border-[#2B2F3A]">
                            <img
                              src="/geges_barber_ui.webp"
                              alt="Geges Barber Mobile Interface"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {blueprints[0].tags.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E2E2DC] flex items-center justify-between print:hidden">
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedProject(blueprints[0]);
                      }}
                      className="font-mono text-xs font-bold uppercase tracking-wider text-[#111215] hover:text-[#1D4ED8] flex items-center gap-1"
                    >
                      <span>[VIEW ARCHITECTURE SPEC]</span>
                      <ArrowUpRight size={13} />
                    </button>

                    {blueprints[0].links.repo && (
                      <a
                        href={blueprints[0].links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#525866] hover:text-[#111215] flex items-center gap-1"
                      >
                        <span>SOURCE</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </article>

                {/* ===================================================== */}
                {/* SYSTEM 03: VISIONSAFE AI */}
                {/* ===================================================== */}
                <article className="spec-card rounded-sm p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs border-b border-[#E2E2DC] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-sm bg-[#111215] text-[#F7F7F4] font-bold">
                          SYS.03
                        </span>
                        <span className="font-bold text-[#111215]">CAPSTONE 02</span>
                      </div>

                      {/* View Toggle */}
                      <div className="flex items-center gap-1 bg-[#F0F0EB] p-0.5 border border-[#E2E2DC] rounded-xs print:hidden">
                        <button
                          onClick={() => {
                            soundFX.playClick(900);
                            setViewModeSys03("spec");
                          }}
                          className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-colors ${
                            viewModeSys03 === "spec"
                              ? "bg-[#111215] text-[#F7F7F4] font-bold"
                              : "text-[#525866] hover:text-[#111215]"
                          }`}
                        >
                          SPEC
                        </button>
                        <button
                          onClick={() => {
                            soundFX.playClick(1100);
                            setViewModeSys03("preview");
                          }}
                          className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-colors ${
                            viewModeSys03 === "preview"
                              ? "bg-[#111215] text-[#F7F7F4] font-bold"
                              : "text-[#525866] hover:text-[#111215]"
                          }`}
                        >
                          UI PROOF
                        </button>
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-black text-[#111215]">
                      VisionSafe Edge AI Guardian
                    </h3>

                    <p className="text-sm font-semibold text-[#1D4ED8]">
                      On-device computer vision guardian that dynamically blurs screens held dangerously close to the eyes.
                    </p>

                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed font-normal">
                      Protects eye health and mitigates early myopia. MediaPipe 3D Face Mesh analyzes eye-to-sensor depth locally in memory—100% private with zero image data transmitted over the network.
                    </p>

                    <AnimatePresence mode="wait">
                      {viewModeSys03 === "spec" ? (
                        <motion.div
                          key="sys03-spec"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="space-y-2 pt-2 border-t border-[#E2E2DC] font-mono text-xs"
                        >
                          <div className="text-[#111215] font-bold uppercase tracking-wider text-[11px]">Key Engineering Feats:</div>
                          <ul className="space-y-1.5 text-xs text-[#525866]">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={13} className="text-[#1D4ED8] shrink-0" />
                              <span>On-device MediaPipe Face Mesh landmark triangulation</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={13} className="text-[#1D4ED8] shrink-0" />
                              <span>Adaptive dynamic sampling reducing background CPU draw</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={13} className="text-[#1D4ED8] shrink-0" />
                              <span>Native Kotlin Foreground Service with system blur overlay</span>
                            </li>
                          </ul>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sys03-preview"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="bg-[#111215] border border-[#2B2F3A] rounded-sm p-2 space-y-1"
                        >
                          <div className="flex items-center justify-between px-2 pt-1 font-mono text-[9px] text-[#A0A5B5] uppercase">
                            <span>VERIFIED UI // ON-DEVICE DEPTH BLUR</span>
                            <span className="text-emerald-400">MEDIAPIPE AI</span>
                          </div>
                          <div className="relative aspect-[16/9] w-full rounded-xs overflow-hidden bg-black border border-[#2B2F3A]">
                            <img
                              src="/secure_cbt_ui.webp"
                              alt="VisionSafe Depth Guard Interface"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {blueprints[1].tags.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E2E2DC] flex items-center justify-between print:hidden">
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedProject(blueprints[1]);
                      }}
                      className="font-mono text-xs font-bold uppercase tracking-wider text-[#111215] hover:text-[#1D4ED8] flex items-center gap-1"
                    >
                      <span>[VIEW ARCHITECTURE SPEC]</span>
                      <ArrowUpRight size={13} />
                    </button>

                    {blueprints[1].links.repo && (
                      <a
                        href={blueprints[1].links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#525866] hover:text-[#111215] flex items-center gap-1"
                      >
                        <span>SOURCE</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </article>

              </div>

              {/* ======================================================= */}
              {/* SYSTEM 04: FEBRIAN BARBERSHOP AI AGENT */}
              {/* ======================================================= */}
              <article className="spec-card rounded-sm p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E2DC] pb-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-sm bg-[#111215] text-[#F7F7F4] font-bold">
                      SYS.04
                    </span>
                    <span className="font-bold text-[#111215]">
                      FEBRIAN BARBERSHOP CONVERSATIONAL AGENT
                    </span>
                  </div>
                  <span className="text-[#525866]">PRODUCTION DEPLOYMENT // 24/7 WHATSAPP AGENT</span>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-display font-black text-[#111215]">
                      Autonomous WhatsApp Business Engine
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                      Deployed for Febrian Barbershop. Operates 24/7 over the WhatsApp socket layer via Baileys and Groq (Llama 3.3 70B), parsing customer requests, managing calendar slots, and writing confirmed appointments directly into SQLite persistent storage.
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {blueprints[2].tags.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-4 flex flex-col md:items-end gap-3 print:hidden">
                    <button
                      onClick={() => {
                        soundFX.playClick();
                        setSelectedProject(blueprints[2]);
                      }}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#111215] hover:bg-[#1D4ED8] text-[#F7F7F4] font-mono text-xs uppercase tracking-wider transition-all"
                    >
                      <span>[INSPECT AGENT SPEC]</span>
                      <ArrowUpRight size={13} />
                    </button>

                    {blueprints[2].links.repo && (
                      <a
                        href={blueprints[2].links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#525866] hover:text-[#111215] flex items-center gap-1"
                      >
                        <span>VIEW AGENT CODE</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. CAPABILITIES: THE ARCHITECTURAL BLUEPRINT MATRIX */}
        {/* ============================================================ */}
        <section id="skills" className="py-24 border-b border-[#E2E2DC]">
          <div className="space-y-12">
            
            <div className="space-y-2 border-b border-[#E2E2DC] pb-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8]">
                [INDEX 02 // CAPABILITIES]
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#111215] tracking-tight">
                Architectural Pillars &amp; Tooling.
              </h2>
              <p className="font-mono text-xs text-[#525866] uppercase tracking-wider">
                NO FLUFF · ONLY PROFICIENT RUNTIMES &amp; REAL SYSTEM EXPERIENCE
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* PILLAR 1: MOBILE & HARDWARE */}
              <div className="spec-card rounded-sm p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E2DC] pb-3">
                  <span className="font-mono text-xs font-bold text-[#111215]">01 // MOBILE &amp; OS</span>
                  <Smartphone size={16} className="text-[#1D4ED8]" />
                </div>
                <ul className="space-y-2 font-mono text-xs text-[#525866]">
                  <li className="text-[#111215] font-semibold">Flutter &amp; Dart</li>
                  <li>Android Kotlin Native</li>
                  <li>OS Kiosk Lock (startLockTask)</li>
                  <li>FLAG_SECURE Hardware Lock</li>
                  <li>BLoC State Management</li>
                  <li>Clean Architecture</li>
                </ul>
              </div>

              {/* PILLAR 2: EDGE AI & VISION */}
              <div className="spec-card rounded-sm p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E2DC] pb-3">
                  <span className="font-mono text-xs font-bold text-[#111215]">02 // EDGE AI</span>
                  <Cpu size={16} className="text-[#1D4ED8]" />
                </div>
                <ul className="space-y-2 font-mono text-xs text-[#525866]">
                  <li className="text-[#111215] font-semibold">MediaPipe Face Mesh</li>
                  <li>PyTorch Edge Inference</li>
                  <li>YOLOv8 Real-Time Models</li>
                  <li>Nvidia Jetson Nano</li>
                  <li>Dynamic Frame Sampling</li>
                  <li>On-Device Privacy Engine</li>
                </ul>
              </div>

              {/* PILLAR 3: WEB & CLOUD SYSTEMS */}
              <div className="spec-card rounded-sm p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E2DC] pb-3">
                  <span className="font-mono text-xs font-bold text-[#111215]">03 // FULLSTACK</span>
                  <Globe size={16} className="text-[#1D4ED8]" />
                </div>
                <ul className="space-y-2 font-mono text-xs text-[#525866]">
                  <li className="text-[#111215] font-semibold">Next.js 15 &amp; React 19</li>
                  <li>TypeScript &amp; JavaScript</li>
                  <li>Tailwind CSS Utility</li>
                  <li>FastAPI &amp; Node.js</li>
                  <li>PostgreSQL &amp; SQLite</li>
                  <li>Firebase Firestore</li>
                </ul>
              </div>

              {/* PILLAR 4: INFRASTRUCTURE & SECURITY */}
              <div className="spec-card rounded-sm p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2E2DC] pb-3">
                  <span className="font-mono text-xs font-bold text-[#111215]">04 // PROTOCOLS</span>
                  <Terminal size={16} className="text-[#1D4ED8]" />
                </div>
                <ul className="space-y-2 font-mono text-xs text-[#525866]">
                  <li className="text-[#111215] font-semibold">Git &amp; GitHub Actions</li>
                  <li>Linux Ubuntu Shell</li>
                  <li>AES-256 Offline Storage</li>
                  <li>Dynamic QR Encryption</li>
                  <li>REST &amp; Socket Pipelines</li>
                  <li>Docker Containers</li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. OPERATIONAL TRACK RECORD (EXPERIENCE TIMELINE) */}
        {/* ============================================================ */}
        <section id="experience" className="py-24 border-b border-[#E2E2DC]">
          <div className="space-y-12">
            
            <div className="space-y-2 border-b border-[#E2E2DC] pb-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8]">
                [INDEX 03 // TIMELINE]
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#111215] tracking-tight">
                Operational Track Record.
              </h2>
            </div>

            <div className="space-y-6">
              {engineeringJourney.map((entry, idx) => (
                <div 
                  key={entry.period + entry.location}
                  className="spec-card rounded-sm p-6 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  <div className="space-y-2 md:max-w-xl">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#1D4ED8]">
                      <span>[LOG {String(idx + 1).padStart(2, "0")}]</span>
                      <span className="text-[#111215] font-bold">{entry.location}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-[#111215]">
                      {entry.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                      {entry.description}
                    </p>
                  </div>

                  <div className="font-mono text-xs font-bold text-[#111215] bg-[#F7F7F4] border border-[#E2E2DC] px-3 py-1.5 rounded-sm shrink-0 self-start">
                    {entry.period}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. TRANSMISSION: DIRECT DISPATCH */}
        {/* ============================================================ */}
        <section id="contact" className="py-24">
          <div className="spec-card rounded-sm p-8 sm:p-14 space-y-8 bg-white border border-[#E2E2DC]">
            
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-[#1D4ED8]">
                [INDEX 04 // TRANSMISSION]
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-[#111215] tracking-tight">
                Initiate Contact.
              </h2>
              <p className="text-base sm:text-lg text-[#525866] max-w-2xl font-normal leading-relaxed">
                Currently open for remote software engineering contracts, native Android/Flutter development, and edge AI implementations worldwide.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E2E2DC] print:hidden">
              <a
                href="mailto:irsydfchrynto@gmail.com"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-sm bg-[#111215] hover:bg-[#1D4ED8] text-[#F7F7F4] font-mono text-xs uppercase tracking-widest transition-all shadow-xs active:scale-95"
              >
                <span>SEND DIRECT EMAIL</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://wa.me/6285865826621"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-sm border border-[#E2E2DC] hover:border-[#111215] bg-white text-[#111215] font-mono text-xs uppercase tracking-widest transition-all shadow-xs"
              >
                <WhatsAppIcon size={14} />
                <span>WHATSAPP DISPATCH</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-4 rounded-sm text-[#525866] hover:text-[#111215] font-mono text-xs tracking-wider transition-colors"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? "EMAIL ADDRESS COPIED" : "irsydfchrynto@gmail.com"}</span>
              </button>
            </div>

            <div className="pt-8 border-t border-[#E2E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#525866]">
              <div>
                © {new Date().getFullYear()} MUHAMMAD IRSYAD FACHRYANTO // ARCHIVE &amp; STUDIO
              </div>
              <div>
                DESIGNED WITH SWISS EDITORIAL PRECISION &amp; NEXT.JS 15
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Recruiter Telemetry Terminal (CLI Easter Egg) */}
      <TelemetryTerminal />

      {/* Structured Case Study Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
