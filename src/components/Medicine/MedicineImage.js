import React from 'react';
import './MedicineImage.css';

const MedicineImage = ({ src, alt }) => {
  return (
    <div className="medicine-img-container">
      <img 
        src={src} 
        alt={alt}
        className="medicine-img"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=Medicine+Image';
        }}
      />
    </div>
  );
};

export default MedicineImage;