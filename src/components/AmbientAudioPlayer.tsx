"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AmbientAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscsRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);
  const bassRef = useRef<{ osc: OscillatorNode; gain: GainNode } | null>(null);
  const chordIntervalRef = useRef<any>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);

  // "Somebody Else" (The 1975) iconic chord progression:
  // Fmaj7 -> G -> Am7 -> Em7
  const chords = [
    { bass: 87.31, freqs: [174.61, 220.0, 261.63, 329.63] }, // Fmaj7
    { bass: 98.0, freqs: [196.0, 246.94, 293.66, 392.0] },    // G
    { bass: 110.0, freqs: [220.0, 261.63, 329.63, 392.0] },  // Am7
    { bass: 82.41, freqs: [164.81, 196.0, 246.94, 293.66] }, // Em7
  ];

  const startAmbientSynth = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 2.0);

      // Warm low-pass filter for cozy 80s tape warmth
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(460, ctx.currentTime);
      filterRef.current = filter;

      masterGain.connect(filter);
      filter.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Create 4 polyphonic chord oscillators (warm triangle + sine hybrid)
      const oscNodes: { osc: OscillatorNode; gain: GainNode }[] = [];
      const initChord = chords[0];

      initChord.freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.detune.setValueAtTime((idx - 1.5) * 6, ctx.currentTime); // Lush chorus

        g.gain.setValueAtTime(0.18, ctx.currentTime);
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        oscNodes.push({ osc, gain: g });
      });
      oscsRef.current = oscNodes;

      // Sub bass synth
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();
      bassOsc.type = "sine";
      bassOsc.frequency.setValueAtTime(initChord.bass, ctx.currentTime);
      bassGain.gain.setValueAtTime(0.22, ctx.currentTime);
      bassOsc.connect(bassGain);
      bassGain.connect(masterGain);
      bassOsc.start();
      bassRef.current = { osc: bassOsc, gain: bassGain };

      // Sequence the "Somebody Else" progression smoothly every 3.2s
      let chordIndex = 0;
      chordIntervalRef.current = setInterval(() => {
        if (!audioCtxRef.current) return;
        chordIndex = (chordIndex + 1) % chords.length;
        const nextChord = chords[chordIndex];
        const now = audioCtxRef.current.currentTime;

        // Smoothly glide chord frequencies
        nextChord.freqs.forEach((f, i) => {
          if (oscsRef.current[i]) {
            oscsRef.current[i].osc.frequency.setTargetAtTime(f, now, 0.45);
          }
        });

        // Smoothly glide bass note
        if (bassRef.current) {
          bassRef.current.osc.frequency.setTargetAtTime(nextChord.bass, now, 0.35);
        }

        // Gentle filter sweep
        if (filterRef.current) {
          const modCutoff = 420 + Math.sin(chordIndex * 1.5) * 80;
          filterRef.current.frequency.setTargetAtTime(modCutoff, now, 0.8);
        }
      }, 3200);

      setIsPlaying(true);
    } catch (e) {
      console.warn("Web Audio API not allowed or supported", e);
    }
  };

  const stopAmbientSynth = () => {
    if (chordIntervalRef.current) {
      clearInterval(chordIntervalRef.current);
    }

    if (masterGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      masterGainRef.current.gain.setValueAtTime(masterGainRef.current.gain.value, ctx.currentTime);
      masterGainRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      setTimeout(() => {
        oscsRef.current.forEach(({ osc }) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {}
        });
        oscsRef.current = [];

        if (bassRef.current) {
          try {
            bassRef.current.osc.stop();
            bassRef.current.osc.disconnect();
          } catch {}
          bassRef.current = null;
        }

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
      if (chordIntervalRef.current) clearInterval(chordIntervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      aria-label={isPlaying ? "Mute Somebody Else Synth" : "Play The 1975 - Somebody Else Synth"}
      title={isPlaying ? "Mute Somebody Else Synth" : "Play The 1975 - Somebody Else Synth"}
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
            THE 1975 // SOMEBODY ELSE
          </span>
          <Volume2 size={13} className="text-[#1D4ED8]" />
        </>
      ) : (
        <>
          <VolumeX size={13} className="text-[#8E92A0] group-hover:text-[#111215] transition-colors" />
          <span className="text-[11px] text-[#525866] group-hover:text-[#111215] transition-colors hidden sm:inline tracking-wider uppercase">
            AUDIO: OFF
          </span>
        </>
      )}
    </button>
  );
}
