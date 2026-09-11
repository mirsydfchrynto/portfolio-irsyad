"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AmbientAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const timerRef = useRef<any>(null);

  const startAmbientSynth = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      // Gentle fade in
      masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 2.5);

      // Warm low-pass filter for cozy lofi ambient sound
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(420, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soft ambient chord progression: Cmaj9 chord (C3, G3, B3, D4, E4)
      const baseFreqs = [130.81, 196.0, 246.94, 293.66, 329.63];
      const oscs: OscillatorNode[] = [];

      baseFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle slow detune for lush chorus effect
        const detuneAmount = (idx - 2) * 4;
        osc.detune.setValueAtTime(detuneAmount, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.2, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;

      // Gentle filter modulation for living breathing feel
      let step = 0;
      timerRef.current = setInterval(() => {
        if (!audioCtxRef.current) return;
        step += 0.05;
        const cutoff = 380 + Math.sin(step) * 120;
        filter.frequency.setTargetAtTime(cutoff, ctx.currentTime, 1.2);
      }, 500);

      setIsPlaying(true);
    } catch (e) {
      console.warn("AudioContext not supported or blocked by browser policy", e);
    }
  };

  const stopAmbientSynth = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {}
        });
        oscillatorsRef.current = [];
        if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
          audioCtxRef.current.close();
        }
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 1250);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAmbientSynth();
    } else {
      startAmbientSynth();
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      aria-label={isPlaying ? "Mute ambient music" : "Play peaceful ambient music"}
      title={isPlaying ? "Mute ambient music" : "Play peaceful ambient music"}
      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/90 hover:bg-blue-50/80 hover:border-blue-200 transition-all text-xs font-medium text-slate-700 shadow-sm active:scale-95"
    >
      {isPlaying ? (
        <>
          <div className="flex items-center gap-0.5 h-3 px-0.5">
            <span className="w-0.5 bg-blue-600 rounded-full animate-wave-1" />
            <span className="w-0.5 bg-blue-600 rounded-full animate-wave-2" />
            <span className="w-0.5 bg-blue-600 rounded-full animate-wave-3" />
            <span className="w-0.5 bg-blue-600 rounded-full animate-wave-4" />
          </div>
          <span className="text-[11px] font-semibold text-blue-600 hidden sm:inline">Ambient: On</span>
          <Volume2 size={13} className="text-blue-600" />
        </>
      ) : (
        <>
          <VolumeX size={13} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
          <span className="text-[11px] text-slate-500 group-hover:text-blue-600 transition-colors hidden sm:inline">Sound: Off</span>
        </>
      )}
    </button>
  );
}
