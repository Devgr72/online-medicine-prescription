import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaPlus, FaMinus, FaRupeeSign } from 'react-icons/fa';
import './MedicinePage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MedicineImage from './MedicineImage';
import paracetmol from '../Assets/para.jpg'
import cetri from '../Assets/cetri.jpg'
import omep from '../Assets/omep.jpg'
import dolo from '../Assets/dolo.jpg'
import asprin from '../Assets/asprin.jpg'
import cofsil from '../Assets/cofsil.jpg'
import antifug from '../Assets/antifug.jpg'
import hydro from '../Assets/hydro.jpg'
import iron from '../Assets/iron.jpg'
import epowder from '../Assets/epowder.jpg'
import prob from '../Assets/prob.jpg'
import eye from '../Assets/eye.jpg'
import mv from '../Assets/mv.jpg'
import nasal from '../Assets/nasal.jpg'
import vc from '../Assets/vc.jpg'
import ors from '../Assets/ors.jpg'
import ant from '../Assets/ant.jpg'
import loz from '../Assets/loz.jpg'
import vd3 from '../Assets/vd3.jpg'
import ibu from '../Assets/ibu.jpg'

const MedicinePage = () => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  
  const otcMedicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      description: 'For fever and pain relief. Take 1-2 tablets every 4-6 hours as needed.',
      price: 25,
      image: paracetmol
    },
    {
      id: 2,
      name: 'Ibuprofen 400mg',
      description: 'Anti-inflammatory for pain relief. Take 1 tablet every 6-8 hours with food.',
      price: 40,
      image: ibu
    },
    {
      id: 3,
      name: 'Cetirizine 10mg',
      description: 'Antihistamine for allergies. Take 1 tablet daily.',
      price: 30,
      image: cetri
    },
    {
      id: 4,
      name: 'Omeprazole 20mg',
      description: 'For acid reflux and heartburn. Take 1 capsule daily before breakfast.',
      price: 50,
      image: omep
    },
    {
      id: 5,
      name: 'Dolo 650',
      description: 'Paracetamol for fever and pain. Take 1 tablet every 4-6 hours.',
      price: 20,
      image: dolo
    },
    {
      id: 6,
      name: 'Aspirin 75mg',
      description: 'Blood thinner and pain reliever. Take 1 tablet daily.',
      price: 35,
      image:asprin
    },
    {
      id: 7,
      name: 'Vitamin C 500mg',
      description: 'Immune system support. Take 1 tablet daily.',
      price: 60,
      image: vc
    },
    {
      id: 8,
      name: 'Calcium + Vitamin D3',
      description: 'Bone health supplement. Take 1 tablet daily.',
      price: 80,
      image: vd3
    },
    {
      id: 9,
      name: 'ORS Powder',
      description: 'Oral rehydration solution. Mix 1 sachet in 1 liter water.',
      price: 15,
      image: ors
    },
    {
      id: 10,
      name: 'Antacid Tablets',
      description: 'For acidity and heartburn. Chew 1-2 tablets as needed.',
      price: 25,
      image: ant
    },
    {
      id: 11,
      name: 'Lozenges for Sore Throat',
      description: 'Soothes throat irritation. Take 1 lozenge every 2-3 hours.',
      price: 45,
      image: loz
    },
    {
      id: 12,
      name: 'Cough Syrup',
      description: 'For dry cough. Take 10ml every 8 hours.',
      price: 75,
      image: cofsil
    },
    {
      id: 13,
      name: 'Nasal Spray',
      description: 'For nasal congestion. Use 1-2 sprays in each nostril as needed.',
      price: 90,
      image: nasal
    },
    {
      id: 14,
      name: 'Antifungal Cream',
      description: 'For fungal infections. Apply thin layer to affected area twice daily.',
      price: 55,
      image: antifug
    },
    {
      id: 15,
      name: 'Hydrocortisone Cream',
      description: 'For skin irritation and rashes. Apply thin layer to affected area 1-2 times daily.',
      price: 65,
      image: hydro
    },
    {
      id: 16,
      name: 'Eye Drops',
      description: 'For dry eyes. Use 1-2 drops in each eye as needed.',
      price: 85,
      image: eye
    },
    {
      id: 17,
      name: 'Multivitamin Tablets',
      description: 'Daily vitamin supplement. Take 1 tablet daily with food.',
      price: 120,
      image: mv
    },
    {
      id: 18,
      name: 'Iron Supplements',
      description: 'For iron deficiency. Take 1 tablet daily with vitamin C.',
      price: 95,
      image: iron
    },
    {
      id: 19,
      name: 'Probiotic Capsules',
      description: 'For gut health. Take 1 capsule daily with food.',
      price: 150,
      image: prob
    },
    {
      id: 20,
      name: 'Electrolyte Powder',
      description: 'For dehydration. Mix 1 sachet in 200ml water.',
      price: 30,
      image: epowder
    }
  ];
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authorizeToken');
    
    if (!token) {
      navigate('/login', { 
        state: { 
          from: '/medicine', 
          message: 'Please login to access medicines' 
        } 
      });
      return; // Exit early if not authenticated
    }
  
    // Only load medicines if authenticated
    const loadMedicines = setTimeout(() => {
      setMedicines(otcMedicines);
      setLoading(false);
    }, 1000);
  
    return () => clearTimeout(loadMedicines); // Cleanup timeout
  }, [navigate]); 

  const addToCart = (medicine) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === medicine.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...medicine, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (medicineId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === medicineId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === medicineId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter(item => item.id !== medicineId);
      }
    });
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckout = () => {
    // Navigate to checkout page with cart data as state
    navigate('/checkout', { 
      state: { 
        cartItems: cart,
        total: getTotal()
      } 
    });
  };

  return (
    <div className="medicine-page">
       
    
       <div className="search-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by medicine name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        </div>
      <div className="medicine-container">
        <div className="medicine-list">
          <h2>Available OTC Medicines</h2>
          {loading ? (
            <div className="loading">Loading medicines...</div>
          ) : (
            <div className="medicine-grid">
              {filteredMedicines.map(medicine => (
                <div key={medicine.id} className="medicine-card">
                  <MedicineImage src={medicine.image} alt={medicine.name} />
                  <div className="medicine-details">
                    <h3>{medicine.name}</h3>
                    <p>{medicine.description}</p>
                    <div className="medicine-price">
                      <FaRupeeSign /> {medicine.price}
                    </div>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(medicine)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-container">
          <div className="cart-header">
            <FaShoppingCart className="cart-icon" />
            <h2>Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>
          </div>
          {cart.length === 0 ? (
            <div className="empty-cart">Your cart is empty</div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <div className="item-price"><FaRupeeSign /> {item.price}</div>
                    </div>
                    <div className="item-quantity">
                      <button onClick={() => removeFromCart(item.id)}>
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>
                        <FaPlus />
                      </button>
                    </div>
                    <div className="item-total">
                      <FaRupeeSign /> {item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total: <FaRupeeSign /> {getTotal()}</h3>
              </div>
              <button 
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      </div>
      <div className="bottom-navigation">
      <Link to="/" className="return-home-button">
        ← Return Home
      </Link>
    </div>
    </div>
  );
};

export default MedicinePage;