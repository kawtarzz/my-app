'use client';
import Image from 'next/image';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight, Link } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section id="about" className="py-28 bg-cream-dark border-y border-[#1C1917]/10">
      <div className="px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Photo */}
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] bg-[#2D1B12] rounded-sm overflow-hidden relative max-w-md">
              <div
                className="absolute inset-0 opacity-30"

              />
              <Image
                src="/images/headshot.png"
                alt="Kawtar Azzouzi"
                height={500}
                width={500}
                className="headshot"
              />
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <span className="font-mono text-[0.68rem] tracking-widest uppercase text-rust flex items-center gap-3 mb-4">
              <span className="inline-block w-6 h-px bg-rust" /> About me
            </span>
            <h2 className="font-display font-bold text-ink leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              The person behind<br />the <em className="italic font-light text-ink-muted">pixels</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-ink-muted leading-relaxed font-light text-[0.95rem]">
              <p>
                Hey! I'm Kawtar — illustrator turned motion and graphic designer turned web designer
                and developer. This winding path through technologies, art, aesthetics, and usability
                has given me a high-level view of what it takes to create. Beneath the specialized
                roles and professional titles, I'm a creator and a storyteller.
              </p>
              <p>
                I'm based in Dover, New Hampshire, with a focus on UI/UX design, information
                architecture, and building clean, accessible digital experiences for mission-driven
                clients. I care about the full design-to-deployment pipeline — from early wireframes
                and content strategy through to live implementation — and I started building websites
                at the ripe old age of 28. The neighbors bragged about the girl genius that lived
                next door.
              </p>
              <p>
                Outside the studio I'm usually hiking New Hampshire trails, thrifting, or on a
                perpetual hunt for the best cold brew in New England.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid grid-cols-2 gap-5">
            {[
              {
                label: 'Tools & Tech',
                items: ['React / Next.js', 'WordPress', 'Figma', 'Tailwind CSS', 'C# / .NET', 'Mapbox GL JS'],
              },
              {
                label: 'Open to working with',
                items: ['Nonprofits & NGOs', 'Mission-driven startups', 'Environmental orgs', 'Small businesses', 'Creative studios'],
              },
            ].map(col => (
              <div key={col.label}>
                <div className="font-mono text-[0.65rem] tracking-widest uppercase text-rust mb-3">{col.label}</div>
                <ul className="space-y-1.5">
                  {col.items.map(i => (
                    <li key={i} className="flex items-center gap-2 text-[0.82rem] text-ink font-medium">
                      <span className="w-1 h-1 rounded-full bg-rust/40" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
          {/* 
          <Reveal delay={0.3} className="mt-10">

            <Link href="#contact"
              className="inline-flex items-center gap-2 text-[0.78rem] tracking-widest uppercase font-medium bg-rust text-white px-6 py-3 rounded-sm hover:bg-rust-dark transition-colors duration-300"
            >
              Let's work together <ArrowUpRight size={13} />
            </Link>
          </Reveal> */}
        </div>
      </div>
    </section >
  );
}