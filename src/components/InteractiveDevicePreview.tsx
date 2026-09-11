"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wifi, 
  WifiOff, 
  ShieldCheck, 
  QrCode, 
  Clock, 
  Check, 
  Scissors, 
  Eye, 
  EyeOff, 
  Send, 
  MessageSquare,
  Sparkles,
  Smartphone
} from "lucide-react";

interface InteractiveDevicePreviewProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function InteractiveDevicePreview({
  activeTab,
  onTabChange
}: InteractiveDevicePreviewProps) {
  // Okey Bimbel state
  const [wifiOff, setWifiOff] = useState(false);
  const [examAnswer, setExamAnswer] = useState<number | null>(1);
  const [qrToken, setQrToken] = useState("QR-9142");

  // Geges Barber state
  const [queueNumber, setQueueNumber] = useState(14);
  const [hasTicket, setHasTicket] = useState(false);

  // VisionSafe state
  const [eyeDistance, setEyeDistance] = useState(24);
  const isTooClose = eyeDistance < 30;

  // Febrian AI Bot state
  const [chatMessages, setChatMessages] = useState([
    { from: "user", text: "Halo, mau booking potong rambut jam 4 sore bisa?" },
    { from: "bot", text: "Halo! Bisa banget Mas. Jam 16:00 dengan Barber Rian kosong. Sudah saya jadwalkan ya! ✂️" }
  ]);

  const handleQuickChat = (question: string, answer: string) => {
    setChatMessages((prev) => [
      ...prev,
      { from: "user", text: question },
      { from: "bot", text: answer }
    ]);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 4 Interactive Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 mb-8 max-w-xl w-full">
        {[
          { label: "1. Exam App (CBT)", desc: "Anti-Cheat Kiosk" },
          { label: "2. Barbershop", desc: "Live Queue" },
          { label: "3. Eye Guardian", desc: "Distance Sensor" },
          { label: "4. WhatsApp AI", desc: "Auto-Booking" },
        ].map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => onTabChange(idx)}
            className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-medium transition-all text-center ${
              activeTab === idx
                ? "bg-white text-blue-600 font-bold shadow-sm border border-slate-200/80"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <div>{tab.label}</div>
          </button>
        ))}
      </div>

      {/* The Clean Phone Device Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/18.5] bg-slate-950 rounded-[44px] p-3.5 shadow-2xl border-4 border-slate-800 ring-1 ring-slate-900/10">
        
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-end px-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>

        {/* The Phone Screen */}
        <div className="w-full h-full bg-slate-900 rounded-[34px] overflow-hidden flex flex-col justify-between relative text-white font-sans">
          
          {/* Top Status Bar */}
          <div className="pt-3 px-6 flex justify-between items-center text-[10px] font-mono text-slate-400 z-20">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px]">5G</span>
              <div className="w-4 h-2 border border-slate-400 rounded-sm p-0.5">
                <div className="w-full h-full bg-slate-200 rounded-xs" />
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* SCREEN 1: OKEY BIMBEL CBT (EXAM KIOSK) */}
          {/* ============================================================ */}
          {activeTab === 0 && (
            <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn">
              <div className="space-y-3 pt-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <ShieldCheck size={13} /> Kiosk Locked
                  </span>
                  <span className="text-slate-400">Question 18/50</span>
                </div>

                {/* Exam Question Card */}
                <div className="p-3.5 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-2">
                  <div className="text-[10px] font-mono text-blue-400">MATH & LOGIC EXAM</div>
                  <p className="text-xs font-medium text-slate-200">
                    If classroom Wi-Fi disconnects, how does the app prevent data loss?
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {[
                      { id: 0, text: "A. Discard student answers" },
                      { id: 1, text: "B. Save encrypted local cache" },
                      { id: 2, text: "C. Crash immediately" }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setExamAnswer(opt.id)}
                        className={`w-full text-left p-2 rounded-xl text-[11px] font-mono transition-all border ${
                          examAnswer === opt.id
                            ? "bg-blue-600 border-blue-400 text-white font-bold"
                            : "bg-slate-900 border-slate-700 text-slate-300"
                        }`}
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rotating QR Status */}
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2.5 text-[11px]">
                  <QrCode size={18} className="text-blue-400 shrink-0" />
                  <div>
                    <div className="text-xs font-bold font-mono text-slate-200">{qrToken}</div>
                    <div className="text-[10px] text-slate-400">Rotates every 5s to stop cheating</div>
                  </div>
                </div>
              </div>

              {/* Interactive Test Control */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => setWifiOff(!wifiOff)}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-mono font-medium transition-colors flex items-center justify-center gap-2 ${
                    wifiOff
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                      : "bg-blue-600/20 text-blue-300 border border-blue-500/40"
                  }`}
                >
                  {wifiOff ? <WifiOff size={13} /> : <Wifi size={13} />}
                  <span>{wifiOff ? "Wi-Fi: Dropped (Offline Safe!)" : "Click to Test Wi-Fi Drop"}</span>
                </button>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SCREEN 2: GEGES SMART BARBER (LIVE QUEUE) */}
          {/* ============================================================ */}
          {activeTab === 1 && (
            <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn">
              <div className="space-y-3 pt-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono">
                  <span className="text-blue-400 font-bold flex items-center gap-1">
                    <Scissors size={13} /> Geges Barber
                  </span>
                  <span className="text-slate-400">Branch: Tegal</span>
                </div>

                {/* Queue Card */}
                <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700 text-center space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Current Number</div>
                  <div className="text-4xl font-display font-black text-blue-400">
                    #{queueNumber}
                  </div>
                  <p className="text-[11px] text-slate-300">Barber Rian is cutting hair now</p>
                </div>

                {/* User Ticket */}
                <div className="p-3 bg-blue-950/40 border border-blue-800/60 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-blue-300 block font-mono">YOUR QUEUE TICKET</span>
                    <span className="font-bold text-emerald-400">
                      {hasTicket ? `#${queueNumber + 2} (Next in line)` : "No ticket yet"}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {hasTicket ? "~8 mins wait" : "Ready"}
                  </span>
                </div>

                {/* Available Barbers */}
                <div className="space-y-1 text-[11px] font-mono text-slate-400">
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span>Barber Ahmad</span>
                    <span className="text-emerald-400">Available</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span>Barber Dani</span>
                    <span className="text-amber-400">Busy (5m)</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setHasTicket(!hasTicket);
                    if (!hasTicket) setQueueNumber((prev) => prev);
                  }}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wider transition-colors text-center"
                >
                  {hasTicket ? "Cancel My Ticket" : "Take Digital Queue Ticket"}
                </button>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SCREEN 3: VISIONSAFE (SCREEN DISTANCE) */}
          {/* ============================================================ */}
          {activeTab === 2 && (
            <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn">
              <div className="space-y-3 pt-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono">
                  <span className={isTooClose ? "text-rose-400 font-bold" : "text-emerald-400 font-bold"}>
                    {isTooClose ? "⚠️ SCREEN BLURRED" : "✓ SAFE DISTANCE"}
                  </span>
                  <span className="text-slate-400">{eyeDistance} cm</span>
                </div>

                {/* Simulated Screen with Live Blur */}
                <div className="relative p-4 rounded-2xl bg-slate-800/90 border border-slate-700 min-h-[140px] flex flex-col justify-center items-center text-center overflow-hidden">
                  <div 
                    style={{
                      filter: isTooClose ? `blur(${Math.min(10, (30 - eyeDistance) * 1.2)}px)` : "none",
                      opacity: isTooClose ? 0.3 : 1
                    }}
                    className="space-y-1 transition-all duration-200"
                  >
                    <div className="text-xs font-bold text-slate-100">Reading E-Book / App</div>
                    <p className="text-[10px] text-slate-300 max-w-[200px]">
                      Holding screen too close causes heavy eye strain and early myopia.
                    </p>
                  </div>

                  {/* Warning Popup when too close */}
                  {isTooClose && (
                    <div className="absolute inset-0 bg-rose-950/60 backdrop-blur-[1px] flex flex-col items-center justify-center p-2 text-center">
                      <span className="px-2.5 py-1 bg-rose-600 text-white font-mono text-[10px] font-bold rounded-full shadow animate-bounce">
                        Too Close to Eyes!
                      </span>
                      <span className="text-[9px] text-rose-200 mt-1 font-mono">
                        Move back to 30cm+
                      </span>
                    </div>
                  )}
                </div>

                {/* Distance Slider Test */}
                <div className="space-y-1.5 p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px]">
                  <div className="flex justify-between font-mono">
                    <span className="text-slate-400">Drag Eye Distance:</span>
                    <span className={isTooClose ? "text-rose-400 font-bold" : "text-emerald-400 font-bold"}>
                      {eyeDistance} cm
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="50"
                    value={eyeDistance}
                    onChange={(e) => setEyeDistance(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-slate-500">
                    <span>15cm (Danger)</span>
                    <span className="text-amber-400 font-bold">30cm Safe Line</span>
                    <span>50cm (Good)</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-center text-slate-400 pt-2 border-t border-slate-800">
                <span>100% Private · Zero Camera Upload</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SCREEN 4: FEBRIAN BARBERSHOP AI (WHATSAPP BOT) */}
          {/* ============================================================ */}
          {activeTab === 3 && (
            <div className="flex-1 p-5 flex flex-col justify-between animate-fadeIn">
              <div className="space-y-2 pt-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <MessageSquare size={13} /> WhatsApp Bot
                  </span>
                  <span className="text-slate-400">Febrian Barber</span>
                </div>

                {/* Chat Message Stream */}
                <div className="space-y-2 max-h-[170px] overflow-y-auto pr-1">
                  {chatMessages.map((msg, i) => (
                    <div 
                      key={i} 
                      className={`flex flex-col ${msg.from === "user" ? "items-end" : "items-start"}`}
                    >
                      <div className={`p-2.5 rounded-xl text-[11px] leading-relaxed max-w-[88%] ${
                        msg.from === "user"
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Test Prompts */}
                <div className="space-y-1 pt-1">
                  <div className="text-[9px] font-mono text-slate-400 uppercase">Test Quick Question:</div>
                  <div className="flex flex-wrap gap-1">
                    <button
                      onClick={() => handleQuickChat(
                        "Berapa harga potong rambut sekarang?",
                        "Pricelist: Haircut Reguler Rp 35k, Haircut + Wash Rp 50k. Mau booking jam berapa Mas?"
                      )}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px] font-mono border border-slate-700"
                    >
                      &ldquo;Tanya Harga&rdquo;
                    </button>
                    <button
                      onClick={() => handleQuickChat(
                        "Alamat barbershop di mana ya?",
                        "Lokasi kami di Jl. Pemuda No. 12 Tegal. Buka setiap hari 09:00 - 21:00 WIB. Ditunggu ya Mas!"
                      )}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[10px] font-mono border border-slate-700"
                    >
                      &ldquo;Tanya Lokasi&rdquo;
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-center text-slate-400 pt-2 border-t border-slate-800">
                <span>Fast AI (Groq Llama 3.3) · 24/7 Automated</span>
              </div>
            </div>
          )}

          {/* Bottom Home Indicator Bar */}
          <div className="pb-2 flex justify-center">
            <div className="w-24 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
