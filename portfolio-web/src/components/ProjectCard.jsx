import React from "react";
import { CodeBracketIcon,EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ProjectCard = ({ imgURL, title, description,gitUrl,previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        <div
          className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-60 transition-all duration-500"
        >
            <Link to={gitUrl} className="h-14 w-14 mr-2 border-2 border-[#ADB7BE] rounded-full relative hover:border-white group/link">
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
            </Link>
            <Link to={previewUrl} className="h-14 w-14 border-2 border-[#ADB7BE] rounded-full relative hover:border-white group/link">
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
            </Link>
        </div>
      </div>

      <div className="text-white mt-2 rounded-b-xl bg-[#181818] py-6 px-4 ">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]"> {description} </p>
      </div>
    </div>
  );
};

export default ProjectCard;
