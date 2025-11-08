import React from "react";
import profile from "../assets/profile.png";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const { dark } = useAppContext();

  const tableData = [
    ["Name", "Abhishek Arora"],
    ["Date of Birth", "March 29, 2003"],
    ["Address", "Bathinda, Punjab"],
    ["Email", "abhishekarora5437@gmail.com"],
  ];

  return (
    <section
      id="about"
      className={`${isAboutPage ? "md:pt-32 md:pb-64 py-10" : "py-16"} ${
        dark === false
          ? "text-gray-100 bg-gray-950"
          : "text-gray-800 bg-gray-100"
      } transition-colors duration-700`}
    >
      <div className="container mx-auto px-6">
        {/* Title — same color as Skills */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            About Me
          </span>
        </h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-transparent  p-[3px]"
          >
            <div className="rounded-full w-full h-full overflow-hidden">
              <motion.img
                src={profile}
                alt="Abhishek Arora"
                className="w-full h-full object-cover rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`flex-1 max-w-lg w-full backdrop-blur-md rounded-2xl p-6 shadow-xl border ${
              dark === false
                ? "border-gray-800 bg-white/5"
                : "border-gray-300 bg-white/60"
            }`}
          >
            <table className="w-full border-collapse">
              <tbody>
                {tableData.map(([label, value]) => (
                  <tr
                    key={label}
                    className="border-b border-gray-600/30 last:border-none"
                  >
                    <td className="py-3 font-semibold w-1/3">
                      {label}:
                    </td>
                    <td className="py-3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Download Button */}
            <div className="mt-8 text-center">
              <motion.a
                href="https://drive.usercontent.google.com/u/0/uc?id=1jY0A6x4ZCwZdG8_BvA8ZlThv8QashtO2&export=download"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block px-8 py-3 font-semibold text-white rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-700 transition-all duration-300 group-hover:blur-md"></span>
                <span className="relative z-10">Download CV</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
