import React from 'react'
import logo from '../../assets/logo.svg'
import './nav.css';

const nav = () => {
  return (
      <nav class="container">
        <img src={logo} alt='logo'/>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='#reservations'>Reservations</a></li>
            <li><a href='#order-online'>Order Online</a></li>
            <li><a href='#login'>Login</a></li>
        </ul>
      </nav>
  )
}

export default nav