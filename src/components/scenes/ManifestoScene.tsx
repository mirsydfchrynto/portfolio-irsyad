"use client";

import { motion } from "framer-motion";
import { introduction, exploredTools } from "@/config/portfolioData";
import { Activity, Shield, Cpu } from "lucide-react";

export function ManifestoScene() {
  const easeCubic: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: easeCubic }
  };

  return (
    <motion.section 
      id="about" 
      className="grid md:grid-cols-12 gap-8 md:gap-10 items-stretch"
      {...fadeInUp}
    >
      {/* 1. MANIFESTO HEADER BOX */}
      <div className="md:col-span-4 brutal-card p-6 md:p-10 flex flex-col justify-between group hover:border-[#E31B23]/40 transition-all duration-700 bg-[#050507]">
        <div className="space-y-8 md:space-y-10">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-mono text-[#E31B23] font-black tracking-widest">[SCENE_03]</span>
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/20 block font-black">
              CORE_MANIFESTO
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black font-display tracking-tighter text-white leading-[1] uppercase">
            Foundations <br />
            &amp; Engineering <br />
            Principles
          </h3>

          <div className="space-y-4 pt-8 md:pt-10 border-t border-white/5">
            <div className="flex items-center justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest font-black">
              <span className="flex items-center gap-2"><Shield size={10} className="text-[#E31B23]" /> Integrity</span>
              <span className="text-white/40">Enabled</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest font-black">
              <span className="flex items-center gap-2"><Cpu size={10} className="text-[#E31B23]" /> Logic</span>
              <span className="text-white/40">Clean_Only</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-white/20 uppercase tracking-widest font-black">
              <span className="flex items-center gap-2"><Activity size={10} className="text-[#E31B23]" /> Output</span>
              <span className="text-white/40">High_Fidelity</span>
            </div>
          </div>
        </div>

        <div className="font-mono text-[10px] text-white/10 block select-none leading-relaxed mt-12 md:mt-20 uppercase tracking-[0.4em] font-black group-hover:text-white/20 transition-colors">
          Archived // Tegal, ID <br />
          <span className="text-[#E31B23] opacity-50 shadow-[0_0_10px_rgba(227, 27, 35,0.2)]">Personal technical archive</span>
        </div>
      </div>
      
      {/* 2. MANIFESTO CONTENT BOX */}
      <div className="md:col-span-8 brutal-card p-6 md:p-20 space-y-12 md:space-y-20 relative group overflow-hidden bg-[#0a0a0c]">
        {/* Ambient identity red glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E31B23]/5 blur-[100px] pointer-events-none group-hover:bg-[#E31B23]/10 transition-all duration-1000" />
        
        <div className="space-y-8 md:space-y-12 relative z-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tighter leading-[1.1] md:leading-[1] text-white uppercase">
            Architecting <span className="text-[#E31B23] drop-shadow-[0_0_20px_rgba(227, 27, 35,0.3)]">high-integrity</span> <br className="hidden md:block" />
            digital experiences through clean engineering and <span className="italic font-light opacity-50 lowercase tracking-tight">bold minimalism</span>.
          </h2>
          <p className="paragraph-editorial text-lg md:text-2xl text-white/50 leading-relaxed font-medium">
            {introduction.bio}
          </p>
        </div>
        
        {/* 3. TECHNOLOGY GRID */}
        <div className="pt-12 md:pt-16 border-t border-white/5 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 font-mono text-[10px] md:text-[11px] text-white/10 uppercase tracking-[0.2em] md:tracking-[0.3em] select-none font-black relative z-10">
          {exploredTools.map((exp, i) => (
            <div key={i} className="space-y-6 md:space-y-8 group/tool">
              <div className="flex items-center gap-3">
                <span className="text-[#E31B23] font-black">0{i+1}</span>
                <span className="text-white/40 group-hover/tool:text-[#E31B23] transition-colors">{exp.category}</span>
              </div>
              <ul className="space-y-3 md:space-y-4 text-white/30 font-sans text-[12px] md:text-[13px] normal-case tracking-normal font-bold group-hover/tool:text-white transition-all duration-700">
                {exp.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-3 md:gap-4 group/item">
                    <div className="w-1.5 h-1.5 bg-[#E31B23]/20 border border-[#E31B23]/40 group-hover/tool:bg-[#E31B23] transition-all" />
                    <span className="opacity-60 group-hover/tool:opacity-100 transition-opacity">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
