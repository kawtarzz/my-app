"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "../components/Reveal";
import { ArrowUpRight, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";



const Contact = () => {
  const [templateParams, setTemplateParams] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ii6ih5p",
        "template_fjl9j6l",
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
      <section id="contact" className="py-28 px-6 bg-cream mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
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
              <a href="mailto:Kawtaryazzouzi@gmail.com" className="flex items-center gap-3 text-ink/60 hover:text-rust transition-colors text-sm font-medium">
                <Mail size={15} /> Kawtaryazzouzi@gmail.com
              </a>
              <div className="flex items-center gap-4">
                {[{ icon: FaGithub, label: 'Github' }, { icon: FaLinkedin, label: 'LinkedIn' }].map(({ icon: Icon, label }) => (
                  <a key={label} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-rust/50 hover:text-rust text-ink/40 transition-all duration-300">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-14 p-6 border border-ink/10 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                <span className="font-mono text-[0.65rem] tracking-widest uppercase text-sage">Currently available</span>
              </div>
              <p className="text-ink/40 text-[0.8rem] font-light">
                Booking projects starting <strong className="text-ink/60 font-medium">April 2026.</strong>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>

            <form onSubmit={sendEmail} className="space-y-5">
              <label
                className="block font-mono text-[0.65rem] tracking-widest uppercase text-ink/40 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full bg-white/5 border border-ink/10 rounded-sm px-4 py-3.5 text-ink text-sm placeholder-cream/20 focus:outline-none focus:border-rust/50 transition-colors font-light"
                name="name"
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
                placeholder="Your message here..."
                value={templateParams.message}
                onChange={handleInputChange}
                required
              />
              <button className="w-full bg-rust text-white py-4 text-[0.75rem] tracking-widest uppercase font-medium rounded-sm hover:bg-rust-dark transition-colors duration-300 flex items-center justify-center gap-2 group" type="submit" value="Send">
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