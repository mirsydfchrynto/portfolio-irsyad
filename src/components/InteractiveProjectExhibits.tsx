"use client";

import { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Wifi, 
  WifiOff, 
  QrCode, 
  Eye, 
  EyeOff, 
  Send, 
  Scissors 
} from "lucide-react";

// =========================================================================
// 01. OKEY BIMBEL CBT EXHIBIT (Interactive Kiosk & Anti-Cheat Simulation)
// =========================================================================
export function OkeyBimbelExhibit() {
  const [isOffline, setIsOffline] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  const [qrCodeToken, setQrCodeToken] = useState("AUTH-8924");
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setQrCodeToken(`AUTH-${Math.floor(1000 + Math.random() * 9000)}`);
          return 5;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full min-h-[360px] bg-slate-900 rounded-3xl p-5 md:p-7 text-white font-sans flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-400 font-bold uppercase tracking-wider">KIOSK MODE: LOCKED</span>
        </div>
        <button 
          onClick={() => setIsOffline(!isOffline)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] transition-colors ${
            isOffline ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "bg-blue-500/20 text-blue-300 border border-blue-500/40"
          }`}
          title="Toggle Wi-Fi drop to test offline resilience"
        >
          {isOffline ? <WifiOff size={12} /> : <Wifi size={12} />}
          <span>{isOffline ? "Wi-Fi: Dropped (Local Cache)" : "Wi-Fi: Connected"}</span>
        </button>
      </div>

      <div className="relative z-10 my-4 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>QUESTION 18 / 50</span>
          <span className="text-blue-400 font-bold">TIME: 42:15</span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
          <p className="text-xs sm:text-sm font-medium text-slate-100 leading-relaxed">
            Which native Android mechanism prevents multitasking and system gesture dismissals during locked kiosk execution?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            {[
              { id: 0, text: "A. Activity.finishAffinity()" },
              { id: 1, text: "B. Activity.startLockTask()" },
              { id: 2, text: "C. Intent.FLAG_ACTIVITY_NEW_TASK" },
              { id: 3, text: "D. System.gc()" }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedOption(opt.id)}
                className={`text-left p-2.5 rounded-xl text-xs font-mono transition-all border ${
                  selectedOption === opt.id 
                    ? "bg-blue-600/30 border-blue-500 text-white font-bold" 
                    : "bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-mono text-xs">
              <QrCode size={18} />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-200">{qrCodeToken}</span>
                <span className="text-[10px] font-mono text-blue-400">Rotates in {secondsLeft}s</span>
              </div>
              <p className="text-[11px] text-slate-400">Dynamic QR handshakes prevent screenshot sharing.</p>
            </div>
          </div>
          <div className="text-right font-mono text-xs text-emerald-400 flex items-center gap-1">
            <ShieldCheck size={14} />
            <span className="hidden sm:inline">Protected</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
        <span>Kotlin Native MethodChannel</span>
        <span className="text-blue-400 font-semibold">AES-256 Storage Safe</span>
      </div>
    </div>
  );
}

