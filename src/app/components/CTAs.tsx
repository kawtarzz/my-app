import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Reveal } from './Reveal';

export default function CTAs() {

  return (
    <section className="py-28 bg-cream-light">
      <Reveal>

        <a href="#work" className="group flex items-center gap-2 bg-ink text-cream font-sans text-[0.78rem] tracking-widest uppercase font-medium px-7 py-4 rounded-sm hover:bg-rust transition-colors duration-300">
          See my work
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        <a href="#contact" className="flex items-center gap-2 border border-[#1C1917]/20 text-ink font-sans text-[0.78rem] tracking-widest uppercase font-medium px-7 py-4 rounded-sm hover:border-rust hover:text-rust transition-all duration-300">
          Work with me
        </a>
      </Reveal>
      <Reveal delay={0.5} >

        <div className="flex flex-wrap items-center gap-10 iconContainer">
          {
            [
              [
                <Link href="https://github.com/kawtarzz" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} className="text-ink" />
                </Link>, 'Github'],
              [
                <a href="https://linkedin.com/in/kawtarzz" target="_blank" rel="noopener noreferrer">

                  <FaLinkedin size={30} className="text-ink" />
                </a>, 'LinkedIn'],
              [
                <Link href="mailto:kawtaryazzouzi@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaPaperPlane size={30} className="text-ink" />
                </Link>, 'Email']
            ].map(([n, l], index) => (
              <div key={index}>
                <div className="font-display font-bold text-2xl text-ink leading-none">{n}</div>
                <div className="font-mono text-[0.65rem] tracking-widest uppercase text-rust mt-1">{l}</div>
              </div>
            ))}
        </div>
      </Reveal>
    </section>
  )
}