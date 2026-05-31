"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Activity, 
  ShieldCheck, 
  RefreshCcw,
  Zap,
  Globe,
  Database,
  Cpu
} from "lucide-react";

interface LogEntry {
  id: number;
  type: "SYSTEM" | "SYNC" | "CORE" | "STABLE";
  message: string;
  time: string;
}

const INITIAL_LOGS: LogEntry[] = [
  { id: 1, type: "SYSTEM", message: "Kernel initialization completed. All modules secure.", time: "08:00:00" },
  { id: 2, type: "SYNC", message: "Firestore Real-time Stream: Active connection established.", time: "08:05:21" },
  { id: 3, type: "STABLE", message: "Environment: Production. Integrity Check: 100%.", time: "08:12:45" },
];

const ARCHITECT_LOGS = [
  "MethodChannel Native Bridge: Android Kiosk Mode [ACTIVE]",
  "AES-256 Encryption Layer: Handshake Protocol Verified.",
  "Memory Management: Drop_Caches triggered at 85% threshold.",
  "Deployment Pipeline: Build optimized via Turbopack Engine.",
  "Security Audit: Firebase App Check [PROVISIONED]",
  "System Vitals: Heartbeat monitoring synchronized with Global Node.",
  "Latency Calibration: Response time 0.04ms [OPTIMAL]",
  "Service Worker: registerSW.js cache manifest updated.",
  "NoSQL Schema: Composite Indexing rebuild successful.",
  "Retina Font Rendering: Hinting adjustments for non-HiDPI screens.",
  "Dart Isolate: Background processing for AI pipeline initialized.",
  "Local State: State Recovery Buffer [READY].",
];

export function KernelTerminalExplorer() {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Date.now(),
        type: Math.random() > 0.8 ? "CORE" : Math.random() > 0.5 ? "SYNC" : "SYSTEM",
        message: ARCHITECT_LOGS[Math.floor(Math.random() * ARCHITECT_LOGS.length)],
        time: new Date().toLocaleTimeString('en-GB', { hour12: false })
      };
      setLogs(prev => [newLog, ...prev.slice(0, 8)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col font-mono text-[11px] leading-relaxed relative z-10 overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <Terminal size={14} className="text-[#E31B23]" />
          <span className="text-[10px] uppercase text-[#E31B23] font-black tracking-[0.3em]">System.Monitor.V5</span>
        </div>
        <div className="flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-[8px] text-white/40 font-black uppercase tracking-widest">Live_State</span>
        </div>
      </div>
      
      {/* Log Feed */}
      <div className="flex-grow overflow-hidden relative">
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex items-start gap-4 group"
              >
                <span className="text-white/10 shrink-0">[{log.time}]</span>
                <span className={`font-black shrink-0 min-w-[55px] ${
                  log.type === "SYSTEM" ? "text-blue-500/70" : 
                  log.type === "SYNC" ? "text-emerald-500/70" : 
                  log.type === "CORE" ? "text-amber-500/70" : "text-[#E31B23]/70"
                }`}>
                  {log.type}
                </span>
                <span className="text-white/40 group-hover:text-white/80 transition-colors truncate">
                  {log.message}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between text-[9px] text-white/20 font-black uppercase tracking-widest">
        <div className="flex gap-4">
          <span className="flex items-center gap-1.5"><Activity size={10} className="text-[#E31B23]" /> CPU: 08%</span>
          <span className="flex items-center gap-1.5"><ShieldCheck size={10} className="text-emerald-500" /> STABLE</span>
        </div>
        <div className="hidden md:flex gap-4">
           <span className="flex items-center gap-1.5"><Database size={10} className="text-blue-500/50" /> NoSQL_READY</span>
           <span className="flex items-center gap-1.5"><Zap size={10} className="text-amber-500" /> 0.04ms</span>
        </div>
      </div>
    </div>
  );
}
