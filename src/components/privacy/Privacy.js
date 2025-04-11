import React from 'react';
import '../privacy/Privacy.css';
import { Link } from 'react-router-dom';
const Privacy = () => {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </header>

      <main className="privacy-content">
        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal 
            data when you visit our website and tell you about your privacy rights.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you:</p>
          <ul>
            <li>Identity Data (name, username, etc.)</li>
            <li>Contact Data (email address, phone number)</li>
            <li>Technical Data (IP address, browser type, location)</li>
            <li>Usage Data (how you use our website)</li>
            <li>Marketing and Communications Data (preferences)</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being 
            accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@yourwebsite.com">privacy@mediportal.com</a>
          </p>
        </section>
      </main>
      <Link to="/" className="return-home-button">
  ← Return Home
</Link>
      <footer className="privacy-footer">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Privacy;