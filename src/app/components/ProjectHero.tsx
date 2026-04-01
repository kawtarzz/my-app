
'use client';
import { motion } from "framer-motion";
import { Project } from '@/lib/types';
import { Reveal } from "./Reveal";
import Link from "next/link";

interface ProjectHeroProps {
 project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {

 return (
  <section>
   <Reveal>
    <div className="pb-10">
     <Link
      href="/work"
      className="font-sans text-[0.78rem] tracking-widest uppercase font-medium text-ink/50 hover:text-rust transition-colors duration-200"
     >
      ← Back to Projects
     </Link>
    </div>
    <div className="project__header">
     <span className="font-sans text-[0.7rem] tracking-widest uppercase font-medium text-rust mb-6" >
      {project.category} · {project.year}</span>
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

     <div className="project__role text-ink-muted /80 leading-relaxed">
      {project.subtitle && (<p>{project.subtitle}</p>)}
     </div>
    </div>
   </Reveal>
  </section>
 )
}