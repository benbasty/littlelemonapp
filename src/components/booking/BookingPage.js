import React from 'react'
import BookingForm from './BookingForm'
import './bookingpage.css';

const BookingPage = () => {
  // const getAvailableTimes = (time) => {
  //   console.log(time)
  // }
  return (
    <div className='booking-page'>
      {/* <BookingForm onSubmit = {getAvailableTimes}/> */}
      <BookingForm />
    </div>
  )
}

export default BookingPage