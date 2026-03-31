'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';


export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['work', 'about', 'contact'];
  const href = (anchor: string) => isHome ? `#${anchor}` : `/#${anchor}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#1C1917]/10' : 'py-7'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">


        <Link href="/" className="font-display font-semibold text-[1.1rem] text-ink flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-rust inline-block group-hover:scale-125 transition-transform duration-300" />
          Kawtar Azzouzi
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <Link href={href(l)} className="font-sans text-[0.78rem] tracking-widest uppercase text-ink-muted hover:text-rust transition-colors duration-300 font-medium">
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[0.72rem] text-sage font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
            Available
          </span>
          <Link href={href('contact')} className="bg-rust text-white text-[0.75rem] tracking-widest uppercase font-medium px-5 py-2.5 rounded-sm hover:bg-rust-dark transition-colors duration-300">
            Let's Talk
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-px w-5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#F7F4EF] border-b border-[#1C1917]/10 px-6 py-6 flex flex-col gap-5"
          >
            {links.map(l => (
              <Link key={l} href={href(l)} onClick={() => setMenuOpen(false)}
                className="font-sans text-sm tracking-widest uppercase text-ink-muted hover:text-rust transition-colors font-medium">
                {l}
              </Link>
            ))}
            <Link href={href('contact')} onClick={() => setMenuOpen(false)}
              className="bg-rust text-white text-[0.75rem] tracking-widest uppercase font-medium px-5 py-3 rounded-sm text-center w-full">
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}