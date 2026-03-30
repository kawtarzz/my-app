'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { ArrowUpRight } from 'lucide-react';


export function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-start pb-20 pt-36 px-6 max-w-6xl mx-auto">

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
        className="inline-flex items-center gap-2 mb-10 w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
        <span className="font-mono text-[0.68rem] tracking-widest uppercase text-sage">
          Available for projects — Q2 2026
        </span>
      </motion.div>

      <div className="overflow-hidden mb-6">
        <motion.h1
          initial={{ y: '100%' }} animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.28, 1, 0.36, 1] }}
          className="font-display font-black leading-[0.92] tracking-tight text-ink"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
        >
          Hi, I'm <em className="text-rust">Kawtar</em>.
        </motion.h1>
      </div>
      <div className="overflow-hidden mb-6">
        <motion.h1
          initial={{ y: '100%' }} animate={{ y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light italic leading-[0.92] tracking-tight text-ink-mute py-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)' }}
        >
          Web Designer & Developer
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mt-2"
      >
        <p className="max-w-sm text-[1.02rem] text-ink-muted leading-relaxed font-regular">
          I help mission-focused non-profits, startups & small businesses elevate their online presence — through branding, intuitive websites & digital experiences built with care.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-4 mt-12"
      >
        <a href="#work" className="group flex items-center gap-2 bg-ink text-cream font-sans text-[0.78rem] tracking-widest uppercase font-medium px-7 py-4 rounded-sm hover:bg-rust transition-colors duration-300">
          See my work
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        <a href="#contact" className="flex items-center gap-2 border border-[#1C1917]/20 text-ink font-sans text-[0.78rem] tracking-widest uppercase font-medium px-7 py-4 rounded-sm hover:border-rust hover:text-rust transition-all duration-300">
          Work with me
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="gap-4 mt-12"
      >
        <div className="flex flex-wrap items-center gap-10 iconContainer">
          {
            [
              [
                <a href="https://github.com/kawtarzz" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} className="text-ink" />
                </a>, 'Github'],
              [
                <a href="https://linkedin.com/in/kawtarzz" target="_blank" rel="noopener noreferrer">

                  <FaLinkedin size={30} className="text-ink" />
                </a>, 'LinkedIn'],
              [
                <a href="mailto:kawtaryazzouzi@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FaPaperPlane size={30} className="text-ink" />
                </a>, 'Email']
            ].map(([n, l], index) => (
              <div key={index}>
                <div className="font-display font-bold text-2xl text-ink leading-none">{n}</div>
                <div className="font-mono text-[0.65rem] tracking-widest uppercase text-rust mt-1">{l}</div>
              </div>
            ))}
        </div>
      </motion.div>
    </section>
  )
};