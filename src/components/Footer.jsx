import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-back-to-top" onClick={() => window.scrollTo(0, 0)}>
        Back to top
      </div>
      
      <div className="footer-links-container">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About AMZClone</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell products on AMZClone</li>
            <li>Sell apps on AMZClone</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>AMZClone Payment Products</h3>
          <ul>
            <li>AMZClone Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>AMZClone Currency Converter</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>AMZClone and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-logo">AMZClone</div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()}, AMZClone.com, Inc. or its affiliates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
