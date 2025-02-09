import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import profile from "../assets/images/logo-profile.png";

const navLink = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link to="/" className="text-2xl md:text-5xl text-white font-semibold">
          <img src={profile} className="h-12 w-50 lg:h-17 lg:w-80"></img>
        </Link>
        <div className="mobile-menu block md:hidden">
          {isOpen ? (
            <button onClick={()=>setIsOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                 <XMarkIcon className="w-5 h-5" />
            </button>
          ) : (
            <button onClick={()=>setIsOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
              <Bars3Icon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="Navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        isOpen?<MenuOverlay links={navLink}/>:null
      }
    </nav>
  );
};

export default Navbar;
