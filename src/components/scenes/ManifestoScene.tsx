"use client";

import { motion } from "framer-motion";
import { introduction, exploredTools } from "@/config/portfolioData";

export function ManifestoScene() {
  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: easeCubic }
  };

  return (
    <motion.section 
      id="about" 
      className="grid md:grid-cols-12 gap-16 items-stretch"
      {...fadeInUp}
    >
      <div className="md:col-span-4 brutal-card p-12 flex flex-col justify-between group hover:border-[#ff0055]/40">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_03]</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 block font-black">
              MANIFESTO
            </span>
          </div>
          <h3 className="text-3xl font-bold font-display tracking-tighter text-white leading-[1.1]">
            Foundations &amp; <br />
            Engineering <br />
            Principles
          </h3>
        </div>
        <div className="font-mono text-[11px] text-white/10 block select-none leading-relaxed mt-24 uppercase tracking-[0.3em] font-bold">
          Archived 2023 // Tegal, ID <br />
          <span className="text-[#ff0055] opacity-50">High integrity technical log</span>
        </div>
      </div>
      
      <div className="md:col-span-8 brutal-card p-12 md:p-20 space-y-16 relative group overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff0055]/5 blur-[80px] pointer-events-none" />
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tighter leading-[1.1] text-white">
          Architecting <span className="text-[#ff0055]">high-integrity</span> digital experiences through clean engineering and <span className="italic font-light opacity-60">bold minimalism</span>.
        </h2>
        <p className="paragraph-editorial text-lg md:text-xl text-white/60">
          {introduction.bio}
        </p>
        
        <div className="pt-16 border-t border-white/5 grid sm:grid-cols-3 gap-12 font-mono text-[11px] text-white/10 uppercase tracking-[0.2em] select-none font-bold">
          {exploredTools.map((exp, i) => (
            <div key={i} className="space-y-6 group/tool">
              <span className="text-[#ff0055] font-black">0{i+1} // {exp.category}</span>
              <ul className="space-y-3 text-white/40 font-sans text-[12px] normal-case tracking-normal font-medium group-hover/tool:text-white transition-colors duration-500">
                {exp.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-3">
                    <span className="w-1.5 h-[1px] bg-[#ff0055]/40" />
                    {tech}
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
