// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 JCFitness. All rights reserved.</p>
        <p>
          Follow us on: 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook </a>|
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter </a>|
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
