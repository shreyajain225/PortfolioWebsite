import React from "react";

function Work() {
  return (
    <div id="Work">
      <h1 className="workExp">
        Work & <span className="highlight">Experience</span>
      </h1>
      <div className="Allwork">
        <div className="workContainer">
          <h3 className="workTitle">Real Time Chat Application</h3>
          <p className="detailDetail">
            A chat applicaiton in which user can choose their pseudo name and
            can join or create their own rooms to chat.
          </p>
        </div>

        <div className="workContainer">
          <h3 className="workTitle">Intern for Data Ananlytics</h3>
          <p className="detailDetail">
            Learnt how to make the connectors, how to play with REST APIs to
            fetch the data to do the furthur computations.
          </p>
        </div>

        <div className="workContainer">
          <h3 className="workTitle">GirlsXTech Designing Bootcamp</h3>
          <p className="detailDetail">
            Learnt the basics of canva and how to do graphic designing using
            Canva. I was among the top five contestants.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
