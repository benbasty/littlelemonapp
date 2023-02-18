import './App.css'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
      <Routes>
        <Route path='/main' element = {<Main /> }></Route>
      </Routes>
    </>
  )
}
export default App;
