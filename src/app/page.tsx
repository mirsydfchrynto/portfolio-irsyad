"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ThreeFluidWave } from "@/components/ThreeFluidWave";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
import { 
  introduction, 
  productionExperience, 
  blueprints, 
  engineeringJourney, 
  exploredTools 
} from "@/config/portfolioData";
import { pdfBase64 } from "@/config/pdfBase64";
import { 
  ArrowUpRight, 
  ArrowDown,
  Download, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Layers,
  ExternalLink,
  Code2,
  Terminal,
  Cpu
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  const easeOut = [0.16, 1, 0.3, 1] as any;

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: easeOut }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden relative">
      <Navbar />

      {/* Ambient 3D Fluid Silk Wave (Interactive Background Art) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <ThreeFluidWave className="opacity-70" />
      </div>

      <div className="relative z-10">
        
        {/* ============================================================ */}
        {/* 01. HERO / EDITORIAL OPENING */}
        {/* ============================================================ */}
        <header className="min-h-[95svh] flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-32 pb-16 max-w-7xl mx-auto">
          
          {/* Top Micro-Header */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-6 text-xs font-mono tracking-widest uppercase text-slate-600 font-medium"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Available for Full-Time Roles · Remote / Relocation Ready · 2026</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-slate-600">
              <span>Based in Indonesia</span>
              <span>•</span>
              <span>Open Worldwide (Remote &amp; On-Site)</span>
            </div>
          </motion.div>

          {/* Grand Typographic Statement */}
          <div className="py-12 md:py-20 space-y-10 max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-display font-black text-slate-900 tracking-tight leading-[1.05]"
            >
              Building digital products that are <span className="font-serif italic font-normal text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">dependable</span>, clear, and effortless to use.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
              className="text-lg sm:text-xl md:text-2xl text-slate-700 font-normal leading-relaxed max-w-3xl"
            >
              I&apos;m <strong className="text-slate-900 font-semibold">M. Irsyad Fachryanto</strong>. I create reliable mobile applications with Flutter &amp; Android, modern web platforms with Next.js, and practical AI assistants that solve real daily operational challenges.
            </motion.p>

            {/* Subtle Action Link Trio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: easeOut }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <a
                href="#selected-works"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white hover:bg-blue-600 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-xl active:scale-95"
              >
                <span>Explore Works</span>
                <ArrowDown size={15} />
              </a>

              <a
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="CV M.IRSYAD FACHRYANTO.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all"
              >
                <Download size={15} className="text-blue-600" />
                <span>{downloading ? "Syncing Buffer..." : "Curriculum Vitae"}</span>
              </a>
            </motion.div>
          </div>

          {/* Bottom Micro-Meta */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-between pt-6 border-t border-slate-200/80 text-xs font-mono text-slate-600"
          >
            <span>[01] SELECTED INDEX</span>
            <span className="hidden sm:inline">SCROLL TO DISCOVER ARCHIVE</span>
            <span>2024 — 2026</span>
          </motion.div>
        </header>

        {/* ============================================================ */}
        {/* 02. EDITORIAL SPOTLIGHT: OKEY BIMBEL (LIVE PRODUCTION) */}
        {/* ============================================================ */}
        <section id="selected-works" className="py-24 md:py-36 border-t border-slate-200/90 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="space-y-16">
            
            {/* Section Tag */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-bold">
                01 / Production Spotlight
              </span>
              <span className="text-xs font-mono text-slate-600">LIVE IN PRODUCTION</span>
            </div>

            {/* Giant Editorial Work Row */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-6 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>In Active School Exam Operations</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-tight">
                    Okey Bimbel CBT Ecosystem
                  </h2>

                  <p className="text-lg text-slate-700 font-normal leading-relaxed">
                    A dual-platform digital exam system built to eliminate cheating completely. Students take tests in a locked-down Android app, while educators supervise live sessions and scoring from a web dashboard.
                  </p>
                </div>

                {/* Plain-English Technical Breakthroughs */}
                <div className="space-y-5 pt-4 border-t border-slate-200">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      100% Cheat-Proof Screen Lock
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                      Turns standard Android devices into dedicated test terminals. Students cannot open browser tabs, take screenshots, or switch apps during tests.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      Anti-Screenshot Dynamic QR Code
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                      Students join exams by scanning a live QR code on the teacher&apos;s screen that rotates every 5 seconds, preventing students from sharing photo codes outside the room.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      Offline-Safe Answer Preservation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                      If classroom Wi-Fi drops, student answers remain encrypted in local phone storage and resynchronize automatically once reconnected—zero lost work.
                    </p>
                  </div>
                </div>

                {/* Stack & CTAs */}
                <div className="space-y-6 pt-4">
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600">
                    <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200">Flutter Mobile</span>
                    <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200">Kotlin Native</span>
                    <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200">Next.js 16</span>
                    <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200">Firestore</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(productionExperience)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95"
                    >
                      <span>Read Full Architecture Journal</span>
                      <ArrowUpRight size={14} />
                    </button>

                    {productionExperience.url && (
                      <a
                        href={productionExperience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 text-xs font-semibold tracking-wider uppercase transition-colors"
                      >
                        <Download size={14} className="text-blue-600" />
                        <span>Download Release APK</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div 
                onClick={() => setSelectedProject(productionExperience)}
                className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 cursor-pointer group relative aspect-[4/3]"
              >
                <img
                  src={productionExperience.image}
                  alt="Okey Bimbel CBT Interface Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-blue-300 block">Interactive Case Study</span>
                    <span className="text-lg font-bold">Click to examine system architecture &amp; failure recovery logs &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 03. CURATED ARCHIVE & CAPSTONES */}
        {/* ============================================================ */}
        <section id="projects" className="py-24 md:py-36 border-t border-slate-200/90 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="space-y-16">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-bold block mb-1">
                  02 / Capstones &amp; Engineering Lab
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight">
                  Selected Works
                </h2>
              </div>
              <p className="text-xs font-mono text-slate-600 uppercase tracking-wider">
                4 CURATED LAB WORKS
              </p>
            </div>

            {/* Editorial Showcase Rows */}
            <div className="divide-y divide-slate-200/90">
              {blueprints.map((item, idx) => (
                <motion.article
                  key={item.id}
                  {...fadeIn}
                  onClick={() => setSelectedProject(item as any)}
                  className="py-12 md:py-16 grid lg:grid-cols-12 gap-8 lg:gap-12 items-baseline group cursor-pointer hover:bg-blue-50/30 transition-colors -mx-4 px-4 rounded-2xl"
                >
                  {/* Number & Meta */}
                  <div className="lg:col-span-2 font-mono text-xs text-slate-600 space-y-1">
                    <span className="text-base font-bold text-slate-900 block group-hover:text-blue-600 transition-colors">0{idx + 2}</span>
                    <span className="uppercase tracking-wider">PROJECT</span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-6 space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-800 font-medium leading-snug">
                      {item.tagline}
                    </p>
                    {(item as any).quickSummary && (
                      <p className="text-sm text-slate-600 font-normal leading-relaxed pt-1">
                        {(item as any).quickSummary}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Action & Repo */}
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col lg:items-end justify-between gap-4 self-center">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform tracking-wider uppercase font-mono">
                      <span>Explore Architecture</span>
                      <ArrowUpRight size={14} />
                    </span>
                    {item.links.repo && (
                      <span className="text-xs font-mono text-slate-600 truncate max-w-[240px]">
                        {item.links.repo.replace("https://github.com/", "gh/")}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 04. PHILOSOPHY & ENGINEERING MINDSET */}
        {/* ============================================================ */}
        <section id="philosophy" className="py-24 md:py-36 border-t border-slate-200/90 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="space-y-16">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-bold">
                03 / Engineering Principles
              </span>
              <span className="text-xs font-mono text-slate-600">HOW I BUILD</span>
            </div>

            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
                &ldquo;Software should be surgically reliable under the hood, yet feel <span className="font-serif italic font-normal text-blue-600">clear and effortless</span> for everyone.&rdquo;
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-blue-600">[01] OPERATIONAL INTEGRITY</span>
                <h3 className="text-lg font-bold text-slate-900">Reliable Under Real Conditions</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  From intermittent classroom Wi-Fi to high-concurrency exam peaks, software must protect user data, prevent cheating, and never freeze unexpectedly.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-blue-600">[02] CLEAN BOUNDARIES</span>
                <h3 className="text-lg font-bold text-slate-900">Decoupled &amp; Easy to Maintain</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  I isolate state management from UI layers. When databases or cloud services change, core business logic and user interfaces remain solid and untangled.
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-blue-600">[03] PRACTICAL INTELLIGENCE</span>
                <h3 className="text-lg font-bold text-slate-900">AI That Solves Daily Problems</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  From on-device eye health guardians running privately without internet, to WhatsApp assistants managing appointments 24/7, AI is used where it provides tangible value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 05. TECHNICAL INDEX / CAPABILITIES */}
        {/* ============================================================ */}
        <section id="index" className="py-24 md:py-36 border-t border-slate-200/90 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="space-y-16">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-bold">
                04 / Technical Index
              </span>
              <span className="text-xs font-mono text-slate-600">CAPABILITIES &amp; STACK</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {exploredTools.map((category, i) => (
                <div key={category.category} className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                    <span className="text-xs font-mono font-bold text-blue-600">0{i+1}</span>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.technologies.map((tech) => (
                      <li key={tech} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 06. CAREER & MENTORING TIMELINE */}
        {/* ============================================================ */}
        <section id="experience" className="py-24 md:py-36 border-t border-slate-200/90 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="space-y-16">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-bold">
                05 / Career Chronicle
              </span>
              <span className="text-xs font-mono text-slate-600">PRODUCTION &amp; MENTORSHIP</span>
            </div>

            <div className="divide-y divide-slate-200">
              {engineeringJourney.map((entry, i) => (
                <div key={i} className="py-8 grid md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-3 font-mono text-xs text-blue-600 font-bold">
                    {entry.period}
                  </div>
                  <div className="md:col-span-4 space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">{entry.role}</h3>
                    <span className="text-xs font-mono text-slate-600">{entry.location}</span>
                  </div>
                  <div className="md:col-span-5 text-sm text-slate-600 leading-relaxed">
                    {entry.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 07. CONTACT / CALL TO ACTION (AWWWARDS EDITORIAL FINALE) */}
        {/* ============================================================ */}
        <section id="contact" className="py-32 md:py-48 border-t border-slate-200/90 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto text-left">
          <div className="space-y-12 max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-bold block">
              06 / Get In Touch
            </span>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.05]">
              Let&apos;s build something <span className="font-serif italic font-normal text-blue-600">meaningful</span> together.
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Whether you have an open software engineering role, a mobile app in need of performance engineering, or an ambitious product idea — my inbox is always open.
            </p>

            {/* Giant Clickable Email */}
            <div className="pt-4">
              <a
                href="mailto:irsydfchrynto@gmail.com"
                className="group inline-flex items-center gap-4 text-2xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 hover:text-blue-600 transition-colors border-b-2 border-slate-300 hover:border-blue-600 pb-2"
              >
                <span>irsydfchrynto@gmail.com</span>
                <ArrowUpRight size={32} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </a>
            </div>

            {/* Minimalist Social Links */}
            <div className="pt-10 flex flex-wrap gap-8 text-xs font-mono uppercase tracking-widest text-slate-600 font-semibold">
              <a 
                href="https://linkedin.com/in/mirsydfchrynto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <LinkedInIcon size={14} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me/6285865826621" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://github.com/mirsydfchrynto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <GitHubIcon size={14} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://instagram.com/muhammadirsyadf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOOTER */}
        {/* ============================================================ */}
        <footer className="py-12 border-t border-slate-200 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-600">
          <div>
            M. Irsyad Fachryanto &copy; 2026 // Craftsmanship &amp; Architectural Integrity
          </div>
          <div className="flex items-center gap-4">
            <span>Next.js 16 · Three.js · Flutter · Kotlin</span>
            <a href="#" className="text-blue-600 hover:underline">Back to top ↑</a>
          </div>
        </footer>

      </div>

      {/* CASE STUDY MODAL */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
