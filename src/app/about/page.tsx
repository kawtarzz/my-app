'use client'
import Image from 'next/image';
import React from 'react';
import ColorBlocks from '../components/ColorBlocks';

export default function AboutPage() {
    return (
        <>
            <ColorBlocks />
            <div className="about-page content">
                <Image src="../../public/images/kawtar-azzouzi_headshot.jpg" alt="Kawtar Azzouzi" width={500} height={400} className="profile-image" />"
                   <h1 data-aos="fade-up">
                    ABOUT
                </h1>
                <h2 data-aos="fade-up">
                    Full-Stack Web Developer & Designer
                </h2>
                <div className="col-xl-6 p-0" data-aos="fade-right">
                    <p>
                        Kawtar Azzouzi is a Full-Stack Web Developer with a strong foundation in design, combining technical expertise with creative problem-solving to build user-focused applications. Currently based in Dover, New Hampshire, she brings 18+ months of professional web development experience working with clients ranging from environmental non-profits to healthcare startups.
                        <br />
                        <br />
                        Her recent work includes building complex data-driven websites with custom database architecture, API integrations, and responsive design solutions. She's currently exploring modern frontend frameworks and cloud deployment strategies to expand her technical toolkit.
                        <br />
                        <br />
                        Outside of coding, Kawtar approaches creativity the same way she approaches development - always learning and experimenting. Whether she's mastering machine sewing techniques, hiking New Hampshire's trails, or picking up her guitar, she brings the same methodical problem-solving and attention to detail that makes her applications both functional and elegant. This curiosity and adaptability drive her continuous growth in both creative pursuits and emerging technologies.
                    </p>
                    <hr />                    
                </div>
           
            </div>
        </>
    );
}