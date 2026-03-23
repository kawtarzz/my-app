"use client";
import { CardList } from "../components/Card";
import { projects } from "../components/data";
import ColorBlocks from "../components/ColorBlocks";

export default function WorkPage() {
  return (
    <>
      <ColorBlocks />
      <div className="work-page">
        <CardList projects={projects} />
      </div>
    </>
  );
}