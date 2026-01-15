import React from 'react'
import './Quote.css'
import quoteBg from '../assets/IMG_2099.jpg'

const QuoteOpportunity = () => {
  return (
    <section className="quote-section quote-opportunity">
      <div className="quote-background" style={{ backgroundImage: `url(${quoteBg})` }} />
      <div className="quote-overlay" />
      <div className="quote-content">
        <h2>
          We empower underprivileged children with the
          <span className="quote-highlight-alt"> opportunity</span> to learn, grow, and succeed.
        </h2>
      </div>
    </section>
  )
}

export default QuoteOpportunity
