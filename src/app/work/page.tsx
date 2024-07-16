"use client";
import "@/app/globals.css";
import React from "react";
import { CardList } from "../components/Card";
import { projects } from "../components/data";
import { motion } from "framer-motion";
import ColorBlocks from "../components/ColorBlocks";

const WorkPage: React.FC = () => {
  return (
    <>
    <ColorBlocks />
          <div className="content">
          <div className="content_box">
            <h1>
              Work
            </h1>
          <h2>Web Development Projects</h2>
        <div className="portfolio-box">
            <CardList projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPage;
