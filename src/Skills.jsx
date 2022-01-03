import React from "react";

function Skills() {
  return (
    <div id="Skills">
      <h1 className="skill">
        Professional <span className="highlight">Skills</span>
      </h1>
      <div className="skill-container">
        <div className="row">
          <div className="col-sm-6">
            <div className="progress_bar fadeIn">
              <div className="progress_holder">
                <div className="progress_bar_title">HTML</div>
                <div className="progress_number">75%</div>
              </div>
              <div className="progress_bar_holder">
                <div
                  className="progress_bar_content"
                  style={{ width: "75%", background: "#D4ECDD" }}
                  data-score="100"
                ></div>
              </div>
            </div>
            <div className="progress_bar fadeIn">
              <div className="progress_holder">
                <div className="progress_bar_title">CSS</div>
                <div className="progress_number">70%</div>
              </div>
              <div className="progress_bar_holder">
                <div
                  className="progress_bar_content"
                  style={{ width: "70%", background: "#D4ECDD" }}
                  data-score="100"
                ></div>
              </div>
            </div>
            <div className="progress_bar fadeIn">
              <div className="progress_holder">
                <div className="progress_bar_title">JAVASCRIPT</div>
                <div className="progress_number">60%</div>
              </div>
              <div className="progress_bar_holder">
                <div
                  className="progress_bar_content"
                  style={{ width: "60%", background: "#D4ECDD" }}
                  data-score="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="progress_bar fadeIn">
              <div className="progress_holder">
                <div className="progress_bar_title">REACT JS</div>
                <div className="progress_number">75%</div>
              </div>
              <div className="progress_bar_holder">
                <div
                  className="progress_bar_content"
                  style={{ width: "75%", background: "#D4ECDD" }}
                  data-score="100"
                ></div>
              </div>
            </div>
            <div className="progress_bar fadeIn">
              <div className="progress_holder">
                <div className="progress_bar_title">C++</div>
                <div className="progress_number">80%</div>
              </div>
              <div className="progress_bar_holder">
                <div
                  className="progress_bar_content"
                  style={{ width: "80%", background: "#D4ECDD" }}
                  data-score="100"
                ></div>
              </div>
            </div>
            <div className="progress_bar fadeIn">
              <div className="progress_holder">
                <div className="progress_bar_title">DATA STRUCTURE</div>
                <div className="progress_number">85%</div>
              </div>
              <div className="progress_bar_holder">
                <div
                  className="progress_bar_content"
                  style={{ width: "85%", background: "#D4ECDD" }}
                  data-score="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
