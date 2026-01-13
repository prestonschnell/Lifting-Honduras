import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from '../src/Components/NavBar.jsx'
import Hero from '../src/Components/Hero.jsx'
import Impact from '../src/Components/Impact.jsx'
import About from '../src/Components/About.jsx'
import Donors from '../src/Components/Donors.jsx'
import Quote from '../src/Components/Quote.jsx'
import Mission from '../src/Components/Mission.jsx'
import Tomorrow from '../src/Components/Tomorrow.jsx'
import Quote2 from '../src/Components/Quote2.jsx'

function App() {
  return (
    <BrowserRouter asename="/Lifting-Honduras/">
      <div>
        <NavBar />
        <Hero />
        <Impact />
        <About />
        <Donors />
        <Quote />
        <Mission />
        <Quote2 />
        <Tomorrow />
      </div>
    </BrowserRouter>
  )
}

export default App
