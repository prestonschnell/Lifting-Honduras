import React from 'react'
import './Mission.css'
import imageOne from '../assets/7.webp'
import imageTwo from '../assets/8.webp'
import imageThree from '../assets/9.jpg'

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-content">
          <h1>Creating Lasting Impact</h1>
          <div className="mission-divider" />
          <h3>What we do</h3>
          <p>
            Each year, Lifting Honduras delivers school supplies, art materials, and hygiene
            kits to children in rural communities across Honduras, helping remove barriers to
            learning and giving children the tools to grow with confidence.
          </p>
        </div>
        <div className="mission-images">
          <img
            src={imageOne}
            alt="Students with school supplies"
            className="mission-image mission-image-main"
          />
          <img
            src={imageTwo}
            alt="Community classroom"
            className="mission-image mission-image-secondary"
          />
          <img
            src={imageThree}
            alt="Art materials for students"
            className="mission-image mission-image-tertiary"
          />
        </div>
      </div>
    </section>
  )
}

export default Mission
