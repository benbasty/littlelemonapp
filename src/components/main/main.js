import React from 'react';
import './main.css';
import greeksalad from '../../assets/greeksalad.jpg';
import bruchetta from '../../assets/bruchetta.svg';
import lemondessert from '../../assets/lemondessert.jpg'
import {MdDeliveryDining} from 'react-icons/md';

const main = () => {
  return (
    <main className="container">
        <section className='specials'>
            <div className='specials-header'>
              <h2>Specials</h2>
              <a href='#online-menu' className='btn'>Online Menu</a>
            </div>
            <div className='specials-cards'>
              <div className='specials-card'>
                <img src={greeksalad} alt='greek salad'/>
                <div className='description'>
                  <div className='item'>
                    <h4>Greek Salad</h4>
                    <h4>$12.99</h4>
                  </div>
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                  </p>
                  <div className='order'>
                    <h5>Order a delivery</h5>
                    <MdDeliveryDining />
                  </div>
                </div>
              </div>
              <div className='specials-card'>
                <img src={bruchetta} alt='bruchetta'/>
                <div className='description'>
                  <div className='item'>
                    <h4>Bruchetta</h4>
                    <h4>$ 5.99</h4>
                  </div>
                  <p>
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                  </p>
                  <div className='order'>
                    <h5>Order a delivery</h5>
                    <MdDeliveryDining />
                  </div>
                </div>
              </div>
              <div className='specials-card'>
                <img src={lemondessert} alt='lemon dessert'/>
                <div className='description'>
                  <div className='item'>
                    <h4>Lemon Dessert</h4>
                    <h4>$ 5.00</h4>
                  </div>
                  <p>
                    This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                  </p>
                  <div className='order'>
                    <h5>Order a delivery</h5>
                    <MdDeliveryDining />
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className='testimonials'>
            Testimonials
        </section>
        <section className='about'>
            About
        </section>
    </main>
  )
}

export default main