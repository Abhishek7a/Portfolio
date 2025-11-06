import React from "react";
import { useAppContext } from "../AppContext";
import { motion } from "framer-motion";

export default function Skill() {
  const { dark } = useAppContext();

  const skills = [
    { name: "HTML", level: "90%", color: "#ff4500" },
    { name: "React.js", level: "95%", color: "#00ffff" },
    { name: "CSS", level: "80%", color: "#ff00ff" },
    { name: "MySQL", level: "85%", color: "#ffcc00" },
    { name: "JavaScript", level: "90%", color: "#32cd32" },
    { name: "MongoDB", level: "80%", color: "#ff1493" },
    { name: "Node.JS", level: "75%", color: "#00bfff" },
    { name: "AWS", level: "75%", color: "#9400d3" },
  ];

  return (
    <section
      id="skills"
      className={`${
        dark === false
          ? "text-gray-100 bg-gray-950"
          : "text-gray-800 bg-gray-100"
      } py-16 sm:py-24 lg:pb-80 transition-colors duration-500`}
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 tracking-wide">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative text-center group"
            >
              <div
                className="w-36 sm:w-40 md:w-44 h-20 flex justify-center items-center border-2 rounded-2xl shadow-lg relative font-semibold tracking-wide transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
                style={{
                  borderColor: skill.color,
                  boxShadow: `0 0 10px ${skill.color}60, inset 0 0 4px ${skill.color}90`,
                  background:
                    dark === false
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.05)",
                }}
              >
                <span className="z-10">{skill.name}</span>

                {/* Progress Glow Bar */}
                <div
                  className="absolute bottom-0 left-0 h-1 rounded-full transition-all duration-500 group-hover:h-2"
                  style={{
                    backgroundColor: skill.color,
                    width: skill.level,
                    boxShadow: `0 0 10px ${skill.color}, 0 0 20px ${skill.color}`,
                  }}
                ></div>

                {/* Animated Glow Border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}40, transparent 70%)`,
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
