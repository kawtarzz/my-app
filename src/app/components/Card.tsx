"use client";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";

interface Props {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  url?: string;
  demo?: string;
  video?: string;
  img: string;
}

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export default function Card({
  slug,
  title,
  description,
  category,
  year,
  role,
  solution,
  problem,
  techStack,
  url,
  demo,
  video,
  img,
}: Props) {
  const [toggleCardContent, setToggleCardContent] = useState(false);
  const [buttonText, setButtonText] = useState("Show Details");

  const hasRepo = Boolean(url);
  const hasDemo = Boolean(demo);
  const isProfessional = !hasRepo;

  useEffect(() => {
    setButtonText(toggleCardContent ? "Hide Details" : "Show Details");
  }, [toggleCardContent]);

  return (
    <div className="card-container">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.1, 0.4, 0.85, 1.01] }}
          variants={cardVariants}
        >
          <div className="col">
            {!toggleCardContent && (
              <div className="content">
                <Image
                  src={img}
                  alt={title}
                  priority={true}
                  width={500}
                  height={500}
                  className="card-image"
                  onClick={() => setToggleCardContent(true)}
                />
                <span className="project-category-tag">{category} · {year}</span>
                <h2 className="project-title">{title}</h2>
                <button onClick={() => setToggleCardContent(true)}>{buttonText}</button>
              </div>
            )}

            {toggleCardContent && (
              <div className="content">
                <Image
                  src={img}
                  alt={title}
                  priority={true}
                  width={700}
                  height={700}
                  className="card-image"
                  onClick={() => setToggleCardContent(false)}
                />
                <span className="project-category-tag">{category} · {year}</span>
                <h2 className="project-title">{title}</h2>
                <p className="project-role">Role: <strong>{role}</strong></p>
                <button onClick={() => setToggleCardContent(false)}>{buttonText}</button>

                <div className="project-text">
                  <p>{description}</p>
                  <br />
                  <p><strong>Problem:</strong> {problem}</p>
                  <br />
                  <p><strong>Solution:</strong> {solution}</p>
                </div>

                {techStack?.length > 0 && (
                  <div className="project-subtitle">
                    <h3>{isProfessional ? "Skills & Tools" : "Tech Stack"}</h3>
                    <div className="tech-tag-list">
                      {techStack.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                {video && (
                  <div className="video-container">
                    <video controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                )}

                <div className="btn-container">
                  {hasRepo && (
                    <Link href={url!} target="_blank">
                      <button>GitHub</button>
                    </Link>
                  )}
                  {hasDemo && (
                    <Link href={demo!} target="_blank">
                      <button>{isProfessional ? "Live Site" : "Demo"}</button>
                    </Link>
                  )}
                  {!hasRepo && !hasDemo && (
                    <span className="internal-note">Internal project — not publicly available</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function CardList({ projects }: { projects: Props[] }) {
  return (
    <div className="portfolio-box">
      {projects.map((project: Props) => (
        <div key={project.id}>
          <Card {...project} />
        </div>
      ))}
    </div>
  );
}