"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, GitBranch, Globe, Clock, Activity, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { Magnetic } from "./Magnetic";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    const updateClock = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
      setLocalTime(formatter.format(now));
    };
    
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const links = [
    { name: "ABOUT", href: "#about", id: "01" },
    { name: "WORK", href: "#production-experience", id: "02" },
    { name: "LABS", href: "#blueprints", id: "03" },
    { name: "PROFILE", href: "#resume", id: "04" },
    { name: "CONTACT", href: "#contact", id: "05" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className={`relative flex items-center justify-between px-8 h-16 transition-all duration-500 border border-white/5 bg-black/40 backdrop-blur-2xl ${
            scrolled ? "rounded-none border-x-0 border-t-0 md:rounded-full md:border-x md:border-t" : "rounded-none md:rounded-xl"
          }`}>
            {/* 1. LOGO MODULE (LEFT) */}
            <div className="flex-1 flex items-center">
              <Magnetic strength={0.2}>
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#E31B23]/10 rounded-sm blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="relative w-full h-full bg-[#050507] border border-white/10 flex items-center justify-center group-hover:border-[#E31B23]/40 transition-colors duration-700">
                      <Cpu size={18} className="text-[#E31B23] group-hover:rotate-90 transition-transform duration-1000" />
                      {/* Scanner Line Effect */}
                      <div className="absolute inset-x-0 h-[1px] bg-[#E31B23]/40 top-0 group-hover:top-full transition-all duration-1000 ease-in-out pointer-events-none" />
                    </div>
                  </div>
                  <div className="hidden xl:flex flex-col -space-y-1">
                  <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white">
                    IRSYAD
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-[#E31B23] font-black uppercase tracking-[0.2em] opacity-80">
                      SERIES_2005
                    </span>
                    <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                  </div>
                </div>
              </Magnetic>
            </div>

            {/* 2. NAVIGATION MODULE (CENTER) */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="flex gap-1">
                {links.map((link) => (
                  <Magnetic key={link.name} strength={0.1}>
                    <a 
                      href={link.href}
                      className="group relative px-5 py-2 overflow-hidden transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2 relative z-10">
                        <span className="text-[8px] font-mono text-[#E31B23] font-black opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">{link.id}</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors duration-300 font-bold">
                          {link.name}
                        </span>
                      </div>
                      {/* Interaction Background */}
                      <div className="absolute inset-0 bg-white/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E31B23] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            {/* 3. SYSTEM INFO MODULE (RIGHT) */}
            <div className="flex-1 flex items-center justify-end gap-8">
              <div className="hidden xl:flex items-center gap-6">
                {/* System Metrics */}
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 text-[9px] font-mono text-white/20 uppercase tracking-widest font-black">
                    <Activity size={10} className="text-[#E31B23]" />
                    <span>State: <strong className="text-white/40">Synchronized</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-mono text-white/20 uppercase tracking-widest font-black">
                    <ShieldCheck size={10} className="text-[#E31B23]" />
                    <span>Integ: <strong className="text-white/40">100%_Valid</strong></span>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-white/5" />

                {/* Clock Module */}
                <div className="flex items-center gap-3 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-sm">
                  <Clock size={12} className="text-[#E31B23] opacity-50" />
                  <div className="flex flex-col -space-y-1">
                    <span className="text-[11px] font-mono text-white font-black">{localTime || "--:--"}</span>
                    <span className="text-[7px] font-mono text-white/20 uppercase tracking-widest font-bold text-right">WIB_ID</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Magnetic strength={0.4}>
                  <a 
                    href="https://github.com/mirsydfchrynto" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 text-white/20 hover:text-[#E31B23] hover:bg-[#E31B23]/5 border border-white/5 hover:border-[#E31B23]/30 transition-all duration-500"
                    aria-label="GitHub Source"
                  >
                    <GitBranch size={16} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.4}>
                  <a 
                    href="https://instagram.com/muhammadirsyadf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 text-white/20 hover:text-[#E31B23] hover:bg-[#E31B23]/5 border border-white/5 hover:border-[#E31B23]/30 transition-all duration-500"
                    aria-label="Instagram Identity"
                  >
                    <Globe size={16} />
                  </a>
                </Magnetic>
              </div>

              {/* Mobile Toggle */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-12 h-12 border border-white/10 text-white bg-white/5 flex flex-col items-center justify-center gap-1 group active:scale-95 transition-all"
                aria-label="Toggle Navigation"
              >
                <div className={`w-5 h-[2px] bg-white transition-all duration-500 ${isOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
                <div className={`w-3 h-[2px] bg-[#E31B23] self-end mr-3.5 transition-all duration-500 ${isOpen ? "opacity-0" : ""}`} />
                <div className={`w-5 h-[2px] bg-white transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (System Interrupt) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] bg-[#020203] flex flex-col justify-between p-12 pt-32"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 architect-grid opacity-[0.05] pointer-events-none" />
            <div className="absolute inset-0 architect-grid-dense opacity-[0.03] pointer-events-none" />
            
            <div className="flex flex-col gap-12 relative z-10 w-full max-w-lg mx-auto">
              <div className="space-y-3">
                <span className="font-mono text-[11px] text-[#E31B23] font-black uppercase tracking-[0.5em] block">
                  SYSTEM_ACCESS_DIRECTORY
                </span>
                <div className="w-full h-[1px] bg-gradient-to-r from-[#E31B23] to-transparent" />
              </div>
              
              <div className="flex flex-col gap-4">
                {links.map((link, i) => (
                  <motion.a 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 hover:border-[#E31B23]/40 transition-all group"
                  >
                    <span className="text-4xl font-black text-white group-hover:text-[#E31B23] transition-colors font-display tracking-tighter uppercase">
                      {link.name}
                    </span>
                    <span className="text-[14px] font-mono text-white/10 group-hover:text-[#E31B23]/50 transition-colors font-black">
                      /{link.id}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="relative z-10 w-full max-w-lg mx-auto pt-12 border-t border-white/5 flex flex-col gap-8">
              <div className="flex justify-between items-center font-mono text-[11px] text-white/20 uppercase tracking-[0.3em] font-black">
                <span>IRSYAD // ARCHITECT</span>
                <span className="text-[#E31B23] animate-pulse">BOOT_STABLE</span>
              </div>
              <div className="flex gap-6">
                <a href="https://github.com/mirsydfchrynto" className="flex-1 py-4 bg-white/5 border border-white/5 text-white/30 hover:text-white hover:border-[#E31B23]/40 transition-all flex items-center justify-center gap-3 font-mono text-[10px] font-black uppercase tracking-widest">
                  <GitBranch size={16} /> GitHub
                </a>
                <a href="https://instagram.com/muhammadirsyadf" className="flex-1 py-4 bg-white/5 border border-white/5 text-white/30 hover:text-white hover:border-[#E31B23]/40 transition-all flex items-center justify-center gap-3 font-mono text-[10px] font-black uppercase tracking-widest">
                  <Globe size={16} /> Identity
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
