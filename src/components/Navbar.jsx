import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons for hamburger menu
import { useAppContext } from "../AppContext";

export default function Navbar() {
  const location = useLocation();
  const { dark, setDark } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`p-4  shadow-md items-center justify-center  ${
        dark === false ? "text-gray-100 bg-gray-900" : "bg-gray-100"
      } `}
    >
      
      <div className="container mx-auto  flex justify-between items-center">
        {/* Logo or Branding */}
        <Link to="/" className="text-xl font-bold">
          Abhishek Arora
        </Link>

        {/* Hamburger Menu - Visible on small screens */}
        <button
          className={`lg:hidden focus:outline-none  ${dark===false? "text-gray-200 bg-gray-900":"text-gray-900 bg-gray-100"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex gap-6 z-50 absolute lg:static top-16 left-0 w-full lg:bg-transparent lg:w-auto px-6 py-4 lg:p-0 transition-all duration-700 ease-in  ${dark===false? "text-gray-200 bg-gray-900":"text-gray-900 bg-gray-100"} ${
            isOpen ? "block" : "hidden" 
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(!isOpen)}
              className={`block py-2 px-4 transition-all duration-500 hover:text-orange-400 ${location.pathname === "/" ? dark === false ? "bg-gray-800 rounded-lg text-orange-400" : "bg-gray-200 rounded-lg text-orange-400":""} `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(!isOpen)}
              className={` block py-2 px-4 hover:text-orange-400 transition-all duration-700 ${location.pathname === "/about"? dark === false ? "bg-gray-800 rounded-lg text-orange-400" : "bg-gray-200 rounded-lg text-orange-400":""} `}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => setIsOpen(!isOpen)}
              className={`block py-2 px-4 hover:text-orange-400 transition-all duration-700 ${location.pathname === "/skills"? 
                dark === false ? "bg-gray-800 rounded-lg text-orange-400" : "bg-gray-200 rounded-lg text-orange-400":""} `}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              onClick={() => setIsOpen(!isOpen)}
              className={`block py-2 px-4 hover:text-orange-400 transition-all duration-700 ${location.pathname === "/experience"? dark === false ? "bg-gray-800 rounded-lg text-orange-400" : "bg-gray-200 rounded-lg text-orange-400":""} `}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(!isOpen)}
              className={`block py-2 px-4 hover:text-orange-400 transition-all duration-700 ${location.pathname === "/projects"? dark === false ? "bg-gray-800 rounded-lg text-orange-400" : "bg-gray-200 rounded-lg text-orange-400":""} `}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              onClick={() => setIsOpen(!isOpen)}
              className={`block py-2 px-4 hover:text-orange-400 transition-all duration-700 ${location.pathname === "/certificates"?dark === false ? "bg-gray-800 rounded-lg text-orange-400" : "bg-gray-200 rounded-lg text-orange-400":""} `}
            >
              Certificates
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}
