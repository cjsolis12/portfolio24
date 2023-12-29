import "./navbar.scss";
import {motion} from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCredly } from "react-icons/si";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Claudia Solis</motion.span>
        <div className="social">
          <a href="https://github.com/cjsolis12"><FaGithub/></a>
          <a href=""><FaLinkedin/></a>
          <a href=""><SiCredly/></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
