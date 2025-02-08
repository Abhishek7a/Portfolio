import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "../components/Header";
import Skill from "../components/Skill";
import About from "../components/About";
// import { useAppContext } from '../AppContext';

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  // const { dark, setDark } = useAppContext();
  // const updateTheme = () => {
    // setDark(!dark);
// }
  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [200, 100]);
  return (
    <>
      {/* <button
        onClick={() => updateTheme()}
        data-tooltip-target="default-navbar-example-toggle-dark-mode-tooltip"
        type="button"
        data-toggle-dark="light"
        className="toggle-dark-mode flex items-center  justify-center w-9 h-9  text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 focus:outline-none dark:text-gray-700 dark:border-gray-900 dark:hover:text-gray-400 dark:hover:bg-gray-900"
      >
        {dark === false ? (
          <svg
            data-toggle-icon="moon"
            className="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
          </svg>
        ) : (
          <svg
            data-toggle-icon="sun"
            className=" w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
          </svg>
        )}
      </button> */}
      <motion.div
        ref={ref}
        initial={{ x: "-100vw", opacity: 0 }} // Start offscreen to the left
        animate={isInView ? { x: 0, opacity: 1 } : { x: 1 }} // Animate to position when in view
        transition={{
          type: "spring", // Spring animation for natural feel
          stiffness: 30, // Lower stiffness for slower movement
          damping: 25, // Damping to control smoothness
          duration: 0.5, // Increase duration for slower animation
        }}
      >
        <Header />
      </motion.div>

      {/* <div style={{ height: "10vh" }}> */}
      <motion.div
        style={{
          x,
          opacity,
        }}
      >
        <About />
      </motion.div>

      <motion.div
        style={{
          x: y,
          opacity,
        }}
      ></motion.div>
      <Skill />
    </>
  );
}
