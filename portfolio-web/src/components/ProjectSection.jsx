import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
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
    title: "Food Ordering Website",
    description: "A Food Ordering Website built using the MERN stack for a seamless online food ordering experience. It includes user authentication, a dynamic food menu, a shopping cart, and order placement features. The responsive design ensures a smooth and intuitive user experience across all devices.",
    image: img3,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/cherylpinto/food-web ",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Little Lemon Website",
    description: "Restaurant Table-Reservation Website bulit using React which contains the About page, Menu page, Reservation page, and optional Order online page to order food",
    image: img4,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cherylpinto/LittleLemon",
    previewUrl: "",
  },
  {
    id: 5,
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        ></ProjectTag>
        <ProjectTag
          onClick={handleTagChange}
          tag="Web"
          isSelected={tag === "Web"}
        ></ProjectTag>
        <ProjectTag
          onClick={handleTagChange}
          tag="Mobile"
          isSelected={tag === "Mobile"}
        ></ProjectTag>
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
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
    </section>
  );
};

export default ProjectSection;
