"use client";
import { CardList } from "../components/Card";
import projects from '@/lib/projects';

const WorkPage = () => {
  return (
    <section id="work">
      <CardList projects={projects} />
    </section>
  )
}

export default WorkPage;