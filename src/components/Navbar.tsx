"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
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
    const interval = setInterval(updateClock, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const links = [
    { name: "ABOUT", href: "#about", id: "01" },
    { name: "WORK", href: "#production-experience", id: "02" },
    { name: "LABS", href: "#blueprints", id: "03" },
    { name: "JOURNEY", href: "#journey", id: "04" },
    { name: "CONTACT", href: "#contact", id: "05" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-12 md:py-6 flex justify-between items-center bg-black/85 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            IRSYAD
          </span>
        </div>

        {/* Desktop Links & Info */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 border-r border-white/5 pr-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-wider text-white/50 hover:text-white transition-colors py-1 flex items-center gap-1.5 animate-reveal"
              >
                <span className="text-white/20 select-none">{link.id}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="text-[10px] font-mono text-white/40 flex items-center gap-2">
            <span>Tegal, ID</span>
            <span className="text-white/10 select-none">/</span>
            <span>WIB {localTime || "--:--"}</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          {localTime && (
            <span className="text-[9px] font-mono text-white/40 border border-white/5 px-2 py-1 bg-white/5 rounded-sm">
              {localTime}
            </span>
          )}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-white/10 text-white bg-white/5 transition-colors hover:border-white/30 rounded-sm"
            aria-label="Menu"
          >
            {isOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[49] bg-black flex flex-col justify-between p-8 pt-24"
          >
            <div className="absolute inset-0 architect-grid opacity-[0.01] pointer-events-none" />
            
            <div className="flex flex-col gap-6 relative z-10 w-full max-w-md mx-auto pt-8">
              <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest border-b border-white/5 pb-2 block">
                ENGINEERING JOURNAL
              </span>
              
              <div className="flex flex-col gap-4">
                {links.map((link, i) => (
                  <motion.a 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between border-b border-white/5 pb-2 group"
                  >
                    <span className="text-xl font-medium text-white group-hover:text-white/80 transition-colors">
                      {link.name}
                    </span>
                    <span className="text-[10px] font-mono text-white/20">
                      0{link.id}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="relative z-10 w-full max-w-md mx-auto pt-6 border-t border-white/5 flex justify-between items-center font-mono text-[9px] text-white/30 uppercase tracking-wider">
              <span>Muhammad Irsyad Fachryanto</span>
              <span>2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
