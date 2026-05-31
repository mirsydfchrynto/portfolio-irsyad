"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Download, ChevronRight, Shield, Terminal, Cpu } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

interface HeroSceneProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  imageParallax: MotionValue<number>;
  handleDownload: () => void;
  downloading: boolean;
}

export function HeroScene({ opacity, scale, imageParallax, handleDownload, downloading }: HeroSceneProps) {
  const easeCubic = [0.16, 1, 0.3, 1] as any;

  return (
    <motion.header 
      style={{ opacity, scale }}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 lg:py-0 z-10 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-7 space-y-16 flex flex-col justify-center"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: easeCubic }}
          >
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="flex items-center gap-4"
              >
                <span className="w-12 h-[2px] bg-[#ff0055]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#ff0055] font-black block select-none">
                  Digital Architect &mdash; Est. 2005
                </span>
              </motion.div>
              
              <h1 className="giant-type select-none leading-[0.9]">
                M. Irsyad <br />
                <span className="text-[#ff0055] drop-shadow-[0_0_30px_rgba(255,0,85,0.3)]">Fachryanto</span>
              </h1>
              
              <div className="text-xl md:text-2xl font-display font-medium text-white/30 tracking-tighter lowercase flex items-center gap-5">
                <span className="animate-pulse text-[#ff0055]">●</span>
                <span>architecting digital ecosystems</span>
                <span className="w-16 h-[1px] bg-white/10" />
                <span className="font-mono text-xs text-white/20 tracking-widest uppercase">System v5.0.0</span>
              </div>
            </div>
            
            <div className="space-y-12">
              <p className="paragraph-editorial text-lg md:text-xl font-medium leading-relaxed border-l-2 border-[#ff0055]/30 pl-8">
                Engineering high-integrity interfaces, native system integrations, and highly structured digital environments with obsessive operational reliability.
              </p>
              
              <div className="flex flex-wrap gap-8 pt-4">
                <Magnetic strength={0.2}>
                  <a 
                    href="#production-experience"
                    className="group relative px-10 py-5 bg-white text-black text-[12px] font-mono tracking-widest font-black uppercase overflow-hidden transition-all duration-500 hover:pr-14 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                  >
                    <span className="relative z-10">INITIALIZE ARCHIVE</span>
                    <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" size={18} />
                    <div className="absolute inset-0 bg-[#ff0055] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                  </a>
                </Magnetic>
                
                <Magnetic strength={0.2}>
                  <a 
                    href="#resume"
                    className="px-10 py-5 border border-white/10 hover:border-[#ff0055] text-[12px] font-mono tracking-widest text-white/50 hover:text-white transition-all bg-white/[0.02] flex items-center gap-4 uppercase font-black"
                  >
                    <span>ANALYZE CV</span>
                    <Download size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Magnetic>
              </div>
            </div>

            <div className="flex flex-wrap gap-10 pt-12 border-t border-white/5 max-w-2xl font-mono text-[10px] text-white/10 select-none uppercase tracking-[0.3em]">
              <div className="flex items-center gap-3 group cursor-crosshair hover:text-[#ff0055] transition-colors">
                <Shield size={16} className="text-[#ff0055]/50 group-hover:scale-125 transition-transform" />
                <span>Integrity: <strong className="text-white/40">Strict</strong></span>
              </div>
              <div className="flex items-center gap-3 group cursor-crosshair hover:text-[#ff0055] transition-colors">
                <Terminal size={16} className="text-[#ff0055]/50 group-hover:scale-125 transition-transform" />
                <span>Stack: <strong className="text-white/40">Full-System</strong></span>
              </div>
              <div className="flex items-center gap-3 group cursor-crosshair hover:text-[#ff0055] transition-colors">
                <Cpu size={16} className="text-[#ff0055]/50 group-hover:scale-125 transition-transform" />
                <span>Ops: <strong className="text-white/40">Linux-Native</strong></span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end w-full relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.8, ease: easeCubic, delay: 0.3 }}
            style={{ y: imageParallax }}
          >
            <div className="absolute -inset-20 bg-[#ff0055]/5 rounded-full blur-[150px] pointer-events-none" />
            
            <div className="relative group w-full max-w-[440px] aspect-[4/5] p-4 bg-[#0a0a0c] border border-white/10 shadow-[40px_40px_80px_rgba(0,0,0,0.8)] hover:border-[#ff0055]/50 transition-all duration-1000 overflow-hidden perspective-1000">
              <div className="absolute inset-0 z-10 architect-grid-dense opacity-[0.08] pointer-events-none" />
              
              <img 
                src="/avatar.jpg" 
                alt="M. Irsyad Fachryanto" 
                className="w-full h-full object-cover grayscale contrast-[1.2] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              
              <div className="absolute top-8 left-8 z-20 font-mono text-[10px] text-[#ff0055] bg-black/90 px-4 py-1.5 border border-[#ff0055]/40 backdrop-blur-xl uppercase tracking-[0.3em] font-black shadow-[0_0_20px_rgba(255,0,85,0.2)]">
                ID_NODE: IR-992
              </div>
              <div className="absolute bottom-8 right-8 z-20 font-mono text-[10px] text-white/40 bg-black/90 px-4 py-1.5 border border-white/10 backdrop-blur-xl uppercase tracking-[0.3em] font-bold">
                STATE: ACTIVE_SYNC
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#ff0055]/40 pointer-events-none group-hover:w-full group-hover:h-full transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[#ff0055]/40 pointer-events-none group-hover:w-full group-hover:h-full transition-all duration-700" />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.header>
  );
}
