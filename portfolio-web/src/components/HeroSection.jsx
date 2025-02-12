import React from "react";
import image from "../assets/images/hero-image.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 sm:mb-4 sm:text-4xl lg:text-7xl text-3xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I'm,{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Cheryl",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Web developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE]  lg:text-xl text-sm mb-6 sm:mr-15">
            Currently Pursuing B-Tech in Computer Science Engineering
            with a strong problem-solving mindset, adaptability and a commitment to continuous learning. Highly
            motivated to gain hands-on experience through internships and apply
            my skills to real-world challenges.
          </p>
          <div>
            <a href="https://github.com/cherylpinto">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white">
                My Github
              </button>
            </a>
            <a href="/Resume.pdf">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                  My Resume
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={image}
              alt="image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            ></img>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
