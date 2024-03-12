import React from "react";
import "./service.css";
import businessStrategy from "../../images/businessStrategy.png";

function Service() {
  return (
    <div className="services-container">
      <div className="services">
        <div className="awesome-services">
          <h1>My Awesome Service</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="services-card-container">
          <div className="services-card-details">
            <div className="services-logo-text">
              <img src={businessStrategy} alt="" />
              <h3>Business Strategy</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority
              </p>
            </div>
          </div>
          <div className="services-card-details"></div>
          <div className="services-card-details"></div>
          <div className="services-card-details"></div>
          <div className="services-card-details"></div>
        </div>
      </div>
    </div>
  );
}

export default Service;
