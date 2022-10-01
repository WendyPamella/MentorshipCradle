import React from 'react';
// import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      
      <p>WE OFFER PROFESSIONAL</p>
      <h1>MENTORSHIP</h1>
      <div className='hero-btns'>
      
        
        <Link className='link bb' to="/mentor-signup">BE OUR MENTOR</Link>
        {/* <Button
          
        >
        <Link className='linkb' to="/mentee-signup">BE A MENTEE</Link>
        </Button> */}
        <Link className='linkb bb cc' to="/mentee-signup">BE A MENTEE</Link>
      </div>
    </div>
  );
}

export default HeroSection;
