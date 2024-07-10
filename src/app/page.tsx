'use client';
import Link from "next/link";
import React, { useEffect, useState }  from "react";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <> <main>
        <div className=" flex-1 w-full flex items-center p-8">
          <div className="landing text-center">
            <h1>
              Kawtar Azzouzi
            </h1>
            <p>Web Developer + Designer</p>
          </div>
        </div>
          <LandingPage/>
    </main>
    </>
  );
}
