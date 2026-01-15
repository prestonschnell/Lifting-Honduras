import React from 'react'
import './Quote.css'

const QuoteGradient = () => {
  return (
    <section className="quote-section quote-gradient">
      <div className="quote-background quote-background-gradient" />
      <div className="quote-overlay" />
      <div className="quote-content quote-content-split">
        <h1>Our Leadership &amp; Governance</h1>
        <p>
          Our team provides strategic oversight of the foundation&apos;s mission and partnerships,
          ensuring every donation is responsibly managed and directly invested in children&apos;s
          education and well-being in rural Honduras.
        </p>
      </div>
    </section>
  )
}

export default QuoteGradient
