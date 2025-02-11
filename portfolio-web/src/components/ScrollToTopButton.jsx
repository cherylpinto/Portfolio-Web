import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scrolling position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 p-2 right-3 lg:right-6 lg:p-3 bg-[linear-gradient(101deg,_#3b82f6,_#a855f7,_#ec4899)]  text-white z-10 rounded-full shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-4 w-4 lg:h-6 lg:w-6" />
    </button>
  );
};

export default ScrollToTopButton;
