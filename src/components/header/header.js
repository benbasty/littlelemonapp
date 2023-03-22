import React from 'react';
import hero from '../../assets/potatoesrestaurant.jpg';
import './header.css'
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <header>
        <section className='hero container'>
            <div className='hero-infos'>
                <h1>Patatos</h1>
                <h5>Bangkok</h5>
                <p>Probably one of the best restaurants in our modern times. Potatoes Restaurant has been a leading brand in the food industry for OVER 25 years.</p>
                <Link to='/patatos/booking' className='btn'>Book your Spot</Link>
            </div>
            <div className='hero-image'>
                <img src={hero} alt='hero-img'/>
            </div>
        </section>
    </header>
    )
}

export default header