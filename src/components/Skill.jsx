import React from "react";
import { useAppContext } from "../AppContext";
export default function Skill() {
    const { dark, setDark } = useAppContext();
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
    <section id="skills"className={` ${dark===false ? "dark:text-gray-100 bg-gray-900":"bg-gray-100"} py-16 sm:py-24 lg:pb-80 `} >
  <div className="container mx-auto px-6">
    {/* Section Title */}
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 ">
      My Skills
    </h2>

    {/* Skill Cards Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
      {skills.map((skill, index) => (
        <div key={index} className="relative text-center">
          {/* Skill Box */}
          <div
            className="w-32 sm:w-36 md:w-40 h-16 sm:h-20 flex justify-center items-center border-2 rounded-lg shadow-lg relative text-sm sm:text-base font-medium "
            style={{
              borderColor: skill.color,
              boxShadow: `0 0 5px ${skill.color}, inset 0 0 2px ${skill.color}, 0 0 10px ${skill.color}`,
            }}
          >
            {skill.name}
            {/* Progress Bar */}
            <div
              className="absolute bottom-0 left-0 h-1 rounded-md"
              style={{ backgroundColor: skill.color, width: skill.level }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
