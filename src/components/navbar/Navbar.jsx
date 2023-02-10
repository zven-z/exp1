import React from 'react'
import './navbar.css';

import logo from '../../assets/logo.png';
import './navbar.css';
// BEM => block element modifier

const Navbar = () => {
  return (
    <div className='club-navbar'>
        <div className='club_navbar-links'>
          <div className='club_navbar-links_logo'>
            <img src={logo} alt="logo"/>
          </div>

        </div>
    </div>
  )
}

export default Navbar

