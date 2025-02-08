import React from "react";
import "./App.css";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import Navbar from "./components/Navbar";
import "./index.css";
import About from "./components/About";
import Skills from "./components/Skill";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";


function App() {
  
  return (
    <>

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
    </>
  );
}

export default App;
