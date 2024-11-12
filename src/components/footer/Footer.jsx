import "./footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      {/* <h2>वो जन्नत ही क्या ? जो एक पल में मिल जाए । </h2> */}
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
        </div>
        {/* <div className="bar1-f"></div> */}
        <p> © 2024 Anuj Gupta | Crafted with 💖. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
