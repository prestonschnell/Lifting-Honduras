import React, { useState, useEffect } from 'react'
import './Hero.css'
import img2 from '../assets/2.avif'
import img3 from '../assets/3.avif'
import img4 from '../assets/4.avif'
import img6 from '../assets/6.avif'

const Hero = () => {
  const images = [img2, img3, img4, img6]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleReadMore = () => {
    const nextSection = document.getElementById('about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="carousel-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">A Little Lift Can Change a Life</h1>
        <p className="hero-subtitle">
          Your support powers life-changing missions, communities and hope.
        </p>
        <button className="read-more-btn" onClick={handleReadMore}>
          Read More
        </button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
