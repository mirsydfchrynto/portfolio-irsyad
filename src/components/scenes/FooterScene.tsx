"use client";

import { motion } from "framer-motion";

export function FooterScene() {
  return (
    <footer className="p-16 md:p-32 border-t-2 border-white/5 bg-[#020203] text-white relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff0055]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-black font-display uppercase tracking-[0.3em] text-white leading-none">M. Irsyad <br /> Fachryanto</h2>
            <p className="font-mono text-[12px] text-[#ff0055] font-black uppercase tracking-[0.5em] animate-pulse">Architecting Digital Fate</p>
          </div>
          
          <div className="grid grid-cols-2 gap-24 font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 font-bold">
            <div className="space-y-8">
              <span className="text-[#ff0055]/40 block">// NAV_INDEX</span>
              <ul className="space-y-4">
                <li><a href="#about" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> About</a></li>
                <li><a href="#production-experience" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> Work</a></li>
                <li><a href="#resume" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> Profile</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <span className="text-[#ff0055]/40 block">// DATA_REMOTE</span>
              <ul className="space-y-4">
                <li><a href="https://github.com/mirsydfchrynto" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> GitHub</a></li>
                <li><a href="https://instagram.com/muhammadirsyadf" className="hover:text-[#ff0055] transition-colors flex items-center gap-2 group"><span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span> Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-mono text-white/10 uppercase tracking-[0.5em] font-black">
          <div className="flex items-center gap-6">
            <span>DESIGNED FOR PERFORMANCE</span>
            <span className="w-16 h-[1px] bg-white/10" />
            <span className="text-white/30">&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="text-[#ff0055] drop-shadow-[0_0_10px_rgba(255,0,85,0.4)]">SYSTEM_STATE: STABLE_PROD</div>
          <div className="flex items-center gap-6 text-right">
            <span>TEGAL, INDONESIA</span>
            <span className="w-16 h-[1px] bg-white/10" />
            <span className="text-white/30">V5.0.0_GOD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
