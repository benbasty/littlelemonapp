import React from 'react'
import logo from '../../assets/potatoeslogo.png'
import './nav.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';

const Nav = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_navbar");
  }


  return (
    <>
      <nav className='container'>
        <img src={logo} alt='logo'/>
          <ul ref={navRef}>
              <li><Link to='/littlelemon'>Home</Link></li>
              <li><Link to='/littlelemon/about'>About</Link></li>
              <li><Link to='/littlelemon/menu'>Menu</Link></li>
              <li><Link to='/littlelemon/booking'>Reservations</Link></li>
              <li><Link to='/littlelemon/order-online'>Order Online</Link></li>
              <li><Link to='/littlelemon/login'>Login</Link></li>
              <button className='nav-btn nav-close' onClick={showNavbar}>
                <FaTimes />
              </button>
          </ul>
        <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
        </button>
      </nav>
    </>
  )
}

export default Nav