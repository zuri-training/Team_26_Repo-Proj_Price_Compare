import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { About, Categories, ComparePrice, CookiePolicy,  Error, HotDeals, Privacy, Rules } from './pages'
import {
  DiscountDeals,
  EmailPreference,
  Home,
  Trending,
  Profile,
  Login,
  Logout,
  SharedLayout
} from './pages/sharedPages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout/>} >
          <Route index element={<Home/>} />
          <Route path='discount-deals' element={<DiscountDeals/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='trending' element={<Trending/>} />
          <Route path='login-security' element={<Login/>} />
          <Route path='logout' element={<Logout/>} />
          <Route path='email-preferences' element={<EmailPreference/>} />
        </Route>
        <Route path='privacy-policy' element={<Privacy/>} />
        <Route path='about-us' element={<About/>} />
        <Route path='cookie-policy' element={<CookiePolicy/>} />
        <Route path='rules-guidelines' element={<Rules/>} />
        <Route path='compare-price' element={ <ComparePrice/>} />
        <Route path='product-categories' element={<Categories/>} />
        
        <Route path='hot-deals' element={<HotDeals/>} />

        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
