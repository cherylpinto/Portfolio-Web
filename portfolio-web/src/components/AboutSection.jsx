import React, { useState, useTransition } from "react";
import Image from "../assets/images/about-image.png";
import TabButton from "./TabButton";
import { FaArrowRightLong } from "react-icons/fa6";
import certified from "../assets/images/certified.png";
import education from "../assets/images/education.png";
import arrow from "../assets/images/arrow.png";
import Somaiya from "../assets/images/Somaiya image.png";
import Godrej from "../assets/images/Godrej img.avif";
import Agnirva from "../assets/images/Agnirva img.jpeg";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="">
        <li className="flex items-center gap-2">
          <img src={arrow} className="w-4.5 h-3"></img>HTML
        </li>
        <li className="flex items-center gap-2 ">
          <img src={arrow} className="w-4.5 h-3"></img>CSS
        </li>
        <li className="flex items-center gap-2 ">
          <img src={arrow} className="w-4.5 h-3"></img>JavaScript
        </li>
        <li className="flex items-center gap-2 ">
          <img src={arrow} className="w-4.5 h-3"></img>MERN Stack
        </li>
        <li className="flex items-center gap-2 ">
          <img src={arrow} className="w-4.5 h-3"></img>PostgreSQL/MySQL/T-SQL
        </li>
        <li className="flex items-center gap-2 ">
          <img src={arrow} className="w-4.5 h-3"></img>Data Strutures &
          Algorithms
        </li>
        <li className="flex items-center gap-2 ">
          <img src={arrow} className="w-4.5 h-3"></img> SSIS / SSMS / SSAS
        </li>
        <li className="flex items-center gap-2 ">
          <img src={arrow} className="w-4.5 h-3"></img>Power BI
        </li>
      </ul>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <img src={Agnirva} className="w-10 h-10 mt-1" />
          <div>
            <div>Agnirva Internship Program</div>
            <div className="text-sm text-gray-500">[December 2024]</div>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <img src={Somaiya} className="w-10 h-8 mt-1" />
          <div>
            <div>CIS Portal @KJSSE</div>
            <div className="text-sm text-gray-500">[Jan 2025 - Present]</div>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <img src={Godrej} className="w-10 h-8 mt-1" />
          <div>
            <div>Data Analyst Intern @Godrej Infotech Ltd</div>
            <div className="text-sm text-gray-500">[May 2025 - July 2025]</div>
          </div>
        </li>
      </ul>
    ),
  },

  {
    id: "education",
    title: "Education",
    content: (
      <ul className="space-y-2">
        <li className="flex gap-2 ">
          <img src={education} className="w-4.5 h-4.5"></img>10th Std: Udayachal
          High School, Vikhroli
        </li>
        <li className="flex gap-2 ">
          <img src={education} className="w-4.5 h-4.5"></img>12th Std: Pace
          Junior Science College, Powai
        </li>
        <li className="flex gap-2 ">
          <img src={education} className="w-4.5 h-4.5"></img>Bachelor of
          Technology: Computer Science, K.J Somaiya College of Engineering,
          Vidyavihar
        </li>
      </ul>
    ),
  },
  {
    id: "certifications",
    title: "Certifications",
    content: (
      <ul className="space-y-2 ">
        <li className="flex gap-2 ">
          <img src={certified} className="w-5 h-5"></img>Certified: Data
          Structures - Coursera
        </li>
        <li className="flex gap-2 ">
          <img src={certified} className="w-5 h-5"></img>Certified: Design
          Analysis of Algorithm - Udemy
        </li>
        <li className="flex gap-2 ">
          <img src={certified} className="w-5 h-5"></img>Certified: Frontend
          Developer Capstone - Coursera
        </li>
        <li className="flex gap-2 ">
          <img src={certified} className="w-5 h-5"></img>Certified: Agnirva
          Space Internship Program - Agnirva
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={Image} alt="About" className="rounded-lg" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I am a quick learner
            and I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            {TAB_DATA.map((T) => (
              <TabButton
                key={T.id}
                selectTab={() => handleTabChange(T.id)}
                active={tab === T.id}
              >
                {T.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((T) => T.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
