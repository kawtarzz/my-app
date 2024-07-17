'use client'
import Image from 'next/image';
import React from 'react';
import ColorBlocks from '../components/ColorBlocks';

export default function AboutPage() {
    return (
        <>
            <ColorBlocks />
            <div className="about-page content">
                <Image src="/images/kawtar.svg" alt="Profile Picture" width={500} height={500} />
                <h1 data-aos="fade-up">
                    ABOUT
                </h1>
                <h2 data-aos="fade-up">
                    Visual Arts & Web Development
                </h2>
                <div className="col-xl-6 p-0" data-aos="fade-right">
                    <p>
                        I am Kawtar, a first-generation Moroccan-American designer and Web Developer based in Nashville, TN. With over six years of experience in branding, illustration, and animation, I continually strive to push the boundaries of my creativity through new mediums and technologies. My work is bold, colorful, and imbued with a modern feminine energy, often drawing inspiration from my North African heritage and the vibrant nostalgia of 90s Saturday morning cartoons.
                    </p>
                    <p>
                        With a Bachelor of Fine Arts from the School of the Art Institute of Chicago and a Full Stack Web Development certification from Nashville Software School, I have a unique blend of creative and technical skills, enabling me to create fully custom, user-centric applications.
                        When I'm not working, I enjoy being outdoors, practicing drums, and telling my dog Jerry just how good he is.
                    </p>
                    <hr />
                    <div className="content">
                        <p>
                            If you would like to see more of my visual art work, you can check it out here:
                            <a href="https://art.kawtar-azzouzi.com/" className="dark-link">art portfolio</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}