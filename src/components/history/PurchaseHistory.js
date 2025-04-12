import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PurchaseHistory.css';

const PurchaseHistory = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchaseHistory = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.post('http://localhost:8000/last-purchase', { withCredentials: true });


        if (!response.data) {
          throw new Error('No purchase data received');
        }
        
        setPurchases([response.data]);
      } catch (err) {
        setError(err.message || 'Failed to load purchase details');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchaseHistory();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading your purchase confirmation...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>⚠️ {error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  if (purchases.length === 0) {
    return (
      <div className="confirmation-container">
        <h2>Order Confirmation</h2>
        <div className="no-purchases">
          <p>No recent purchases found.</p>
          <p>If you just made a purchase, please contact support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <h2>Order Confirmation</h2>
      <div className="thank-you">Thank you for your purchase!</div>
      
      {purchases.map(purchase => (
        <div key={purchase._id || Date.now()} className="confirmation-card">
          <div className="order-header">
            <span className="order-date">
              Ordered on: {new Date(purchase.purchase_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
            <span className="order-total">
              Total Paid: ${purchase.total_payment?.toFixed(2) || '0.00'}
            </span>
          </div>
          
          <div className="order-items">
            <h3>Your Items:</h3>
            {purchase.items?.map((item, index) => (
              <div key={item.medicine_id || index} className="item">
                <img 
                  src={item.image || '/default-medicine.jpg'} 
                  alt={item.name}
                  className="item-image"
                  onError={(e) => {
                    e.target.src = '/default-medicine.jpg';
                  }}
                />
                <div className="item-details">
                  <h4>{item.name || 'Unknown Item'}</h4>
                  <p>{item.quantity || 1} × ${(item.price || 0).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="order-summary">
            <p>Items: {purchase.items?.length || 0}</p>
            <p>Payment Method: {purchase.payment_method || 'Not specified'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PurchaseHistory;