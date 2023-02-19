import './App.css'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
// import { Routes, Route } from 'react-router-dom';
import BookingPage from './components/booking/BookingPage'
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <BookingPage />
      <Footer />
      {/* <Routes>
        <Route path='/main' element = {<Main /> }></Route>
      </Routes> */}
    </>
  )
}
export default App;
