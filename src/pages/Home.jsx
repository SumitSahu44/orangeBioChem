
import Hero from '../component/Hero'
import Services from '../component/Services'
import Products from '../component/Products'
import Work from '../component/Works'
import TestimonialCarousel from '../component/TestimonialCarousel'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div>
      
      <Hero />
      <Services title={'We Offer a Wide Range of Services'}/>
      <Products/>
      <Work/>
      <TestimonialCarousel/>
      <Footer/>
    </div>
  )
}

export default Home
