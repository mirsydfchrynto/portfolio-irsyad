"use client";

import { motion } from "framer-motion";
import { inlineResume } from "@/config/portfolioData";
import { pdfBase64 } from "@/config/pdfBase64";
import { Download, Shield, Terminal, Cpu, Activity, CheckCircle2 } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

interface ProfileSceneProps {
  handleDownload: () => void;
  downloading: boolean;
}

export function ProfileScene({ handleDownload, downloading }: ProfileSceneProps) {
  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: easeCubic }
  };

  return (
    <motion.section 
      id="resume" 
      className="grid lg:grid-cols-12 gap-16 items-start pt-32 border-t-2 border-white/5"
      {...fadeInUp}
    >
      {/* 1. STICKY IDENTITY BOX */}
      <div className="lg:col-span-4 space-y-12 sticky top-40">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_06]</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 block font-black">
              IDENTITY_SYNC
            </span>
          </div>
          <h2 className="section-type text-white lg:text-5xl leading-[1] tracking-tighter uppercase font-black">
            Engineering <br /> Profile
          </h2>
        </div>

        <div className="brutal-card p-10 space-y-10 hover:border-[#ff0055]/50 transition-all duration-700 bg-[#050507]">
          <div className="space-y-10 font-mono text-[11px] text-white/30 uppercase tracking-[0.2em] font-bold">
            <div className="space-y-4">
              <span className="text-[#ff0055]/50 block font-black">System_Identity &rarr;</span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center">
                   <Cpu size={20} className="text-[#ff0055]" />
                </div>
                <span className="text-white text-[15px] normal-case tracking-normal font-sans font-black">M. Irsyad Fachryanto</span>
              </div>
            </div>
            
            <div className="space-y-4 border-t border-white/5 pt-8">
              <span className="text-[#ff0055]/50 block font-black">Focus_Node &rarr;</span>
              <span className="text-white text-[14px] normal-case tracking-normal font-sans font-black block">Full-Stack Architect &amp; Native Mobile</span>
            </div>

            <div className="space-y-4 border-t border-white/5 pt-8">
              <div className="flex items-center justify-between">
                <span className="text-[#ff0055]/50 block font-black">Performance &rarr;</span>
                <div className="flex items-center gap-2 text-[#ff0055]">
                  <Activity size={12} className="animate-pulse" />
                  <span className="font-black text-[12px]">IPK: 3.92</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            <Magnetic strength={0.15}>
              <a 
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="muhammad-irsyad-fachryanto-resume.pdf"
                onClick={handleDownload}
                className="group relative flex items-center justify-between w-full h-[75px] px-8 bg-white text-black font-mono text-[13px] font-black uppercase tracking-widest overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">{downloading ? "SYNCHRONIZING..." : "DOWNLOAD_RESUME"}</span>
                <Download className="relative z-10 group-hover:translate-y-1 transition-transform" size={20} />
                <div className="absolute inset-0 bg-[#ff0055] translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* 2. MAIN RESUME CONTENT */}
      <div className="lg:col-span-8 space-y-20">
        <div className="brutal-card p-12 md:p-24 space-y-32 bg-[#0a0a0c]">
          {/* Executive Summary */}
          <div className="space-y-10">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#ff0055] font-black flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#ff0055]" /> // EXEC_SUMMARY
            </h3>
            <p className="text-2xl md:text-3xl text-white/80 leading-snug font-display font-medium tracking-tighter uppercase italic">
              "{inlineResume.summary}"
            </p>
          </div>

          {/* Production History */}
          <div className="space-y-16">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#ff0055] font-black flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#ff0055]" /> // PROD_HISTORY
            </h3>
            <div className="space-y-24">
              {inlineResume.experience.map((exp, i) => (
                <div key={i} className="space-y-10 group/exp">
                  <div className="flex flex-wrap justify-between items-baseline gap-8 border-b border-white/5 pb-6">
                    <h4 className="text-3xl md:text-4xl font-black text-white group-hover/exp:text-[#ff0055] transition-colors duration-700 tracking-tighter uppercase">{exp.role} @ {exp.company}</h4>
                    <span className="font-mono text-xs text-white/20 uppercase tracking-[0.3em] font-black">{exp.period}</span>
                  </div>
                  <p className="paragraph-editorial text-xl text-white/50 leading-relaxed font-medium">{exp.description}</p>
                  <ul className="space-y-6 font-sans text-[17px] text-white/40 font-medium">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-8 items-start group/bullet">
                        <div className="flex flex-col items-center pt-2">
                          <CheckCircle2 size={16} className="text-[#ff0055] opacity-40 group-hover/bullet:opacity-100 transition-opacity" />
                          <div className="w-[1px] h-4 bg-white/5 mt-2" />
                        </div>
                        <span className="group-hover/bullet:text-white transition-colors duration-500">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Matrix */}
          <div className="space-y-16 pt-24 border-t border-white/5">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.5em] text-[#ff0055] font-black flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#ff0055]" /> // TECH_MATRIX
            </h3>
            <div className="grid sm:grid-cols-3 gap-16">
              {inlineResume.skills.map((skill, i) => (
                <div key={i} className="space-y-10 group/skill">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-[#ff0055] font-black tracking-[0.3em] block uppercase">0{i+1}</span>
                    <span className="font-mono text-[10px] text-white/40 font-black uppercase tracking-widest">{skill.category}</span>
                  </div>
                  <ul className="space-y-5 text-[15px] text-white/30 font-bold group-hover/skill:text-white transition-all duration-700">
                    {skill.tools.map((t) => (
                      <li key={t} className="flex items-center gap-5">
                        <div className="w-2 h-2 bg-[#ff0055]/5 border border-[#ff0055]/20 group-hover/skill:bg-[#ff0055] group-hover/skill:border-[#ff0055] transition-all rotate-45 shadow-[0_0_15px_rgba(255,0,85,0)] group-hover/skill:shadow-[0_0_15px_rgba(255,0,85,0.4)]" />
                        <span className="opacity-60 group-hover/skill:opacity-100 transition-opacity uppercase tracking-tight">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
