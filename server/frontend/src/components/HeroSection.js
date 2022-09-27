import React from 'react';
import '../App.css';
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
      
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
            <Link className='link' to="/mentor-signup">BE OUR MENTOR</Link>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          <Link className='linkb' to="/mentee-signup">BE A MENTEE</Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
