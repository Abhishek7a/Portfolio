import React from "react";
import { useAppContext } from "../AppContext";

export default function Experience() {
  const { dark } = useAppContext();

  // Experience Data
  const experiences = [
    {
      company: "Teliolabs Communication",
      role: "Junior Developer",
      duration: "1 Year",
      color: "bg-green-600",
      borderColor: "border-green-600",
      pulse: true, // Pulse only on the first item
    },
    {
      company: "JP Morgan Chase",
      role: "Internship",
      duration: "1 Month",
      color: "bg-orange-600",
      borderColor: "border-orange-600",
      pulse: false,
    },
    {
      company: "Potentia Academy",
      role: "Internship",
      duration: "3 Months",
      color: "bg-orange-600",
      borderColor: "border-orange-600",
      pulse: false,
    },
    {
      company: "Suvidha Foundations",
      role: "Internship",
      duration: "1 Month",
      color: "bg-orange-600",
      borderColor: "border-orange-600",
      pulse: false,
    },
  ];

  return (
    <div className="sm:py-24 lg:pb-32 max-w-2xl mx-auto px-10 sm:px-6">
      <h3
        className={`text-2xl font-bold mb-6 ml-3 md:mt-0 mt-5 ${
          dark ===false ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Experience
      </h3>
      <ol className="relative border-l-2 border-gray-300 dark:border-gray-600 ">
        {experiences.map((exp, index) => (
          <li key={index} className={`mb-6 ${exp.borderColor}`}>
            <div className="flex items-start sm:flex-row flex-col ">
              {/* Timeline Dot (Pulse effect only on the first one) */}
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full -ml-3.5 sm:-ml-4 ${exp.color} text-white ${
                  exp.pulse ? "animate-pulse" : ""
                }`}
              >
                <svg className="w-3 h-3" viewBox="0 0 448 512">
                  <circle cx="250" cy="250" r="150" fill="white" />
                </svg>
              </div>

              {/* Experience Card */}
              <div
                className={`block px-6 sm:px-8 py-4 sm:py-2 w-full sm:w-80 rounded-lg shadow-lg ml-6 ${
                  dark ===false ? "text-gray-100 bg-gray-900" : "bg-gray-100 text-gray-800"
                }`}
              >
                <h4 className="font-semibold text-lg sm:text-xl ">
                  {exp.company}
                </h4>
                <div className="flex pt-5 justify-between text-sm text-gray-400">
                  <span>{exp.role}</span>
                  <span>{exp.duration}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
