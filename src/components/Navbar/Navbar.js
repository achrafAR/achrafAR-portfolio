import React, { useState, useEffect } from "react";
import "./navbar.css";
import achrafLogo from "../../images/achrafLogo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 106) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${scrolling ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img src={achrafLogo} alt="Logo" />
      </div>

      <div className="navbar-content">
        <div className="navbar-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar-socialMedia">
          <div className="navbar-socialMedia-logo">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn style={{ color: "white" }} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ color: "white" }} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF style={{ color: "white" }} />
            </a>
            <a
              href="https://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub style={{ color: "white" }} />
            </a>
          </div>
          <div className="navbar-socialMedia-resume">
            <button>GO RESUME</button>
          </div>
        </div>
      </div>

      <div className="social-media-burger">
        <div className="navbar-socialMedia-logo">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn style={{ color: "white" }} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ color: "white" }} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF style={{ color: "white" }} />
          </a>
          <a
            href="https://www.github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub style={{ color: "white" }} />
          </a>
        </div>
        <div className="navbar-humburger" onClick={toggleMenu}>
          <GiHamburgerMenu style={{ color: "white" }} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="navbar-popup">
          <div className="popup-content">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="popup-close" onClick={toggleMenu}>
            X
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
