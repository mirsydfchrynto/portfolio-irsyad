"use client";

import { Magnetic } from "@/components/Magnetic";
import { ArrowRight } from "lucide-react";

export function FooterScene() {
  return (
    <footer className="p-8 md:p-16 lg:p-32 border-t-2 border-white/5 bg-[#020203] text-white relative z-10 overflow-hidden">
      {/* 1. ARCHITECTURAL DIVIDER */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E31B23]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-[#E31B23] shadow-[0_0_20px_rgba(227, 27, 35, 0.6)]" />
      
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24">
          {/* 2. BRAND MODULE */}
          <div className="space-y-6 md:space-y-10">
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-[0.3em] text-white leading-[0.85]">
              M. Irsyad <br /> 
              <span className="text-[#E31B23]">Fachryanto</span>
            </h2>
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-[#E31B23]" />
               <p className="font-mono text-[10px] md:text-[12px] text-white/40 font-black uppercase tracking-[0.4em] md:tracking-[0.6em] animate-pulse">
                 Architecting Digital Fate
               </p>
            </div>
          </div>
          
          {/* 3. NAVIGATION MODULES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-32 font-mono text-[11px] uppercase tracking-[0.5em] text-white/20 font-black">
            <div className="space-y-10">
              <span className="text-[#E31B23]/50 block">{"// DIRECTORY_INDEX"}</span>
              <ul className="space-y-6">
                {[
                  { name: "About", href: "#about" },
                  { name: "Work", href: "#production-experience" },
                  { name: "Profile", href: "#resume" }
                ].map((link) => (
                  <li key={link.name}>
                    <Magnetic strength={0.1}>
                      <a href={link.href} className="hover:text-white transition-colors flex items-center gap-3 group">
                        <ArrowRight size={12} className="text-[#E31B23] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        {link.name}
                      </a>
                    </Magnetic>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-10">
              <span className="text-[#E31B23]/50 block">{"// REMOTE_UPLINK"}</span>
              <ul className="space-y-6">
                {[
                  { name: "GitHub", href: "https://github.com/mirsydfchrynto" },
                  { name: "Instagram", href: "https://instagram.com/muhammadirsyadf" }
                ].map((link) => (
                  <li key={link.name}>
                    <Magnetic strength={0.1}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3 group">
                        <ArrowRight size={12} className="text-[#E31B23] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        {link.name}
                      </a>
                    </Magnetic>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4. SYSTEM METADATA FOOTER */}
        <div className="pt-16 md:pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 text-[9px] md:text-[10px] font-mono text-white/10 uppercase tracking-[0.3em] md:tracking-[0.5em] font-black text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>DESIGNED_FOR_PEAK_PERFORMANCE</span>
            <div className="hidden md:block w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-white/30">&copy; {new Date().getFullYear()} IDENTITY_SECURE</span>
          </div>
          
          <div className="px-6 py-2 border border-[#E31B23]/20 bg-[#E31B23]/5 text-[#E31B23] shadow-[0_0_30px_rgba(227, 27, 35,0.1)]">
            SYSTEM_STATE: STABLE_PROD_V5.0
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-white/30">TEGAL // JAVA // ID</span>
            <div className="hidden md:block w-16 h-[1px] bg-white/10" />
            <span className="text-[#E31B23]">GOD_MODE_ACTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
