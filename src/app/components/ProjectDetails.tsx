
import { Project } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectDetailsProps {
 project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {

 const hasRepo = Boolean(project.url);
 const hasDemo = Boolean(project.demo);
 const isInternal = !hasRepo && !hasDemo;
 const isProfessional = !hasRepo;

 return (
  <div className="flex flex-col gap-10 max-w-xl">
   <div className="aspect-[1/1] rounded-sm overflow-hidden relative max-w-md pt-6">
    <Image
     src={project.img}
     alt={project.title}
     className="project__img"
     width={500}
     height={500}
     objectFit="cover"
     priority
    />
   </div>
   <div className="flex flex-col gap-3">
    <span className="font-sans text-[0.7rem] tracking-widest uppercase font-medium text-rust" >
     Role</span>
    <p className="project__role text-ink /80 leading-relaxed">
     {project.role}
    </p>
   </div>
   {project.techStack?.length > 0 && (
    <div className="flex flex-col gap-3">
     <span className="font-sans text-[0.7rem] tracking-widest uppercase font-medium text-rust">
      {isProfessional ? "Skills & Tools" : "Tech Stack"}
     </span>
     <div className="flex flex-wrap gap-2">
      {project.techStack.map((tech: string) => (
       <span
        key={tech}
        className="font-sans text-[0.72rem] tracking-wide uppercase border border-ink/20 text-ink/70 px-3 py-1 rounded-sm hover:border-rust hover:text-rust transition-colors duration-200"
       >
        {tech}
       </span>
      ))}
     </div>
    </div>
   )}

   {/* ── Links ── */}
   <div className="flex flex-wrap items-center gap-4 pt-2">
    <Link
     href="/work"
     className="font-sans text-[0.78rem] tracking-widest uppercase font-medium text-ink/50 hover:text-rust transition-colors duration-200"
    >
     ← Back to Projects
    </Link>

    {isInternal && (
     <span className="font-sans text-[0.72rem] tracking-wide uppercase text-ink/40 italic">
      Internal project — not publicly available
     </span>
    )}

    {hasRepo && (
     <Link
      href={project.url!}
      target="_blank"
      rel="noopener noreferrer"
      className="font-sans text-[0.78rem] tracking-widest uppercase font-medium bg-ink text-cream px-7 py-4 rounded-sm hover:bg-rust transition-colors duration-300"
     >
      View on GitHub ↗
     </Link>
    )}

    {hasDemo && (
     <Link
      href={project.demo!}
      target="_blank"
      rel="noopener noreferrer"
      className="font-sans text-[0.78rem] tracking-widest uppercase font-medium border border-ink/20 text-ink px-7 py-4 rounded-sm hover:border-rust hover:text-rust transition-all duration-300"
     >
      {isProfessional ? "Live Site ↗" : "View Demo ↗"}
     </Link>
    )}
   </div>
  </div>
 )
}