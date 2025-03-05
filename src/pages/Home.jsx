import React from 'react'
import Hero from '../component/Hero'
import Services from '../component/Services'
import Products from '../component/Products'
import Work from '../component/Works'
import TestimonialCarousel from '../component/TestimonialCarousel'
const Home = () => {
  return (
    <div>
      
      <Hero />
      <Services/>
      <Products/>
      <Work/>
      <TestimonialCarousel/>
    </div>
  )
}

export default Home
