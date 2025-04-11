import React from 'react';
import './Homec3.css';
import { FaClinicMedical, FaAmbulance, FaPills, FaUserMd } from 'react-icons/fa';

function Homec3() {
  const services = [
    { icon: <FaClinicMedical />, title: "Clinic Visits", desc: "Book appointments with top specialists" },
    { icon: <FaAmbulance />, title: "Emergency Care", desc: "24/7 emergency services" },
    { icon: <FaPills />, title: "Medicine Delivery", desc: "Get prescriptions delivered in 2 hours" },
    { icon: <FaUserMd />, title: "Online Consult", desc: "Video calls with doctors" }
  ];

  return (
    <div className="health-services">
      <h2>Our Healthcare Services</h2>
      <p className="subtitle">Comprehensive care for all your medical needs</p>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homec3;