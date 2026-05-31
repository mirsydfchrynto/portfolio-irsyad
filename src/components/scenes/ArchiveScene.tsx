"use client";

import { motion } from "framer-motion";
import { productionExperience, blueprints } from "@/config/portfolioData";
import { ProjectLabCard } from "@/components/ProjectLabCard";
import { Zap, ArrowUpRight } from "lucide-react";
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
        className="brutal-card p-10 md:p-20 space-y-16 relative overflow-hidden group"
        {...fadeInUp}
      >
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ff0055]/5 blur-[150px] pointer-events-none" />
        
        <div className="relative flex flex-wrap items-baseline justify-between gap-8 border-b border-white/5 pb-10">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_04]</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 block font-black">
              PRODUCTION_SYSTEMS
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-white/20 italic uppercase tracking-widest">
            <Zap size={14} className="text-[#ff0055] animate-pulse" />
            <span>Operational Integrity: VERIFIED</span>
          </div>
        </div>

        <div className="relative grid lg:grid-cols-12 gap-20 items-start">
          <div 
            onClick={() => setSelectedProject(productionExperience)}
            className="lg:col-span-5 aspect-[4/5] bg-[#020203] border border-white/10 overflow-hidden relative group/img cursor-pointer transition-all duration-700 hover:border-[#ff0055]/50 hover:shadow-[0_0_60px_rgba(255,0,85,0.1)]"
          >
            <img
              src={productionExperience.image}
              alt={productionExperience.title}
              className="w-full h-full object-cover grayscale opacity-30 group-hover/img:opacity-100 group-hover/img:grayscale-0 group-hover/img:scale-110 transition-all duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 flex items-center gap-4 bg-white text-black px-6 py-3 font-mono text-[11px] font-black uppercase tracking-widest translate-y-6 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500 ease-out shadow-2xl">
              <span>LAUNCH ANALYSIS</span>
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-4 px-5 py-2 border border-[#ff0055]/40 bg-[#ff0055]/5 text-[#ff0055] font-mono text-[11px] uppercase tracking-[0.3em] font-black shadow-[0_0_20px_rgba(255,0,85,0.1)]">
                Production Stabilized
              </div>
              <h3 className="section-type text-white lg:text-6xl tracking-tighter">
                {productionExperience.title}
              </h3>
              <p className="text-sm text-[#ff0055] font-mono tracking-[0.3em] uppercase font-black opacity-80">
                Mission: {productionExperience.role} &mdash; {productionExperience.period}
              </p>
            </div>

            <p className="paragraph-editorial text-xl text-white/70 leading-relaxed font-medium">
              {productionExperience.tagline}
            </p>

            <ul className="space-y-6 font-sans text-base text-white/40 leading-relaxed border-y border-white/5 py-12">
              {productionExperience.metrics.map((metric, idx) => (
                <li key={idx} className="flex gap-6 items-start group/metric">
                  <span className="text-[#ff0055] font-black font-mono transition-transform group-hover/metric:translate-x-2">&gt;&gt;</span>
                  <span className="group-hover/metric:text-white transition-colors duration-300 font-medium">{metric}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-8 pt-4">
              <Magnetic strength={0.2}>
                <button
                  onClick={() => setSelectedProject(productionExperience)}
                  className="px-12 py-6 bg-white text-black font-mono text-[12px] font-black tracking-widest uppercase hover:bg-[#ff0055] hover:text-white transition-all duration-500 shadow-xl"
                >
                  DEEP_DIVE_PROTOCOLS
                </button>
              </Magnetic>
              {productionExperience.url && (
                <Magnetic strength={0.2}>
                  <a
                    href={productionExperience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-6 border border-white/10 hover:border-[#ff0055] text-[12px] font-mono tracking-widest text-white/40 hover:text-white flex items-center gap-4 transition-all uppercase font-black bg-white/[0.02]"
                  >
                    <span>LIVE_SYNC</span>
                    <ArrowUpRight size={18} />
                  </a>
                </Magnetic>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* SCENE 5 — THE ARCHIVE / LABS */}
      <motion.section 
        id="blueprints" 
        className="space-y-16"
        {...fadeInUp}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-8 border-b border-[#ff0055]/30 pb-10">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_05]</span>
            <h2 className="text-2xl font-black font-display uppercase tracking-[0.2em] text-white">Source Archive</h2>
          </div>
          <span className="font-mono text-[11px] text-white/20 uppercase tracking-[0.3em] font-bold">
            Engineering Labs &mdash; System Explorations
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
