import React from 'react'
import './onlineorder.css'
import {GoLocation} from 'react-icons/go';
import {MdFastfood} from 'react-icons/md';
import {BsWallet2} from 'react-icons/bs';
import {GiPartyPopper} from 'react-icons/gi';
const onlineorder = () => {
  return (
    <div className='container onlineorder'>
      <h1>Looking for How to order online?</h1>
      <span className='divider'></span>
      <p>Just follow these easy steps</p>
      <div className='how-order-online'>
        <div className='search'>
          <GoLocation />
          <p>1. Search with your location</p>
        </div>
        <div className='choose'>
          <MdFastfood />
          <p>2. Choose the food you like</p>
        </div>
        <div className='pay'>
          <BsWallet2 />
          <p>3. Pay Online and Wait for your delivery</p>
        </div>
        <div className='eat'>
          <GiPartyPopper />
          <p>4. Eat and have fun</p>
        </div>
      </div>
      <h1>Experience The Best food with Patatos</h1>
      <span className='divider'></span>
      <p>Don't cook or search for foods on the streets. Just order with Little Lemon and we will deliver fresh and tasty food at your home or work place within 30 to 45 min.</p>
    </div>
  )
}

export default onlineorder