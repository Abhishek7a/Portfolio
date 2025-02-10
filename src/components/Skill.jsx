import React from "react";

export default function Skill() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "React.js", level: "95%" },
    { name: "CSS", level: "70%" },
    { name: "MySQL", level: "85%" },
    { name: "JavaScript", level: "90%" },
    { name: "MongoDB", level: "80%" },
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <span className="text-lg font-semibold">{skill.name}</span>
              <div className="w-full bg-gray-700 rounded-full h-3 relative">
                <div
                  className="bg-orange-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
