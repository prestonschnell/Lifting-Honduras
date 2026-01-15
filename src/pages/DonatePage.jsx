import React from 'react'
import './Page.css'
import Tomorrow from '../Components/Tomorrow.jsx'
import AboutHero from '../Components/AboutHero.jsx'

const DonatePage = () => {
  return (
    <main>
      <AboutHero title="Donate" />
      <header className="page">
        <h1>Donate</h1>
        <p>
          Your support funds backpacks, supplies, and life-changing opportunities for
          students. Add your donation flow or payment links here.
        </p>
      </header>
      <Tomorrow />
    </main>
  )
}

export default DonatePage
