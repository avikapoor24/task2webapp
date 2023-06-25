import React, { useEffect, useState } from "react";

import ab from "../Assets/Images/logoimg.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`absolute top-0 w-full transition duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="bg-black py-6">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={ab} alt="Logo" className="w-20 h-13 mr-2" />
            <span className="text-white text-6xl ">FINOVATECH.IO</span>
          </a>
          <div>
            <a
              href="/services"
              className="text-white text-2xl ml-4 hover:text-gray-400 transition duration-300"
            >
              Services
            </a>
            <a
              href="/Portfolio"
              className="text-white text-2xl ml-4 hover:text-gray-400 transition duration-300"
            >
              Portfolio
            </a>
            <a
              href="/vision"
              className="text-white text-2xl ml-4 hover:text-gray-400 transition duration-300"
            >
              Vision
            </a>
            <a
              href="/about-us"
              className="text-white text-2xl ml-4 hover:text-gray-400 transition duration-300"
            >
              News
            </a>

            <a
              href="/signup"
              className="bg-customRed text-red-600 text-2xl ml-4 py-2 px-4 rounded hover:bg-white transition duration-300"
            >
              LogIn
            </a>
            <a
              href="/"
              className="bg-red-600 text-white text-2xl ml-5 py-1 px-4 rounded-full hover:bg-red-700 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;