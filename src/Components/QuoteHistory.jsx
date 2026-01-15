import React from 'react'
import './Quote.css'
import quoteBg from '../assets/IMG_0882.jpeg'

const QuoteHistory = () => {
  return (
    <section className="quote-section quote-history">
      <div className="quote-background" style={{ backgroundImage: `url(${quoteBg})` }} />
      <div className="quote-overlay" />
      <div className="quote-content">
        <h2>
          Our history is a testament to the belief that
          <span className="quote-highlight-alt"> every action</span>, no matter how small,
          <span className="quote-highlight-alt"> can lead to a brighter future</span>. Join us on
          our journey to create positive change and uplift communities in need.
        </h2>
      </div>
    </section>
  )
}

export default QuoteHistory
