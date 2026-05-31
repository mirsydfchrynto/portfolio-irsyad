"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Activity, 
  Coffee, 
  Ghost, 
  Zap, 
  AlertTriangle,
  FileCode,
  CheckCircle2,
  Bug
} from "lucide-react";

interface LogEntry {
  id: number;
  type: "INFO" | "WARN" | "DEBUG" | "SUCCESS";
  message: string;
  time: string;
}

const INITIAL_LOGS: LogEntry[] = [
  { id: 1, type: "INFO", message: "Kernel Siap: Memuat modul portofolio...", time: "08:00:00" },
  { id: 2, type: "DEBUG", message: "Optimasi UI/UX sedang berjalan...", time: "08:05:21" },
  { id: 3, type: "SUCCESS", message: "Level 100/100 Performa tercapai.", time: "09:12:45" },
];

const FUNNY_LOGS = [
  "Rekursi kucing terdeteksi... Meow meow meow.",
  "Memperbaiki 1 bug, 42 bug baru muncul untuk merayakan.",
  "git commit -m 'fix: kali ini beneran jalan sumpah'",
  "Mendeteksi interaksi pengguna... Mengaktifkan mode jenius.",
  "Pemusatan CSS berhasil. Merayakan dengan istirahat kopi.",
  "Kebocoran memori: Pikiran tentang coding jam 3 pagi.",
  "Sistem stabil: Kafein terdeteksi dalam darah.",
  "Membersihkan RAM... Menghapus kenangan mantan.",
  "Deploying to Production... Berdoa dimulai.",
];

export function KernelTerminalExplorer() {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Date.now(),
        type: Math.random() > 0.8 ? "WARN" : Math.random() > 0.5 ? "DEBUG" : "INFO",
        message: FUNNY_LOGS[Math.floor(Math.random() * FUNNY_LOGS.length)],
        time: new Date().toLocaleTimeString('en-GB', { hour12: false })
      };
      setLogs(prev => [newLog, ...prev.slice(0, 8)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col font-mono text-[11px] leading-relaxed relative z-10 overflow-hidden">
      {/* Header Statis untuk Terminal */}
      <div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-4">
        <Terminal size={14} className="text-[#E31B23]" />
        <span className="text-[10px] uppercase text-[#E31B23] font-black tracking-[0.3em]">Developer.log</span>
      </div>
      
      {/* Log Feed */}
      <div className="flex-grow overflow-hidden relative">
        <div className="space-y-2.5">
          <AnimatePresence mode="popLayout">
            {logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-start gap-4 group"
              >
                <span className="text-white/20 shrink-0">[{log.time}]</span>
                <span className={`font-black shrink-0 min-w-[50px] ${
                  log.type === "INFO" ? "text-blue-400" : 
                  log.type === "WARN" ? "text-amber-400" : 
                  log.type === "SUCCESS" ? "text-emerald-400" : "text-[#E31B23]"
                }`}>
                  {log.type}
                </span>
                <span className="text-white/50 group-hover:text-white/90 transition-colors truncate">
                  {log.message}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Mini Vitals Footer */}
      <div className="mt-auto pt-4 border-t border-white/5 flex gap-4 text-[9px] text-white/20 font-black uppercase tracking-widest">
        <span className="flex items-center gap-1.5"><Activity size={10} className="text-[#E31B23]" /> CPU: 12%</span>
        <span className="flex items-center gap-1.5"><Coffee size={10} className="text-amber-500" /> Caffeine: 88%</span>
      </div>
    </div>
  );
}
