import type { Metadata } from 'next';
import './globals.css'
import Navigation from './components/Navigation';
import { Footer } from './components/Footer';



export const metadata: Metadata = {
  title: 'Kawtar Azzouzi — Brand, Web & UI/UX Designer',
  description: 'I\'m a freelance designer & web developer crafting brands, websites, and digital experiences that help businesses grow. Based in [City].',
  openGraph: {
    title: 'Kawtar Azzouzi — Brand, Web & UI/UX Designer',
    description: 'Freelance brand, web, and UI/UX designer available for projects.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
