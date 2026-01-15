import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import './HelpSection.css'
import logo from '../assets/logo_lifting.png'

const HelpSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      className={`about-section help-section ${isVisible ? 'in-view' : ''}`}
      ref={sectionRef}
    >
      <div className="about-container help-container">
        <div className="about-image-wrapper help-image-wrapper">
          <img className="about-image" src={logo} alt="Lifting Honduras logo" />
        </div>

        <div className="about-content help-content">
          <h1 className="about-title">How You Can Help</h1>
          <div className="about-divider" />
        <p>
          Your support creates real change. Whether you choose to donate or share our mission, you
          help bring school supplies, art materials, and hygiene kits to children in rural Honduran
          communities. Every contribution - big or small - helps a child learn, grow, and dream.
        </p>
          <div className="help-actions">
            <button className="help-button">DONATE NOW</button>
            <span className="help-divider-line" aria-hidden="true" />
            <button className="help-button help-button-secondary">AMAZON WISH LIST</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpSection
