import "./navbar.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Claudia Solis</span>
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
