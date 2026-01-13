import React, { useRef, useEffect, useState } from 'react'
import './About.css'
import aboutImg from '../assets/6.avif'

const About = () => {
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
    <section className={`about-section ${isVisible ? 'in-view' : ''}`} ref={sectionRef}>
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="Lifting Honduras" className="about-image" />
        </div>

        <div className="about-content">
          <h1 className="about-title">Creating Lasting Change</h1>
          <div className="about-divider" />
          <h3 className="about-subtitle">Who we are</h3>
          <p className="about-text">
            At Lifting Honduras Foundation, a registered 501(c)(3) nonprofit organization
            (EIN 93-3066731), we believe education has the power to transform lives and uplift
            entire communities. Our work is rooted in supporting children in rural and
            under-served areas of Honduras by providing essential school supplies and resources
            that help remove barriers to learning. We focus on meeting basic needs so children
            can show up to school prepared, confident, and ready to succeed. Guided by a deep
            connection to Honduras and a belief in the potential of every child, Lifting Honduras
            is committed to creating meaningful, lasting impact—one mission, one community, and
            one child at a time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
