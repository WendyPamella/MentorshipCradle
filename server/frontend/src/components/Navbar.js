import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MC
            <i className='fab fa-typo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/course-work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Course Work
              </Link>
              <Link
                to='/mentor-spotlight'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mentor Spotlight
              </Link>
              <Link
                to='/mentee-stories'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mentee Stories
              </Link>
              </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
