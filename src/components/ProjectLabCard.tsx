"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, GitBranch, Sparkles, Scissors, Eye, Bot, HeartHandshake } from "lucide-react";

interface ProjectLabCardProps {
  project: {
    id: string;
    title: string;
    tagline: string;
    tags: string[];
    links: { repo: string; visit: string };
    collaborators?: any[];
  };
  onOpenDetails: () => void;
}

export function ProjectLabCard({ project, onOpenDetails }: ProjectLabCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getIcon = () => {
    if (project.title.toLowerCase().includes("geges")) return <Scissors size={20} />;
    if (project.title.toLowerCase().includes("vision")) return <Eye size={20} />;
    if (project.title.toLowerCase().includes("ai") || project.title.toLowerCase().includes("barber")) return <Bot size={20} />;
    return <HeartHandshake size={20} />;
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col justify-between p-6 md:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300/80 transition-all duration-300 h-full"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm shadow-blue-500/10">
            {getIcon()}
          </div>
          <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Project #{project.id}
          </span>
        </div>

        <div className="space-y-2.5">
          <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-50 text-slate-600 border border-slate-200/70 group-hover:border-blue-100 group-hover:text-blue-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
        <button
          onClick={onOpenDetails}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors group/btn"
        >
          <span>View Details &amp; Architecture</span>
          <ArrowUpRight
            size={14}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
          />
        </button>

        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub Repository"
            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          >
            <GitBranch size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
