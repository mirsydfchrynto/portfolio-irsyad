"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
import { LoadingSequence } from "@/components/LoadingSequence";

// SCENE IMPORTS
import { HeroScene } from "@/components/scenes/HeroScene";
import { MonitoringScene } from "@/components/scenes/MonitoringScene";
import { ManifestoScene } from "@/components/scenes/ManifestoScene";
import { ArchiveScene } from "@/components/scenes/ArchiveScene";
import { ProfileScene } from "@/components/scenes/ProfileScene";
import { ContactScene } from "@/components/scenes/ContactScene";
import { FooterScene } from "@/components/scenes/FooterScene";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  // MOUSE TRACKING (Global State for Dynamic Lighting)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // SCROLL CHOREOGRAPHY
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const imageParallax = useTransform(scrollYProgress, [0, 0.4], [0, -80]);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#020203] text-white relative selection:bg-[#ff0055] selection:text-white overflow-hidden cursor-none">
      <AnimatePresence mode="wait">
        {isBooting ? (
          <LoadingSequence key="boot" onComplete={() => setIsBooting(false)} />
        ) : (
          <motion.div 
            key="main-system"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <CommandPalette />
            <Navbar />

            {/* CUSTOM SYSTEM CURSOR (V5_GOD) */}
            <motion.div 
              className="fixed top-0 left-0 w-8 h-8 border border-[#ff0055]/50 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center"
              style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
            >
              <div className="w-1 h-1 bg-[#ff0055]" />
              <div className="absolute -top-1 -left-1 w-2 h-[1px] bg-[#ff0055]" />
              <div className="absolute -top-1 -left-1 w-[1px] h-2 bg-[#ff0055]" />
              <div className="absolute -bottom-1 -right-1 w-2 h-[1px] bg-[#ff0055]" />
              <div className="absolute -bottom-1 -right-1 w-[1px] h-2 bg-[#ff0055]" />
            </motion.div>
            
            {/* GLOBAL ENVIRONMENT */}
            <div className="fixed inset-0 z-0 architect-grid opacity-[0.03] pointer-events-none" />
            <div className="fixed inset-0 z-0 architect-grid-dense opacity-[0.02] pointer-events-none" />

            <motion.div 
              className="fixed inset-0 z-0 pointer-events-none"
              style={{
                background: useTransform(
                  [mouseX, mouseY],
                  ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(255, 0, 85, 0.04), transparent 85%)`
                )
              }}
            />

            {/* THE NARRATIVE ENGINE */}
            <div className="relative z-10">
              <HeroScene 
                opacity={heroOpacity} 
                scale={heroScale} 
                imageParallax={imageParallax} 
                handleDownload={handleDownload} 
                downloading={downloading} 
              />

              <main className="max-w-6xl mx-auto px-6 md:px-12 py-48 space-y-64 md:space-y-96">
                <MonitoringScene />
                <ManifestoScene />
                <ArchiveScene setSelectedProject={setSelectedProject} />
                <ProfileScene handleDownload={handleDownload} downloading={downloading} />
                <ContactScene />
              </main>

              <FooterScene />
            </div>

            {/* SYSTEM OVERLAYS */}
            <ProjectDetailsModal 
              project={selectedProject} 
              isOpen={!!selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
