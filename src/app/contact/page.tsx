"use client";
import { useState, useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Reveal } from "../components/Reveal";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { ArrowUpRight, Mail } from 'lucide-react';

import "@/app/globals.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false)


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ii6ih5p",
        "template_fjl9j6l",
        formState,
        "oVuhuWy96mVwChvm2"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          setSubmitted(true);
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
    setFormState({ ...formState, [name]: value });
  };

  return (
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
              <br />Limited spots — inquire early.
            </p>
          </div>
        </Reveal>

        {/* Right — Form */}
        <Reveal delay={0.15}>
          {submitted ? (
            <div className="h-full flex items-center justify-center flex-col gap-4 text-center py-20">
              <div className="w-14 h-14 rounded-full bg-rust/20 flex items-center justify-center text-rust text-2xl">✓</div>
              <h3 className="font-display text-ink text-2xl font-semibold">Message received!</h3>
              <p className="text-ink/50 text-sm font-light">I'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={sendEmail} className="space-y-5">
              {[
                { id: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Smith' },
                { id: 'email', label: 'Email address', type: 'email', placeholder: 'jane@example.com' },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="block font-mono text-[0.65rem] tracking-widest uppercase text-ink/40 mb-2">{f.label}</label>
                  <input
                    id={f.id} type={f.type} placeholder={f.placeholder} required
                    value={formState[f.id as keyof typeof formState]}
                    onChange={e => setFormState(s => ({ ...s, [f.id]: e.target.value }))}
                    className="w-full bg-white/5 border border-ink/10 rounded-sm px-4 py-3.5 text-ink text-sm placeholder-cream/20 focus:outline-none focus:border-rust/50 transition-colors font-light"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block font-mono text-[0.65rem] tracking-widest uppercase text-ink/40 mb-2">Tell me about your project</label>
                <textarea
                  id="message" rows={5} placeholder="Tell me about your project, timeline, and budget range..."
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  className="w-full bg-white/5 border border-ink/10 rounded-sm px-4 py-3.5 text-ink text-sm placeholder-cream/20 focus:outline-none focus:border-rust/50 transition-colors font-light resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-rust text-white py-4 text-[0.75rem] tracking-widest uppercase font-medium rounded-sm hover:bg-rust-dark transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Send my enquiry
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default Contact;
