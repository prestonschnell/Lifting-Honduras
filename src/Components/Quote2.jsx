import React from 'react'
import './Quote.css'
import quoteBg from '../assets/6.jpg'

const Quote2 = () => {
  return (
    <section className="quote-section">
      <div className="quote-background" style={{ backgroundImage: `url(${quoteBg})` }} />
      <div className="quote-overlay" />
      <div className="quote-content">
        <h2>
          At Lifting Honduras, we believe{' '}
          <span className="quote-highlight">education is the key</span> to lasting change.
        </h2>
      </div>
    </section>
  )
}

export default Quote2
