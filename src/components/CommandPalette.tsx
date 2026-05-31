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
          className="bg-black/90 text-white/40 border-2 border-white/5 hover:border-[#0070f3]/40 cursor-pointer flex items-center gap-4 px-5 py-2.5 font-mono text-[10px] transition-all group shadow-2xl"
        >
          <Command size={12} className="text-[#0070f3]" />
          <span className="uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors">Press Ctrl+K for Directory</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => {
              setIsOpen(false);
              setQuery("");
            }}
          >
            <div className="absolute inset-0 architect-grid opacity-[0.03] pointer-events-none" />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-[#060608] border-2 border-white/10 p-0 overflow-hidden shadow-[0_0_80px_rgba(0,112,243,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Header */}
              <div className="p-6 border-b-2 border-white/5 flex items-center gap-4 bg-white/[0.01]">
                <Search size={18} className="text-[#0070f3]" />
                <input 
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="System query..." 
                  className="bg-transparent border-none outline-none text-base placeholder:text-white/10 flex-grow text-white font-sans font-medium"
                />
              </div>

              {/* Action List */}
              <div className="p-4 max-h-[400px] overflow-y-auto space-y-4">
                {filteredActions.length > 0 ? (
                  <div>
                    <div className="text-[9px] font-mono text-[#0070f3] font-bold uppercase tracking-[0.4em] px-3 mb-4">
                      Active_Matches ({filteredActions.length})
                    </div>
                    <div className="grid gap-2">
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
                          className="flex items-center justify-between p-4 bg-white/[0.01] border border-white/5 hover:border-[#0070f3]/30 hover:bg-[#0070f3]/5 transition-all group"
                        >
                          <div className="flex items-center gap-4 text-[13px] text-white/50 group-hover:text-white transition-colors font-medium">
                            <span className="text-[#0070f3] opacity-40 group-hover:opacity-100 transition-opacity">
                              {action.icon}
                            </span>
                            {action.label}
                          </div>
                          <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] group-hover:text-[#0070f3] transition-colors">
                            {action.category}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="text-white/10 font-mono text-[10px] uppercase tracking-[0.4em]">Query_Failure</div>
                    <p className="text-white/20 text-xs">No matching system nodes found.</p>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="p-4 border-t-2 border-white/5 font-mono text-[9px] text-white/20 uppercase text-center tracking-[0.4em] bg-black">
                EXEC: ESC_TO_TERMINATE
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
