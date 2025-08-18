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
        <div className="page-title">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Projects
          </motion.h1>
        </div>
          <div className="content_box">
      
          <h3 className="content-title">Web Development</h3>
        <div className="portfolio-box">
            <CardList projects={projects} />
          </div>
      
        </div>
      </div>
    </>
  );
};

export default WorkPage;
