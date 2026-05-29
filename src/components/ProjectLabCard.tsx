"use client";

import { GitBranch, ArrowUpRight } from "lucide-react";

interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  curiosity: string;
  systemsExplored: string;
  technicalChallenge: string;
  learnings: string;
  tags: string[];
  links: { visit: string; repo: string };
  image?: string;
}

interface ProjectLabCardProps {
  project: ProjectData;
  onOpenDetails?: () => void;
}

export function ProjectLabCard({ project, onOpenDetails }: ProjectLabCardProps) {
  return (
    <article 
      onClick={onOpenDetails}
      className="group py-12 border-b border-white/5 grid lg:grid-cols-12 gap-8 items-start cursor-pointer transition-colors duration-300 hover:bg-white/[0.01] px-4 rounded-sm"
    >
      {/* Visual Preview Left Column */}
      {project.image && (
        <div className="lg:col-span-5 w-full aspect-[16/10] bg-neutral-950 border border-white/5 overflow-hidden relative rounded-sm flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center opacity-40 group-hover:opacity-75 transition-opacity duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Narrative Right Column */}
      <div className={`lg:col-span-7 flex flex-col justify-between h-full space-y-6 ${!project.image ? "lg:col-span-12" : ""}`}>
        <div className="space-y-4">
          <div className="flex flex-wrap items-baseline gap-3 text-[10px] font-mono text-white/30 tracking-wider">
            <span>Eksplorasi {project.id}</span>
            <span>&mdash;</span>
            <span className="italic text-white/50">{project.tagline}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-white/60 leading-relaxed max-w-[65ch] font-sans">
            {project.curiosity}
          </p>
        </div>

        {/* Action controls & tags */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span 
                key={t} 
                className="text-[9px] font-mono tracking-wider px-2 py-0.5 bg-white/5 border border-white/5 text-white/40 rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenDetails}
              className="px-4 py-2 border border-white/10 hover:border-white/40 text-[10px] font-mono tracking-wider bg-white text-black hover:bg-black hover:text-white transition-all cursor-pointer font-bold rounded-sm min-h-[44px]"
            >
              Buka Jurnal
            </button>
            
            {project.links.repo && (
              <a 
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 border border-white/5 hover:border-white/20 text-[10px] font-mono tracking-wider flex items-center justify-center bg-white/5 text-white/60 hover:text-white transition-colors rounded-sm min-h-[44px]"
                aria-label="Repository"
              >
                KODE <GitBranch size={10} className="ml-1.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
