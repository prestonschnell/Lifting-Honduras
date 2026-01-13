import React from 'react'
import './App.css'
import NavBar from '../src/Components/NavBar.jsx'
import Hero from '../src/Components/Hero.jsx'
import Impact from '../src/Components/Impact.jsx'
import About from '../src/Components/About.jsx'
import Donors from '../src/Components/Donors.jsx'
import Quote from '../src/Components/Quote.jsx'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <Impact />
        <About />
        <Donors />
        <Quote />
        </div>
    </>
  )
}

export default App
