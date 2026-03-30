export function Footer() {
 return (
  <footer className="bg-ink border-t border-white/5 px-6 py-10">
   <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="font-display text-cream/30 text-sm font-semibold">Kawtar Azzouzi</div>
    <div className="font-mono text-[0.62rem] tracking-widest uppercase text-cream/20">
     © {new Date().getFullYear()} · Made with care in the U.S.A.
    </div>
    <div className="font-mono text-[0.62rem] tracking-widest uppercase text-cream/20">
     Brand · Web · UI/UX
    </div>
   </div>
  </footer>
 )
}