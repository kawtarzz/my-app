import { Reveal } from "./Reveal"
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { Project } from '@/lib/types';

interface CardProps {
  p: Project;
}

export default function Card({ p }: CardProps) {
  return (
    <Reveal key={p.id} delay={0.08}>
      <Link href={`/work/` + `${p.slug}`}>
        <div
          className="relative rounded-sm inset-0 flex items-start gap-10"
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
        <div className="flex flex-col items-center justify-center font-display tracking-tight py-4">
          <h4 className="text-center tracking-tighter font-sans text-blue/80">
            {p.title}
          </h4>
          <div className="font-sans text-[0.78rem] tracking-widest uppercase text-ink-muted hover:text-rust transition-colors duration-300 font-medium">{p.category}
          </div>
        </div>

        <div className="absolute top-5 right-5 font-mono text-[0.62rem] tracking-wider text-white/40">
        </div>
      </Link>
    </Reveal>
  )
}
