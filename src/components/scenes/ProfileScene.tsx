"use client";

import { motion } from "framer-motion";
import { inlineResume, pdfBase64 } from "@/config/portfolioData";
import { Download, Shield, Terminal, Cpu } from "lucide-react";
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
      <div className="lg:col-span-4 space-y-12 sticky top-32">
        <div className="space-y-6">
          <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-[#ff0055] font-black block">
            [SCENE_06] IDENTITY_SYNC
          </span>
          <h2 className="section-type text-white lg:text-5xl leading-tight tracking-tighter">Engineering Profile</h2>
        </div>

        <div className="brutal-card p-10 space-y-10 hover:border-[#ff0055]/40 transition-all duration-700">
          <div className="space-y-8 font-mono text-[11px] text-white/30 uppercase tracking-[0.2em] font-bold">
            <div className="space-y-3">
              <span className="text-[#ff0055]/50 block">Identity_Tag &rarr;</span>
              <span className="text-white text-[14px] normal-case tracking-normal font-sans font-black">M. Irsyad Fachryanto</span>
            </div>
            <div className="space-y-3">
              <span className="text-[#ff0055]/50 block">Primary_Focus &rarr;</span>
              <span className="text-white text-[14px] normal-case tracking-normal font-sans font-black">Full-Stack &amp; Systems</span>
            </div>
            <div className="space-y-3">
              <span className="text-[#ff0055]/50 block">Performance_Index &rarr;</span>
              <span className="text-white text-[14px] normal-case tracking-normal font-sans font-black text-[#ff0055]">IPK: 3.92 / 4.00</span>
            </div>
          </div>

          <div className="space-y-6">
            <Magnetic strength={0.15}>
              <a 
                href={`data:application/pdf;base64,${pdfBase64}`}
                download="muhammad-irsyad-fachryanto-resume.pdf"
                onClick={handleDownload}
                className="group relative flex items-center justify-between w-full h-[70px] px-8 bg-white text-black font-mono text-[12px] font-black uppercase tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">{downloading ? "SYNCHRONIZING..." : "GENERATE PDF"}</span>
                <Download className="relative z-10 group-hover:translate-y-1 transition-transform" size={20} />
                <div className="absolute inset-0 bg-[#ff0055] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 space-y-20">
        <div className="brutal-card p-12 md:p-20 space-y-24 bg-[#050507]">
          {/* Professional Summary */}
          <div className="space-y-8">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.4em] text-[#ff0055] font-black">// EXEC_SUMMARY</h3>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-display font-medium tracking-tight">
              {inlineResume.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-12">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.4em] text-[#ff0055] font-black">// PROD_HISTORY</h3>
            <div className="space-y-20">
              {inlineResume.experience.map((exp, i) => (
                <div key={i} className="space-y-8 group/exp">
                  <div className="flex flex-wrap justify-between items-baseline gap-6">
                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#ff0055] transition-colors duration-500 tracking-tighter">{exp.role} @ {exp.company}</h4>
                    <span className="font-mono text-xs text-white/20 uppercase tracking-[0.2em] font-black">{exp.period}</span>
                  </div>
                  <p className="paragraph-editorial text-lg text-white/50">{exp.description}</p>
                  <ul className="space-y-4 font-sans text-base text-white/40 font-medium">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-6 items-start group/bullet">
                        <span className="text-[#ff0055] font-black font-mono transition-transform group-hover/bullet:translate-x-2">+</span>
                        <span className="group-hover/bullet:text-white transition-colors duration-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-12 pt-16 border-t border-white/5">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.4em] text-[#ff0055] font-black">// TECH_MATRIX</h3>
            <div className="grid sm:grid-cols-3 gap-12">
              {inlineResume.skills.map((skill, i) => (
                <div key={i} className="space-y-8 group/skill">
                  <span className="font-mono text-[11px] text-[#ff0055] font-black tracking-[0.3em] block uppercase">0{i+1} / {skill.category}</span>
                  <ul className="space-y-4 text-[14px] text-white/30 font-bold group-hover/skill:text-white transition-colors duration-500">
                    {skill.tools.map((t) => (
                      <li key={t} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-[#ff0055]/10 border border-[#ff0055]/30 group-hover/skill:bg-[#ff0055]/50 group-hover/skill:border-[#ff0055] transition-all" />
                        {t}
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
