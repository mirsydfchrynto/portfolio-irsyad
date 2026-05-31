"use client";

import { motion } from "framer-motion";
import { productionExperience, blueprints } from "@/config/portfolioData";
import { ProjectLabCard } from "@/components/ProjectLabCard";
import { Zap, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

interface Project {
  id: string;
  title: string;
  tagline: string;
  role?: string;
  period?: string;
  url?: string;
  image?: string;
  metrics?: string[];
  timeline?: Array<{ label: string; description: string }>;
  journal: any;
  links?: { repo: string; visit: string };
}

interface ArchiveSceneProps {
  setSelectedProject: (project: Project) => void;
}

export function ArchiveScene({ setSelectedProject }: ArchiveSceneProps) {
  const easeCubic: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: easeCubic }
  };

  return (
    <div className="space-y-16 md:space-y-64 lg:space-y-96">
      {/* SCENE 4 — PRODUCTION_READY SYSTEMS */}
      <motion.section 
        id="production-experience" 
        className="brutal-card p-4 md:p-20 space-y-12 md:space-y-16 relative overflow-hidden group/main"
        {...fadeInUp}
      >
        {/* Dynamic environmental lighting */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#E31B23]/5 blur-[80px] md:blur-[150px] pointer-events-none group-hover/main:opacity-100 opacity-50 transition-opacity duration-1000" />
        
        <div className="relative flex flex-wrap items-baseline justify-between gap-6 border-b border-white/5 pb-8 md:pb-12">
          <div className="flex items-center gap-4 md:gap-5">
            <span className="text-[12px] md:text-[14px] font-mono text-[#E31B23] font-black tracking-widest">[SCENE_04]</span>
            <span className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/20 block font-black">
              PRODUCTION_READY_SYSTEMS
            </span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.3em] md:tracking-[0.4em] font-black">
            <ShieldCheck size={14} className="text-[#E31B23] animate-pulse" />
            <span>Audit: <strong className="text-white/40">Verified</strong></span>
          </div>
        </div>

        <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* FEATURED VISUAL MODULE */}
          <div 
            onClick={() => setSelectedProject(productionExperience)}
            className="lg:col-span-5 aspect-[4/5] bg-[#020203] border border-white/10 overflow-hidden relative group/img cursor-pointer transition-all duration-1000 hover:border-[#E31B23]/50 hover:shadow-[0_0_80px_rgba(227, 27, 35,0.15)]"
          >
            <div className="absolute inset-0 z-10 architect-grid-dense opacity-[0.05] pointer-events-none" />
            
            <img
              src={productionExperience.image}
              alt={productionExperience.title}
              className="w-full h-full object-cover grayscale brightness-[0.4] group-hover/img:grayscale-0 group-hover/img:brightness-110 group-hover/img:scale-110 transition-all duration-[2000ms] ease-[0.16,1,0.3,1]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
            
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 flex items-center gap-3 md:gap-5 translate-y-8 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-700 ease-out z-20">
              <div className="bg-white text-black px-4 md:px-8 py-2 md:py-4 font-mono text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] shadow-2xl">
                LAUNCH ANALYSIS
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E31B23] flex items-center justify-center text-white shadow-2xl">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>

          {/* CONTENT MODULE */}
          <div className="lg:col-span-7 space-y-10 md:space-y-16">
            <div className="space-y-6 md:space-y-10">
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="inline-flex items-center gap-3 md:gap-4 px-3 md:px-5 py-1.5 md:py-2 border border-[#E31B23]/40 bg-[#E31B23]/10 text-[#E31B23] font-mono text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-black shadow-[0_0_30px_rgba(227, 27, 35,0.2)]">
                  Live Production System
                </div>
                <div className="inline-flex items-center gap-3 md:gap-4 px-3 md:px-5 py-1.5 md:py-2 border border-white/10 bg-white/5 text-white/40 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-black">
                  Enterprise Grade
                </div>
              </div>
              
              <h3 className="section-type text-white text-5xl md:text-7xl xl:text-8xl tracking-tighter leading-[0.95] md:leading-[0.85] font-black uppercase">
                {productionExperience.title}
              </h3>
              <p className="text-[#E31B23] font-mono text-[10px] md:text-[12px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-black opacity-80 pl-2 border-l-2 border-[#E31B23]">
                Role: {productionExperience.role} &mdash; {productionExperience.period}
              </p>
            </div>

            <p className="paragraph-editorial text-xl md:text-2xl text-white/60 leading-relaxed font-medium italic tracking-tight">
              &quot;{productionExperience.tagline}&quot;
            </p>

            <ul className="space-y-6 md:space-y-8 font-sans text-base md:text-lg text-white/30 leading-relaxed border-y border-white/5 py-8 md:py-16">
              {productionExperience.metrics.map((metric, idx) => (
                <li key={idx} className="flex gap-4 md:gap-8 items-start group/metric">
                  <div className="flex flex-col items-center pt-2">
                    <span className="text-[#E31B23] font-black font-mono text-lg md:text-xl">&gt;&gt;</span>
                    <div className="w-[1px] h-0 group-hover/metric:h-12 bg-[#E31B23]/20 transition-all duration-700" />
                  </div>
                  <span className="group-hover/metric:text-white transition-colors duration-500 font-bold">{metric}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-6 md:gap-10 pt-4">
              <Magnetic strength={0.2}>
                <button
                  onClick={() => setSelectedProject(productionExperience)}
                  className="px-8 md:px-14 py-4 md:py-7 bg-white text-black font-mono text-[11px] md:text-[13px] font-black tracking-widest uppercase hover:bg-[#E31B23] hover:text-white transition-all duration-700 shadow-2xl w-full sm:w-auto"
                >
                  DEEP_DIVE_PROTOCOL
                </button>
              </Magnetic>
              {productionExperience.url && (
                <Magnetic strength={0.2}>
                  <a
                    href={productionExperience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 md:px-12 py-4 md:py-7 border-2 border-white/10 hover:border-[#E31B23] text-[11px] md:text-[13px] font-mono tracking-widest text-white/40 hover:text-white flex items-center justify-center gap-4 md:gap-5 transition-all uppercase font-black bg-white/[0.01] w-full sm:w-auto"
                  >
                    <span>PRODUCTION_SYNC</span>
                    <ArrowUpRight size={20} className="text-[#E31B23]" />
                  </a>
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SCENE 5 — SOURCE ARCHIVE / LABS */}
      <motion.section 
        id="blueprints" 
        className="space-y-16 md:space-y-24"
        {...fadeInUp}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-8 md:gap-12 border-b-2 border-[#E31B23]/30 pb-8 md:pb-12">
          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-[12px] md:text-[14px] font-mono text-[#E31B23] font-black tracking-widest">[SCENE_05]</span>
            <h2 className="text-2xl md:text-4xl font-black font-display uppercase tracking-[0.1em] md:tracking-[0.2em] text-white">Source Archive</h2>
          </div>
          <div className="font-mono text-[10px] md:text-[12px] text-white/20 uppercase tracking-[0.3em] md:tracking-[0.4em] font-black flex items-center gap-3 md:gap-4">
            <Zap size={14} className="text-[#E31B23]" />
            <span>Experimental Systems &mdash; Technical Labs</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blueprints.map((project) => (
            <ProjectLabCard 
              key={project.id} 
              project={project} 
              onOpenDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
