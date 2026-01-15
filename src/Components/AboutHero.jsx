import React from 'react'
import './Hero.css'
import bagsImage from '../assets/bags.jpeg'

const AboutHero = ({
  title = 'About',
  backgroundImage = bagsImage,
  slideClassName = 'carousel-slide--raise',
  showOverlay = true,
  heroClassName = '',
}) => {
  return (
    <section className={`hero hero--half ${heroClassName}`.trim()} aria-labelledby="page-hero-title">
      <div className="hero-carousel">
        <div
          className={`carousel-slide ${slideClassName} active`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {showOverlay && <div className="carousel-overlay" />}
      </div>

      <h1 id="page-hero-title" className="hero-page-title">
        {title}
      </h1>
    </section>
  )
}

export default AboutHero
