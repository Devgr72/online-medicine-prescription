import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane } from 'react-icons/fa';
import '../contact/ContactUs.css';
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {Link } from 'react-router-dom';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.query) {
        newErrors.query = 'Query is required';
      } else if (formData.query.length < 20) {
        newErrors.query = 'Query must be at least 20 characters';
      } else if (formData.query.length > 200) {
        newErrors.query = 'Query must not exceed 200 characters';
      }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await axios.post('http://localhost:8000/api/contact', {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            query: formData.query
          });
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', query: '' });
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions? Get in touch with our team.</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>Our Information</h2>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>support@mediportal.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9971381635</p>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Address</h3>
              <p>72 Maldives, Parathe wali gaali, New Delhi, India</p>
            </div>
          </div>
          <Link to="/" className="return-home-button">
            ← Return Home
          </Link>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          
          {submitStatus === 'success' && (
            <div className="alert success">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert error">
              Something went wrong. Please try again later.
            </div>
          )}
          
          <div className={`form-group ${errors.name ? 'error' : ''}`}>
            <label htmlFor="name">
              <FaUser className="input-icon" /> Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className={`form-group ${errors.email ? 'error' : ''}`}>
            <label htmlFor="email">
              <FaEnvelope className="input-icon" /> Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className={`form-group ${errors.phone ? 'error' : ''}`}>
            <label htmlFor="phone">
              <FaPhone className="input-icon" /> Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your 10-digit phone number"
              maxLength="10"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          
          <div className={`form-group ${errors.query ? 'error' : ''}`}>
            <label htmlFor="query">
              <FaComment className="input-icon" /> Your Query
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Enter your query (20-200 words)"
              rows="5"
            ></textarea>
            <div className="word-count">
  Characters: {formData.query ? formData.query.length : 0}/200
</div>
            {errors.query && <span className="error-message">{errors.query}</span>}
          </div>
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : (
              <>
                <FaPaperPlane className="submit-icon" /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;