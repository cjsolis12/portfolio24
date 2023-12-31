import { useRef } from "react";
import "./about.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      className="about"
      ref={ref}
      style={{
        background:"linear-gradient(180deg, #111132, #2b2669)"}}
    >
      <motion.h1 style={{ y: yText }}>
        ABOUT ME
      </motion.h1>
      <motion.div className="watercolor"></motion.div>
    </div>
  );
};

export default About;
