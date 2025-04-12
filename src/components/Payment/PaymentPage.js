import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PaymentPage.css';
import {Link } from 'react-router-dom';

function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalAmount } = location.state || {};
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (order) => {
  const options = {
    key: 'rzp_test_Syu8Zea6zXm8yN',
    amount: order.amount,
    currency: 'INR',
    name: 'MediTalk Pharmacy',
    description: 'Medicine Purchase',
    order_id: order.id,
    handler: async function(response) {
      try {
        const verification = await axios.post('http://localhost:8000/verify-payment', {
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id,
          signature: response.razorpay_signature,
          amount: order.amount,
          cartItems: cartItems
        });

        if (verification.data.success) {
          setPaymentSuccess(true);
          navigate('/confirmation', {
            state: {
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              cartItems,
              totalAmount: totalAmount,
              orderDetails: verification.data.order
            }
          });
        } else {
          alert(`Payment verification failed: ${verification.data.error}`);
        }
      } catch (error) {
        console.error('Verification error:', error);
        alert('Payment verification failed. Please contact support.');
      }
    },
    prefill: {
      name: localStorage.getItem('userName') || 'Customer',
      email: localStorage.getItem('userEmail') || 'customer@example.com',
      contact: '9971381635'
    },
    theme: {
      color: '#3399cc'
    },
    modal: {
      ondismiss: function() {
        alert('Payment window closed');
      }
    }
  };

  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = async () => {
    if (!cartItems || cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setLoading(true);
    try {
      await loadRazorpay();
      const orderResponse = await axios.post('http://localhost:8000/create-order', {
        amount: totalAmount * 100
      });
      await displayRazorpay(orderResponse.data);
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      navigate('/medicine');
    }
  }, [cartItems, navigate]);

  return (
    <div className="payment-container">
      <h1>Complete Your Payment</h1>
      <div className="payment-summary">
        <div className="order-details">
          <h2>Order Summary</h2>
          {cartItems?.map((item, index) => (
            <div key={index} className="payment-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="payment-total">
            <span>Total Amount:</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>

        <div className="payment-methods">
          <h2>Select Payment Method</h2>
          <div className="method-options">
            <button
              className="razorpay-btn"
              onClick={handlePayment}
              disabled={loading || paymentSuccess}
            >
              {loading
                ? 'Processing...'
                : paymentSuccess
                  ? 'Payment Successful!'
                  : 'Pay via Razorpay'}
            </button>
          </div>
        </div>
        <Link to="/" className="return-home-button">
          ← Return Home
        </Link>
      </div>
    </div>
  );
}

export default PaymentPage;
