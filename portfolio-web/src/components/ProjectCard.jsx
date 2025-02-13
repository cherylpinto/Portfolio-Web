import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const handlePreviewClick = (e) => {
    if (!previewUrl) {
      e.preventDefault();
      alert("No preview available");
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="h-52 lg:h-72 rounded-t-xl relative group">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-52 lg:h-64 object-contain lg:object-cover rounded-lg"
        />
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-60 transition-all duration-500">
          <Link
            to={gitUrl}
            className="h-14 w-14 mr-2 border-2 border-[#ADB7BE] rounded-full relative hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            to={previewUrl}
            onClick={handlePreviewClick}
            className="h-14 w-14 border-2 border-[#ADB7BE] rounded-full relative hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white sm-mt-2 rounded-b-xl bg-[#181818] py-3 sm:py-6 px-4 flex-grow">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-xs sm:text-base "> {description} </p>
      </div>
    </div>
  );
};

export default ProjectCard;
