import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Services from './component/Services'
import Products from './component/Products'
import Work from './component/Works'
import TestimonialCarousel from './component/TestimonialCarousel'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services/>
      <Products/>
      <Work/>
      <TestimonialCarousel/>
    </div>
  )
}

export default App
