import React from 'react'
import logo from '../../assets/logo.svg'
import './nav.css';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
      <nav className='container'>
        <img src={logo} alt='logo'/>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/booking'>Reservations</Link></li>
            <li><Link to='/order-online'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
  )
}

export default nav