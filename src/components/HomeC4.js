import React from 'react';
import './HomeC4.css';
import { FaQuoteLeft } from 'react-icons/fa';

function HomeC4() {
  const testimonials = [
    { name: "Prabhjot singh", role: "Brain Patient", text: "My medicines always arrive on time. Excellent service!" },
    { name: "Saurabh yadav", role: "Cardiac Care", text: "Saved me multiple trips to the pharmacy during my recovery." },
    { name: "Shobit Mehra", role: "Piles Patient", text: "Very convenient for my monthly medications." }
  ];

  return (
    <div className="testimonials-section">
      <h2>What Our Patients Say</h2>
      <p className="subtitle">Trusted by thousands across India</p>
      
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeC4;