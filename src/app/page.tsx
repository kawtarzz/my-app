'use client';
import React from "react";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <main className="home-layout">
      <div className="home-intro">
        <h1 className="home-name">Kawtar Azzouzi</h1>
        <p className="home-title">Web Designer & Developer</p>
      </div>
      <LandingPage />
    </main>
  );
}