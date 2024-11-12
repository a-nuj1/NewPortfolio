import "./mycard.css";
import portfolioImg from "../../bgre.png";

const MyCard = () => {
  return (
    <div id="home" className="mycardContainer">
      <div className="myPersonalCard">
        <div className="title">
          <h1>Anuj Kumar Gupta_</h1>
          <div className="title-tag">
            <img
              src="https://askgalore.nl/wp-content/uploads/2021/11/mern_hero.png"
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
            src={portfolioImg}
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
