"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Command, Search, Hash, MessageSquare, Briefcase, Zap, Globe, Cpu } from "lucide-react";

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
    { label: "Engineering Foundations", href: "#about", icon: <Hash size={13} />, category: "Core" },
    { label: "Production Systems", href: "#production-experience", icon: <Briefcase size={13} />, category: "Work" },
    { label: "Source Code Labs", href: "#blueprints", icon: <Zap size={13} />, category: "Labs" },
    { label: "Engineering Journey", href: "#journey", icon: <Hash size={13} />, category: "History" },
    { label: "Analyze Profile", href: "#resume", icon: <Cpu size={13} />, category: "Identity" },
    { label: "Establish Connection", href: "#contact", icon: <MessageSquare size={13} />, category: "Sync" },
    { label: "Source Archive (GitHub)", href: "https://github.com/mirsydfchrynto", icon: <Globe size={13} />, category: "Remote", external: true },
  ];

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="fixed bottom-10 left-10 z-[100] md:block hidden">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpen(true)}
          className="bg-black/90 text-white/40 border border-white/5 hover:border-[#ff0055]/40 cursor-pointer flex items-center gap-4 px-6 py-3 font-mono text-[10px] transition-all group shadow-2xl brutal-card"
        >
          <Command size={14} className="text-[#ff0055]" />
          <span className="uppercase tracking-[0.3em] font-black group-hover:text-white transition-colors">Press Ctrl+K for System Directory</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => {
              setIsOpen(false);
              setQuery("");
            }}
          >
            <div className="absolute inset-0 architect-grid opacity-[0.05] pointer-events-none" />
            
            <motion.div 
              initial={{ scale: 0.98, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-[#060608] border border-white/10 p-0 overflow-hidden shadow-[0_0_100px_rgba(255,0,85,0.2)] brutal-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Header */}
              <div className="p-8 border-b border-white/5 flex items-center gap-6 bg-white/[0.01]">
                <Search size={22} className="text-[#ff0055] animate-pulse" />
                <input 
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Execute system query..." 
                  className="bg-transparent border-none outline-none text-lg placeholder:text-white/5 flex-grow text-white font-sans font-black tracking-tight"
                />
              </div>

              {/* Action List */}
              <div className="p-6 max-h-[450px] overflow-y-auto space-y-6">
                {filteredActions.length > 0 ? (
                  <div>
                    <div className="text-[10px] font-mono text-[#ff0055] font-black uppercase tracking-[0.5em] px-4 mb-6 opacity-60">
                      ACTIVE_MATCHES ({filteredActions.length})
                    </div>
                    <div className="grid gap-3">
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
                          className="flex items-center justify-between p-5 bg-white/[0.01] border border-white/5 hover:border-[#ff0055]/40 hover:bg-[#ff0055]/5 transition-all group/item brutal-card"
                        >
                          <div className="flex items-center gap-5 text-[14px] text-white/40 group-hover/item:text-white transition-colors font-black">
                            <span className="text-[#ff0055] opacity-20 group-hover/item:opacity-100 transition-opacity">
                              {action.icon}
                            </span>
                            {action.label}
                          </div>
                          <span className="text-[10px] font-mono text-white/10 uppercase tracking-[0.3em] group-hover/item:text-[#ff0055] transition-colors font-black">
                            {action.category}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="py-20 text-center space-y-6">
                    <div className="text-[#ff0055] font-mono text-[11px] uppercase tracking-[0.6em] font-black animate-pulse">QUERY_FAILURE</div>
                    <p className="text-white/10 text-sm font-bold uppercase tracking-widest">No matching system nodes located.</p>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="p-5 border-t border-white/5 font-mono text-[10px] text-white/10 uppercase text-center tracking-[0.5em] bg-black font-black">
                EXEC: ESC_TO_TERMINATE_SESSION
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
