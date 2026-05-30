"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, GitBranch, Globe, Clock } from "lucide-react";
import { useState, useEffect } from "react";

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
        className={`fixed top-0 left-0 w-full z-[100] px-6 py-4 md:px-12 md:py-6 flex justify-between items-center transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0070f3]/20 rounded-sm blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-full h-full bg-[#0a0a0c] border border-white/10 flex items-center justify-center group-hover:border-[#0070f3]/50 transition-colors duration-500">
              <Cpu size={18} className="text-[#0070f3] group-hover:rotate-90 transition-transform duration-700" />
            </div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">
              IRSYAD
            </span>
            <span className="text-[9px] font-mono text-[#0070f3] font-bold uppercase tracking-[0.2em] opacity-80">
              ARCHITECT
            </span>
          </div>
        </div>

        {/* Desktop Links & Info */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-10">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group relative py-1 overflow-hidden"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-[#0070f3] font-bold opacity-40 group-hover:opacity-100 transition-opacity select-none">{link.id}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0070f3] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              </a>
            ))}
          </div>

          <div className="h-5 w-[1px] bg-white/10" />

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-[10px] font-mono text-white/40">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-sm">
                <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                <span>TEGAL, ID</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-[#0070f3]/5 border border-[#0070f3]/10 text-[#0070f3]/80 rounded-sm">
                <Clock size={10} />
                <span>WIB {localTime || "--:--"}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <a 
                href="https://github.com/mirsydfchrynto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 text-white/30 hover:text-[#0070f3] hover:bg-white/5 transition-all duration-300 rounded-sm"
              >
                <GitBranch size={16} />
                </a>
                <a 
                href="https://instagram.com/muhammadirsyadf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 text-white/30 hover:text-[#0070f3] hover:bg-white/5 transition-all duration-300 rounded-sm"
                >
                <Globe size={16} />
                </a>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 border border-white/10 text-white bg-white/5 flex items-center justify-center hover:border-[#0070f3]/40 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] bg-[#020203] flex flex-col justify-between p-8 pt-32"
          >
            <div className="absolute inset-0 architect-grid opacity-[0.03] pointer-events-none" />
            <div className="absolute inset-0 architect-grid-dense opacity-[0.02] pointer-events-none" />
            
            <div className="flex flex-col gap-10 relative z-10 w-full max-w-md mx-auto">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#0070f3] font-bold uppercase tracking-[0.4em] block">
                  INDEX_DIRECTORY
                </span>
                <div className="w-20 h-1 bg-[#0070f3]" />
              </div>
              
              <div className="flex flex-col gap-8">
                {links.map((link, i) => (
                  <motion.a 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-4xl font-bold text-white group-hover:text-[#0070f3] transition-colors font-display">
                      {link.name}
                    </span>
                    <span className="text-[12px] font-mono text-white/20 group-hover:text-[#0070f3]/50 transition-colors">
                      /{link.id}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="relative z-10 w-full max-w-md mx-auto pt-10 border-t border-white/5 flex flex-col gap-6">
              <div className="flex justify-between items-center font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                <span>M. Irsyad Fachryanto</span>
                <span className="text-[#0070f3] font-bold">STATE: STABLE</span>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/mirsydfchrynto" className="p-3 bg-white/5 border border-white/5 text-white/40 hover:text-white transition-colors">
                  <GitBranch size={18} />
                </a>
                <a href="https://instagram.com/muhammadirsyadf" className="p-3 bg-white/5 border border-white/5 text-white/40 hover:text-white transition-colors">
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
