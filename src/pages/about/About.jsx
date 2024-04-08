import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-section">
        <h2 className="about-section-title">Task Manager</h2>
        <p className="about-section-description">
          We simplify task management, enhance collaboration, and drive success for individuals and teams.
        </p>
      </div>
      <div className="about-section">
        <h2 className="about-section-title">Why Choose Us</h2>
        <ul className="about-offer-list">
          <li>Reliability</li>
          <li>Innovation</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="about-section">
        <h2 className="about-section-title">Join Us Today</h2>
        <p className="about-section-description">
          Join thousands who trust Task Manager to organize work, simplify lives, and achieve goals. Get started today!
        </p>
      </div>
    </div>
  );
}

export default About;
