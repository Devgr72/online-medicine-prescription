import React from "react";
import Navbar from "./Navbar";
import video from './Assets/home-video1.mp4'
import './Home.css'
const Homec1 = () => {
  return (
    <div>
        <div className="home-container">
            <div className="info-section">
                <h1 className="info-title">Welcome to MediTalk</h1>
                <p className="info-description">
                Your Health, Your Convenience, One Click Away... 
                </p>
            </div>
            <div className="video-section">
                <video width="100%" height="auto" autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
  );
};

export default Homec1;
