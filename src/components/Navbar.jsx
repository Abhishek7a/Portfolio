import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons for hamburger menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 z-10 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Branding */}
        <Link to="/" className="text-xl font-bold">
          Abhishek Arora
        </Link>

        {/* Hamburger Menu - Visible on small screens */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex gap-6 absolute lg:static top-16 left-0 w-full bg-gray-900 lg:bg-transparent lg:w-auto px-6 py-4 lg:p-0 transition-all duration-300 ease-in ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="block py-2 px-4 hover:text-orange-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 px-4 hover:text-orange-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="block py-2 px-4 hover:text-orange-400">
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="block py-2 px-4 hover:text-orange-400"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className="block py-2 px-4 hover:text-orange-400">
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              className="block py-2 px-4 hover:text-orange-400"
            >
              Certificates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
