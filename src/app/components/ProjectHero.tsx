
'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from '@/lib/types';

interface ProjectHeroProps {
 project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {

 return (
  <div className="project__header">
   <span className="project__meta font-display font-light italic leading-[0.92] tracking-tight text-ink-mute py-4" >{project.category} · {project.year}</span>
   <div className="overflow-hidden mb-6">

    <motion.h1
     initial={{ y: '-150%' }} animate={{ y: 0 }}
     transition={{ duration: 0.8, delay: 0.15, ease: [0.28, 1, 0.36, 1] }}
     className="font-display font-black leading-[0.92] tracking-tight text-ink"
     style={{ fontSize: 'clamp(2.5rem, 4vw, 5rem)' }}
    >
     {project.title}
    </motion.h1>
   </div>

   <div className="project__subtitle max-w-sm text-[1.02rem] text-ink-muted leading-relaxed font-regular">
    {project.subtitle && (<h2>{project.subtitle}</h2>)}
   </div>
  </div>
 )
}