"use client";
import "@/app/globals.css";
import React from "react";
import { CardList } from "../components/Card";
import { projects } from "../components/data";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const WorkPage: React.FC = () => {
  return (
    <>
          <Navbar/>
        <div className=" flex-1 w-full flex items-center p-8">
            <h1>
              Work
            </h1>
        </div>
          <div className="work-page">
            <CardList projects={projects} />
          </div>
    </>
  );
};

export default WorkPage;
