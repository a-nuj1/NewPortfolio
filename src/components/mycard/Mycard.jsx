import "./mycard.css";
// import portfolioImg from "../../bgre.png";
import portImg from "../../assests/cardImg.png"
import mern from "../../assests/finalI.png";

const MyCard = () => {
  return (
    <div id="home" className="mycardContainer">
      <div className="myPersonalCard">
        <div className="title">
          <h1>Anuj Kumar Gupta_</h1>
          <div className="title-tag">
            <img
              src={mern}
              alt="MERN"
            />
            <div>
              <p className="titleHead bg-yellow">{`MERN Developer`}</p>
            </div>
          </div>
        </div>
        <div className="profilecard">
          <img
            className="profile-pic"
            src={portImg}
            alt="profile"
          />
          
           <p><a
            href="https://www.linkedin.com/in/anuj-kumar-gupta-631651227/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            LinkedIn
          </a> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
