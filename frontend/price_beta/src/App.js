import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { About, Categories, ComparePrice, CookiePolicy, Error, Home, Privacy, Rules } from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='privacy-policy' element={<Privacy/>} />
        <Route path='about-us' element={<About/>} />
        <Route path='/cookie-policy' element={<CookiePolicy/>} />
        <Route path='rules-guidelines' element={<Rules/>} />
        <Route path='compare-price' element={ <ComparePrice/>} />
        <Route path='/product-categories' element={<Categories/>} />

        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
