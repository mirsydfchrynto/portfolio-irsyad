"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Minimize2, CornerDownLeft } from "lucide-react";
import { soundFX } from "@/utils/soundEffects";

interface CommandOutput {
  id: string;
  type: "command" | "response" | "error" | "system";
  text: string;
}

export function TelemetryTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: "init-1",
      type: "system",
      text: "MIF-TELEMETRY // CLIENT PROTOCOL INITIALIZED"
    },
    {
      id: "init-2",
      type: "response",
      text: "Type 'help' to inspect available system commands."
    }
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "~" || (e.ctrlKey && e.key === "`")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        soundFX.playClick(1000);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    soundFX.playClick(900);

    const newOutputs: CommandOutput[] = [
      ...history,
      { id: String(Date.now()), type: "command", text: `$ ${trimmed}` }
    ];

    switch (trimmed) {
      case "help":
        newOutputs.push({
          id: String(Date.now() + 1),
          type: "response",
          text: `AVAILABLE COMMANDS:
  stack      - List core runtime engineering pillars
  exhibits   - Display index of 4 production codebases
  bio        - Engineer profile & architectural stance
  contact    - Retrieve direct dispatch channels
  cv         - Download Curriculum Vitae (PDF)
  status     - View real-time client & engine diagnostics
  clear      - Clear terminal screen
  exit       - Close telemetry console`
        });
        break;

      case "stack":
        newOutputs.push({
          id: String(Date.now() + 1),
          type: "response",
          text: `CORE RUNTIME STACK:
  • Mobile Systems : Flutter SDK (BLoC), Android Kotlin Native (Kiosk Lock, FLAG_SECURE)
  • Edge Inference : MediaPipe Face Mesh, PyTorch, YOLOv8, Nvidia Jetson Nano
  • Web Systems    : Next.js 15, React 19, TypeScript, Tailwind CSS
  • Backend/Cloud  : FastAPI, Node.js, PostgreSQL, SQLite, Firebase Firestore
  • Protocols      : Git, Docker, Linux Ubuntu, AES-256, Dynamic QR Encryption`
        });
        break;

      case "exhibits":
      case "projects":
        newOutputs.push({
          id: String(Date.now() + 1),
          type: "response",
          text: `PRODUCTION EXHIBITS:
  [SYS.01] Okey Bimbel CBT Ecosystem  -> Live OS-level exam kiosk anti-cheat
  [SYS.02] Geges Smart Barber          -> Fair-work queue & barber balance engine
  [SYS.03] VisionSafe Edge AI          -> On-device 3D Face Mesh eye-health guardian
  [SYS.04] Febrian Barbershop AI       -> 24/7 WhatsApp Baileys + Groq agent`
        });
        break;

      case "bio":
        newOutputs.push({
          id: String(Date.now() + 1),
          type: "response",
          text: "Muhammad Irsyad Fachryanto — Systems & Mobile Craftsman based in Indonesia. Specializing in high-consequence mobile engineering, native hardware lockdown, and low-power edge computer vision."
        });
        break;

      case "contact":
        newOutputs.push({
          id: String(Date.now() + 1),
          type: "response",
          text: `DISPATCH CHANNELS:
  Email    : irsydfchrynto@gmail.com
  WhatsApp : +62 858-6582-6621
  GitHub   : https://github.com/mirsydfchrynto
  LinkedIn : https://linkedin.com/in/mirsydfchrynto`
        });
        break;

      case "cv":
      case "resume":
        newOutputs.push({
          id: String(Date.now() + 1),
          type: "response",
          text: "Triggering CV download in main viewport..."
        });
        const cvLink = document.querySelector('a[download*="CV"]') as HTMLAnchorElement;
        if (cvLink) cvLink.click();
        break;

      case "status":
        const screenW = typeof window !== "undefined" ? window.innerWidth : 0;
        const screenH = typeof window !== "undefined" ? window.innerHeight : 0;
        newOutputs.push({
          id: String(Date.now() + 1),
          type: "response",
          text: `TELEMETRY STATUS:
  Viewport     : ${screenW}x${screenH} px
  Engine       : Next.js 16.2.4 (Turbopack static export)
  Audio Engine : Web Audio API Oscillator Synth (Active)
  Platform     : ${typeof navigator !== "undefined" ? navigator.platform : "Unknown"}
  Status       : Ready for remote & global contracts`
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        setIsOpen(false);
        setInputVal("");
        return;

      default:
        newOutputs.push({
          id: String(Date.now() + 1),
          type: "error",
          text: `Command not recognized: '${trimmed}'. Type 'help' for command manual.`
        });
        break;
    }

    setHistory(newOutputs);
    setInputVal("");
  };

  return (
    <>
      {/* Floating Status Pill / Trigger Button */}
      <div className="fixed bottom-4 right-4 z-40 print:hidden">
        {!isOpen && (
          <button
            onClick={() => {
              setIsOpen(true);
              soundFX.playClick(1100);
            }}
            aria-label="Open Telemetry Terminal"
            className="flex items-center gap-2 px-3.5 py-2 rounded-sm bg-[#111215] text-[#F7F7F4] border border-[#2B2F3A] shadow-lg font-mono text-[11px] uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors"
          >
            <TerminalIcon size={13} className="text-emerald-400" />
            <span>SYS.CLI</span>
            <span className="text-[#8E92A0]">[~]</span>
          </button>
        )}
      </div>

      {/* Expanded Terminal Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[94vw] sm:w-[460px] max-h-[380px] bg-[#0E1015] border border-[#2B2F3A] rounded-sm shadow-2xl font-mono text-xs text-[#E5E7EB] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          {/* Terminal Window Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#171A21] border-b border-[#2B2F3A] select-none">
            <div className="flex items-center gap-2 text-[11px] text-[#A0A5B5]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold tracking-wider text-[#F7F7F4]">IRSYAD // TELEMETRY TERMINAL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#8E92A0] hover:text-white rounded-sm hover:bg-[#232733]"
                aria-label="Minimize terminal"
              >
                <Minimize2 size={13} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#8E92A0] hover:text-rose-400 rounded-sm hover:bg-[#232733]"
                aria-label="Close terminal"
              >
                <X size={13} />
              </button>
            </div>
          </div>

          {/* Terminal Logs Viewport */}
          <div 
            ref={scrollRef}
            className="p-3.5 overflow-y-auto space-y-2 max-h-[260px] scrollbar-none font-mono text-[11px] leading-relaxed select-text"
          >
            {history.map((h) => (
              <div key={h.id}>
                {h.type === "command" && (
                  <div className="text-emerald-400 font-bold">{h.text}</div>
                )}
                {h.type === "system" && (
                  <div className="text-[#8E92A0] uppercase tracking-wider">{h.text}</div>
                )}
                {h.type === "response" && (
                  <div className="text-[#D1D5DB] whitespace-pre-wrap">{h.text}</div>
                )}
                {h.type === "error" && (
                  <div className="text-rose-400">{h.text}</div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Command Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputVal);
            }}
            className="flex items-center gap-2 px-3 py-2 bg-[#12141A] border-t border-[#2B2F3A]"
          >
            <span className="text-emerald-400 font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type command (e.g. 'help', 'stack', 'contact')..."
              className="flex-1 bg-transparent border-none outline-none font-mono text-[11px] text-[#F7F7F4] placeholder-[#525866]"
            />
            <button
              type="submit"
              className="text-[#8E92A0] hover:text-white p-1"
              aria-label="Execute command"
            >
              <CornerDownLeft size={13} />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