// =========================================================================
// 02. GEGES SMART BARBER EXHIBIT (Live Queue & Fair Barber Allocation)
// =========================================================================
export function GegesBarberExhibit() {
  const [activeQueue] = useState(14);
  const [userQueue, setUserQueue] = useState(17);
  const [joined, setJoined] = useState(false);

  const barbers = [
    { name: "Barber Ahmad", cutsToday: 6, status: "Busy (10 min left)" },
    { name: "Barber Rian", cutsToday: 4, status: "Available (Next up)" },
    { name: "Barber Dani", cutsToday: 5, status: "Busy (4 min left)" }
  ];

  return (
    <div className="w-full h-full min-h-[360px] bg-slate-900 rounded-3xl p-5 md:p-7 text-white font-sans flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Scissors size={14} className="text-blue-400" />
          <span className="text-slate-200 font-bold uppercase tracking-wider">GEGES BARBER ECOSYSTEM</span>
        </div>
        <span className="text-blue-400 font-semibold">Multi-Tenant Flutter</span>
      </div>

      <div className="my-4 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Now Serving</span>
            <div className="text-3xl font-display font-black text-blue-400">
              #{activeQueue}
            </div>
            <p className="text-[11px] text-slate-300">Live chair in session</p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/60 space-y-1">
            <span className="text-[11px] font-mono text-blue-300 uppercase">Your Ticket</span>
            <div className="text-3xl font-display font-black text-emerald-400">
              {joined ? `#${userQueue}` : "Ready"}
            </div>
            <p className="text-[11px] text-slate-300">
              {joined ? "Est. wait: ~12 mins" : "Take digital queue"}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-semibold">Fair Barber Workload Balancer</span>
            <span className="text-blue-400 text-[10px]">Algorithm: Auto-Shift</span>
          </div>
          <div className="space-y-1.5">
            {barbers.map((b) => (
              <div key={b.name} className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-300">{b.name}</span>
                <span className="text-[11px] font-mono text-slate-400">{b.status}</span>
                <span className="text-[11px] font-mono font-bold text-blue-400">{b.cutsToday} cuts</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800">
        <button
          onClick={() => {
            setJoined(!joined);
            if (!joined) setUserQueue(activeQueue + 3);
          }}
          className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wider uppercase transition-colors text-center"
        >
          {joined ? "Cancel Queue Ticket" : "Simulate Join Live Queue"}
        </button>
      </div>
    </div>
  );
}

// =========================================================================
// 03. VISIONSAFE EXHIBIT (Interactive Face Distance & Blur Simulation)
// =========================================================================
export function VisionSafeExhibit() {
  const [distanceCm, setDistanceCm] = useState(24);
  const isDanger = distanceCm < 30;

  return (
    <div className="w-full h-full min-h-[360px] bg-slate-900 rounded-3xl p-5 md:p-7 text-white font-sans flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          {isDanger ? <EyeOff size={14} className="text-rose-400 animate-pulse" /> : <Eye size={14} className="text-emerald-400" />}
          <span className={`font-bold uppercase tracking-wider ${isDanger ? "text-rose-400" : "text-emerald-400"}`}>
            {isDanger ? "SAFETY BLUR TRIGGERED (< 30cm)" : "DISTANCE HEALTHY (>= 30cm)"}
          </span>
        </div>
        <span className="text-blue-400 font-semibold">MediaPipe Edge AI</span>
      </div>

      <div className="my-4 relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-5 min-h-[150px] flex flex-col justify-center items-center text-center transition-all">
        <div 
          className="space-y-2 transition-all duration-300"
          style={{
            filter: isDanger ? `blur(${Math.min(12, (30 - distanceCm) * 1.5)}px)` : "none",
            opacity: isDanger ? 0.35 : 1
          }}
        >
          <div className="text-sm font-bold text-slate-100">Reading Mobile Article / Notes</div>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            Children and phone users naturally hold screens too close, creating severe eye strain and early myopia risk.
          </p>
        </div>

        {isDanger && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-rose-950/40 backdrop-blur-[2px]">
            <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-mono text-xs font-bold shadow-lg animate-bounce">
              ⚠️ Move Screen Further Back!
            </span>
            <span className="text-[11px] font-mono text-rose-200 mt-2">
              Gaussian blur actively protecting eyesight
            </span>
          </div>
        )}
      </div>

      <div className="space-y-2 bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-300">Simulate Distance to Screen:</span>
          <span className={`font-bold text-sm ${isDanger ? "text-rose-400" : "text-emerald-400"}`}>
            {distanceCm} cm {isDanger ? "(Too Close!)" : "(Safe)"}
          </span>
        </div>
        <input 
          type="range"
          min="15"
          max="55"
          value={distanceCm}
          onChange={(e) => setDistanceCm(Number(e.target.value))}
          className="w-full accent-blue-500 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-slate-500">
          <span>15cm (Too Close)</span>
          <span className="text-amber-400 font-bold">30cm Safe Threshold</span>
          <span>55cm (Optimal)</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
        <span>Runs 100% on Phone CPU</span>
        <span className="text-emerald-400 font-semibold">Zero Camera Cloud Upload</span>
      </div>
    </div>
  );
}

// =========================================================================
// 04. FEBRIAN BARBERSHOP AI EXHIBIT (Interactive WhatsApp Agent Simulator)
// =========================================================================
export function FebrianAIExhibit() {
  const [chatHistory, setChatHistory] = useState([
    { sender: "client", text: "Halo mas, mau booking potong rambut jam 4 sore bisa?", time: "15:42" },
    { sender: "bot", text: "Halo! Bisa banget Mas. Jadwal jam 16:00 dengan Barber Rian masih kosong. Saya catat ya? ✂️", time: "15:42", tool: "SQLite_Insert(booking: 16:00)" }
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = (textToSend?: string) => {
    const q = textToSend || inputText;
    if (!q.trim()) return;

    const newChat = [...chatHistory, { sender: "client", text: q, time: "15:43" }];
    setChatHistory(newChat);
    setInputText("");

    setTimeout(() => {
      let botReply = "Siap Mas! Jadwal sudah resmi tersimpan di sistem Febrian Barbershop. Sampai jumpa di lokasi ya! 👍";
      let toolStr = "SQLite_Commit(status: confirmed)";

      if (q.toLowerCase().includes("harga") || q.toLowerCase().includes("pricelist")) {
        botReply = "Pricelist Febrian Barbershop: Haircut Reguler Rp 35k, Haircut + Wash & Massage Rp 50k, Hair Color mulai Rp 80k. Ada yang ingin dibooking?";
        toolStr = "Query_Catalog(pricelist_2026)";
      }

      setChatHistory([...newChat, { sender: "bot", text: botReply, time: "15:43", tool: toolStr }]);
    }, 450);
  };

  return (
    <div className="w-full h-full min-h-[360px] bg-slate-900 rounded-3xl p-5 md:p-7 text-white font-sans flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-400 font-bold uppercase tracking-wider">WHATSAPP AI ASSISTANT</span>
        </div>
        <span className="text-blue-400 font-semibold">Groq Llama 3.3 70B · ⚡ 380ms</span>
      </div>

      <div className="my-3 space-y-2.5 max-h-[170px] overflow-y-auto pr-1">
        {chatHistory.map((msg, i) => (
          <div key={i} className={`flex flex-col ${msg.sender === "client" ? "items-end" : "items-start"}`}>
            <div className={`p-3 rounded-2xl text-xs max-w-[85%] leading-relaxed ${
              msg.sender === "client" 
                ? "bg-blue-600 text-white rounded-tr-none" 
                : "bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700"
            }`}>
              {msg.text}
            </div>
            {msg.tool && (
              <span className="text-[9px] font-mono text-emerald-400 mt-1 px-1.5 py-0.5 bg-emerald-950/60 rounded border border-emerald-800/60">
                ⚡ Tool: {msg.tool}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 pb-2">
        <button 
          onClick={() => handleSend("Berapa harga potong rambut sekarang?")}
          className="text-[10px] font-mono px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
        >
          &ldquo;Berapa harga potong?&rdquo;
        </button>
        <button 
          onClick={() => handleSend("Oke saya fix booking ya mas.")}
          className="text-[10px] font-mono px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
        >
          &ldquo;Fix booking&rdquo;
        </button>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
        <input 
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type message to AI assistant..."
          className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
        <button 
          onClick={() => handleSend()}
          className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
