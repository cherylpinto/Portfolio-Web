import React, { useState } from "react";
import Github from "../assets/images/github-icon.svg";
import LinkedIn from "../assets/images/linkedin-icon.svg";
import { Link } from "react-router-dom";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState(""); // Added state for status message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Set success message
        setStatusMessage("Email sent successfully!");
      } else {
        // Set failure message
        setStatusMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      // Set error message for network issues
      setStatusMessage("Failed to send email. Please try again.");
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-6 py-24 relative ">
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
