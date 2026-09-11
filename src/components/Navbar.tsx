"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Layers, Mail, Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { AmbientAudioPlayer } from "./AmbientAudioPlayer";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="fixed top-0 left-0 w-full z-[100] border-b border-[#E2E2DC] bg-[#F7F7F4]/92 backdrop-blur-md transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* BRAND IDENTIFIER / ARCHIVE PLATE */}
            <a
              href="#"
              className="flex items-center gap-3 group cursor-pointer"
              aria-label="Home"
            >
              <div className="px-2.5 py-1 rounded-sm bg-[#111215] text-[#F7F7F4] font-mono text-xs font-black tracking-widest group-hover:bg-[#1D4ED8] transition-colors">
                MIF
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111215]">
                  IRSYAD / ARCHIVE
                </span>
                <span className="font-mono text-[10px] text-[#525866] tracking-wider uppercase">
                  SYSTEMS &amp; MOBILE
                </span>
              </div>
            </a>

            {/* NAVIGATION LINKS (DESKTOP ARCHITECTURAL INDEX) */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {[
                { label: "01 // WORKS", href: "#projects" },
                { label: "02 // CAPABILITIES", href: "#skills" },
                { label: "03 // TIMELINE", href: "#experience" },
                { label: "04 // TRANSMISSION", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-[11px] tracking-widest uppercase text-[#525866] hover:text-[#111215] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#111215] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE: AUDIO & AVAILABILITY STATUS */}
            <div className="flex items-center gap-3 sm:gap-4">
              <AmbientAudioPlayer />

              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[#E2E2DC] bg-white font-mono text-[11px] tracking-wider uppercase text-[#111215]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>OPEN FOR GLOBAL WORK</span>
              </div>

              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#111215] hover:bg-[#1D4ED8] text-[#F7F7F4] font-mono text-[11px] tracking-wider uppercase transition-all shadow-xs active:scale-95"
              >
                <span>INITIATE</span>
                <ArrowUpRight size={13} />
              </a>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-sm border border-[#E2E2DC] text-[#111215] hover:bg-white transition-colors"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-4 top-20 z-[99] md:hidden bg-[#F7F7F4]/98 backdrop-blur-xl border border-[#E2E2DC] rounded-sm p-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {[
                { label: "01 // WORKS", href: "#projects" },
                { label: "02 // CAPABILITIES", href: "#skills" },
                { label: "03 // TIMELINE", href: "#experience" },
                { label: "04 // TRANSMISSION", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 font-mono text-xs tracking-wider uppercase text-[#111215] hover:bg-white border border-transparent hover:border-[#E2E2DC] rounded-sm transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-[#E2E2DC] flex flex-col gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 font-mono text-[11px] text-[#525866]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>OPEN FOR GLOBAL WORK</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 font-mono text-xs uppercase tracking-widest rounded-sm bg-[#111215] text-[#F7F7F4] hover:bg-[#1D4ED8] transition-colors"
                >
                  INITIATE TRANSMISSION
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
