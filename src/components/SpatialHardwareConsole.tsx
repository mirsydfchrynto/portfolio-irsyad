"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Volume2, 
  VolumeX, 
  Layers, 
  Sliders, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Eye, 
  RotateCw,
  Maximize2
} from "lucide-react";

interface SpatialHardwareConsoleProps {
  activeProjectIndex: number;
  onSelectProject: (index: number) => void;
  onOpenDossier: () => void;
}

export function SpatialHardwareConsole({
  activeProjectIndex,
  onSelectProject,
  onOpenDossier
}: SpatialHardwareConsoleProps) {
  // Explode State: 0 (assembled solid monolith) to 100 (fully exploded isometric CAD)
  const [explodeLevel, setExplodeLevel] = useState(25);
  const [isMuted, setIsMuted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Audio Context Refs
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Sound generator: Procedural mechanical haptic click + 8D Spatial Pan
  const playSpatialClick = useCallback((panValue = 0, pitchMultiplier = 1) => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // 1. Mechanical Aluminum Micro-Click
      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      clickOsc.type = "sine";
      clickOsc.frequency.setValueAtTime(1400 * pitchMultiplier, now);
      clickOsc.frequency.exponentialRampToValueAtTime(120, now + 0.035);

      clickGain.gain.setValueAtTime(0.12, now);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      // 2. 8D Spatial Stereo Panner (Binaural feel)
      if (ctx.createStereoPanner) {
        const panner = ctx.createStereoPanner();
        panner.pan.setValueAtTime(Math.max(-1, Math.min(1, panValue)), now);
        clickOsc.connect(clickGain);
        clickGain.connect(panner);
        panner.connect(ctx.destination);
      } else {
        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);
      }

      clickOsc.start(now);
      clickOsc.stop(now + 0.04);
    } catch {}
  }, [isMuted]);

  // Clean audio context on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  // 3D Perspective Tilt on Mouse Movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [25, -5]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-25, 25]), { stiffness: 120, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Jog Wheel Interaction State
  const [wheelAngle, setWheelAngle] = useState(0);
  const lastAngleRef = useRef(0);

  const handleWheelRotate = (delta: number) => {
    const newAngle = wheelAngle + delta;
    setWheelAngle(newAngle);

    // Trigger tick sound per 45 deg
    if (Math.abs(newAngle - lastAngleRef.current) > 35) {
      lastAngleRef.current = newAngle;
      const normalizedPan = ((newAngle % 360) / 180) - 1;
      playSpatialClick(normalizedPan, 1 + (activeProjectIndex * 0.2));

      if (delta > 0) {
        onSelectProject((activeProjectIndex + 1) % 4);
      } else {
        onSelectProject((activeProjectIndex - 1 + 4) % 4);
      }
    }
  };

  // Explode translation multipliers based on slider (0 to 1)
  const factor = explodeLevel / 100;
  const l4Offset = factor * 110;  // UI Glass
  const l3Offset = factor * 40;   // Logic / Memory
  const l2Offset = factor * -35;  // Protocol / Security
  const l1Offset = factor * -100; // Native OS Hardware Core

  // Project data mapping
  const projectLayers = [
    // 0: Okey Bimbel
    {
      l4Title: "Okey CBT Kiosk Client",
      l4Badge: "FLUTTER UI · METHODCHANNEL",
      l3Title: "Local Session Cache",
      l3Badge: "AES-256 OFFLINE VAULT",
      l2Title: "5-Sec Dynamic QR Engine",
      l2Badge: "TOTP CRYPTO ROTATION",
      l1Title: "Android Native Kernel Lock",
      l1Badge: "Kotlin startLockTask() & FLAG_SECURE",
      accent: "#2563EB"
    },
    // 1: Geges Smart Barber
    {
      l4Title: "Geges Barber Client",
      l4Badge: "FLUTTER · MULTI-TENANT",
      l3Title: "Fair Workload Balancer",
      l3Badge: "ALGORITHM: AUTO-SHIFT",
      l2Title: "Real-Time Queue Stream",
      l2Badge: "FIRESTORE STREAM BUS",
      l1Title: "Clean Architecture Domain",
      l1Badge: "USE-CASE & ENTITY REPO",
      accent: "#2563EB"
    },
    // 2: VisionSafe
    {
      l4Title: "Gaussian Distance Guardian",
      l4Badge: "KOTLIN WINDOW OVERLAY",
      l3Title: "Dynamic Frame Sampler",
      l3Badge: "DART ISOLATE THREAD",
      l2Title: "MediaPipe 3D Landmark Mesh",
      l2Badge: "DEPTH Z-INDEX COMPUTATION",
      l1Title: "Android Foreground Service",
      l1Badge: "CPU OPTIMIZED PIPELINE",
      accent: "#2563EB"
    },
    // 3: Febrian Barbershop AI
    {
      l4Title: "WhatsApp Business Concierge",
      l4Badge: "BAILEYS SOCKET GATEWAY",
      l3Title: "Deterministic Tool Calling",
      l3Badge: "GROQ LLAMA 3.3 70B (380ms)",
      l2Title: "SQLite Persistent Memory",
      l2Badge: "ACID BOOKING SCHEMA",
      l1Title: "Node.js Process Daemon",
      l1Badge: "AUTO-RETRY WITH EXPONENTIAL BACKOFF",
      accent: "#2563EB"
    }
  ];

  const currentConfig = projectLayers[activeProjectIndex] || projectLayers[0];

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full min-h-[520px] bg-slate-950 rounded-3xl p-6 sm:p-8 text-white font-sans flex flex-col justify-between border border-slate-800 shadow-2xl relative overflow-hidden select-none"
    >
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* Top Console Hardware Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/90 pb-4 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
          <span className="text-slate-200 font-bold uppercase tracking-wider">
            SPATIAL CAD CONSOLE // 3D DECONSTRUCTOR
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Audio 8D Toggle */}
          <button
            onClick={() => {
              const newMuted = !isMuted;
              setIsMuted(newMuted);
              if (newMuted) playSpatialClick(0, 0.8);
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all border ${
              !isMuted 
                ? "bg-blue-600/30 border-blue-500/50 text-blue-300 shadow-sm" 
                : "bg-slate-800 border-slate-700 text-slate-400"
            }`}
            title="Toggle 8D spatial mechanical audio clicks"
          >
            {!isMuted ? <Volume2 size={13} className="text-blue-400" /> : <VolumeX size={13} />}
            <span>{!isMuted ? "8D Audio: Active" : "Sound: Muted"}</span>
          </button>

          {/* Quick Dossier Button */}
          <button
            onClick={onOpenDossier}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
            title="Open Detailed Case Study"
          >
            <Maximize2 size={14} />
          </button>
        </div>
      </div>

      {/* Main 3D Exploded Monolith Stage */}
      <div 
        className="relative z-10 my-auto py-8 w-full flex items-center justify-center min-h-[300px]"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={isRotating ? { rotateY: [0, 360] } : {}}
          transition={isRotating ? { repeat: Infinity, duration: 12, ease: "linear" } : {}}
          className="relative w-72 sm:w-80 h-44 cursor-grab active:cursor-grabbing transition-transform duration-100"
        >
          {/* ========================================================= */}
          {/* LAYER 4 (TOP): UI / GLASS SURFACE */}
          {/* ========================================================= */}
          <div
            style={{
              transform: `translate3d(0px, ${-l4Offset}px, ${l4Offset * 0.8}px) rotateX(55deg) rotateZ(-35deg)`,
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-900/40 backdrop-blur-md border border-blue-400/60 p-4 shadow-xl shadow-blue-500/10 flex flex-col justify-between group"
          >
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-blue-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                L4: SURFACE LAYER
              </span>
              <span className="text-white/80 px-1.5 py-0.5 rounded bg-blue-600/50">
                TOP PANE
              </span>
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-bold text-white tracking-tight">{currentConfig.l4Title}</div>
              <div className="text-[10px] font-mono text-blue-200">{currentConfig.l4Badge}</div>
            </div>
            <div className="text-[9px] font-mono text-slate-300/80 border-t border-blue-400/30 pt-1 flex justify-between">
              <span>HOLOGRAPHIC SHIELD</span>
              <span>100% RESPONSIVE</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* LAYER 3: BUSINESS LOGIC & PERSISTENCE */}
          {/* ========================================================= */}
          <div
            style={{
              transform: `translate3d(0px, ${-l3Offset}px, ${l3Offset * 0.8}px) rotateX(55deg) rotateZ(-35deg)`,
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className="absolute inset-0 rounded-2xl bg-slate-900/90 border border-slate-700/80 p-4 shadow-lg flex flex-col justify-between"
          >
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <Database size={11} />
                L3: DATA &amp; LOGIC MATRIX
              </span>
              <span className="text-slate-500 font-mono">SECURE CACHE</span>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-100">{currentConfig.l3Title}</div>
              <div className="text-[10px] font-mono text-emerald-400">{currentConfig.l3Badge}</div>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-3/4 rounded-full" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* LAYER 2: PROTOCOL & CRYPTO / RADAR */}
          {/* ========================================================= */}
          <div
            style={{
              transform: `translate3d(0px, ${-l2Offset}px, ${l2Offset * 0.8}px) rotateX(55deg) rotateZ(-35deg)`,
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className="absolute inset-0 rounded-2xl bg-slate-950/95 border border-blue-900/80 p-4 shadow-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                <Cpu size={11} />
                L2: PROTOCOL ENGINE
              </span>
              <span className="text-blue-500">REALTIME</span>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">{currentConfig.l2Title}</div>
              <div className="text-[10px] font-mono text-blue-400">{currentConfig.l2Badge}</div>
            </div>
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-1 flex-1 bg-blue-900/50 rounded-full" />
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* LAYER 1 (BASE): HARDWARE & OS KERNEL CORE */}
          {/* ========================================================= */}
          <div
            style={{
              transform: `translate3d(0px, ${-l1Offset}px, ${l1Offset * 0.8}px) rotateX(55deg) rotateZ(-35deg)`,
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
            className="absolute inset-0 rounded-2xl bg-black border-2 border-slate-700 p-4 shadow-2xl flex flex-col justify-between"
          >
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck size={11} />
                L1: OS HARDWARE KERNEL
              </span>
              <span className="text-amber-500 font-bold">LOCKED</span>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-100">{currentConfig.l1Title}</div>
              <div className="text-[10px] font-mono text-amber-400">{currentConfig.l1Badge}</div>
            </div>
            <div className="text-[9px] font-mono text-slate-500 flex justify-between">
              <span>ZERO VULNERABILITY</span>
              <span>KOTLIN NATIVE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Exploded Callout Indicators (Only visible when factor > 0.4) */}
      <div className="relative z-10 flex justify-center text-center">
        <span className="text-[11px] font-mono text-slate-400 tracking-wider">
          {factor > 0.4 
            ? "✦ CAD EXPLODED VIEW: 4 INDEPENDENT ARCHITECTURAL LAYERS" 
            : "✦ ASSEMBLED MONOLITH // DRAG SLIDER BELOW TO DISMANTLE"}
        </span>
      </div>

      {/* Bottom Tactile Hardware Deck */}
      <div className="relative z-20 pt-4 border-t border-slate-800 space-y-4">
        
        {/* Sliders & Tactile Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Explode Slider Control */}
          <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 p-3 rounded-2xl space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Sliders size={12} className="text-blue-400" />
                Dismantle Architecture Slider:
              </span>
              <span className="text-blue-400 font-bold">{explodeLevel}% Exploded</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={explodeLevel}
              onChange={(e) => {
                const val = Number(e.target.value);
                setExplodeLevel(val);
                playSpatialClick(((val - 50) / 50), 0.9 + (val / 200));
              }}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>0% (Assembled Solid)</span>
              <span>50% (Axonometric)</span>
              <span>100% (Full Exploded CAD)</span>
            </div>
          </div>

          {/* Rotary Jog-Wheel (Scrubber Toy) */}
          <div className="md:col-span-5 bg-slate-900/90 border border-slate-800 p-3 rounded-2xl flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono text-slate-300 font-semibold block">
                Rotary Jog Wheel:
              </span>
              <span className="text-[10px] font-mono text-blue-400">
                Turn to scrub 8D sound &amp; projects
              </span>
            </div>

            {/* Tactile Rotary Wheel Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleWheelRotate(-45)}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-slate-300 active:scale-95 transition-transform"
                title="Rotate counter-clockwise"
              >
                ↺
              </button>
              
              <div 
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-950 to-slate-800 border-2 border-blue-500/60 shadow-md flex items-center justify-center text-blue-400 font-mono text-xs font-bold"
                style={{ transform: `rotate(${wheelAngle}deg)`, transition: "transform 0.2s ease-out" }}
              >
                <div className="w-1.5 h-3 bg-blue-400 rounded-full mb-3" />
              </div>

              <button
                onClick={() => handleWheelRotate(45)}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-slate-300 active:scale-95 transition-transform"
                title="Rotate clockwise"
              >
                ↻
              </button>
            </div>
          </div>
        </div>

        {/* 4 Quick Cartridge Slots */}
        <div className="grid grid-cols-4 gap-2 pt-1">
          {["01 OKEY CBT", "02 GEGES", "03 VISION", "04 FEBRIAN"].map((slot, i) => (
            <button
              key={slot}
              onClick={() => {
                onSelectProject(i);
                playSpatialClick(((i - 1.5) / 1.5), 1.2);
              }}
              className={`py-2 rounded-xl text-center text-xs font-mono font-bold transition-all border ${
                activeProjectIndex === i
                  ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/30 ring-1 ring-blue-400"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
