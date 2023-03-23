import React from 'react'
import restaurant from '../../assets/restaurant.jpg'
import './about.css'

const about = () => {
  return (
    <div className='container aboutpage'>
      <h1>About us</h1>
      <div className='about-content'>
        <div className='about-description'>
          <h5>
            Since our modest beginnings in 2000 with a little space in Bangkok’s stylish city center locale, Patatos development has been enlivened with the energy to cook and serve solid, western style and local takeout food.
            In contrast to other restaurants, Patatos was made with the explicit expectation to appear as something else.
            We realize numerous individuals love our unique style of food, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill  our food and dishes taste so great.
            Our menu highlights things that utilize the sound and fragrant flavors. Patatos has developed to incorporate four superb takeout areas in Bangkok, so you can order online and we are sure your food will be delivered within 45min (with additional to come sooner rather than later). Our group takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting local and western style food.
          </h5>
        </div>
        <div className='about-picture'>
          <img src={restaurant} alt='restaurant'/>
        </div>
      </div>
    </div>
  )
}

export default about