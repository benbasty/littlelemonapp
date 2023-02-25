import React, {useState } from 'react'
import './bookingForm.css'
// const BookingForm = (props) => {
const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableTimes] = useState(
    [
      "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ]
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
    // props.onSubmit(time);
    console.log("submitted")
  }

  return (
    <div className='booking-form container'>
        <form onSubmit={handleSubmit}>
          <div className='get-in-touch'>
            <h4>Reserve Your Table Now</h4>
          </div>
          <div className='date'>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name='res-date'
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
          </div>

          <div className='time'>
            <label htmlFor="res-time">Choose time</label>
              <select id="res-time" name='res-time' value={time} onChange={e => setTime(e.target.value)} required>
                {availableTimes.map((time) => {
                  return(
                    <option>{time}</option>
                  )
                })}
              </select>
          </div>

          <div className='guests'>
            <label htmlFor="guests">Number of guests</label>
            <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name='guests'
            value={guests}
            onChange={e => setGuests(e.target.value)}
            required/>
          </div>
          <div className='occasion'>
          <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name='occasion' value={occasion} onChange={e => setOccasion(e.target.value)} required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
          </div>
          <input type="submit" value="Make Your reservation" className='btn btn-submit' disabled={!date && !time && !guests && !occasion} aria-label="On Click"/>
        </form>
    </div>
  )
}
export default BookingForm;