import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = location.state || { cartItems: [] };
  const [prescription, setPrescription] = useState(null);
  const [error, setError] = useState('');

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      setPrescription(file);
      setError('');
    } else {
      setError('Please upload a valid image file (JPEG/PNG)');
    }
  };

  const proceedToPayment = () => {
    if (!prescription) {
      setError('Prescription upload is mandatory');
      return;
    }
    navigate('/payment', { 
      state: { 
        cartItems, 
        totalAmount,
        prescription: URL.createObjectURL(prescription) 
      } 
    });
  };

  return (
    <div className="checkout-container">
      <h1>Order Summary</h1>
      <div className="checkout-grid">
        <div className="items-section">
          {cartItems.map((item, index) => (
            <div key={index} className="checkout-item">
              <img src={item.image} alt={item.name} className="medicine-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="prescription-section">
          <h2>Upload Prescription</h2>
          <div className="upload-box">
            {prescription ? (
              <div className="preview-container">
                <img 
                  src={URL.createObjectURL(prescription)} 
                  alt="Prescription preview" 
                  className="prescription-preview"
                />
                <button 
                  onClick={() => setPrescription(null)}
                  className="change-btn"
                >
                  Change
                </button>
              </div>
            ) : (
              <>
                <label htmlFor="prescription-upload" className="upload-label">
                  <div className="upload-icon">+</div>
                  <p>Click to upload prescription</p>
                  <p className="file-types">(JPEG, PNG only)</p>
                </label>
                <input
                  id="prescription-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </>
            )}
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>

      <div className="order-summary">
        <h2>Order Total: ₹{totalAmount}</h2>
        <button 
          onClick={proceedToPayment}
          className="proceed-btn"
          disabled={!prescription}
        >
          Proceed to Payment
        </button>
        <button 
    className="back-btn"
    onClick={() => navigate('/medicine')}
  >
    ← Back to Medicine
  </button>
      </div>
    </div>
  );
}

export default CheckoutPage;