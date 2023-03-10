import React from 'react';
import Landing from './components/Landing';
import Products from './pages/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar2';
import StickyFooter from '../src/components/StickyFooter'
  
import Home from './pages/Home/Home'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Dashboard' element={<Register />} />
        </Routes>
        <StickyFooter />
      </BrowserRouter>

    </>
  );
}

export default App;
