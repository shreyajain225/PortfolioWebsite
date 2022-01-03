import React from "react";
import Typical from "react-typical";
import { Link } from "react-scroll";

function Profile() {
  return (
    <div className="profile-container" id="Profile">
      <div className="profile-details">
        <h3 className="Name">
          Shreya <span className="highlight">Jain</span>
        </h3>
        <h2 className="roles">
          <Typical
            loop={Infinity}
            steps={["Front End Developer", 1000, "Graphic Designer", 1000]}
          />
        </h2>
        <span className="tagline">Working Hard to Achieve Excellence.</span>
        <div className="colz">
          <button className="Hire-me">
            <Link to="Contact" spy={true} smooth={true}>
              Hire Me
            </Link>
          </button>
          <a href="Resume.docx" download="Shreya Resume.docx">
            <button className="resume">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="imgDiv">
        <img
          src="pic.png"
          alt="profile"
          height="300"
          width="300"
          className="profile-picture"
        ></img>
      </div>
    </div>
  );
}
export default Profile;
