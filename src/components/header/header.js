import React from 'react';
import hero from '../../assets/restauranfood.jpg';
import './header.css'

const header = () => {
  return (
    <header>
        <section className='hero container'>
            <div className='hero-infos'>
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href='#reserve' className='btn'>Reserve a Table</a>
            </div>
            <div className='hero-image'>
                <img src={hero} alt='hero-img'/>
            </div>
        </section>
    </header>
    )
}

export default header