import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import FeatureCard from '../Components/FeatureCard'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeatureCard/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
