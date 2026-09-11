"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";

export function ArtisticAvatar() {
  return (
    <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] mx-auto group">
      {/* Soft Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-sky-400/15 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main Artistic Card */}
      <div className="relative w-full h-full bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden p-8 flex flex-col justify-between transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-200">
        {/* Top Header inside card */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Status: Active
            </span>
          </div>
          <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            2026 Production
          </span>
        </div>

        {/* Center Artistic Emblem */}
        <div className="my-auto flex flex-col items-center text-center space-y-5">
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full bg-white rounded-[14px] flex flex-col items-center justify-center p-3 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-14 h-14 bg-blue-50 rounded-full blur-sm" />
              <Layers size={36} className="text-blue-600 relative z-10 stroke-[1.75]" />
              <span className="text-[11px] font-black tracking-widest text-slate-800 uppercase mt-1 relative z-10 font-display">
                IF.DEV
              </span>
            </div>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 font-display tracking-tight">
              M. Irsyad Fachryanto
            </h3>
            <p className="text-sm font-medium text-slate-500 max-w-[22ch] mx-auto">
              Mobile Systems &amp; Full-Stack Engineer
            </p>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5 justify-center">
            <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-50 text-slate-700 border border-slate-200/60">
              Flutter
            </span>
            <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-50 text-slate-700 border border-slate-200/60">
              Kotlin Native
            </span>
            <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-50 text-slate-700 border border-slate-200/60">
              Next.js
            </span>
            <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-blue-50 text-blue-700 border border-blue-200/60 font-semibold">
              Agentic AI
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 font-medium px-1">
            <span className="flex items-center gap-1 text-slate-500">
              <ShieldCheck size={14} className="text-blue-600" />
              Production Verified
            </span>
            <span className="text-slate-400">Tegal, Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  );
}
