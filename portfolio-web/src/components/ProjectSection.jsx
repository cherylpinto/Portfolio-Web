import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.png";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A React portfolio website built using Tailwind CSS to showcase projects, skills, and experience in a sleek, responsive design. It features smooth animations, reusable components, and a seamless user experience.",
    image: img1,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/cherylpinto/Portfolio-Web",
    previewUrl: "https://portfolio-cheryl-pinto.vercel.app/",
  },
  {
    id: 2,
    title: "Book Store Website",
    description:
      "A Book Store Website built using the MERN stack with full CRUD functionality. It allows users to add, edit, delete, and manage books, along with features like user authentication, book browsing, and a responsive design for a seamless experience.",
    image: img2,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cherylpinto/bookstore",
    previewUrl: "",
  },
  {
    id: 3,
    title: "CIS Portal",
    description: "Course Information Sheet (CIS) is a portal for Faculties to automatically analyse the course outcomes achieved by entering the marks for a course. This portal has various perspectives apart from faculty like CIS coordinator, Course Coordinator, HOD,etc",
    image: img7,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Raunakg2005/CIS_SwDC.git",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Aurelia's - Restaurant Table Reservation Website",
    description: "Aurelia's is a responsive restaurant table reservation system that allows users to book tables and admins to manage reservations. The website features OTP-based email verification and real-time table availability tracking. Built using HTML, CSS, JavaScript, PHP, and MySQL, it runs on a local server environment using XAMPP.",
    image: img6,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cherylpinto/WPL_B2_G5",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Food Ordering Website",
    description: "A Food Ordering Website built using the MERN stack for a seamless online food ordering experience. It includes user authentication, a dynamic food menu, a shopping cart, and order placement features. The responsive design ensures a smooth and intuitive user experience across all devices.",
    image: img3,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/cherylpinto/food-web ",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Little Lemon Website",
    description: "Restaurant Table-Reservation Website bulit using React which contains the About page, Menu page, Reservation page, and optional Order online page to order food",
    image: img4,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cherylpinto/LittleLemon",
    previewUrl: "",
  },
  {
    id: 7,
    title: "NFT Website",
    description: "NFT Website is built using React  for a seamless and interactive experience. It showcases NFT's featuring NFT listings and biddings",
    image: img5,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cherylpinto/nft",
    previewUrl: "",
  },
 
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setShowAll(false); // Reset view when tag changes
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} tag="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} tag="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} tag="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {displayedProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>

      {filteredProjects.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition">
              {showAll ? "See Less" : "See More"}
            </span>
          </button>

        </div>
      )}
    </section>
  );
};


export default ProjectSection;
