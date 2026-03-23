import "@/app/globals.css";
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../components/data";

interface PageProps {
  params: { slug: string };
}
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: PageProps) {
   const project = projects.find((p) => p.slug === params.slug);
 
  if (!project) return notFound();
 
  const hasRepo = Boolean(project.url);
  const hasDemo = Boolean(project.demo);
  const isInternal = !hasRepo && !hasDemo;
  const isProfessional = !hasRepo;

  return (
    <main className="project-detail">

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
        <span className="section-label">The Problem</span>
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
 
    </main>
  );
}