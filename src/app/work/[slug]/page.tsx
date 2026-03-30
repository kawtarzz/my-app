import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projects from "../../../lib/projects";
import { Reveal } from "@/app/components/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params; // ← await it
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const hasRepo = Boolean(project.url);
  const hasDemo = Boolean(project.demo);
  const isInternal = !hasRepo && !hasDemo;
  const isProfessional = !hasRepo;

  return (
    <section id="work" className="py-28 bg-cream-dark border-y border-[#1C1917]/10">
      <div className="px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] bg-[#2D1B12] rounded-sm overflow-hidden relative max-w-md">
              <div className="project-hero">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <div className="project-header">
                <span className="project-meta">{project.category} · {project.year}</span>
                <h1>{project.title}</h1>
                {project.subtitle && <h2>{project.subtitle}</h2>}
                <p className="project-role">
                  Role: <strong>{project.role}</strong>
                </p>
              </div>

              <hr className="mb-6" />

              <section className="project-section">
                <p>{project.description}</p>
              </section>

              <section className="project-section">
                <h3 className="section-label">The Problem</h3>
                <p>{project.problem}</p>
              </section>
              <section className="project-section">
                <span className="section-label">The Solution</span>
                <p>{project.solution}</p>
              </section>

              {project.techStack?.length > 0 && (
                <section className="project-section">
                  <span className="section-label">
                    {isProfessional ? "Skills & Tools" : "Tech Stack"}
                  </span>
                  <div className="tech-tag-list">
                    {project.techStack.map((tech: string) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </section>
              )}

              <hr />

              {/* ── Links ── */}
              <div className="btn-container">
                <Link href="/work" className="back-link">
                  ← Back to Projects
                </Link>

                {isInternal && (
                  <span className="internal-note">
                    Internal project — not publicly available
                  </span>
                )}

                {hasRepo && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn">
                    View on GitHub ↗
                  </a>
                )}

                {hasDemo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">
                    {isProfessional ? "Live Site ↗" : "View Demo ↗"}
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

    </section>
  );
}