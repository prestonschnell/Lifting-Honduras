import React from 'react'
import './Page.css'
import Mission from '../Components/Mission.jsx'
import AboutHero from '../Components/AboutHero.jsx'

const MissionsPage = () => {
  return (
    <main>
      <AboutHero title="Missions" />
      <header className="page">
        <h1>Missions</h1>
        <p>
          Explore the programs and outreach efforts we run each year to support students and
          communities across Honduras.
        </p>
      </header>
      <Mission />
    </main>
  )
}

export default MissionsPage
