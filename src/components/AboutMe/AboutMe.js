import React, { useState } from "react";
import "./aboutMe.css";
import AboutMEPhoto from "../../images/aboutMe-photo.avif";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("MainSkills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="aboutMe-container" id="about">
      <div className="aboutMe">
        <div className="aboutMe-image">
          <img src={AboutMEPhoto} alt="aboutMe" />
        </div>
        <div className="aboutMe-text">
          <div className="aboutMe-mySlef">
            <h1>About Me</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum,
            </p>
          </div>
          <div className="aboutMe-experience">
            <ul>
              <li
                onClick={() => handleTabClick("MainSkills")}
                className={activeTab === "MainSkills" ? "active-tab" : ""}
                style={{
                  color: activeTab === "MainSkills" ? "#ff3300" : "white",
                }}
              >
                Main Skills
              </li>
              <li
                onClick={() => handleTabClick("Experience")}
                className={activeTab === "Experience" ? "active-tab" : ""}
                style={{
                  color: activeTab === "Experience" ? "#ff3300" : "white",
                }}
              >
                Experience
              </li>
              <li
                onClick={() => handleTabClick("Education")}
                className={activeTab === "Education" ? "active-tab" : ""}
                style={{
                  color: activeTab === "Education" ? "#ff3300" : "white",
                }}
              >
                Education
              </li>
            </ul>

            {activeTab === "MainSkills" && (
              <div className="aboutMe-details">
                <p>
                  User experience design - UI/UX
                  <br />
                  Delight the user and make it work.
                </p>
                <p>
                  User experience design - UI/UX
                  <br />
                  Delight the user and make it work.
                </p>
                <p>
                  User experience design - UI/UX
                  <br />
                  Delight the user and make it work.
                </p>
              </div>
            )}

            {activeTab === "Experience" && (
              <div className="aboutMe-details">
                <p>
                  Sr. Front-end Engineer - Google
                  <br />
                  2018 - Current
                </p>
                <p>
                  Front-end Engineer - Microsoft
                  <br />
                  2017 - 2018
                </p>
                <p>
                  Software Engineer - Alibaba
                  <br />
                  2013- 2014
                </p>
              </div>
            )}

            {activeTab === "Education" && (
              <div className="aboutMe-details">
                <p>
                  BSc In CSE - ABC University, Los Angeles, CA
                  <br />
                  2010
                </p>
                <p>
                  Diploma in Computer Science - Gamma Technical Institute
                  <br />
                  2009
                </p>
                <p>
                  Graphic Designer - ABC Institute, Los Angeles, CA
                  <br />
                  2007
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
