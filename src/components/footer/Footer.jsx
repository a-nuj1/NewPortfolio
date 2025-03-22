import "./footer.css";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <div className="footeritem">
        <div className="footerlink">
          <a
            href="https://www.linkedin.com/in/anuj-kumar-gupta-631651227/"
            target="_blank"
            rel="noreferrer"
          >
            <p>LINKEDIN</p>
          </a>
          <a href="https://github.com/a-nuj1" target="_blank" rel="noreferrer">
            <p>GITHUB</p>
          </a>
          <a href="https://x.com/_anuj01" target="_blank" rel="noreferrer">
            <p>X</p>
          </a>
          <a href="https://leetcode.com/anuj01/" target="_blank" rel="noreferrer">
            <p>LEETCODE</p>
          </a>
        </div>
        {/* <div className="bar1-f"></div> */}
        <p> @ {new Date().getFullYear()} Anuj Gupta | Crafted with 💖| All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
