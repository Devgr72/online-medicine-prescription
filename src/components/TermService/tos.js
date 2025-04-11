import React from 'react';
import '../TermService/tos.css';


import {Link } from 'react-router-dom';
const tos = () => {
  return (
    <div className="tos-container">
      <header className="tos-header">
        <h1>Terms of Service</h1>
        <p>Effective Date: {new Date().toLocaleDateString()}</p>
      </header>

      <main classN  ame="tos-content">
        <section className="tos-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms of Service 
            and all terms incorporated by reference. If you do not agree to all of these terms, 
            do not use our services.
          </p>
        </section>

        <section className="tos-section">
          <h2>2. Service Description</h2>
          <p>Our service provides:</p>
          <ul>
            <li>Access to digital content and resources</li>
            <li>User account functionality</li>
            <li>Customer support services</li>
            <li>Regular updates and improvements</li>
          </ul>
          <p>We reserve the right to modify or discontinue any service at any time without notice.</p>
        </section>

        <section className="tos-section">
          <h2>3. User Responsibilities</h2>
          <p>As a user, you agree to:</p>
          <ul>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Not use the service for any illegal or unauthorized purpose</li>
            <li>Not interfere with or disrupt the service or servers</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className="tos-section">
          <h2>4. Intellectual Property</h2>
          <p>
            All content included on our service, such as text, graphics, logos, images, 
            and software, is the property of our company or its content suppliers and 
            protected by intellectual property laws.
          </p>
          <p>
            You may not modify, publish, transmit, participate in the transfer or sale of, 
            reproduce, create derivative works from, distribute, or in any way exploit any 
            of the content, in whole or in part.
          </p>
        </section>

        <section className="tos-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, 
            incidental, special, consequential or punitive damages, or any loss of profits 
            or revenues, whether incurred directly or indirectly, or any loss of data, use, 
            goodwill, or other intangible losses.
          </p>
        </section>

        <section className="tos-section">
          <h2>6. Termination</h2>
          <p>
            We may terminate or suspend your account and bar access to the service immediately, 
            without prior notice or liability, under our sole discretion, for any reason 
            whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
        </section>

        <section className="tos-section">
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at 
            any time. We will provide notice of any changes by posting the new Terms on this page.
          </p>
        </section>

        <section className="tos-section">
          <h2>8. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br />
            <a href="mailto:devgr102@gmail.com.com">legal@mediportal.com</a>
          </p>
        </section>
      </main>
      <Link to="/" className="return-home-button">
  ← Return Home
</Link>
      <footer className="tos-footer">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default tos;