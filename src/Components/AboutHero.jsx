import React from 'react'
import './Hero.css'
import bagsImage from '../assets/bags.jpeg'

const AboutHero = ({ title = 'About' }) => {
  return (
    <section className="hero hero--half" aria-labelledby="page-hero-title">
      <div className="hero-carousel">
        <div
          className="carousel-slide carousel-slide--raise active"
          style={{ backgroundImage: `url(${bagsImage})` }}
        />
        <div className="carousel-overlay" />
      </div>

      <h1 id="page-hero-title" className="hero-page-title">
        {title}
      </h1>
    </section>
  )
}

export default AboutHero
