'use client';
import Image from 'next/image';
import React from 'react';
import ColorBlocks from '../components/ColorBlocks';

export default function AboutPage() {
  return (
    <>
      <ColorBlocks />

      <div className="about-page">

        {/* ── Photo + Name ── */}
        <div className="about-hero">
          <Image
            src="/images/kawtar-azzouzi_headshot.jpg"
            alt="Kawtar Azzouzi"
            width={220}
            height={220}
            className="profile-image"
          />
          <h1 className="page-title">Kawtar Azzouzi</h1>
          <p className="about-title">Web Designer & Developer · UI/UX</p>
        </div>

     {/* ── Bio ── */}
        <section className="about-bio">
        <p>
            I'm a web designer and developer based in Dover, New Hampshire, with a focus on
            UI/UX design, information architecture, and building clean, accessible digital
            experiences for mission-driven clients.
        </p>
        <p>
            Most recently I was an Associate Web Developer & Designer at Tangram 3DS, where
            I joined as a Junior Web Designer in August 2024 and was promoted after one year.
            My work there spanned client-facing web design and development, content management,
            and brand design — including building the full website for the{' '}
            <a href="https://shea4nh.org" target="_blank" rel="noopener noreferrer">
            Seabrook-Hamptons Estuary Alliance
            </a>{' '}
            and leading the full redesign and build of the{' '}
            <a href="https://floridawildlifecorridor.org" target="_blank" rel="noopener noreferrer">
            Florida Wildlife Corridor Foundation
            </a>{' '}
            website — a complex WordPress project involving custom post types, a bespoke
            Eventbrite sync plugin, AJAX-powered filtering, interactive Mapbox maps, and
            integrations with Neon CRM and ACF Pro, from architecture through to client
            training and launch.
        </p>
        <p>
            I care about the full design-to-deployment pipeline — from early wireframes and
            content strategy through to live implementation. Working across both design and
            development on the same projects has given me a strong sense of where the two
            disciplines need to stay in sync, and where they need room to move independently.
        </p>
        <p>
            Outside of work, I approach creativity the same way I approach a technical
            problem — with curiosity and a willingness to iterate. You'll usually find me
            sewing, hiking New Hampshire trails, or picking up my guitar.
        </p>
        </section>

        <hr />

        {/* ── Links ── */}
        <div className="about-links">
          <a
            href="https://docs.google.com/document/d/1FwIPFZkGS6zlETzvIRh6c0VIf0cJyhxy/edit?usp=sharing&ouid=105577778322514330877&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Resume
          </a>
          <a
            href="https://www.linkedin.com/in/kawtara/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/kawtarzz/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub
          </a>
        </div>

      </div>
    </>
  );
}