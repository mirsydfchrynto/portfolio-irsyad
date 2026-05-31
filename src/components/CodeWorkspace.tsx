"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileCode, ChevronRight } from "lucide-react";

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
        <span className="text-white/20">{"// android/app/src/main/kotlin/com/securecbt/cbt_mobile/MainActivity.kt"}</span><br/>
        <span className="text-[#E31B23] font-bold">package</span> com.securecbt.cbt_mobile<br/><br/>
        <span className="text-[#E31B23] font-bold">import</span> android.view.WindowManager<br/>
        <span className="text-[#E31B23] font-bold">import</span> io.flutter.embedding.android.FlutterActivity<br/>
        <span className="text-[#E31B23] font-bold">import</span> io.flutter.embedding.engine.FlutterEngine<br/>
        <span className="text-[#E31B23] font-bold">import</span> io.flutter.plugin.common.MethodChannel<br/><br/>
        <span className="text-emerald-400">class</span> <span className="text-white">MainActivity</span>: <span className="text-white">FlutterActivity</span>() &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E31B23] opacity-80">private val</span> CHANNEL = &quot;com.okeybimbel/security&quot;<br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">override fun</span> <span className="text-white">configureFlutterEngine</span>(flutterEngine: <span className="text-white">FlutterEngine</span>) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E31B23] opacity-80">super</span>.configureFlutterEngine(flutterEngine)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">MethodChannel</span>(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler &#123; call, result <span className="text-amber-400">-&gt;</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">when</span> (call.method) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;startLockTask&quot; <span className="text-amber-400">-&gt;</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startLockTask()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.success(<span className="text-amber-400">null</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;enableSecureFlag&quot; <span className="text-amber-400">-&gt;</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.addFlags(<span className="text-[#E31B23]">WindowManager</span>.LayoutParams.FLAG_SECURE)<br/>
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
        <span className="text-white/20">{"// lib/core/utils/remote_data_source.dart"}</span><br/>
        <span className="text-[#E31B23] font-bold">import</span> <span className="text-amber-300">&apos;package:cloud_firestore/cloud_firestore.dart&apos;</span>;<br/><br/>
        <span className="text-emerald-400">class</span> <span className="text-white">RemoteDataSource</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">final</span> <span className="text-white">FirebaseFirestore</span> _firestore = <span className="text-white">FirebaseFirestore</span>.instance;<br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white/30">{"// Calc drift via server timestamp write/read"}</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">Future</span>&lt;<span className="text-white">DateTime</span>&gt; getServerTime(<span className="text-white">String</span> uid) <span className="text-emerald-400">async</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">try</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">final</span> docRef = _firestore.collection(&apos;server_time&apos;).doc(uid);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">await</span> docRef.set(&#123;&apos;t&apos;: <span className="text-white">FieldValue</span>.serverTimestamp()&#125;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">final</span> snap = await docRef.get();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return</span> (snap.data()?&#91;&apos;t&apos;&#93; <span className="text-emerald-400">as</span> <span className="text-white">Timestamp</span>).toDate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="text-emerald-400">catch</span> (e) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return</span> <span className="text-[#E31B23]">DateTime</span>.now(); <span className="text-white/30">{"// Fallback"}</span><br/>
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
        <span className="text-white/20">{"// lib/services/queue_service.dart"}</span><br/>
        <span className="text-[#E31B23] font-bold">import</span> <span className="text-amber-300">&apos;package:cloud_firestore/cloud_firestore.dart&apos;</span>;<br/><br/>
        <span className="text-emerald-400">class</span> <span className="text-white">QueueService</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">final</span> <span className="text-white">FirebaseFirestore</span> _firestore = <span className="text-white">FirebaseFirestore</span>.instance;<br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">Stream</span>&lt;<span className="text-white">List</span>&lt;<span className="text-white">QueueModel</span>&gt;&gt; getWaitingQueues(<span className="text-white">String</span> shopId) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">try</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return</span> _firestore<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collection(&apos;queues&apos;)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where(&apos;shopId&apos;, isEqualTo: shopId)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where(&apos;status&apos;, isEqualTo: &apos;waiting&apos;)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.snapshots()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((snap) =&gt; snap.docs.map((d) =&gt; <span className="text-white">QueueModel</span>.fromDoc(d)).toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="text-emerald-400">catch</span> (e) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E31B23] opacity-60">{"// Fallback in-memory filter"}</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">return</span> _firestore<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collection(&apos;queues&apos;)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where(&apos;shopId&apos;, isEqualTo: shopId)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.snapshots()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((snap) =&gt; snap.docs<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((d) =&gt; <span className="text-white">QueueModel</span>.fromDoc(d))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where((q) =&gt; q.status == &apos;waiting&apos;)<br/>
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
      {/* Identity Red Cinematic backdrop glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#E31B23]/30 to-rose-900/10 rounded-xl blur-2xl opacity-40 group-hover:opacity-100 transition duration-1000" />
      
      {/* Editor Window Container */}
      <div className="relative border border-white/10 bg-[#060608] w-full font-mono text-[11px] leading-relaxed shadow-[24px_24px_100px_rgba(0,0,0,0.95)] flex flex-col h-[420px] overflow-hidden transition-all duration-700 hover:border-[#E31B23]/30 brutal-card">
        <div className="absolute inset-0 architect-grid-dense opacity-[0.06] pointer-events-none" />
        
        {/* macOS Top Title Bar */}
        <div className="bg-[#0a0a0c] flex border-b border-white/5 items-center justify-between px-6 h-14 select-none relative z-10">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#E31B23]/80 border border-[#E31B23]/40 animate-pulse" />
            <span className="w-3 h-3 rounded-full bg-white/10 border border-white/5" />
            <span className="w-3 h-3 rounded-full bg-white/10 border border-white/5" />
          </div>
          
          <div className="text-[10px] text-white/30 font-black tracking-[0.3em] uppercase">
            {activeSnippet.filename}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#E31B23]/10 border border-[#E31B23]/30">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E31B23] animate-ping" />
              <span className="text-[9px] text-[#E31B23] font-black uppercase tracking-widest">Live</span>
            </div>
          </div>
        </div>

        {/* Tab Selector bar */}
        <div className="bg-[#08080a] flex border-b border-white/5 items-center px-3 overflow-x-auto scrollbar-none select-none relative z-10">
          <div className="flex h-12">
            {SNIPPETS.map((snippet, idx) => (
              <button
                key={snippet.filename}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-4 px-6 transition-all duration-500 cursor-pointer text-[10px] relative group/tab ${
                  activeIdx === idx 
                    ? "text-white font-black" 
                    : "text-white/20 hover:text-white/50"
                }`}
              >
                <FileCode size={14} className={activeIdx === idx ? "text-[#E31B23]" : "text-white/5"} />
                <span className="tracking-widest uppercase">{snippet.filename}</span>
                {activeIdx === idx && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E31B23] shadow-[0_0_15px_rgba(227,27,35,0.8)]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Editor Description Banner */}
        <div className="bg-[#E31B23]/[0.02] px-6 py-4 border-b border-white/5 text-white/40 text-[11px] flex items-start select-none relative z-10">
          <ChevronRight size={16} className="text-[#E31B23] mr-3 mt-0.5 flex-shrink-0" />
          <p className="normal-case leading-relaxed font-sans font-medium">{activeSnippet.description}</p>
        </div>

        {/* Editor Code Viewer */}
        <div className="p-8 flex-grow overflow-y-auto select-text bg-[#060608]/90 relative z-10 scrollbar-none">
          <pre className="text-white/60 whitespace-pre font-mono text-[11.5px] leading-[2]">
            <code>{activeSnippet.code}</code>
          </pre>
        </div>

        {/* Footer bar */}
        <div className="bg-[#0a0a0c] px-6 py-3 border-t border-white/5 flex justify-between items-center text-[9px] text-white/10 uppercase tracking-[0.3em] font-black select-none relative z-10">
          <div className="flex gap-6">
            <span className="hover:text-[#E31B23] transition-colors cursor-crosshair">Lang: {activeSnippet.language}</span>
            <span className="hover:text-[#E31B23] transition-colors cursor-crosshair">UTF-8</span>
          </div>
          <span className="text-[#E31B23]/40">LN {activeSnippet.filename === "MainActivity.kt" ? "53" : "76"}, COL 1</span>
        </div>
      </div>
    </div>
  );
}
