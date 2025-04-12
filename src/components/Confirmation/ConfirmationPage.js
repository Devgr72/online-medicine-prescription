import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmationPage.css';
import axios from 'axios';

function ConfirmationPage() {
  const location = useLocation();
  const { paymentId, orderId, cartItems, totalAmount } = location.state || {};

  useEffect(() => {
    if (orderId && cartItems && totalAmount) {
      sendOrderConfirmation();
    }
  }, [orderId, cartItems, totalAmount]);

  const sendOrderConfirmation = async () => {
    try {
      const response = await axios.post('http://localhost:8000/send-order-confirmation', {
        orderId,
        paymentId,
        cartItems,
        totalAmount
      });

      if (response.data.success) {
        console.log('Order details sent to admin successfully');
      } else {
        console.error('Failed to send order details:', response.data.error);
      }
    } catch (error) {
      console.error('Error sending order details:', error);
    }
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h1>Order Confirmed!</h1>
        <p className="order-id">Order ID: {orderId}</p>
        <p className="payment-id">Payment ID: {paymentId}</p>

        <div className="order-summary">
          <h2>Your Order:</h2>
          {cartItems?.map((item, index) => (
            <div key={index} className="confirmation-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="confirmation-total">
            <span>Total Paid:</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>

        <p className="email-note">
          The order details have been sent to the admin.
        </p>
        
        <button 
          className="home-btn"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;