import React from 'react'
import greeksalad from '../../assets/greeksalad.jpg';
import bruschetta from '../../assets/bruschetta.jpeg';
import lemondessert from '../../assets/lemondessert.jpg'
import {MdDeliveryDining} from 'react-icons/md';
import './menu.css';
import { Link } from 'react-router-dom';

const menu = () => {
  return (
    <section className='specials container menu'>
            <div className='specials-header menu-header'>
              <h2>Our Top Menu</h2>
              <p>Check our top menu, you get to decide what to choose for breakfast, dinner or brunch. Our large range of favorite dishes are the best choices in town. </p>
              {/* <a href='#online-menu' className='btn'>Online Menu</a> */}
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
                  <Link to='/patatos/order-online'><h5>Order a delivery</h5></Link>
                    <MdDeliveryDining />
                  </div>
                </div>
              </div>
              <div className='specials-card'>
                <img src={bruschetta} alt='bruschetta'/>
                <div className='description'>
                  <div className='item'>
                    <h4>Bruschetta</h4>
                    <h4>$ 5.99</h4>
                  </div>
                  <p>
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                  </p>
                  <div className='order'>
                  <Link to='/patatos/order-online'><h5>Order a delivery</h5></Link>
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
                  <Link to='/patatos/order-online'><h5>Order a delivery</h5></Link>
                    <MdDeliveryDining />
                  </div>
                </div>
              </div>
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
                  <Link to='/patatos/order-online'><h5>Order a delivery</h5></Link>
                    <MdDeliveryDining />
                  </div>
                </div>
              </div>
              <div className='specials-card'>
                <img src={bruschetta} alt='bruschetta'/>
                <div className='description'>
                  <div className='item'>
                    <h4>Bruschetta</h4>
                    <h4>$ 5.99</h4>
                  </div>
                  <p>
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                  </p>
                  <div className='order'>
                  <Link to='/patatos/order-online'><h5>Order a delivery</h5></Link>
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
                  <Link to='/patatos/order-online'><h5>Order a delivery</h5></Link>
                    <MdDeliveryDining />
                  </div>
                </div>
              </div>
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
                  <Link to='/patatos/order-online'><h5>Order a delivery</h5></Link>
                    <MdDeliveryDining />
                  </div>
                </div>
              </div>
              <div className='specials-card'>
                <img src={bruschetta} alt='bruschetta'/>
                <div className='description'>
                  <div className='item'>
                    <h4>Bruschetta</h4>
                    <h4>$ 5.99</h4>
                  </div>
                  <p>
                  Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                  </p>
                  <div className='order'>
                  <Link to='/patatos/order-online'><h5>Order a delivery</h5></Link>
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
                  <Link to='/patatos/order-online'><h5>Order a delivery</h5></Link>
                    <MdDeliveryDining />
                  </div>
                </div>
              </div>
            </div>
        </section>
  )
}

export default menu