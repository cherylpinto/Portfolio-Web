import React, { useState, useTransition } from "react";
import Image from "../assets/images/about-image.png";
import TabButton from "./TabButton";
import { FaArrowRightLong } from "react-icons/fa6";
import certified from "../assets/images/certified.png";
import education from "../assets/images/education.png";
import arrow from "../assets/images/arrow.png";


const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="">
        <li className="flex items-center gap-2"><img src={arrow} className="w-4.5 h-3"></img>HTML</li>
        <li className="flex items-center gap-2 "><img src={arrow} className="w-4.5 h-3"></img>CSS</li>
        <li className="flex items-center gap-2 "><img src={arrow} className="w-4.5 h-3"></img>JavaScript</li>
        <li className="flex items-center gap-2 "><img src={arrow} className="w-4.5 h-3"></img>React</li>
        <li className="flex items-center gap-2 "><img src={arrow} className="w-4.5 h-3"></img>Node.js</li>
        <li className="flex items-center gap-2 "><img src={arrow} className="w-4.5 h-3"></img>Express</li>
        <li className="flex items-center gap-2 "><img src={arrow} className="w-4.5 h-3"></img>PostgreSQL/MySQL/MongoDB</li>
        <li className="flex items-center gap-2 "><img src={arrow} className="w-4.5 h-3"></img>Data Strutures & Algorithms</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="space-y-2">
        <li className="flex gap-2 "><img src={education} className="w-4.5 h-4.5"></img>10th Std: Udayachal High School, Vikhroli</li>
        <li className="flex gap-2 "><img src={education} className="w-4.5 h-4.5"></img>12th Std: Pace Junior Science College, Powai</li>
        <li className="flex gap-2 "><img src={education} className="w-4.5 h-4.5"></img>Bachelor of Technology: Computer Science, K.J Somaiya College of Engineering, Vidyavihar</li>
      </ul>
    ),
  },
  {
    id: "certifications",
    title: "Certifications",
    content: (
      <ul className="space-y-2 ">
        <li className="flex gap-2 "><img src={certified} className="w-5 h-5"></img>Certified: Data Structures - Coursera</li>
        <li className="flex gap-2 "><img src={certified} className="w-5 h-5"></img>Certified: Design Analysis of Algorithm - Udemy</li>
        <li className="flex gap-2 "><img src={certified} className="w-5 h-5"></img>Certified: Frontend Developer Capstone - Coursera</li>
        <li className="flex gap-2 "><img src={certified} className="w-5 h-5"></img>Certified: Agnirva Space Internship Program - Agnirva</li>
        
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
            interactive and responsive web applications. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 xl:text-lg">
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
          <div className="mt-8 xl:text-lg">
            {TAB_DATA.find((T) => T.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
