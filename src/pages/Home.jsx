import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef ,useEffect} from "react";
import Header from "../components/Header";
import Skill from "../components/Skill";
import About from "../components/About";
import { useAppContext } from "../AppContext";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  
  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [200, 100]);
  return (
    <>
      
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
