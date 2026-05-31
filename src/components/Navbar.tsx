"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cpu, GitBranch, Globe, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Magnetic } from "./Magnetic";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        if (!scrolled) setScrolled(true);
      } else {
        if (scrolled) setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
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
    const interval = setInterval(updateClock, 30000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [scrolled]);

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
        role="navigation"
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[0.16,1,0.3,1] will-change-nav ${
          scrolled ? "py-2 md:py-4" : "py-3 md:py-8 lg:py-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className={`relative flex items-center justify-between px-5 md:px-8 h-12 md:h-16 transition-all duration-500 ease-[0.16,1,0.3,1] border border-white/5 bg-black/60 backdrop-blur-xl ${
            scrolled ? "rounded-full" : "rounded-xl md:rounded-2xl"
          }`}>
            {/* LOGO */}
            <div className="flex-1 flex items-center">
              <Magnetic strength={0.2}>
                <div className="flex items-center gap-3 md:gap-4 group cursor-pointer" aria-label="Irsyad Architect Logo">
                  <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#E31B23]/10 rounded-sm blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="relative w-full h-full bg-[#050507] border border-white/10 flex items-center justify-center group-hover:border-[#E31B23]/40 transition-colors duration-700">
                      <Cpu size={14} className="text-[#E31B23] md:size-4 group-hover:rotate-90 transition-transform duration-1000" />
                    </div>
                  </div>
                  <div className="flex flex-col -space-y-1">
                    <span className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white">
                      M. IRSYAD F.
                    </span>
                    <span className="text-[7px] md:text-[8px] font-mono text-white/20 uppercase tracking-[0.1em] md:tracking-[0.2em] font-black">
                      Est. 2005
                    </span>
                  </div>
                </div>
              </Magnetic>
            </div>

            {/* NAVIGATION (CENTER) */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="flex gap-1">
                {links.map((link) => (
                  <Magnetic key={link.name} strength={0.1}>
                    <a 
                      href={link.href}
                      aria-label={`Navigate to ${link.name}`}
                      className="group relative px-4 py-2 overflow-hidden transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2 relative z-10">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors duration-300 font-black">
                          {link.name}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E31B23] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            {/* CLOCK & SOCIAL (RIGHT) */}
            <div className="flex-1 flex items-center justify-end gap-3 md:gap-8">
              <div className="hidden sm:flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 bg-white/[0.02] border border-white/5 rounded-full" aria-label="Local Jakarta Time">
                <Clock size={10} className="text-[#E31B23] opacity-50 md:size-3" />
                <span className="text-[10px] md:text-[11px] font-mono text-white font-black">{localTime || "--:--"}</span>
                <span className="hidden xs:inline text-[7px] font-mono text-white/20 uppercase tracking-widest font-black">WIB</span>
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <a 
                  href="https://github.com/mirsydfchrynto" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-white/20 hover:text-white transition-colors"
                  aria-label="Visit GitHub Profile"
                >
                  <GitBranch size={14} className="md:size-4" />
                </a>
                <a 
                  href="https://instagram.com/muhammadirsyadf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-white/20 hover:text-white transition-colors"
                  aria-label="Visit Instagram Profile"
                >
                  <Globe size={14} className="md:size-4" />
                </a>
              </div>

              {/* Mobile Toggle */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle Menu"
                className="lg:hidden w-9 h-9 border border-white/10 text-white bg-white/5 rounded-lg flex flex-col items-center justify-center gap-1 transition-all active:scale-95"
              >
                <div className={`w-3.5 h-[1.5px] bg-white transition-all duration-500 ${isOpen ? "rotate-45 translate-y-[2.5px]" : ""}`} />
                <div className={`w-3.5 h-[1.5px] bg-white transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-[2.5px]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[99] bg-[#060608]/95 backdrop-blur-2xl flex flex-col justify-center p-8"
          >
            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
              {links.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-white hover:text-[#E31B23] transition-colors font-display uppercase tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            {/* Decoration for mobile menu */}
            <div className="absolute bottom-10 left-10 font-mono text-[10px] text-white/10 uppercase tracking-[0.5em] font-black">
              System_Navigation_Menu
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
