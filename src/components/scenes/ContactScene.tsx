"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Globe, MessageSquare, Mail, GitBranch } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

export function ContactScene() {
  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: easeCubic }
  };

  const contacts = [
    { label: "Direct_Email", value: "irsydfchrynto@gmail.com", href: "mailto:irsydfchrynto@gmail.com", icon: <Mail size={14} /> },
    { label: "WhatsApp_Sync", value: "+62 858-6582-6621", href: "https://wa.me/6285865826621", icon: <MessageSquare size={14} /> },
    { label: "Source_Log", value: "mirsydfchrynto", href: "https://github.com/mirsydfchrynto", icon: <GitBranch size={14} /> },
    { label: "Identity_Log", value: "@muhammadirsyadf", href: "https://instagram.com/muhammadirsyadf", icon: <Globe size={14} /> }
  ];

  return (
    <motion.section 
      id="contact" 
      className="brutal-card p-12 md:p-24 space-y-24 relative overflow-hidden group/contact bg-[#050507]"
      {...fadeInUp}
    >
      {/* 1. ATMOSPHERIC DEPTH */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff0055]/5 blur-[150px] pointer-events-none group-hover/contact:opacity-100 opacity-30 transition-all duration-1000 animate-pulse" />
      
      <div className="relative flex flex-wrap items-baseline justify-between gap-8 border-b border-white/5 pb-12">
        <div className="flex items-center gap-5">
          <span className="text-[14px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_07]</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/20 block font-black">
            ESTABLISH_UPLINK
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
          <Globe size={14} className="text-[#ff0055]" />
          <span>Network_State: <strong className="text-white/40">Ready_To_Sync</strong></span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-24 relative z-10">
        {/* 2. CALL TO ACTION TEXT */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-10">
            <h3 className="section-type text-white lg:text-7xl xl:text-8xl tracking-tighter leading-[0.85] font-black uppercase">
              Initialize <br /> 
              <span className="text-[#ff0055] drop-shadow-[0_0_30px_rgba(255,0,85,0.4)]">High Integrity</span> <br /> 
              Link.
            </h3>
            <p className="paragraph-editorial text-2xl text-white/50 leading-relaxed font-medium">
              Actively seeking technical discourse regarding <span className="text-white">Edge AI</span>, <span className="text-white">System Architecture</span>, or <span className="text-white">Full-Stack Performance</span>.
            </p>
          </div>
          
          <div className="flex items-center gap-6 font-mono text-[11px] text-[#ff0055] font-black uppercase tracking-[0.4em]">
             <Zap size={18} className="animate-bounce" />
             <span>Awaiting Command Sequence</span>
          </div>
        </div>

        {/* 3. CONTACT INTERFACE TILES */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 font-mono">
          {contacts.map((item) => (
            <Magnetic key={item.label} strength={0.1}>
              <a 
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-card p-10 space-y-8 hover:border-[#ff0055]/60 transition-all duration-700 group/link bg-[#0a0a0c] h-full flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-[#ff0055]/5 border border-[#ff0055]/20 flex items-center justify-center text-[#ff0055] group-hover/link:bg-[#ff0055] group-hover/link:text-white transition-all duration-500 shadow-2xl">
                    {item.icon}
                  </div>
                  <ArrowUpRight size={20} className="text-white/10 group-hover/link:text-[#ff0055] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-500" />
                </div>

                <div className="space-y-3">
                  <span className="text-[11px] text-[#ff0055] font-black uppercase tracking-[0.3em] block opacity-40 group-hover/link:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                  <span className="text-lg text-white/60 group-hover/link:text-white transition-colors font-black tracking-tighter uppercase break-all">
                    {item.value}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-white/5 mt-4 group-hover/link:bg-[#ff0055]/30 transition-colors" />
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
