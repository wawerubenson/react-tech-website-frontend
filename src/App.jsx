import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Clients from './components/Clients'
import Offers from './components/Offers'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import Cta from './components/Cta'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header />
      <Hero />
      <About />
      <Clients />
      <Offers />
      <Portfolio />
      <Reviews />
      <Cta />
      <Footer />
    </>
  )
}

export default App
