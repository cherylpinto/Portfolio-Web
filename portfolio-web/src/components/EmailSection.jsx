import React, { useState } from "react";
import Github from "../assets/images/github-icon.svg";
import LinkedIn from "../assets/images/linkedin-icon.svg";
import { Link } from "react-router-dom";


const EmailSection = () => {
  const [statusMessage, setStatusMessage] = useState(""); // Added state for status message

const sendEmail = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "9fdaf5d2-4a77-4fb0-9f62-21430cff0b1f");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const data = await res.json();

    if (data.success) {
      setStatusMessage("Email sent successfully!");
    } else {
      setStatusMessage("Failed to send email. Please try again.");
    }
  } catch (error) {
    setStatusMessage("An error occurred. Please check your connection.");
  }
};


  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-6 py-24 relative ">
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(128,0,128,0.5),_transparent)] rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link to="github.com">
            <img src={Github} alt="Github"></img>
          </Link>
          <Link to="linkedin.com">
            <img src={LinkedIn} alt="LinkedIn"></img>
          </Link>
        </div>
      </div>
      <form onSubmit={sendEmail} className="flex flex-col sm:mt-6 gap-4">
        <div className="mb-6">
          <label
            htmlFor="email"
            type="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            type="subject"
            className="text-white block text-sm mb-2 font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Just saying hi!"
        
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            type="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Let's talk about..."
           
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
        
        {/* Display status message */}
        {statusMessage && (
          <p
            className={`mt-4 text-sm ${statusMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default EmailSection;
