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

  return (
    <main className="project-detail">
      <Link
        href="/work"
        className="back-link text-sky-500 hover:text-sky-600 underline pt-8 text-base font-semibold leading-7"
      >
        ← Back to Projects
      </Link>

      <div className="container flex justify-center items-start w-full h-auto mt-8">
        <article className="projects max-w-3xl w-full">
          <div className="project-hero relative w-full aspect-video mb-8 rounded-xl overflow-hidden">
            <Image
              src={project.img}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="project-header mb-6">
            <span className="project-meta text-sm text-gray-400 uppercase tracking-widest">
              {project.category} · {project.year}
            </span>
            <h1 className="text-3xl font-bold mt-1">{project.title}</h1>
            {project.subtitle && (
              <h2 className="text-xl text-gray-600 mt-1">{project.subtitle}</h2>
            )}
            <p className="text-sm text-gray-500 mt-2">
              Role: <span className="font-medium">{project.role}</span>
            </p>
          </div>

          <hr className="mb-6" />

          <section className="project-section mb-6">
            <p className="text-base leading-relaxed">{project.description}</p>
          </section>

          <section className="project-section mb-6">
            <h3 className="section-label">Problem</h3>
            <p>{project.problem}</p>
          </section>

          <section className="project-section mb-6">
            <h3 className="section-label">Solution</h3>
            <p className="solution">{project.solution}</p>
          </section>

          {project.techStack?.length > 0 && (
            <section className="project-section mb-8">
              <h3 className="section-label">Tech Stack</h3>
              <ul className="tech-stack-list flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech: string) => (
                  <li
                    key={tech}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <hr className="mb-6" />

          <div className="project-links flex flex-wrap items-center gap-6 pt-2 text-base font-semibold leading-7">
            <Link className="text-sky-500 hover:text-sky-600" href="/work">
              ← Back to Projects
            </Link>

            {isInternal && (
              <span className="text-gray-400 italic text-sm">
                Internal project — code & demo not publicly available
              </span>
            )}

            {hasRepo && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600"
              >
                View Code on GitHub ↗
              </a>
            )}

            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600"
              >
                View Live Demo ↗
              </a>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
