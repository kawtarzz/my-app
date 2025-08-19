"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
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
      <div className="content container">
        <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="title"
          >Contact Me     </motion.h1>
          <p className="subtitle">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
        Have a question or want to work together? Fill out the form below or
        email me directly at{" "}
        <a href="mailto:kawtaryazzouzi@gmail.com" />
          </motion.span>
          </p>
          

      <form onSubmit={sendEmail}>
       
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-name"
          >
          Name
          </label>
          <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
          name="name"
          type="text"
          placeholder="Jane Doe"
          onChange={handleInputChange}
          value={templateParams.name}
          required
          />
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
          <button className="alt-btn" type="submit" value="Send">
          Send
          </button>
   
      </form>
      </div>
    </>
  );
};

export default Contact;
