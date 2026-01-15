import React from 'react'
import './Page.css'
import AboutHero from '../Components/AboutHero.jsx'
import logo from '../assets/logo.avif'
import img5572 from '../assets/IMG_5572.jpeg'
import img3734 from '../assets/IMG_3734.jpeg'
import img3717 from '../assets/IMG_3717.jpeg'
import img5639 from '../assets/IMG_5639.jpeg'
import img3764 from '../assets/IMG_3764.jpeg'
import img3761 from '../assets/IMG_3761.jpeg'
import img5461 from '../assets/IMG_5461.jpeg'
import QuoteHistory from '../Components/QuoteHistory.jsx'
import Transparency from '../Components/Transparency.jsx'
import PhotoRow from '../Components/PhotoRow.jsx'
import QuoteOpportunity from '../Components/QuoteOpportunity.jsx'
import HelpSection from '../Components/HelpSection.jsx'
import Impact from '../Components/Impact.jsx'
import About from '../Components/About.jsx'

const AboutPage = () => {
  return (
    <main className="about-page">
      <AboutHero title="About" />
      <header className="page">
        <div className="about-intro">
          <img className="about-intro-logo" src={logo} alt="Lifting Honduras logo" />
          <div className="about-intro-copy">
            <p>
              Our journey began with a heartfelt experience. After visiting Honduras and witnessing
              the pressing needs of underprivileged children, we were deeply moved. It was a moment
              of realization - a call to action. Motivated by the desire to make a positive change,
              we decided to take matters into our own hands. Our mission started with a simple yet
              powerful idea: to provide support and resources for those in need. Inspired by the
              children we met and their eagerness to learn, we began by collecting school supplies.
              This small gesture ignited a spark that would grow into our organization today. We
              are committed to continuing our mission, striving to make a lasting impact on the
              lives of those less fortunate.
            </p>
          </div>
        </div>
        <div className="about-gallery" aria-label="Lifting Honduras moments">
          <img src={img5572} alt="Lifting Honduras moment 1" />
          <img src={img3734} alt="Lifting Honduras moment 2" />
          <img src={img3717} alt="Lifting Honduras moment 3" />
          <img src={img5639} alt="Lifting Honduras moment 4" />
          <img src={img3764} alt="Lifting Honduras moment 5" />
          <img src={img3761} alt="Lifting Honduras moment 6" />
          <img src={img5461} alt="Lifting Honduras moment 7" />
        </div>
        <QuoteHistory />
        <div className="about-transparency">
          <Transparency />
        </div>
        <div className="about-photo-row">
          <PhotoRow />
        </div>
        <div className="about-quote-opportunity">
          <QuoteOpportunity />
        </div>
      </header>
      <HelpSection />
    </main>
  )
}

export default AboutPage
