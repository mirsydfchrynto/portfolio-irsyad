"use client";

import { useState } from "react";
import { FileCode, Play, Terminal } from "lucide-react";

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
    description: "MethodChannel native untuk Kiosk Mode (Lock Task) dan pemblokiran tangkapan layar (FLAG_SECURE) di Android.",
    code: (
      <>
        <span className="text-neutral-500">// android/app/src/main/kotlin/com/securecbt/cbt_mobile/MainActivity.kt</span><br/>
        <span className="text-blue-400">package</span> com.securecbt.cbt_mobile<br/><br/>
        <span className="text-blue-400">import</span> android.view.WindowManager<br/>
        <span className="text-blue-400">import</span> io.flutter.embedding.android.FlutterActivity<br/>
        <span className="text-blue-400">import</span> io.flutter.embedding.engine.FlutterEngine<br/>
        <span className="text-blue-400">import</span> io.flutter.plugin.common.MethodChannel<br/><br/>
        <span className="text-sky-400">class</span> <span className="text-teal-400">MainActivity</span>: <span className="text-teal-400">FlutterActivity</span>() &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">private val</span> CHANNEL = <span className="text-amber-400">"com.okeybimbel/security"</span><br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">override fun</span> <span className="text-teal-400">configureFlutterEngine</span>(flutterEngine: <span className="text-teal-400">FlutterEngine</span>) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">super</span>.configureFlutterEngine(flutterEngine)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-teal-400">MethodChannel</span>(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler &#123; call, result <span className="text-purple-400">-&gt;</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">when</span> (call.method) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">"startLockTask"</span> <span className="text-purple-400">-&gt;</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startLockTask()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.success(<span className="text-purple-400">null</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">"enableSecureFlag"</span> <span className="text-purple-400">-&gt;</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window.addFlags(<span className="text-teal-300">WindowManager</span>.LayoutParams.FLAG_SECURE)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.success(<span className="text-purple-400">null</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">else</span> <span className="text-purple-400">-&gt;</span> result.notImplemented()<br/>
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
    description: "Sinkronisasi sisa waktu ujian dengan menulis server timestamp ke Firestore untuk mendeteksi clock drift lokal.",
    code: (
      <>
        <span className="text-neutral-500">// lib/core/utils/remote_data_source.dart</span><br/>
        <span className="text-blue-400">import</span> <span className="text-amber-400">'package:cloud_firestore/cloud_firestore.dart'</span>;<br/><br/>
        <span className="text-sky-400">class</span> <span className="text-teal-400">RemoteDataSource</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">final</span> <span className="text-teal-400">FirebaseFirestore</span> _firestore = <span className="text-teal-400">FirebaseFirestore</span>.instance;<br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Menulis & membaca ulang timestamp server untuk menghitung drift</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-teal-400">Future</span>&lt;<span className="text-teal-400">DateTime</span>&gt; getServerTime(<span className="text-teal-400">String</span> uid) <span className="text-sky-400">async</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">try</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">final</span> docRef = _firestore.collection(<span className="text-amber-400">'server_time'</span>).doc(uid);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">await</span> docRef.set(&#123;<span className="text-amber-400">'t'</span>: <span className="text-teal-400">FieldValue</span>.serverTimestamp()&#125;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">final</span> snap = <span className="text-sky-400">await</span> docRef.get();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">return</span> (snap.data()?&#91;<span className="text-amber-400">'t'</span>&#93; <span className="text-sky-400">as</span> <span className="text-teal-400">Timestamp</span>).toDate();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="text-sky-400">catch</span> (e) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">return</span> <span className="text-teal-300">DateTime</span>.now(); <span className="text-neutral-500">// Fallback ke waktu lokal</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
        &#125;
      </>
    )
  },
  {
    filename: "QueueFallback.dart",
    language: "Dart",
    description: "In-memory filtering fallback di QueueService saat composite index Firestore failed-precondition.",
    code: (
      <>
        <span className="text-neutral-500">// lib/services/queue_service.dart</span><br/>
        <span className="text-blue-400">import</span> <span className="text-amber-400">'package:cloud_firestore/cloud_firestore.dart'</span>;<br/><br/>
        <span className="text-sky-400">class</span> <span className="text-teal-400">QueueService</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">final</span> <span className="text-teal-400">FirebaseFirestore</span> _firestore = <span className="text-teal-400">FirebaseFirestore</span>.instance;<br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Melakukan query antrean aktif dengan fallback in-memory filter</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-teal-400">Stream</span>&lt;<span className="text-teal-400">List</span>&lt;<span className="text-teal-400">QueueModel</span>&gt;&gt; getWaitingQueues(<span className="text-teal-400">String</span> shopId) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">try</span> &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">return</span> _firestore<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collection(<span className="text-amber-400">'queues'</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where(<span className="text-amber-400">'shopId'</span>, isEqualTo: shopId)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where(<span className="text-amber-400">'status'</span>, isEqualTo: <span className="text-amber-400">'waiting'</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.snapshots()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((snap) =&gt; snap.docs.map((d) =&gt; <span className="text-teal-400">QueueModel</span>.fromDoc(d)).toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="text-sky-400">catch</span> (e) &#123;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-neutral-500">// Fallback in-memory filter</span><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-400">return</span> _firestore<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collection(<span className="text-amber-400">'queues'</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where(<span className="text-amber-400">'shopId'</span>, isEqualTo: shopId)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.snapshots()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((snap) =&gt; snap.docs<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map((d) =&gt; <span className="text-teal-400">QueueModel</span>.fromDoc(d))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.where((q) =&gt; q.status == <span className="text-amber-400">'waiting'</span>)<br/>
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
      {/* Dynamic backdrop glows */}
      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/10 to-teal-500/10 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      
      {/* Editor Window Container */}
      <div className="relative border border-white/10 bg-[#0b0c10] w-full font-mono text-[11px] leading-relaxed shadow-2xl flex flex-col h-[350px] overflow-hidden rounded-md transition-all duration-300">
        
        {/* macOS Top Title Bar */}
        <div className="bg-[#12131a] flex border-b border-white/5 items-center justify-between px-4 h-10 select-none">
          {/* macOS window control buttons */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 block border border-rose-600/30" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 block border border-amber-600/30" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 block border border-emerald-600/30" />
          </div>
          
          <div className="text-[10px] text-white/30 font-sans tracking-wide">
            {activeSnippet.filename}
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-sky-500/20 flex items-center justify-center">
              <Play size={6} className="text-sky-400 ml-0.5" />
            </div>
            <span className="text-[9px] font-sans text-sky-400 font-bold uppercase tracking-wider">Live</span>
          </div>
        </div>

        {/* Tab Selector bar */}
        <div className="bg-[#101116] flex border-b border-white/5 items-center justify-between px-1.5 overflow-x-auto scrollbar-none select-none">
          <div className="flex">
            {SNIPPETS.map((snippet, idx) => (
              <button
                key={snippet.filename}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-4 py-2 border-r border-white/5 transition-colors cursor-pointer text-[10px] ${
                  activeIdx === idx 
                    ? "bg-[#0b0c10] text-sky-400 border-t-2 border-t-sky-500 font-semibold" 
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                <FileCode size={11} className={activeIdx === idx ? "text-sky-400" : "text-white/20"} />
                <span>{snippet.filename}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Editor Description Banner */}
        <div className="bg-white/[0.01] px-4 py-2.5 border-b border-white/5 text-white/50 text-[10px] flex items-start select-none">
          <Terminal size={12} className="text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
          <p className="normal-case text-white/60 leading-normal font-sans">{activeSnippet.description}</p>
        </div>

        {/* Editor Code Viewer */}
        <div className="p-4 flex-grow overflow-y-auto scrollbar-thin select-text bg-[#08090d]/60 relative scrollbar-none">
          <pre className="text-white/75 whitespace-pre font-mono text-[10.5px] leading-relaxed">
            <code>{activeSnippet.code}</code>
          </pre>
        </div>

        {/* Footer bar */}
        <div className="bg-[#0f1015] px-4 py-1.5 border-t border-white/5 flex justify-between items-center text-[8px] text-white/25 uppercase tracking-widest select-none">
          <span>Language: {activeSnippet.language}</span>
          <span>Line {activeSnippet.filename === "MainActivity.kt" ? "53" : "76"}, Col 1</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
}
