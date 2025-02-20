import React, { useContext, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import Navbar from "./components/Navbar";
import "./index.css";
import About from "./components/About";
import Skills from "./components/Skill";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import { useAppContext } from "./AppContext";

function App() {
  const { dark, setDark } = useAppContext();
  const updateTheme = () => {
    setDark(!dark);
  };

  return (
    <>
      <div
        className={`${
          dark === false
            ? "bg-gray-950 text-gray-100 "
            : "bg-gray-50 text-gray-800"
        }`}
      >
        <body
          className={`app md:w-[80%] mx-auto ${
            dark === false
              ? "bg-gray-950 text-gray-100 "
              : " text-gray-800"
          }`}
        >
          <button
      onClick={updateTheme}
      type="button"
      className={`fixed md:right-10 right-5 top-16 md:top-20 z-50 flex items-center justify-center w-9 h-9 text-xs font-medium text-gray-900 border-2 border-gray-200 rounded-lg transition-all duration-300 ${
        dark
          ? "hover:bg-gray-100 hover:text-gray-700 border-gray-900"
          : "bg-gray-800 border-white text-gray-700 hover:text-gray-400 hover:bg-gray-900"
      }`}
    >
      <svg
        className={`w-3.5 h-3.5 transition-all hover:rotate-180 duration-700 ease-in-out ${
          dark ? "rotate-animation" : ""
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill={dark ? "currentColor" : "white"}
        viewBox="0 0 20 20"
      >
        {dark ? (
          // Sun Icon
          <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
        ) : (
          // Moon Icon
          <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
        )}
      </svg>
    </button>
          <Router>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Navbar />
            </motion.div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/certificates" element={<Certificates />} />
            </Routes>
          </Router>
        </body>
      </div>
    </>
  );
}

export default App;
