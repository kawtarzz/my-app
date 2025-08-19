"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import "@/app/globals.css";
import ColorBlocks from "../components/ColorBlocks";

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
      <ColorBlocks />
      <div className="contact-form content">
      <h1 className="page-title">Contact Me</h1>
      <p className="subtitle">
        Have a question or want to work together? Fill out the form below or
        email me directly at{" "}
        <a href="mailto:kawtaryazzouzi@gmail.com" />
      </p>

      <form onSubmit={sendEmail} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
        {/* Name and Email side by side */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name"
          >
          Name
          </label>
          <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="Name"
          type="text"
          name="name"
          value={templateParams.name}
          onChange={handleInputChange}
          required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-email"
          >
          Email
          </label>
          <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          name="email"
          type="text"
          placeholder="JaneDoe@email.com"
          onChange={handleInputChange}
          value={templateParams.email}
          required
          />
        </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-subject"
          >
          Subject
          </label>
          <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="subject"
          type="text"
          value={templateParams.subject}
          onChange={handleInputChange}
          required
          />
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-message"
          >
          Message
          </label>
          <textarea
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="message"
          placeholder="Your message here..."
          value={templateParams.message}
          onChange={handleInputChange}
          required
          />
        </div>
        </div>
        <div className="md:flex">
        <div>
          <button className="alt-btn" type="submit" value="Send">
          Send
          </button>
        </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default Contact;
