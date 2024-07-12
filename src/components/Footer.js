import React from 'react';
import './Css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://github.com/RubbySoft/rubby-room-chat" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/siddhesh0002t" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/siddhesh0002t" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} RubbySoft. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
