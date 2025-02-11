import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ href, title, setIsOpen }) => {
  
  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1); // Remove #
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      
    }
    if (setIsOpen) setIsOpen(false);
  }
  return (
    <a
      href={href}
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;
