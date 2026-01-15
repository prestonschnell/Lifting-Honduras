import React from 'react'
import './Page.css'
import AboutHero from '../Components/AboutHero.jsx'
import teamHeroImage from '../assets/logo_lifting.png'
import logo from '../assets/logo.avif'
import TeamCards from '../Components/TeamCards.jsx'
import QuoteGradient from '../Components/QuoteGradient.jsx'

const TeamPage = () => {
  return (
    <main>
      <AboutHero
        title="Team"
        backgroundImage={teamHeroImage}
        slideClassName="carousel-slide--logo carousel-slide--logo-shift"
        showOverlay
        heroClassName="hero--logo"
      />
      <header className="page">
        <div className="about-intro team-intro">
          <img className="about-intro-logo" src={logo} alt="Lifting Honduras logo" />
          <div className="about-intro-copy">
            <p>
              Lifting Honduras is proudly led by its three co-founders, who also serve as the
              organization's volunteer Board of Directors. Together, they guide every decision
              with transparency, compassion, and a shared belief that education can change lives.
            </p>
          </div>
        </div>
        <TeamCards />
        <div className="team-quote">
          <QuoteGradient />
        </div>
      </header>
    </main>
  )
}

export default TeamPage
