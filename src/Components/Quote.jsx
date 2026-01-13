import React from 'react'
import './Quote.css'
import quoteBg from '../assets/5.jpg'

const Quote = () => {
  return (
    <section className="quote-section">
      <div className="quote-background" style={{ backgroundImage: `url(${quoteBg})` }} />
      <div className="quote-overlay" />
      <div className="quote-content">
        <h2>
          Every <span className="quote-highlight">initiative and every donation</span>{' '}
          effort creates a lasting impact that fuels our mission of hope and change.
        </h2>
      </div>
    </section>
  )
}

export default Quote
