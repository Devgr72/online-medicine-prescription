import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const token = localStorage.getItem('authorizeToken');

  const handleLogout = () => {
    localStorage.removeItem('authorizeToken');
    localStorage.removeItem('userName');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">MediTalk</div>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/aboutus" className="nav-btn">About Us</Link>
        <Link to="/medicine" className="nav-btn">Medicines</Link>
        
        {token ? (
          <div className="user-section">
            <span className="welcome-message">Hello, {userName}</span>
            <button className="nav-btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="nav-btn login-btn">Login</Link>
            <Link to="/signup" className="nav-btn signup-btn">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;