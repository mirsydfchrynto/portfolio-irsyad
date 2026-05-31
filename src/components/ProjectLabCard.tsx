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
      className="brutal-card group flex flex-col justify-between p-8 space-y-8 h-full"
    >
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-[#0070f3]/5 border border-[#0070f3]/20 flex items-center justify-center text-[#0070f3] group-hover:bg-[#0070f3] group-hover:text-white transition-all duration-500">
            {project.id === "01" ? <ShieldCheck size={20} /> : project.id === "02" ? <Layout size={20} /> : <FlaskConical size={20} />}
          </div>
          <span className="font-mono text-[10px] text-white/20 font-bold group-hover:text-[#0070f3]/50 transition-colors uppercase tracking-[0.2em]">Lab_{project.id}</span>
        </div>
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold font-display text-white group-hover:text-[#0070f3] transition-colors duration-500 tracking-tight">
            {project.title}
          </h3>
          <p className="text-[13px] text-white/50 leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-500">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-1 bg-white/5 border border-white/5 text-[9px] font-mono text-white/30 uppercase tracking-widest group-hover:border-[#0070f3]/20 group-hover:text-[#0070f3]/60 transition-all duration-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <button 
          onClick={onOpenDetails}
          className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#0070f3] hover:text-white transition-colors group/btn"
        >
          <span>Analysis</span>
          <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-4">
          <a 
            href={project.links.repo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 text-white/20 hover:text-white transition-colors"
          >
            <GitBranch size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
