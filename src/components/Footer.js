import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section 1: About Us */}
        <div className="footer-section">
          <h2 className="footer-heading">About MediTalk</h2>
          <div className="footer-logo">MediTalk</div>
          <p className="footer-about">
            Your trusted digital healthcare partner. We provide seamless online medical prescriptions, 
            pharmacy services, and doctor consultations - all from the comfort of your home.
          </p>
          <div className="footer-certifications">
            <span className="cert-badge">HIPAA Compliant</span>
            <span className="cert-badge">Licensed Pharmacies</span>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/medicines">Medicines</Link></li>
           
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>72 Maldives, Parathe wali gaali, New Delhi, India</span>
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" />
              <span>+91 9971381635 (24/7 Support)</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>support@mediportal.com</span>
            </li>
          </ul>
          
          <div className="newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Section 4: Social Media */}
        <div className="footer-section">
          <h2 className="footer-heading">Connect With Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
          
          <div className="app-download">
            <h3>Download Our App</h3>
            <div className="app-buttons">
              <a href="#" className="app-store">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </a>
              <a href="#" className="play-store">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} MediTalk. All rights reserved.</p>
          <div className="payment-methods">
            <span>We accept:</span>
            <div className="payment-icons">
              <i className="fab fa-cc-visa"></i>
              <i className="fab fa-cc-mastercard"></i>
              <i className="fab fa-cc-paypal"></i>
              <i className="fab fa-cc-amex"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;