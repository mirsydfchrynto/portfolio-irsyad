"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileCode, Play, Terminal, ChevronRight } from "lucide-react";

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
    description: "MethodChannel native for Kiosk Mode (Lock Task) and screen capture blocking (FLAG_SECURE) on Android.",
    code: (
      <>
        <span className="text-white/20">// android/app/src/main/kotlin/com/securecbt/cbt_mobile/MainActivity.kt</span><br/>
        <span className="text-[#0070f3]">package</span> com.securecbt.cbt_mobile<br/><br/>
        <span className="text-[#0070f3]">import</span> android.view.WindowManager<br/>
        <span className="text-[#0070f3]">import</span> io.flutter.embedding.android.FlutterActivity<br/>
        <span className="text-[#0070f3]">import</span> io.flutter.embedding.engine.FlutterEngine<br/>
        <span className="text-[#0070f3]">import</span> io.flutter.plugin.common.MethodChannel<br/><br/>
        <span className="text-emerald-400">class</span> <span className="text-white">MainActivity</span>: <span className="text-white">FlutterActivity</span>() &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#0070f3] opacity-80">private val</span> CHANNEL = <span className="text-amber-300">"com.okeybimbel/security"</span><br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">override fun</span> <span className="text-white">configureFlutterEngine</span>(flutterEngine: <span className="text-white">FlutterEngine</span>) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#0070f3] opacity-80">super</span>.configureFlutterEngine(flutterEngine)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">MethodChannel</span>(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler &#123; call, result <span className="text-amber-400">-&gt;</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">when</span> (call.method) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"startLockTask"</span> <span className="text-amber-400">-&gt;</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startLockTask()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.success(<span className="text-amber-400">null</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">"enableSecureFlag"</span> <span className="text-amber-400">-&gt;</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.addFlags(<span className="text-[#0070f3]">WindowManager</span>.LayoutParams.FLAG_SECURE)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.success(<span className="text-amber-400">null</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">else</span> <span className="text-amber-400">-&gt;</span> result.notImplemented()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &#125;
      </>
    )
  },
  {
    filename: "ServerTimeSync.dart",
    language: "Dart",
    description: "Sync exam remaining time by writing server timestamp to Firestore to detect local clock drift.",
    code: (
      <>
        <span className="text-white/20">// lib/core/utils/remote_data_source.dart</span><br/>
        <span className="text-[#0070f3]">import</span> <span className="text-amber-300">'package:cloud_firestore/cloud_firestore.dart'</span>;<br/><br/>
        <span className="text-emerald-400">class</span> <span className="text-white">RemoteDataSource</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">final</span> <span className="text-white">FirebaseFirestore</span> _firestore = <span className="text-white">FirebaseFirestore</span>.instance;<br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white/30">// Calc drift via server timestamp write/read</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">Future</span>&lt;<span className="text-white">DateTime</span>&gt; getServerTime(<span className="text-white">String</span> uid) <span className="text-emerald-400">async</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">try</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">final</span> docRef = _firestore.collection(<span className="text-amber-300">'server_time'</span>).doc(uid);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">await</span> docRef.set(&#123;<span className="text-amber-300">'t'</span>: <span className="text-white">FieldValue</span>.serverTimestamp()&#125;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">final</span> snap = <span className="text-emerald-400">await</span> docRef.get();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return</span> (snap.data()?&#91;<span className="text-amber-300">'t'</span>&#93; <span className="text-emerald-400">as</span> <span className="text-white">Timestamp</span>).toDate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="text-emerald-400">catch</span> (e) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return</span> <span className="text-[#0070f3]">DateTime</span>.now(); <span className="text-white/30">// Fallback</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &#125;
      </>
    )
  },
  {
    filename: "QueueFallback.dart",
    language: "Dart",
    description: "In-memory filtering fallback in QueueService when Firestore composite index is missing.",
    code: (
      <>
        <span className="text-white/20">// lib/services/queue_service.dart</span><br/>
        <span className="text-[#0070f3]">import</span> <span className="text-amber-300">'package:cloud_firestore/cloud_firestore.dart'</span>;<br/><br/>
        <span className="text-emerald-400">class</span> <span className="text-white">QueueService</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">final</span> <span className="text-white">FirebaseFirestore</span> _firestore = <span className="text-white">FirebaseFirestore</span>.instance;<br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">Stream</span>&lt;<span className="text-white">List</span>&lt;<span className="text-white">QueueModel</span>&gt;&gt; getWaitingQueues(<span className="text-white">String</span> shopId) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">try</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return</span> _firestore<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collection(<span className="text-amber-300">'queues'</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where(<span className="text-amber-300">'shopId'</span>, isEqualTo: shopId)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where(<span className="text-amber-300">'status'</span>, isEqualTo: <span className="text-amber-300">'waiting'</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.snapshots()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((snap) =&gt; snap.docs.map((d) =&gt; <span className="text-white">QueueModel</span>.fromDoc(d)).toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="text-emerald-400">catch</span> (e) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#0070f3] opacity-60">// Fallback in-memory filter</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return</span> _firestore<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collection(<span className="text-amber-300">'queues'</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where(<span className="text-amber-300">'shopId'</span>, isEqualTo: shopId)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.snapshots()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((snap) =&gt; snap.docs<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((d) =&gt; <span className="text-white">QueueModel</span>.fromDoc(d))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where((q) =&gt; q.status == <span className="text-amber-300">'waiting'</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &#125;
      </>
    )
  }
];

