import React from 'react';
import "./Footer.css";
import insta from "../assets/insta.svg";
import face from "../assets/R.svg";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">
        <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
        <p>123 Lemon St, Citrus City, CA 12345</p>
        <p>Contact us at: info@littlelemon.com</p>
      </div>

      <div className='connect'>
        <div className='title'>Connect</div>
        <div className='links'>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <img
            src= {insta} // Ensure this path is correct
            alt="Instagram"
            className="footer-icon"
          />
        </a>
        <a
          href="https://www.facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
        >
          <img
            src={face} // Ensure this path is correct
            alt="Facebook"
            className="footer-icon"
          />
        </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
