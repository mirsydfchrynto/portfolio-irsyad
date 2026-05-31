"use client";

import { motion, MotionValue } from "framer-motion";
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
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-32 lg:py-0 z-10 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          <motion.div 
            className="lg:col-span-7 space-y-20 flex flex-col justify-center"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8, ease: easeCubic }}
          >
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex items-center gap-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-16 h-[2px] bg-[#E31B23]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#E31B23] font-black block select-none">
                    Digital Architect
                  </span>
                </div>
                <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">Series 2005 // IR_992</span>
              </motion.div>
              
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.03 }}
                  transition={{ delay: 1.5, duration: 2 }}
                  className="absolute -top-24 -left-12 font-display text-[15rem] font-black tracking-[-0.1em] pointer-events-none select-none"
                >
                  2005
                </motion.div>
                <h1 className="giant-type select-none leading-[0.85] tracking-[-0.08em] relative z-10">
                  M. Irsyad <br />
                  <span className="text-[#E31B23] drop-shadow-[0_0_50px_rgba(227,27,35,0.4)]">Fachryanto</span>
                </h1>
              </div>
              
              <div className="text-xl md:text-2xl font-display font-medium text-white/30 tracking-tighter lowercase flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#E31B23] animate-ping opacity-40" />
                  <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                </div>
                <span>Architecting digital ecosystems</span>
                <span className="w-20 h-[1px] bg-white/10" />
                <span className="font-mono text-xs text-white/20 tracking-[0.3em] uppercase">System_Series_2005</span>
              </div>
            </div>
            
            <div className="space-y-16">
              <p className="paragraph-editorial text-xl md:text-2xl font-medium leading-[1.4] border-l-4 border-[#E31B23]/40 pl-12 py-2 text-white/70 italic">
                Focused on building high-integrity interfaces, native mobile integrations, and highly structured digital environments with <span className="text-white font-black not-italic">obsessive operational reliability.</span>
              </p>
              
              <div className="flex flex-wrap gap-10 pt-4">
                <Magnetic strength={0.25}>
                  <a 
                    href="#production-experience"
                    className="group relative px-12 py-6 bg-white text-black text-[13px] font-mono tracking-[0.2em] font-black uppercase overflow-hidden transition-all duration-700 hover:pr-16 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
                  >
                    <span className="relative z-10">INITIALIZE_ARCHIVE</span>
                    <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" size={20} />
                    <div className="absolute inset-0 bg-[#E31B23] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                  </a>
                </Magnetic>
                
                <Magnetic strength={0.25}>
                  <a 
                    href="#resume"
                    className="px-12 py-6 border-2 border-white/10 hover:border-[#E31B23] text-[13px] font-mono tracking-[0.2em] text-white/40 hover:text-white transition-all bg-white/[0.01] flex items-center gap-5 uppercase font-black"
                  >
                    <span>ANALYZE_CV</span>
                    <Download size={18} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Magnetic>
              </div>
            </div>

            <div className="flex flex-wrap gap-12 pt-16 border-t border-white/5 max-w-3xl font-mono text-[11px] text-white/10 select-none uppercase tracking-[0.4em]">
              <div className="flex items-center gap-4 group cursor-crosshair hover:text-[#E31B23] transition-all">
                <Shield size={18} className="text-[#E31B23]/40 group-hover:text-[#E31B23] group-hover:scale-125 transition-all" />
                <span>Integrity: <strong className="text-white/40">Strict</strong></span>
              </div>
              <div className="flex items-center gap-4 group cursor-crosshair hover:text-[#E31B23] transition-all">
                <Terminal size={18} className="text-[#E31B23]/40 group-hover:text-[#E31B23] group-hover:scale-125 transition-all" />
                <span>Stack: <strong className="text-white/40">Hybrid_Native</strong></span>
              </div>
              <div className="flex items-center gap-4 group cursor-crosshair hover:text-[#E31B23] transition-all">
                <Cpu size={18} className="text-[#E31B23]/40 group-hover:text-[#E31B23] group-hover:scale-125 transition-all" />
                <span>Ops: <strong className="text-white/40">Core_Linux</strong></span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end w-full relative"
            initial={{ opacity: 0, scale: 0.7, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 2.2, ease: easeCubic, delay: 0.4 }}
            style={{ y: imageParallax }}
          >
            {/* Identity Backdrop Light */}
            <div className="absolute -inset-24 bg-[#E31B23]/5 rounded-full blur-[180px] pointer-events-none animate-pulse" />
            
            <div className="relative group w-full max-w-[480px] aspect-[4/5] p-5 bg-[#050507] border border-white/10 shadow-[60px_60px_120px_rgba(0,0,0,0.9)] hover:border-[#E31B23]/40 transition-all duration-1000 overflow-hidden perspective-1000">
              <div className="absolute inset-0 z-10 architect-grid-dense opacity-[0.1] pointer-events-none" />
              
              <img 
                src="/avatar.jpg" 
                alt="M. Irsyad Fachryanto" 
                className="w-full h-full object-cover grayscale contrast-[1.3] brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1500 ease-out"
              />
              
              {/* Identity Metadata Overlays (Surgical Precision) */}
              <div className="absolute top-10 left-10 z-20 flex flex-col gap-2">
                <div className="font-mono text-[11px] text-[#E31B23] bg-black/95 px-5 py-2 border border-[#E31B23]/40 backdrop-blur-2xl uppercase tracking-[0.4em] font-black shadow-[0_0_30px_rgba(255,0,85,0.3)]">
                  NODE_ID: IR-992
                </div>
                <div className="font-mono text-[9px] text-white/30 bg-black/80 px-4 py-1.5 border border-white/10 backdrop-blur-xl uppercase tracking-[0.3em] font-bold">
                  Class: Architect_Elite
                </div>
              </div>

              <div className="absolute bottom-10 right-10 z-20 flex flex-col items-end gap-2">
                <div className="font-mono text-[11px] text-white/50 bg-black/95 px-5 py-2 border border-white/20 backdrop-blur-2xl uppercase tracking-[0.4em] font-black">
                  STATUS: ACTIVE_SYNC
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-[#E31B23]" />
                  <div className="w-1 h-1 bg-[#E31B23]" />
                  <div className="w-8 h-1 bg-[#E31B23]" />
                </div>
              </div>
              
              {/* Architectural Physical Edge Accents */}
              <div className="absolute top-0 right-0 w-40 h-40 border-t-2 border-r-2 border-[#E31B23]/30 pointer-events-none group-hover:w-full group-hover:h-full transition-all duration-1000 ease-in-out" />
              <div className="absolute bottom-0 left-0 w-40 h-40 border-b-2 border-l-2 border-[#E31B23]/30 pointer-events-none group-hover:w-full group-hover:h-full transition-all duration-1000 ease-in-out" />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.header>
  );
}
