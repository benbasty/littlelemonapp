import React from 'react'
import restaurant from '../../assets/restaurant.jpg'
import './about.css'

const about = () => {
  return (
    <div className='container aboutpage'>
      <h1>About us</h1>
      <div className='about-content'>
        <div className='about-description'>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='about-picture'>
          <img src={restaurant} alt='restaurant'/>
        </div>
      </div>
    </div>
  )
}

export default about