export function CodeWorkspace() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSnippet = SNIPPETS[activeIdx];

  return (
    <div className="relative group w-full max-w-xl">
      {/* Cinematic backdrop glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#0070f3]/20 to-emerald-500/10 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
      
      {/* Editor Window Container */}
      <div className="relative border-2 border-white/10 bg-[#060608] w-full font-mono text-[11px] leading-relaxed shadow-[24px_24px_80px_rgba(0,0,0,0.9)] flex flex-col h-[400px] overflow-hidden transition-all duration-500 hover:border-white/20">
        <div className="absolute inset-0 architect-grid-dense opacity-[0.03] pointer-events-none" />
        
        {/* macOS Top Title Bar */}
        <div className="bg-[#0a0a0c] flex border-b-2 border-white/5 items-center justify-between px-5 h-12 select-none relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/40" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
          </div>
          
          <div className="text-[10px] text-white/40 font-bold tracking-widest uppercase">
            {activeSnippet.filename}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#0070f3]/10 border border-[#0070f3]/30 rounded-xs">
              <Play size={8} className="text-[#0070f3]" fill="currentColor" />
              <span className="text-[8px] text-[#0070f3] font-bold uppercase tracking-widest">Active</span>
            </div>
          </div>
        </div>

        {/* Tab Selector bar */}
        <div className="bg-[#08080a] flex border-b-2 border-white/5 items-center px-2 overflow-x-auto scrollbar-none select-none relative z-10">
          <div className="flex h-10">
            {SNIPPETS.map((snippet, idx) => (
              <button
                key={snippet.filename}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-3 px-5 transition-all duration-300 cursor-pointer text-[10px] relative ${
                  activeIdx === idx 
                    ? "text-white font-bold" 
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                <FileCode size={13} className={activeIdx === idx ? "text-[#0070f3]" : "text-white/10"} />
                <span className="tracking-wide">{snippet.filename}</span>
                {activeIdx === idx && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0070f3]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Editor Description Banner */}
        <div className="bg-white/[0.02] px-5 py-3 border-b border-white/5 text-white/50 text-[10px] flex items-start select-none relative z-10">
          <ChevronRight size={14} className="text-[#0070f3] mr-2 mt-0.5 flex-shrink-0" />
          <p className="normal-case text-white/50 leading-relaxed font-sans font-medium">{activeSnippet.description}</p>
        </div>

        {/* Editor Code Viewer */}
        <div className="p-6 flex-grow overflow-y-auto select-text bg-[#060608]/80 relative z-10 scrollbar-none">
          <pre className="text-white/60 whitespace-pre font-mono text-[11px] leading-[1.8]">
            <code>{activeSnippet.code}</code>
          </pre>
        </div>

        {/* Footer bar */}
        <div className="bg-[#0a0a0c] px-5 py-2 border-t border-white/5 flex justify-between items-center text-[8px] text-white/20 uppercase tracking-[0.2em] font-bold select-none relative z-10">
          <div className="flex gap-4">
            <span>Lang: {activeSnippet.language}</span>
            <span>Encoding: UTF-8</span>
          </div>
          <span>Line {activeSnippet.filename === "MainActivity.kt" ? "53" : "76"}, Col 1</span>
        </div>
      </div>
    </div>
  );
}
