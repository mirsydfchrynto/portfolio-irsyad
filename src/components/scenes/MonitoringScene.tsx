"use client";

import { motion } from "framer-motion";
import { KernelTerminalExplorer } from "@/components/KernelTerminalExplorer";
import { CodeWorkspace } from "@/components/CodeWorkspace";

export function MonitoringScene() {
  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: easeCubic }
  };

  return (
    <motion.section 
      id="kernel-explorer" 
      className="brutal-card p-10 md:p-20 grid lg:grid-cols-12 gap-20 items-center relative overflow-hidden"
      {...fadeInUp}
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff0055]/5 blur-[100px] pointer-events-none animate-pulse" />
      
      <div className="lg:col-span-6 space-y-12 relative">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_02]</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 block font-black">
              NEURAL_SYNC
            </span>
          </div>
          <h3 className="section-type text-white lg:text-5xl leading-tight">Neural Monitoring &amp; Engineering Logs</h3>
          <p className="paragraph-editorial text-lg text-white/50">
            Visualizing the digital nervous center. Monitor real-time system vitals—from caffeine-induced focus to peak debugging stress. Explore the underlying source artifacts that power the machine.
          </p>
        </div>
        
        <KernelTerminalExplorer />
      </div>
      
      <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative">
        <div className="relative w-full">
          <div className="absolute -inset-1 bg-[#ff0055]/20 blur-2xl opacity-20" />
          <CodeWorkspace />
        </div>
      </div>
    </motion.section>
  );
}
