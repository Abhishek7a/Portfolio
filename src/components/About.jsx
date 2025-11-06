import React from "react";
import profile from "../assets/profile.png";
import { useAppContext } from "../AppContext";
import {  useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const { dark, setDark } = useAppContext();
  return (
    <section id="about" className={`${isAboutPage ? "md:pt-32 md:pb-64 py-10" : "py-16"}  ${dark===false ? "dark:text-gray-100 bg-gray-900":"bg-gray-100"} `}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full shadow-lg">
            <img
              src={profile}
              alt="Abhishek Arora"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Details */}
          <div className="flex-1">
            <table className="w-full max-w-md mx-auto border-collapse border border-gray-700 rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["Name", "Abhishek Arora"],
                  ["Date of Birth", "March 29, 2003"],
                  ["Address", "Bathinda, Punjab"],
                  ["Email", "abhishekarora5437@gmail.com"],
                ].map(([label, value]) => (
                  <tr key={label} >
                    <td className="px-4 py-2 font-semibold text-orange-400">{label}:</td>
                    <td className="px-4 py-2 ">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Download CV Button */}
            <div className="mt-6 text-center md:text-center ">
              <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1qUtBT5-xJ3KArUvEdARTFuMEbUqhmYHw&export=download"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
