import './App.css'
import Nav from './components/nav/nav'
import LandingPage from './components/landingpage/landingPage';
import Footer from './components/footer/footer'
import About from './components/about/about';
import Menu from './components/menu/menu';
import BookingPage from './components/booking/BookingPage';
import OrderOnline from './components/onlineorder/onlineorder';
import Login from './components/login/loginpage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element = {<LandingPage/> }/>
        <Route path='/about' element = {<About/> }/>
        <Route path='/menu' element = {<Menu/> }/>
        <Route path='/booking' element = {<BookingPage /> } />
        <Route path='/order-online' element = {<OrderOnline/> }/>
        <Route path='/login' element = {<Login/> }/>
      </Routes>
      <Footer />
    </>
  )
}
export default App;
