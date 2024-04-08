import React from 'react';
import './Landing.css';

function Landing() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling behavior
    });
  };

  return (
    <div className="landing-container">
      <h2 className="landing-title">ORGANIZE YOUR WORK AND LIFE WITH OUR</h2>
      <h1 className="landing-subtitle">TASK MANAGER</h1>
      <p className="landing-text">Sign in to continue</p>
    </div>
  );
}

export default Landing;
