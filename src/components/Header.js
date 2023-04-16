import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className='icn-logo' style={{ color: 'black', verticalAlign: 'center' }}>
      <div style={{ float: 'left' }}>
        <img src='/logo.png' style={{ height: '60px' }} />
      </div>
      <div
        style={{
          float: 'left',
          marginTop: '25px',
          marginLeft: '10px',
          fontWeight: 'bold',
          fontSize:'18px'
        }}
      >
        YOGGIFY Yourself
      </div>
    </div>
    <ul className='main-nav'>
      <li>
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? { background: 'red' } : undefined)}
        >
          Home
        </NavLink>
      </li>
     
      <li className='tooltip-container'>
        <a href='#'>Services</a>
        <div className='tooltip'>
          <NavLink className='tooltip-option' to='/services/Programs'>
            Program
          </NavLink>
          <NavLink className='tooltip-option' to='/services/classes'>
            Classes
          </NavLink>
          <NavLink className='tooltip-option' to='/services/aasan'>
            Aassan
          </NavLink>
          <NavLink className='tooltip-option' to='/services/challenges'>
            Challenges
          </NavLink>
        </div>
      </li>

      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact Us</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
