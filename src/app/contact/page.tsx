"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "../components/Reveal";
import { ArrowUpRight, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaPaperPlane, FaRegFilePdf } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const [templateParams, setTemplateParams] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_ii6ih5p';
    const templateID = 'template_fjl9j6l';

    emailjs
      .send(
        serviceID,
        templateID,
        templateParams,
        "oVuhuWy96mVwChvm2"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload();
        },
        () => {
          alert(
            "Failed to send the message, please try again or contact me at Kawtaryazzouzi@gmail.com"
          );
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTemplateParams({ ...templateParams, [name]: value });
  };

  return (
    <>
      <section id="contact" className="min-h-auto flex flex-col justify-start pb-40 pt-20 px-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <Reveal>
            <span className="font-mono text-[0.68rem] tracking-widest uppercase text-rust/70 flex items-center gap-3 mb-6">
              <span className="inline-block w-6 h-px bg-rust/70" /> Let's work together
            </span>
            <h2 className="font-display font-bold text-ink leading-tight mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Got a project?<br /><em className="italic font-light text-ink/50">Let's talk.</em>
            </h2>
            <p className="text-ink/60 text-[0.95rem] leading-relaxed font-light mb-10 max-w-sm">
              I'm currently accepting new projects for Q2 2026 and am open to full-time roles. Fill in the form or shoot me an email and I'll get
              back to you within 24 hours.
            </p>

            <div className="space-y-5">
              <Link href="mailto:hello@kawtar.dev" className="flex items-center gap-3 text-ink/60 hover:text-rust transition-colors text-sm font-medium">
                <Mail size={15} /> hello@kawtar.dev
              </Link>
              <div className="flex items-center gap-4">
                {[{ icon: FaGithub, label: 'Github', url: 'https://github.com/kawtar-azzouzi' }, { icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/kawtar-azzouzi' }, { icon: FaRegFilePdf, label: 'Resume', url: 'https://drive.google.com/file/d/1rph_-qAZHOeCC-DQ-DzZH4aQMaDLu5Jz/view?usp=drive_link' }, { icon: FaPaperPlane, label: 'Email', url: 'mailto:hello@kawtar.dev' }

                ].map(({ icon: Icon, label, url }) => (
                  <Link key={label} href={url} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-rust/50 hover:text-rust text-ink/40 transition-all duration-300" target="_blank">
                    <Icon size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <form
              name="contact"
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <label
                className="block font-mono text-[0.65rem] tracking-widest uppercase text-ink/40 mb-2"
                htmlFor="from_name"
              >
                Name
              </label>
              <input
                className="w-full bg-white/5 border border-ink/10 rounded-sm px-4 py-3.5 text-ink text-sm placeholder-cream/20 focus:outline-none focus:border-rust/50 transition-colors font-light"
                name="from_name"
                id="from_name"
                type="text"
                placeholder="Jane Doe"
                onChange={handleInputChange}
                value={templateParams.name}
                required
              />
              <label
                className="block font-mono text-[0.65rem] tracking-widest uppercase text-ink/40 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-white/5 border border-ink/10 rounded-sm px-4 py-3.5 text-ink text-sm placeholder-cream/20 focus:outline-none focus:border-rust/50 transition-colors font-light"
                name="email"
                id="email"
                type="text"
                placeholder="JaneDoe@email.com"
                onChange={handleInputChange}
                value={templateParams.email}
                required
              />
              <label
                className="block font-mono text-[0.65rem] tracking-widest uppercase text-ink/40 mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="w-full bg-white/5 border border-ink/10 rounded-sm px-4 py-3.5 text-ink text-sm placeholder-cream/20 focus:outline-none focus:border-rust/50 transition-colors font-light"
                name="subject"
                type="text"
                value={templateParams.subject}
                onChange={handleInputChange}
                required
              />
              <label
                className="block font-mono text-[0.65rem] tracking-widest uppercase text-ink/40 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full bg-white/5 border border-ink/10 rounded-sm px-4 py-3.5 text-ink text-sm placeholder-cream/20 focus:outline-none focus:border-rust/50 transition-colors font-light resize-none"
                name="message"
                id="message"
                placeholder="Your message here..."
                value={templateParams.message}
                onChange={handleInputChange}
                required
              />
              <button className="w-full bg-rust text-white py-4 text-[0.75rem] tracking-widest uppercase font-medium rounded-sm hover:bg-rust-dark transition-colors duration-300 flex items-center justify-center gap-2 group" type="submit" value="Send Email" id="button">
                Send  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Contact;