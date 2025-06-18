import React, { useState, useEffect } from "react";
import Github from "../assets/images/github-icon.svg";
import LinkedIn from "../assets/images/linkedin-icon.svg";
import { Link, useNavigate } from "react-router-dom";

const EmailSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
  if (isSubmitted) {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      setIsSubmitted(false);      // Show form again
      setStatusMessage("");       // Clear message
      setCountdown(5);            // Reset timer
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }
}, [isSubmitted]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://formspree.io/f/mblykkzb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await res.json();

      if (result.ok || result.success) {
        setIsSubmitted(true);
        setStatusMessage("Message sent successfully.");
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatusMessage("Error sending the message. Please try later.");
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-3 md:my-6 py-18 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(128,0,128,0.5),_transparent)] rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link to="https://github.com/cherylpinto">
            <img src={Github} alt="Github" />
          </Link>
          <Link to="https://www.linkedin.com/in/cheryl-pinto-868776335/">
            <img src={LinkedIn} alt="LinkedIn" />
          </Link>
        </div>
      </div>

      {isSubmitted ? (
        <div className="mt-6 text-green-500 text-sm">
          {statusMessage} <br />
          Redirecting in <span className="font-bold">{countdown}</span> seconds...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col mt-6 gap-4">
          <input
            type="hidden"
            name="_next"
            value="https://portfolio-cheryl-pinto.vercel.app/#contact"
          />

          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
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
            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
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
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>

          {statusMessage && (
            <p className={`mt-2 text-sm ${isSubmitted ? "text-green-500" : "text-red-500"}`}>
              {statusMessage}
            </p>
          )}
        </form>
      )}
    </section>
  );
};

export default EmailSection;
