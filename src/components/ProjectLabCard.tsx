import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, GitBranch, FlaskConical, Layout, ShieldCheck } from "lucide-react";
import { Magnetic } from "./Magnetic";

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
  // 3D TILT ENGINE
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="brutal-card group flex flex-col justify-between p-6 md:p-10 space-y-8 md:space-y-10 h-full hover:border-[#E31B23]/50 transition-all duration-700 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] md:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] hover:shadow-[0_60px_100px_-30px_rgba(227,27,35,0.15)]"
    >
      <div style={{ transform: "translateZ(50px)" }} className="space-y-6 md:space-y-8">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 md:w-14 md:h-14 bg-[#E31B23]/5 border border-[#E31B23]/20 flex items-center justify-center text-[#E31B23] group-hover:bg-[#E31B23] group-hover:text-white transition-all duration-700 shadow-[0_0_20px_rgba(227,27,35,0.1)] group-hover:shadow-[0_0_30px_rgba(227,27,35,0.4)]">
            {project.id === "01" ? <ShieldCheck size={24} /> : project.id === "02" ? <Layout size={24} /> : <FlaskConical size={24} />}
          </div>
          <span className="font-mono text-[9px] md:text-[11px] text-white/20 font-black group-hover:text-[#E31B23] transition-colors uppercase tracking-[0.3em] md:tracking-[0.4em]">Project {project.id}</span>
        </div>
        
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-xl md:text-2xl font-black font-display text-white group-hover:text-[#E31B23] transition-colors duration-700 tracking-tighter leading-none">
            {project.title}
          </h3>
          <p className="text-[13px] md:text-[14px] text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors duration-700">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-1 md:pt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 md:px-3 py-1 bg-white/[0.02] border border-white/5 text-[9px] md:text-[10px] font-mono text-white/20 uppercase tracking-[0.15em] md:tracking-[0.2em] font-black group-hover:border-[#E31B23]/20 group-hover:text-[#E31B23]/60 transition-all duration-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="flex items-center justify-between pt-6 md:pt-8 border-t border-white/5">
        <Magnetic strength={0.2}>
          <button 
            onClick={onOpenDetails}
            className="flex items-center gap-3 font-mono text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#E31B23] hover:text-white transition-colors group/btn"
          >
            <span>BACA JURNAL</span>
            <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </button>
        </Magnetic>

        <div className="flex items-center gap-4 md:gap-6">
          <Magnetic strength={0.3}>
            <a 
              href={project.links.repo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-white/20 hover:text-[#E31B23] hover:bg-[#E31B23]/5 border border-transparent hover:border-[#E31B23]/30 transition-all duration-500 rounded-sm"
            >
              <GitBranch size={18} />
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.div>
  );
}
