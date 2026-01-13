import React from 'react'
import './Tomorrow.css'
import videoOne from '../assets/video1.mov'

const Tomorrow = () => {
  return (
    <section className="tomorrow-section">
      <div className="tomorrow-content">
        <h1>Creating a Better Tomorrow</h1>
        <div className="tomorrow-divider" />
        <h3>Why we do it</h3>
        <video
          className="tomorrow-video"
          src={videoOne}
          controls
          muted
          autoPlay
          playsInline
        />
        <p>
          Our vision is a future where every child has the tools they need to succeed in
          school and beyond. We believe that when children are supported with essential
          resources, they gain the confidence to learn, grow, and imagine what it's possible
          for their future. Through education, creativity, and access to basic school
          supplies, we aim to create environments where children can thrive - building
          brighter futures for themselves, their families, and their communities.
        </p>
        <button className="tomorrow-button">DONATE NOW</button>
      </div>
    </section>
  )
}

export default Tomorrow
