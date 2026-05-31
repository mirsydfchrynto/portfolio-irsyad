"use client";

import { motion } from "framer-motion";
import { productionExperience, blueprints } from "@/config/portfolioData";
import { ProjectLabCard } from "@/components/ProjectLabCard";
import { Zap, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

interface ArchiveSceneProps {
  setSelectedProject: (project: any) => void;
}

export function ArchiveScene({ setSelectedProject }: ArchiveSceneProps) {
  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: easeCubic }
  };

  return (
    <div className="space-y-64 md:space-y-96">
      {/* SCENE 4 — PRODUCTION_READY SYSTEMS */}
      <motion.section 
        id="production-experience" 
        className="brutal-card p-10 md:p-20 space-y-16 relative overflow-hidden group/main"
        {...fadeInUp}
      >
        {/* Dynamic environmental lighting */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#E31B23]/5 blur-[150px] pointer-events-none group-hover/main:opacity-100 opacity-50 transition-opacity duration-1000" />
        
        <div className="relative flex flex-wrap items-baseline justify-between gap-8 border-b border-white/5 pb-12">
          <div className="flex items-center gap-5">
            <span className="text-[14px] font-mono text-[#E31B23] font-black tracking-widest">[SCENE_04]</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/20 block font-black">
              PRODUCTION_READY_SYSTEMS
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
            <ShieldCheck size={14} className="text-[#E31B23] animate-pulse" />
            <span>Audit_State: <strong className="text-white/40">Verified_Secure</strong></span>
          </div>
        </div>

        <div className="relative grid lg:grid-cols-12 gap-20 items-start">
          {/* FEATURED VISUAL MODULE */}
          <div 
            onClick={() => setSelectedProject(productionExperience)}
            className="lg:col-span-5 aspect-[4/5] bg-[#020203] border border-white/10 overflow-hidden relative group/img cursor-pointer transition-all duration-1000 hover:border-[#E31B23]/50 hover:shadow-[0_0_80px_rgba(255,0,85,0.15)]"
          >
            <div className="absolute inset-0 z-10 architect-grid-dense opacity-[0.05] pointer-events-none" />
            
            <img
              src={productionExperience.image}
              alt={productionExperience.title}
              className="w-full h-full object-cover grayscale brightness-[0.4] group-hover/img:grayscale-0 group-hover/img:brightness-110 group-hover/img:scale-110 transition-all duration-[2000ms] ease-[0.16,1,0.3,1]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
            
            <div className="absolute bottom-12 left-12 flex items-center gap-5 translate-y-8 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-700 ease-out z-20">
              <div className="bg-white text-black px-8 py-4 font-mono text-[12px] font-black uppercase tracking-[0.2em] shadow-2xl">
                LAUNCH ANALYSIS
              </div>
              <div className="w-12 h-12 bg-[#E31B23] flex items-center justify-center text-white shadow-2xl">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>

          {/* CONTENT MODULE */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-10">
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-4 px-5 py-2 border border-[#E31B23]/40 bg-[#E31B23]/10 text-[#E31B23] font-mono text-[11px] uppercase tracking-[0.3em] font-black shadow-[0_0_30px_rgba(255,0,85,0.2)]">
                  Live Production System
                </div>
                <div className="inline-flex items-center gap-4 px-5 py-2 border border-white/10 bg-white/5 text-white/40 font-mono text-[11px] uppercase tracking-[0.3em] font-black">
                  Enterprise Grade
                </div>
              </div>
              
              <h3 className="section-type text-white lg:text-7xl xl:text-8xl tracking-tighter leading-[0.85] font-black uppercase">
                {productionExperience.title}
              </h3>
              <p className="text-[#E31B23] font-mono text-[12px] tracking-[0.4em] uppercase font-black opacity-80 pl-2 border-l-2 border-[#E31B23]">
                Role: {productionExperience.role} &mdash; {productionExperience.period}
              </p>
            </div>

            <p className="paragraph-editorial text-2xl text-white/60 leading-relaxed font-medium italic tracking-tight">
              &quot;{productionExperience.tagline}&quot;
            </p>

            <ul className="space-y-8 font-sans text-lg text-white/30 leading-relaxed border-y border-white/5 py-16">
              {productionExperience.metrics.map((metric, idx) => (
                <li key={idx} className="flex gap-8 items-start group/metric">
                  <div className="flex flex-col items-center pt-2">
                    <span className="text-[#E31B23] font-black font-mono text-xl">&gt;&gt;</span>
                    <div className="w-[1px] h-0 group-hover/metric:h-12 bg-[#E31B23]/20 transition-all duration-700" />
                  </div>
                  <span className="group-hover/metric:text-white transition-colors duration-500 font-bold">{metric}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-10 pt-4">
              <Magnetic strength={0.2}>
                <button
                  onClick={() => setSelectedProject(productionExperience)}
                  className="px-14 py-7 bg-white text-black font-mono text-[13px] font-black tracking-widest uppercase hover:bg-[#E31B23] hover:text-white transition-all duration-700 shadow-2xl"
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
                    className="px-12 py-7 border-2 border-white/10 hover:border-[#E31B23] text-[13px] font-mono tracking-widest text-white/40 hover:text-white flex items-center gap-5 transition-all uppercase font-black bg-white/[0.01]"
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
        className="space-y-24"
        {...fadeInUp}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-12 border-b-2 border-[#E31B23]/30 pb-12">
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-mono text-[#E31B23] font-black tracking-widest">[SCENE_05]</span>
            <h2 className="text-4xl font-black font-display uppercase tracking-[0.2em] text-white">Source Archive</h2>
          </div>
          <div className="font-mono text-[12px] text-white/20 uppercase tracking-[0.4em] font-black flex items-center gap-4">
            <Zap size={14} className="text-[#E31B23]" />
            <span>Experimental Systems &mdash; Technical Labs</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
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
