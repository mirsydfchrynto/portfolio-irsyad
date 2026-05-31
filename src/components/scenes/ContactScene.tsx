"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

export function ContactScene() {
  const easeCubic = [0.16, 1, 0.3, 1] as any;

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: easeCubic }
  };

  return (
    <motion.section 
      id="contact" 
      className="brutal-card p-12 md:p-20 space-y-20 relative overflow-hidden group"
      {...fadeInUp}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff0055]/5 blur-[150px] pointer-events-none animate-pulse" />
      
      <div className="flex flex-wrap items-baseline justify-between gap-8 border-b border-white/5 pb-10">
        <div className="flex items-center gap-4">
          <span className="text-[12px] font-mono text-[#ff0055] font-black tracking-widest">[SCENE_07]</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/20 block font-black">
            CONNECTION_SYNC
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 space-y-12">
          <h3 className="section-type text-white lg:text-6xl tracking-tighter leading-none">Initialize <br /> <span className="text-[#ff0055]">High Integrity</span> Link.</h3>
          <p className="paragraph-editorial text-xl text-white/50 leading-relaxed">
            Open for high-level technical discourse regarding mobile performance, Edge AI, or large-scale system architecture.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10 font-mono">
          {[
            { label: "Channel_Email", value: "irsydfchrynto@gmail.com", href: "mailto:irsydfchrynto@gmail.com" },
            { label: "Channel_WhatsApp", value: "+62 858-6582-6621", href: "https://wa.me/6285865826621" },
            { label: "Source_Archive", value: "mirsydfchrynto", href: "https://github.com/mirsydfchrynto" },
            { label: "Channel_Identity", value: "@muhammadirsyadf", href: "https://instagram.com/muhammadirsyadf" }
          ].map((item) => (
            <Magnetic key={item.label} strength={0.1}>
              <a 
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-card p-8 space-y-6 hover:border-[#ff0055]/60 transition-all duration-700 group/link bg-[#050507] h-full block"
              >
                <span className="text-[11px] text-[#ff0055] font-black uppercase tracking-[0.3em] block opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</span>
                <span className="text-[15px] text-white/70 group-hover:text-white transition-colors font-bold tracking-tight">{item.value}</span>
                <ArrowUpRight size={16} className="text-white/10 group-hover:text-[#ff0055] transition-colors ml-auto mt-4" />
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
