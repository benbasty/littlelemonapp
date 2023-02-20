import React from 'react';
import './main.css';
import greeksalad from '../../assets/greeksalad.jpg';
import bruchetta from '../../assets/bruchetta.svg';
import lemondessert from '../../assets/lemondessert.jpg'
import {MdDeliveryDining} from 'react-icons/md';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';
import {RiStarSFill} from 'react-icons/ri';
import food1 from '../../assets/restaurantfood1.jpeg';
import food2 from '../../assets/restaurantfood2.jpeg'
const main = () => {
  return (
    <main className="">
        <section className='specials container'>
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
          <div className='testimonials-container container'>
          <h1>Testimonials</h1>
            <div className='ratings'>
              <div className='rating'>
                <h5 className='stars'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></h5>
                <div className='avatar'>
                  <img src = {avatar1} alt="avatar"/>
                  <h5>Anna</h5>
                </div>
                <p>I recommend you to use LittleLemon. I go there all the time.</p>
              </div>
              <div className='rating'>
              <h5 className='stars'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></h5>
                <div className='avatar'>
                  <img src = {avatar2} alt="avatar"/>
                  <h5>John</h5>
                </div>
                <p>Amazing customer service. I needed help and they helped me fix it.</p>
              </div>
              <div className='rating'>
              <h5 className='stars'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></h5>
                <div className='avatar'>
                  <img src = {avatar3} alt="avatar"/>
                  <h5>Elias</h5>
                </div>
                <p>Love the food. incredible quality and delicious food everytime i go there.</p>
              </div>
              <div className='rating'>
              <h5 className='stars'><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></h5>
                <div className='avatar'>
                  <img src = {avatar4} alt="avatar"/>
                  <h5>Fatima</h5>
                </div>
                <p>Great prices and afordable and fast delivery. I recommend.</p>
              </div>
            </div>
          </div>

        </section>
        <section className='about'>
          <div className='about-container container'>
            <div className='about-description'>
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='about-images'>
                <img src={food1} alt='about-img'/>
                <img src={food2} alt='about-img'/>
            </div>
          </div>
        </section>
    </main>
  )
}

export default main