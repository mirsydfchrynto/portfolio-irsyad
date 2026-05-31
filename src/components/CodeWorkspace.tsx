"use client";

import { motion } from "framer-motion";
import { FileCode, ChevronRight, Terminal as TerminalIcon } from "lucide-react";
import { useState } from "react";

interface Snippet {
  filename: string;
  language: string;
  description: string;
  code: React.ReactNode;
}

const SNIPPETS: Snippet[] = [
  {
    filename: "MainActivity.kt",
    language: "Kotlin",
    description: "MethodChannel native for Kiosk Mode (Lock Task) on Android.",
    code: (
      <>
        <span className="text-[#E31B23] font-bold">package</span> com.securecbt.cbt_mobile<br/>
        <span className="text-emerald-400">class</span> <span className="text-white font-black">MainActivity</span>: <span className="text-white">FlutterActivity</span>() &#123;<br/>
        &nbsp;&nbsp;<span className="text-[#E31B23]">private val</span> CHANNEL = <span className="text-amber-200">&quot;security&quot;</span><br/>
        &nbsp;&nbsp;<span className="text-emerald-400">override fun</span> configureFlutterEngine() &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;startLockTask()<br/>
        &nbsp;&nbsp;&#125;<br/>
        &#125;
      </>
    )
  },
  {
    filename: "ServerSync.dart",
    language: "Dart",
    description: "Firestore server timestamp sync for anti-cheat clock detection.",
    code: (
      <>
        <span className="text-emerald-400">class</span> <span className="text-white font-black">RemoteData</span> &#123;<br/>
        &nbsp;&nbsp;Future&lt;DateTime&gt; getServerTime() <span className="text-emerald-400">async</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E31B23]">final</span> ref = _db.doc(<span className="text-amber-200">&apos;time/sync&apos;</span>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">await</span> ref.set(&#123;<span className="text-amber-200">&apos;t&apos;</span>: FieldValue.serverTimestamp()&#125;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E31B23]">return</span> (await ref.get()).toDate();<br/>
        &nbsp;&nbsp;&#125;<br/>
        &#125;
      </>
    )
  }
];

export function CodeWorkspace() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSnippet = SNIPPETS[activeIdx];

  return (
    <div className="w-full h-full flex flex-col bg-black/40 overflow-hidden">
      {/* Header / Tab Bar */}
      <div className="flex border-b border-white/5 bg-black/20">
        {SNIPPETS.map((snippet, idx) => (
          <button
            key={snippet.filename}
            onClick={() => setActiveIdx(idx)}
            className={`flex items-center gap-3 px-6 py-4 transition-all duration-500 relative cursor-pointer ${
              activeIdx === idx ? "bg-white/[0.03] text-white" : "text-white/20 hover:text-white/40"
            }`}
          >
            <FileCode size={14} className={activeIdx === idx ? "text-[#E31B23]" : "text-white/5"} />
            <span className="font-mono text-[10px] font-black uppercase tracking-widest">{snippet.filename}</span>
            {activeIdx === idx && (
              <motion.div layoutId="codeTabUnderline" className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E31B23]" />
            )}
          </button>
        ))}
        {/* Fill remaining space */}
        <div className="flex-grow border-b border-white/5" />
      </div>

      {/* Editor Content */}
      <div className="flex-grow p-8 overflow-y-auto scrollbar-none font-mono">
        <div className="flex items-center gap-3 mb-8 opacity-30">
          <TerminalIcon size={12} className="text-[#E31B23]" />
          <span className="text-[9px] uppercase font-black tracking-[0.2em]">{activeSnippet.description}</span>
        </div>
        
        <div className="flex gap-6">
          {/* Line Numbers */}
          <div className="flex flex-col text-[12px] text-white/5 text-right select-none leading-relaxed">
            {Array.from({ length: 8 }).map((_, i) => <span key={i}>{i + 1}</span>)}
          </div>
          
          {/* Actual Code */}
          <pre className="text-[12px] md:text-[13px] leading-relaxed text-white/60">
            <code>{activeSnippet.code}</code>
          </pre>
        </div>
      </div>

      {/* Status Bar */}
      <div className="mt-auto px-6 py-2 border-t border-white/5 bg-black/40 flex justify-between items-center text-[8px] font-mono font-black uppercase tracking-widest text-white/10">
        <div className="flex gap-6">
          <span>{activeSnippet.language}</span>
          <span>UTF-8</span>
        </div>
        <div className="flex gap-6">
          <span>LN: 12, COL: 42</span>
          <span className="text-[#E31B23]/30">MASTER_READY</span>
        </div>
      </div>
    </div>
  );
}
