import { useState } from 'react'
import './App.css'
import Hero from './component/Hero'
import Programs from './component/programs'
import About from './component/About'
import Trainers from './component/Trainer'
import Stats from './component/fittness'
import Contact from './component/contact'
import Footer from './component/footer'
import Pricing from './component/Pricing'

function App() {

  return (
    <>
    <Hero/>
    <Programs/>
    <About/>
    <Trainers/>
    <Pricing/>
    <Stats/>
    <Contact/>
    
    </>
  )
}

export default App
