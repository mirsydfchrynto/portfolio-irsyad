"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Shield } from "lucide-react";

export function LoadingSequence({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);
  const [isExit, setIsExit] = useState(false);

  const statuses = [
    "INITIALIZING_BOOT_CORE_V5.0",
    "LOADING_IDENTITY_RED_MANIFEST...",
    "ENGAGING_MAGNETIC_INTERACTIONS...",
    "SYNCING_NEURAL_MONITOR_V5...",
    "CALIBRATING_ARCHITECT_GRID...",
    "ENFORCING_SYSTEM_INTEGRITY...",
    "READY_FOR_DEPLOYMENT"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExit(true);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    const statusTimer = setInterval(() => {
      setStatusIdx((prev) => (prev < statuses.length - 1 ? prev + 1 : prev));
    }, 450);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[#020203] flex flex-col items-center justify-center p-12 overflow-hidden"
        >
          {/* Architectural Background Texture */}
          <div className="absolute inset-0 architect-grid opacity-[0.05]" />
          <div className="absolute inset-0 architect-grid-dense opacity-[0.03]" />
          
          <div className="relative w-full max-w-2xl space-y-16">
            {/* 1. CENTER LOGO SEQUENCE */}
            <div className="flex flex-col items-center gap-8">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-24 h-24 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#E31B23]/20 rounded-sm blur-2xl animate-pulse" />
                <div className="relative w-full h-full border-2 border-[#E31B23] flex items-center justify-center bg-[#050507]">
                  <Cpu size={40} className="text-[#E31B23] animate-pulse" />
                </div>
              </motion.div>
              
              <div className="text-center space-y-2">
                <motion.h2 
                  className="text-4xl md:text-5xl font-black font-display tracking-[0.4em] text-white uppercase leading-none"
                  initial={{ opacity: 0, letterSpacing: "1em" }}
                  animate={{ opacity: 1, letterSpacing: "0.4em" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  IRSYAD
                </motion.h2>
                <span className="font-mono text-[11px] text-[#E31B23] font-black uppercase tracking-[0.8em] opacity-60">
                  Architect_Engine
                </span>
              </div>
            </div>

            {/* 2. PROGRESS MODULE */}
            <div className="space-y-6">
              <div className="flex justify-between items-end font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
                <div className="flex items-center gap-3">
                  <Terminal size={12} className="text-[#E31B23]" />
                  <span>{statuses[statusIdx]}</span>
                </div>
                <span>{Math.round(progress)}%</span>
              </div>
              
              <div className="relative h-1 w-full bg-white/5 overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-[#E31B23] shadow-[0_0_20px_rgba(255,0,85,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* 3. SYSTEM FLAGS (BOTTOM) */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/5 font-mono text-[9px] text-white/10 uppercase tracking-[0.3em] font-black">
              <div className="flex items-center gap-3">
                <Shield size={10} className={progress > 30 ? "text-emerald-500" : "text-white/10"} />
                <span>Security_Ready</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className={`w-1.5 h-1.5 rounded-full ${progress > 60 ? "bg-[#E31B23]" : "bg-white/10"} animate-pulse`} />
                <span>Narrative_Link</span>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <div className={`w-1.5 h-1.5 rounded-full ${progress > 90 ? "bg-emerald-500" : "bg-white/10"}`} />
                <span>Stable_Build</span>
              </div>
            </div>
          </div>

          {/* Glitch Overlay Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay">
            <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
