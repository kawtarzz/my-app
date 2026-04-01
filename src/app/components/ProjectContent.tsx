import { Project } from '@/lib/types'

interface ProjectContentProps {
  project: Project;
}

const MetaSection = ({ label, items }: { label: string; items: string[] }) => (
  <div className="flex flex-col gap-3">
    <span className="font-sans text-[0.7rem] tracking-widest uppercase font-medium text-rust">{label}</span>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-ink/80 leading-relaxed">
          <span className="text-rust/50 mt-[0.35rem] shrink-0">—</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ContentSection = ({ label, content }: { label: string; content: string; }) => (
  <div className="flex flex-col gap-3">
    <span className="font-sans text-[0.7rem] tracking-widest uppercase font-medium text-rust">
      {label}
    </span>
    <p className="gap-3 text-ink/80 leading-relaxed">
      {content}
    </p>

  </div>
);

export default function ProjectContent({ project }: ProjectContentProps) {

  const hasAny = project.problem?.length || project.solution?.length || project.features?.length;

  if (!hasAny) return null;

  return (
    <div className="flex flex-col gap-10 max-w-xl pt-4 pb-8 border-b border-ink/10">
      {project.problem?.length && <ContentSection label="Problem" content={project.problem} />}
      {project.solution?.length && <ContentSection label="Solution" content={project.solution} />}
    </div>
  )
}
