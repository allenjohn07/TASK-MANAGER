import React from 'react';
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      <div className='home-heading'>
        <h1>Welcome to Task Manager</h1>
        <p>Organize your work and life efficiently with our task management solution.</p>
      </div>
      <div className='home-content'>
        <h3 className='text-center my-2'>Key Features</h3>
        <ul className='home-offer-list my-4'>
          <li>Intuitive task organization</li>
          <li>Collaborative workspace</li>
          <li>Priority setting</li>
          <li>Deadline tracking</li>
          <li>Customizable project boards</li>
        </ul>
      <p>Sign in now to get started!</p>
      </div>
      
    </div>
  );
}

export default Home;
