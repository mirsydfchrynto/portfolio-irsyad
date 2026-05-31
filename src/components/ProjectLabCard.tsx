"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, FlaskConical, Layout, ShieldCheck } from "lucide-react";

interface ProjectLabCardProps {
  project: {
    id: string;
    title: string;
    tagline: string;
    tags: string[];
    links: { repo: string; visit: string };
  };
  onOpenDetails: () => void;
}

export function ProjectLabCard({ project, onOpenDetails }: ProjectLabCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="brutal-card group flex flex-col justify-between p-10 space-y-10 h-full hover:border-[#ff0055]/50 transition-all duration-700"
    >
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div className="w-14 h-14 bg-[#ff0055]/5 border border-[#ff0055]/20 flex items-center justify-center text-[#ff0055] group-hover:bg-[#ff0055] group-hover:text-white transition-all duration-700 shadow-[0_0_20px_rgba(255,0,85,0.1)] group-hover:shadow-[0_0_30px_rgba(255,0,85,0.4)]">
            {project.id === "01" ? <ShieldCheck size={24} /> : project.id === "02" ? <Layout size={24} /> : <FlaskConical size={24} />}
          </div>
          <span className="font-mono text-[11px] text-white/20 font-black group-hover:text-[#ff0055] transition-colors uppercase tracking-[0.4em]">LAB_NODE_{project.id}</span>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-black font-display text-white group-hover:text-[#ff0055] transition-colors duration-700 tracking-tighter leading-none">
            {project.title}
          </h3>
          <p className="text-[14px] text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-700">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-white/[0.02] border border-white/5 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] font-black group-hover:border-[#ff0055]/20 group-hover:text-[#ff0055]/60 transition-all duration-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-8 border-t border-white/5">
        <button 
          onClick={onOpenDetails}
          className="flex items-center gap-3 font-mono text-[11px] font-black uppercase tracking-widest text-[#ff0055] hover:text-white transition-colors group/btn"
        >
          <span>DEEP_SCAN</span>
          <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>

        <div className="flex items-center gap-6">
          <a 
            href={project.links.repo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 text-white/20 hover:text-[#ff0055] hover:bg-[#ff0055]/5 border border-transparent hover:border-[#ff0055]/30 transition-all duration-500 rounded-sm"
          >
            <GitBranch size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
