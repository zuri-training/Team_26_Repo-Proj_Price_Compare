import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { About, Categories, Error, Home } from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
