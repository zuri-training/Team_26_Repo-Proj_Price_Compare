import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { About, Categories, ComparePrice, CookiePolicy, EmailPreference, Error, Home, HotDeals, Login, Logout, Privacy, Profile, Rules, Trending } from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='privacy-policy' element={<Privacy/>} />
        <Route path='about-us' element={<About/>} />
        <Route path='cookie-policy' element={<CookiePolicy/>} />
        <Route path='rules-guidelines' element={<Rules/>} />
        <Route path='compare-price' element={ <ComparePrice/>} />
        <Route path='product-categories' element={<Categories/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='trending' element={<Trending/>} />
        <Route path='hot-deals' element={<HotDeals/>} />
        <Route path='login-security' element={<Login/>} />
        <Route path='email-preferences' element={<EmailPreference/>} />
        <Route path='logout' element={<Logout/>} />


        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
