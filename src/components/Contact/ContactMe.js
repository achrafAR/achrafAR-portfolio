import React from "react";
import "./contactMe.css";
import contactMEPhoto from "../../images/aboutMe-photo.avif";

function ContactMe() {
  return (
    <div className="contact-container">
      <div className="contact-form-image">
        <div className="contact-text-form">
          <div className="conatct-text">
            <h1>Hire ME</h1>
            <p>
              I am available for freelance work. Connect with me via phone:
              01923 088574 or email: admin@example.com
            </p>
          </div>
          <div className="conatct-form">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <input type="text" id="email" name="email" placeholder=" Your Email" required />
            <input type="text" id="subject" name="subject" placeholder="Write a Subject" required />
            <input type="text" id="message" name="message" placeholder="Your Message" required />
          </div>
          <div className="contact-button">
            <button>Submit</button>
          </div>
        </div>
        <div className="contact-image">
          <img src={contactMEPhoto} alt="contactMe" />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
