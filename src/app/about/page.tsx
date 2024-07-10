'use client'
import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Navbar';
import ColorBlocks from '../components/ColorBlocks';

export default function AboutPage() {
    return (
        <>
            <ColorBlocks />
            <div className="content">
                <Image src="/images/kawtar.svg" alt="Profile Picture" width={500} height={500} />
                <h1>About</h1>
                <p>
                    I am a full-stack developer with a passion for creating user-centric applications. I enjoy building applications that are intuitive, responsive, and visually appealing. I am experienced in front-end technologies such as React, Next.js, and Tailwind CSS, and back-end technologies such as Node.js, Express, and MongoDB. I am also proficient in user authentication, RESTful APIs, and responsive design. I am currently seeking opportunities to work with a team of developers to create innovative applications that solve real-world problems.
                </p>
                <hr />
                <div className="content">
                    <p>
                        If you'd like to see more of my visual art work, you can check it out here:
                         <a href="https://art.kawtar-azzouzi.com/" className="dark-link">art portfolio</a>.
                    </p>
                </div>
            </div>
        </>
    );
}