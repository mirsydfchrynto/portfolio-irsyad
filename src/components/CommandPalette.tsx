"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Command, Search, Hash, MessageSquare, Briefcase, Zap, Globe } from "lucide-react";

interface ActionItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  category: string;
  external?: boolean;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions: ActionItem[] = [
    { label: "Tentang & Filosofi", href: "#about", icon: <Hash size={13} />, category: "Navigasi" },
    { label: "Produk Nyata (Okey Bimbel)", href: "#production-experience", icon: <Briefcase size={13} />, category: "Navigasi" },
    { label: "Eksplorasi Sistem (Blueprints)", href: "#blueprints", icon: <Zap size={13} />, category: "Navigasi" },
    { label: "Perjalanan Tumbuh (Logs)", href: "#journey", icon: <Hash size={13} />, category: "Navigasi" },
    { label: "Hubungi Saya (Kontak)", href: "#contact", icon: <MessageSquare size={13} />, category: "Navigasi" },
    { label: "Profil GitHub", href: "https://github.com/mirsydfchrynto", icon: <Globe size={13} />, category: "Eksternal", external: true },
    { label: "Profil Instagram", href: "https://instagram.com/muhammadirsyadf", icon: <Globe size={13} />, category: "Eksternal", external: true },
  ];

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="fixed bottom-10 left-10 z-[100] md:block hidden">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsOpen(true)}
          className="bg-black/85 text-white/50 border border-white/5 hover:border-white/30 cursor-pointer flex items-center gap-3 px-4 py-2 font-mono text-[9px] rounded-sm transition-colors"
        >
          <Command size={10} className="text-white/30" />
          <span className="uppercase tracking-wider">Ctrl+K untuk navigasi</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
            onClick={() => {
              setIsOpen(false);
              setQuery("");
            }}
          >
            <motion.div 
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl bg-neutral-950 border border-white/5 p-0 overflow-hidden shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Header */}
              <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-white/[0.01]">
                <Search size={14} className="text-white/30" />
                <input 
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari bagian halaman..." 
                  className="bg-transparent border-none outline-none text-sm placeholder:text-white/20 flex-grow text-white font-sans"
                />
              </div>

              {/* Action List */}
              <div className="p-3 max-h-[300px] overflow-y-auto space-y-2">
                {filteredActions.length > 0 ? (
                  <div>
                    <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest px-2 mb-1.5">
                      Hasil ({filteredActions.length})
                    </div>
                    <div className="grid gap-0.5">
                      {filteredActions.map((action, i) => (
                        <a 
                          key={i} 
                          href={action.href}
                          target={action.external ? "_blank" : undefined}
                          rel={action.external ? "noopener noreferrer" : undefined}
                          onClick={() => {
                            setIsOpen(false);
                            setQuery("");
                          }}
                          className="flex items-center justify-between p-3 hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all group rounded-sm"
                        >
                          <div className="flex items-center gap-3 text-xs text-white/60 group-hover:text-white transition-colors font-sans">
                            <span className="text-white/20 group-hover:text-white/40 transition-colors">
                              {action.icon}
                            </span>
                            {action.label}
                          </div>
                          <span className="text-[8px] font-mono text-white/20 uppercase tracking-wider">
                            {action.category}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="py-8 text-center text-white/20 font-mono text-[9px] uppercase tracking-wider">
                    Tidak menemukan hasil
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="p-3 border-t border-white/5 font-mono text-[8px] opacity-20 uppercase text-center tracking-widest bg-white/[0.01]">
                Tekan ESC untuk keluar
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
