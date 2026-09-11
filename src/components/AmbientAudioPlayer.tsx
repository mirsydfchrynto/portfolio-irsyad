"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AmbientAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const melodyTimerRef = useRef<any>(null);
  const isRunningRef = useRef<boolean>(false);

  // Mac DeMarco - "Chamber of Reflection"
  // Signature tape-warped synth riff & chord progression:
  // Roots: Bb -> Ab -> Gb -> F
  const chords = [
    { bass: 58.27, pad: [116.54, 174.61, 233.08, 277.18] }, // Bbm7
    { bass: 51.91, pad: [103.83, 155.56, 207.65, 261.63] }, // Ab7
    { bass: 46.25, pad: [92.50, 138.59, 185.00, 233.08] },  // Gbmaj7
    { bass: 43.65, pad: [87.31, 130.81, 174.61, 220.00] },  // F7
  ];

  // The iconic lead melody notes (Hz) with duration in beats
  // F4, Ab4, Bb4, C5, Bb4, Ab4, F4...
  const melodyNotes = [
    { f: 349.23, d: 2.0 },  // F4 (hold)
    { f: 415.30, d: 1.0 },  // Ab4
    { f: 466.16, d: 1.0 },  // Bb4
    { f: 523.25, d: 2.0 },  // C5
    { f: 466.16, d: 1.0 },  // Bb4
    { f: 415.30, d: 1.0 },  // Ab4
    { f: 349.23, d: 3.0 },  // F4 (long rest/hold)
    { f: 0,      d: 1.0 },  // rest

    { f: 554.37, d: 2.0 },  // Db5
    { f: 523.25, d: 1.5 },  // C5
    { f: 466.16, d: 1.5 },  // Bb4
    { f: 415.30, d: 1.5 },  // Ab4
    { f: 349.23, d: 3.5 },  // F4
    { f: 0,      d: 2.0 },  // rest
  ];

  const startChamberSynth = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      isRunningRef.current = true;

      // Master output with gentle fade in
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.8);

      // Warm analog low-pass filter (characteristic of vintage tape)
      const mainFilter = ctx.createBiquadFilter();
      mainFilter.type = "lowpass";
      mainFilter.frequency.setValueAtTime(820, ctx.currentTime);
      mainFilter.Q.setValueAtTime(1.8, ctx.currentTime);

      masterGain.connect(mainFilter);
      mainFilter.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Vintage Tape Flutter / Pitch-Bend LFO (~4.5 Hz)
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.type = "sine";
      lfo.frequency.setValueAtTime(4.4, ctx.currentTime);
      lfoGain.gain.setValueAtTime(18, ctx.currentTime); // ±18 cents pitch wobble
      lfo.connect(lfoGain);
      lfo.start();

      // Lead Melody Synth (warm triangle oscillator modulated by tape wobble)
      const leadOsc = ctx.createOscillator();
      const leadGain = ctx.createGain();
      leadOsc.type = "triangle";
      leadOsc.frequency.setValueAtTime(melodyNotes[0].f, ctx.currentTime);
      lfoGain.connect(leadOsc.detune);

      leadGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      leadOsc.connect(leadGain);
      leadGain.connect(masterGain);
      leadOsc.start();

      // Warm Sub-Bass Synth
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bassOsc.type = "sine";
      bassOsc.frequency.setValueAtTime(chords[0].bass, ctx.currentTime);
      bassGain.gain.setValueAtTime(0.24, ctx.currentTime);
      bassOsc.connect(bassGain);
      bassGain.connect(masterGain);
      bassOsc.start();

      // 4-Voice Warm Chord Pad (Sine/Triangle blend)
      const padVoices = chords[0].pad.map((f, i) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        osc.detune.setValueAtTime((i - 1.5) * 8, ctx.currentTime);
        g.gain.setValueAtTime(0.12, ctx.currentTime);
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        return { osc, gain: g };
      });

      // Melody Sequencer Loop
      let stepIndex = 0;
      const beatMs = 520; // ~115 BPM half-time feel

      const scheduleNextNote = () => {
        if (!isRunningRef.current || !audioCtxRef.current) return;
        const currentCtx = audioCtxRef.current;
        const note = melodyNotes[stepIndex];
        const duration = note.d * beatMs;
        const now = currentCtx.currentTime;

        if (note.f > 0) {
          leadOsc.frequency.setTargetAtTime(note.f, now, 0.05);
          leadGain.gain.cancelScheduledValues(now);
          leadGain.gain.setValueAtTime(0.001, now);
          leadGain.gain.exponentialRampToValueAtTime(0.28, now + 0.08);
          leadGain.gain.exponentialRampToValueAtTime(0.001, now + (duration / 1000) * 0.9);
        } else {
          leadGain.gain.setTargetAtTime(0.0001, now, 0.05);
        }

        stepIndex = (stepIndex + 1) % melodyNotes.length;
        melodyTimerRef.current = setTimeout(scheduleNextNote, duration);
      };

      // Start Melody Sequence
      scheduleNextNote();

      // Chord Progression Loop (rotates every 4.2s)
      let chordIndex = 0;
      const chordInterval = setInterval(() => {
        if (!isRunningRef.current || !audioCtxRef.current) {
          clearInterval(chordInterval);
          return;
        }
        const currentCtx = audioCtxRef.current;
        chordIndex = (chordIndex + 1) % chords.length;
        const chord = chords[chordIndex];
        const now = currentCtx.currentTime;

        // Smooth bass glide
        bassOsc.frequency.setTargetAtTime(chord.bass, now, 0.3);

        // Smooth pad voice glide
        chord.pad.forEach((freq, idx) => {
          if (padVoices[idx]) {
            padVoices[idx].osc.frequency.setTargetAtTime(freq, now, 0.4);
          }
        });
      }, 4200);

      setIsPlaying(true);
    } catch (e) {
      console.warn("AudioContext error:", e);
    }
  };

  const stopChamberSynth = () => {
    isRunningRef.current = false;
    if (melodyTimerRef.current) {
      clearTimeout(melodyTimerRef.current);
    }

    if (masterGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
      masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      setTimeout(() => {
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
      stopChamberSynth();
    } else {
      startChamberSynth();
    }
  };

  useEffect(() => {
    return () => {
      isRunningRef.current = false;
      if (melodyTimerRef.current) clearTimeout(melodyTimerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      aria-label={isPlaying ? "Mute Chamber of Reflection" : "Play Mac DeMarco - Chamber of Reflection"}
      title={isPlaying ? "Mute Chamber of Reflection" : "Play Mac DeMarco - Chamber of Reflection"}
      className="group relative flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-sm border border-[#E2E2DC] bg-white hover:bg-[#F0F0EB] transition-all font-mono text-xs text-[#111215] shadow-xs active:scale-95"
    >
      {isPlaying ? (
        <>
          <div className="flex items-center gap-0.5 h-3 px-0.5">
            <span className="w-0.5 bg-[#1D4ED8] rounded-full animate-wave-1" />
            <span className="w-0.5 bg-[#1D4ED8] rounded-full animate-wave-2" />
            <span className="w-0.5 bg-[#1D4ED8] rounded-full animate-wave-3" />
            <span className="w-0.5 bg-[#1D4ED8] rounded-full animate-wave-4" />
          </div>
          <span className="text-[11px] font-bold text-[#1D4ED8] hidden sm:inline tracking-wider uppercase">
            MAC DEMARCO // CHAMBER OF REFLECTION
          </span>
          <Volume2 size={13} className="text-[#1D4ED8]" />
        </>
      ) : (
        <>
          <VolumeX size={13} className="text-[#8E92A0] group-hover:text-[#111215] transition-colors" />
          <span className="text-[11px] text-[#525866] group-hover:text-[#111215] transition-colors hidden sm:inline tracking-wider uppercase">
            PLAY VIBE [CHAMBER]
          </span>
        </>
      )}
    </button>
  );
}
