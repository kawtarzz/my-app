"use client";
import { CardList } from "../components/Card";
import projects from "../../lib/projects";

const WorkPage = () => {
  return <CardList projects={projects} />
}

export default WorkPage;