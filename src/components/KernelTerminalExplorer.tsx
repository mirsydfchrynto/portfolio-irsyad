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
  { id: 1, type: "INFO", message: "Kernel Initialized: Semester 6 Mode Active", time: "08:00:00" },
  { id: 2, type: "DEBUG", message: "Searching for social life... 404 Not Found.", time: "08:05:21" },
  { id: 3, type: "SUCCESS", message: "Caffeine detected. Productivity +50%", time: "09:12:45" },
];

const FUNNY_LOGS = [
  "Trying to exit Vim for 2 hours... Success (by pulling the plug).",
  "Explaining recursion to a cat. Cat seems to understand better than me.",
  "Fixed 1 bug. 42 new bugs joined the party.",
  "git commit -m 'fix: please work this time'",
  "Detected user interaction. Activating social_anxiety.exe",
  "Compiling dreams into machine code... Errors found: 0 (Surprisingly).",
  "Memory Leak detected: Thoughts about 3 AM coding session.",
  "sudo rm -rf /procrastination --no-preserve-root",
  "It works on my machine. Deploying machine to client...",
  "CSS centering successful. Celebrating with a coffee break.",
];

export function KernelTerminalExplorer() {
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [vitals, setVitals] = useState({
    caffeine: 85,
    sleep: 12,
    stress: 45,
    productivity: 92
  });

  // Cycle logs
  useEffect(() => {
    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Date.now(),
        type: Math.random() > 0.8 ? "WARN" : Math.random() > 0.5 ? "DEBUG" : "INFO",
        message: FUNNY_LOGS[Math.floor(Math.random() * FUNNY_LOGS.length)],
        time: new Date().toLocaleTimeString('en-GB', { hour12: false })
      };
      setLogs(prev => [newLog, ...prev.slice(0, 4)]);
      
      // Randomize vitals slightly
      setVitals(prev => ({
        caffeine: Math.max(0, Math.min(100, prev.caffeine + (Math.random() * 4 - 2.5))),
        sleep: Math.max(0, Math.min(100, prev.sleep + (Math.random() * 2 - 1.1))),
        stress: Math.max(0, Math.min(100, prev.stress + (Math.random() * 6 - 2.5))),
        productivity: Math.max(0, Math.min(100, prev.productivity + (Math.random() * 4 - 2)))
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full space-y-6 font-mono select-none">
      {/* Vitals Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <VitalCard 
          icon={<Coffee size={14} className="text-amber-500" />} 
          label="Caffeine" 
          value={vitals.caffeine} 
          unit="%" 
          color="bg-amber-500" 
        />
        <VitalCard 
          icon={<Ghost size={14} className="text-purple-400" />} 
          label="Rest" 
          value={vitals.sleep} 
          unit="%" 
          color="bg-purple-500" 
        />
        <VitalCard 
          icon={<AlertTriangle size={14} className="text-[#0070f3]" />} 
          label="Stress" 
          value={vitals.stress} 
          unit="%" 
          color="bg-[#0070f3]" 
        />
        <VitalCard 
          icon={<Zap size={14} className="text-emerald-400" />} 
          label="Output" 
          value={vitals.productivity} 
          unit="%" 
          color="bg-emerald-500" 
        />
      </div>

      {/* Main Terminal Area */}
      <div className="relative border-2 border-white/10 bg-[#060608] shadow-[20px_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="absolute inset-0 architect-grid-dense opacity-[0.03] pointer-events-none" />
        
        {/* Header */}
        <div className="bg-[#0a0a0c] flex border-b-2 border-white/5 items-center justify-between px-5 h-10">
          <div className="flex items-center gap-2.5">
            <Activity size={12} className="text-[#0070f3] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">KERNEL_MONITOR_V4.2</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-tighter">Production Stable</span>
          </div>
        </div>

        <div className="p-6 relative z-10">
          {/* Logs Section */}
          <div className="space-y-4 min-h-[180px]">
            <div className="flex items-center gap-2.5 border-b border-white/5 pb-2.5 mb-4">
              <Terminal size={14} className="text-[#0070f3]" />
              <span className="text-[10px] uppercase text-[#0070f3] font-bold tracking-[0.25em]">Thought_Engine.log</span>
            </div>
            <div className="space-y-2 overflow-hidden">
              <AnimatePresence mode="popLayout">
                {logs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-start gap-4 text-[10.5px] leading-relaxed group"
                  >
                    <span className="text-white/20 whitespace-nowrap font-mono">[{log.time}]</span>
                    <span className={`font-bold min-w-[50px] ${
                      log.type === "INFO" ? "text-blue-400" : 
                      log.type === "WARN" ? "text-amber-400" : 
                      log.type === "SUCCESS" ? "text-emerald-400" : "text-[#0070f3]"
                    }`}>
                      {log.type}
                    </span>
                    <span className="text-white/50 group-hover:text-white transition-colors duration-300">
                      {log.message}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="bg-[#0a0a0c] px-5 py-2.5 border-t-2 border-white/5 flex flex-wrap justify-between items-center gap-6 text-[8.5px] text-white/20 uppercase tracking-[0.2em] font-bold">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 hover:text-white/40 transition-colors"><Cpu size={12} className="text-[#0070f3]/40" /> Proc: IR-992_ENGINE</span>
            <span className="flex items-center gap-2 hover:text-white/40 transition-colors"><FileCode size={12} className="text-[#0070f3]/40" /> Env: PROD_STABLE</span>
          </div>
          <div className="flex gap-6">
            <span className="text-emerald-500/40 flex items-center gap-1.5"><CheckCircle2 size={11} /> Sync: 100%</span>
            <span className="text-[#0070f3]/40 flex items-center gap-1.5"><Bug size={11} /> Issues: 0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VitalCard({ icon, label, value, unit, color }: { icon: any, label: string, value: number, unit: string, color: string }) {
  return (
    <div className="bg-[#0a0a0c] border-2 border-white/5 p-4 space-y-3 group hover:border-[#0070f3]/30 transition-all duration-500 shadow-xl">
      <div className="flex items-center justify-between">
        <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <span className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">{label}</span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-bold text-white tracking-tighter">{Math.round(value)}</span>
        <span className="text-[11px] text-white/20 font-bold">{unit}</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 overflow-hidden">
        <motion.div 
          className={`h-full ${color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

