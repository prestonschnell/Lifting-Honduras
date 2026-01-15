import React from 'react'
import './Page.css'
import AboutHero from '../Components/AboutHero.jsx'

const FaqPage = () => {
  return (
    <main>
      <AboutHero title="FAQ" />
      <header className="page">
        <h1>FAQ</h1>
        <p>
          Add frequently asked questions about donations, volunteering, and mission updates
          here.
        </p>
      </header>
    </main>
  )
}

export default FaqPage
