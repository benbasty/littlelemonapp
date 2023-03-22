import React from 'react';
import logo from '../../assets/potatoeslogo.png';
import './footer.css';
import {BsFacebook, BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
        <section className='menu-footer container'>
            <div className='navigation'>
                <div className='image-footer'>
                    <img src={logo} alt="logo"/>
                </div>
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
                <ul>
                    <li><span>Address</span>: 123 Patatos Street, BK, Thai</li>
                    <li><span>Phone</span>: +(000) 1234567809</li>
                    <li><span>Email</span>: papatos@patatosfood.com</li>
                </ul>

            </div>
            <div className='operating-hours'>
                <h5>Operating Hours</h5>
                <ul>
                    <li><span>Weekdays</span>: 08:00- 24:00</li>
                    <li><span>Weekend</span>: 08:00 - 2:00</li>
                </ul>
            </div>
            <div className='more'>
                <h5>More</h5>
                <ul>
                    <li><a href='#privacy-policy'>Privacy Policy</a></li>
                    <li><a href='#terms-conditions'>Terms and Conditions</a></li>
                    <li><a href='#cookie-policy'>Cookie Policy</a></li>
                </ul>
            </div>
            <div className='social-media'>
                <h5>Follow Us</h5>
                <ul>
                    <li><a href='#facebook'><BsFacebook/></a></li>
                    <li><a href='#linkedin'><BsLinkedin/></a></li>
                    <li><a href='#twitter'><BsTwitter/></a></li>
                    <li><a href='#instagram'><BsInstagram/></a></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default footer