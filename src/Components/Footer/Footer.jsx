import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"; // Import the icons
import "./Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer bg-green-900 rounded-t-3xl">
      <div className="footer-container">
        <div className="footer-links">
          <a
            href="https://github.com/Uddeshya0323"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="linkedin.com/in/uddeshya-patel-a247611b2"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Uddeshya0323/Uddeshya-Personal-Portfolio"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <FaGlobe size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Uddeshya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
