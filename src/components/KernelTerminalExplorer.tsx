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
    <div className="w-full space-y-4 font-mono select-none">
      {/* Vitals Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <VitalCard 
          icon={<Coffee size={14} className="text-amber-400" />} 
          label="Caffeine" 
          value={vitals.caffeine} 
          unit="%" 
          color="bg-amber-500" 
        />
        <VitalCard 
          icon={<Ghost size={14} className="text-purple-400" />} 
          label="Sleep" 
          value={vitals.sleep} 
          unit="%" 
          color="bg-purple-500" 
        />
        <VitalCard 
          icon={<AlertTriangle size={14} className="text-rose-400" />} 
          label="Stress" 
          value={vitals.stress} 
          unit="%" 
          color="bg-rose-500" 
        />
        <VitalCard 
          icon={<Zap size={14} className="text-emerald-400" />} 
          label="Productivity" 
          value={vitals.productivity} 
          unit="%" 
          color="bg-emerald-500" 
        />
      </div>

      {/* Main Terminal Area */}
      <div className="relative border border-white/10 bg-[#0b0c10] rounded-sm overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-[#12131a] flex border-b border-white/5 items-center justify-between px-4 h-9">
          <div className="flex items-center gap-1.5">
            <Activity size={12} className="text-rose-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">KERNEL_TERMINAL_EXPLORER V6.0.2</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] text-emerald-500/80 font-bold uppercase tracking-tighter">System Nominal</span>
          </div>
        </div>

        <div className="p-4 grid lg:grid-cols-1 gap-4">
          {/* Logs Section */}
          <div className="space-y-2 min-h-[160px]">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
              <Terminal size={12} className="text-rose-400" />
              <span className="text-[9px] uppercase text-rose-400/70 font-bold tracking-widest">Thought_Process.log</span>
            </div>
            <div className="space-y-1.5 overflow-hidden">
              <AnimatePresence mode="popLayout">
                {logs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex items-start gap-3 text-[10px] leading-relaxed group"
                  >
                    <span className="text-white/20 whitespace-nowrap">[{log.time}]</span>
                    <span className={`font-bold min-w-[45px] ${
                      log.type === "INFO" ? "text-blue-400" : 
                      log.type === "WARN" ? "text-rose-400" : 
                      log.type === "SUCCESS" ? "text-emerald-400" : "text-amber-400"
                    }`}>
                      {log.type}
                    </span>
                    <span className="text-white/60 group-hover:text-white transition-colors">
                      {log.message}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="bg-[#0f1015] px-4 py-2 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-[8px] text-white/25 uppercase tracking-widest">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><Cpu size={10} className="text-white/20" /> CPU: Intel(R) Core(TM) i7-Irsyad</span>
            <span className="flex items-center gap-1.5"><FileCode size={10} className="text-white/20" /> Runtime: Semester_6_Stable</span>
          </div>
          <div className="flex gap-4">
            <span className="text-emerald-500/50 flex items-center gap-1"><CheckCircle2 size={10} /> Sync: 100%</span>
            <span className="text-rose-500/50 flex items-center gap-1"><Bug size={10} /> Bugs: &infin;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VitalCard({ icon, label, value, unit, color }: { icon: any, label: string, value: number, unit: string, color: string }) {
  return (
    <div className="bg-[#0e0f14]/50 border border-white/5 p-3 rounded-sm space-y-2 group hover:border-white/10 transition-colors">
      <div className="flex items-center justify-between">
        {icon}
        <span className="text-[8px] text-white/30 uppercase tracking-tighter">{label}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-lg font-bold text-white tracking-tighter">{Math.round(value)}</span>
        <span className="text-[10px] text-white/20">{unit}</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
