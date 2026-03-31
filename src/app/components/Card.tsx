import { Reveal } from "./Reveal"
import { ArrowUpRight } from 'lucide-react';
import { Project } from "../../lib/types";
import Link from "next/link";
import Image from "next/image";

interface CardProject extends Project {
  color?: string;
  accentColor?: string;
  letter?: string;
  tags?: string[];
}

interface CardProps {
  projects: CardProject[];
}

export function CardList({ projects }: CardProps) {
  return (
    <section id="work" className="py-28 px-6 max-w-6xl mx-auto">
      <Reveal className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <div>
          <span className="font-mono text-[0.68rem] tracking-widest uppercase text-rust flex items-center gap-3 mb-4">
            <span className="inline-block w-6 h-px bg-rust" /> Selected work
          </span>
          <h2 className="font-display font-bold text-ink leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
            Recent <em className="italic font-light text-ink-muted">projects</em>
          </h2>
        </div>

      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <Link href={`/work/` + `${p.slug}`}>
              <div
                className="project__img relative rounded-sm overflow-hidden inset-0 flex items-start gap-10"
                style={{ background: p.color ?? 'linear-gradient(135deg,#111827,#1f2937)' }}
                data-hover
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  width={350}
                  height={350}
                  className="project__img"
                />
              </div>
              <div className="flex items-center justify-center font-display font-light italic leading-[0.92] tracking-tight text-ink-mute py-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
                {p.title}
              </div>

              {/* Top tags */}
              <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                {p.tags?.map((t) => (
                  <span key={t} className="font-mono text-[0.6rem] tracking-wider uppercase px-2.5 py-1 rounded-full border text-white/70 border-white/20">
                    {t}
                  </span>
                ))}
              </div>

              {/* Year */}
              <div className="absolute top-5 right-5 font-mono text-[0.62rem] tracking-wider text-white/40">
                {p.year}
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="font-mono text-[0.65rem] tracking-widest uppercase mb-1.5" style={{ color: p.accentColor ?? '#f8fafc' }}>
                  {p.category}
                </div>
                <div className="font-display font-semibold text-white text-xl">{p.title}</div>
              </div>

              {/* Hover arrow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>
            </Link>

          </Reveal>
        ))}
      </div>
    </section >
  )
}
