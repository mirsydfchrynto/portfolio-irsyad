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
    { name: "Production Work", href: "#production-work" },
    { name: "Projects & Capstones", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? "py-2.5" : "py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between px-4 sm:px-6 h-14 md:h-16 transition-all duration-300 border ${
              scrolled
                ? "bg-white/90 backdrop-blur-md border-slate-200/90 shadow-md shadow-slate-900/5 rounded-2xl"
                : "bg-white/75 backdrop-blur-sm border-slate-200/60 shadow-sm rounded-2xl"
            }`}
          >
            {/* LOGO */}
            <a
              href="#"
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label="Home"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/25 group-hover:scale-105 transition-transform">
                <Layers size={17} className="stroke-[2.2]" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-slate-900 text-base md:text-lg tracking-tight">
                  Irsyad
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </div>
            </a>

            {/* NAVIGATION LINKS (DESKTOP) */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE: AUDIO & CONTACT BUTTON */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <AmbientAudioPlayer />

              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 transition-all active:scale-95"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight size={13} />
              </a>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
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
            className="fixed inset-x-4 top-20 z-[99] md:hidden bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2.5 text-xs font-semibold rounded-xl bg-blue-600 text-white shadow-sm"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
