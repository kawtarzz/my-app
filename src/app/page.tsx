'use client';
import { Hero } from './components/Hero';
import AboutPage from './about/page';
import WorkPage from './work/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPage />
      <WorkPage />
      <Contact />
    </main>
  );
}