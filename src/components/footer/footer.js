import React from 'react';
import logo from '../../assets/logo.svg';
import './footer.css';

const footer = () => {
  return (
    <footer>
        <section class='footer-container container'>
            <div className='footer-image'>
                <img src={logo} alt="logo"/>
            </div>
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
                        <li><a href='#address'>Address</a></li>
                        <li><a href='#phone-number'>Phone Number</a></li>
                        <li><a href='#email'>Email</a></li>
                    </ul>

                </div>
                <div className='social-media-links'>
                    <h5>Social Media Links</h5>
                    {/* <br /> */}
                    <ul>
                        <li><a href='#address'>Address</a></li>
                        <li><a href='#phone-number'>Phone Number</a></li>
                        <li><a href='#email'>Email</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default footer