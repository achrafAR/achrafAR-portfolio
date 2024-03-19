import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="projects-container" id="portfolio">
      <div className="projects-title">
        <h1>My Latest Project</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className="projects-card-container">
        <div className="projects-card-details">
          <div className="projects-card-details-text">
            <h3 className="project-title">title</h3>
            <p className="project-description">description</p>
            <button className="show-details-button">VIEW DETAILS</button>
          </div>
        </div>
        <div className="projects-card-details">
          <div className="projects-card-details-text">
            <h3 className="project-title">title</h3>
            <p className="project-description">description</p>
            <button className="show-details-button">VIEW DETAILS</button>
          </div>
        </div>
        <div className="projects-card-details">
          <div className="projects-card-details-text">
            <h3 className="project-title">title</h3>
            <p className="project-description">description</p>
            <button className="show-details-button">VIEW DETAILS</button>
          </div>
        </div>
        <div className="projects-card-details">
          <div className="projects-card-details-text">
            <h3 className="project-title">title</h3>
            <p className="project-description">
              description descriptiondescription description description
            </p>
            <button className="show-details-button">VIEW DETAILS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
