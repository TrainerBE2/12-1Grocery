import React from 'react';
import './Footer.css'; 

import fb from '../assets/socmed/fb.png'; 
import ig from '../assets/socmed/ig.png';
import twitter from '../assets/socmed/x.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section header-section">
        <div className="header-column">
          <h1 className="brand-name">Grocery App</h1>
          <p className="tagline">Situs Grocery Terlengkap & Terpercaya #1 di Indonesia</p>
        </div>
        <div className="social-media-column">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-column">
          <h4>INFORMATION</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/">Our Store</a></li>
            {/* <li><a href="/help">Help Center</a></li> */}
          </ul>
        </div>
        <div className="footer-column">
          <h4>CUSTOMER CARE</h4>
          <p>Email: <a href="mailto:cs@groceryapp.com">groceryapp.com</a></p>
          <p>WhatsApp: <a href="tel:+62811987881">0811987881</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PT. Grocery Retail Indonesia. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
