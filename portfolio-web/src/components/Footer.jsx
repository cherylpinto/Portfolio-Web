import React from "react";
import logo from "../assets/images/logo-profile.png";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-10  flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-between">
        <img src={logo} alt="Logo" className=" h-10 w-40 lg:h-12 lg:w-60" />
        <div className="flex justify-center">
        <p className="text-slate-500 text-xs sm:text-lg mt-2">
          &copy; {currentYear}{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Cheryl Pinto
          </span>
          . All Rights Reserved.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
