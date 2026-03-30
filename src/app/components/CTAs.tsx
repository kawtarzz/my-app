import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { ArrowUpRight } from 'lucide-react';

export default function CTAs() {

 return (
  <section id="ctas" className="py-28 bg-cream-light">
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
}