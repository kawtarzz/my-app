'use client';
import Card from '@/app/components/Card';
import { Reveal } from '@/app/components/Reveal'
import projects from '@/lib/projects';


const WorkPage = () => {
  return (
    <section id="work" className="border-t border-[#1C1917]/10 px-6 max-w-6xl mx-auto py-20">
      <Reveal>
        <span className="font-mono text-[0.68rem] tracking-widest uppercase text-rust/70 flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-rust/70" /> Selected Work
        </span>

        <h2 className="inline-block font-display font-bold text-ink leading-tight mb-14 overflow-visible" >
          Recent <em className="italic font-light text-rust">projects</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {
            projects.map((project) => (
              <Card p={project} key={project.id} />
            ))
          }
        </div>
      </Reveal>
    </section >
  )
}

export default WorkPage;