import { useRef, useEffect } from "react";
import "./about.scss";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const startAnimationAt = windowHeight / 2;
    const endAnimationAt = windowHeight * 1.5;

    if (scrollY > startAnimationAt && scrollY < endAnimationAt) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: "-100%", opacity: 0 });
    }
  };

  useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return (
    <motion.div
      className="about"
      style={{
        background: "linear-gradient(180deg, #111132, #2b2669)",
        overflow: "hidden",
      }}
    >
      <motion.h1
        style={{ y: "-100%", opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        ABOUT ME
      </motion.h1>
      <motion.p
        style={{ y: "-60%", opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </motion.p>
      <motion.div className="watercolor"></motion.div>
    </motion.div>
  );
};

export default About;

