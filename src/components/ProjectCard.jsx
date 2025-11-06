import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../AppContext";

export default function ProjectCard(props) {
  const { dark } = useAppContext();

  // unified background color
  const bgColor =
    dark === false ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800";

  return (
    <motion.div
      className="mx-auto my-5"
      whileHover={{ scale: 1.02, rotateY: 3 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      style={{ perspective: 1000 }}
    >
      <div
        className={`relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2 overflow-hidden ${bgColor}`}
      >
        {/* --- Image Section --- */}
        <div
          className={`z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden md:rounded-none md:rounded-r-lg`}
          style={{
          clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)"

          }}
        >
          <motion.img
            src={props.image}
            alt={props.title}
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.08, rotateZ: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
              {props.title}
            </h3>
          </div>
        </div>

        {/* --- Text Section --- */}
        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
          <motion.div
            className={`p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none ${bgColor}`}
            whileHover={{ rotateX: 1.5, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <h3 className="hidden md:block font-bold text-2xl mb-2">
              {props.title}
            </h3>
            <p className="text-gray-500 text-justify pt-5">{props.disc}</p>
            <a
              className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900 transition-all duration-300"
              href={props.link}
              target="_blank"
            >
              <span>Link</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
