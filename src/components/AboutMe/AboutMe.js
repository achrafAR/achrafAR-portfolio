import React, { useState } from "react";
import "./aboutMe.css";
import AboutMEPhoto from "../../images/aboutMe-photo.avif";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("MainSkills");

  const handleTabClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="aboutMe-container">
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
                style={{ color: activeTab === "MainSkills" ? "#ff3300" : "white" }}
              >
                Main Skills
              </li>
              <li
                onClick={() => handleTabClick("Experience")}
                className={activeTab === "Experience" ? "active-tab" : ""}
                style={{ color: activeTab === "Experience" ? "#ff3300" : "white" }}
              >
                Experience
              </li>
              <li
                onClick={() => handleTabClick("Education")}
                className={activeTab === "Education" ? "active-tab" : ""}
                style={{ color: activeTab === "Education" ? "#ff3300" : "white" }}
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
                <p>Experience: Previous job positions and responsibilities.</p>
              </div>
            )}

            {activeTab === "Education" && (
              <div className="aboutMe-details">
                <p>Education: Academic qualifications and institutions.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
