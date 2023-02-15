import React from 'react';
import logo from '../assets/logo.svg'

const footer = () => {
  return (
    <footer>
        <img src={logo} alt="logo"/>
        <div className='menu-footer'>
            <div className='navigation'>
                <h5>Doormat <br/> Navigation</h5>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#menu'>Menu</a></li>
                    <li><a href='#reservations'>Reservations</a></li>
                    <li><a href='#order-online'>Order Online</a></li>
                    <li><a href='#login'>Login</a></li>
                </ul>
            </div>
            <div className='contact'>
                <h5>Contact</h5>
                {/* <br /> */}
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>

            </div>
            <div className='social-media-links'>
                <h5>Social Media Links</h5>
                {/* <br /> */}
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default footer