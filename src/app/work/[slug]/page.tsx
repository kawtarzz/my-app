import { notFound } from "next/navigation";
import projects from '@/lib/projects'
import ProjectHero from "@/app/components/ProjectHero";
import ProjectDetails from "@/app/components/ProjectDetails";
import ProjectContent from "@/app/components/ProjectContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();



  return (
    <section className="min-h-screen pb-10 pt-36 px-6 max-w-6xl mx-auto">
      <ProjectHero project={project} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <ProjectDetails project={project} />
        <div className="flex flex-col">
          <ProjectContent project={project} />
        </div>
      </div>
    </section>
  );
}