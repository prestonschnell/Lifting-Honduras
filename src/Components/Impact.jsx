import React, { useRef, useEffect, useState } from 'react'
import './Impact.css'

const Impact = () => {
  const impactCards = [
    {
      number: '100+',
      description: 'Backpacks Handed Out'
    },
    {
      number: '500+',
      description: 'School Supplies Distributed'
    },
    {
      number: '5+',
      description: 'Communities Served'
    }
  ]

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
    <section id="about" className={`impact-section ${isVisible ? 'in-view' : ''}`} ref={sectionRef}>
      <div className="impact-wrapper">
        <div className="impact-container">
          {impactCards.map((card, index) => (
            <div key={index} className="impact-card">
              <h1 className="impact-number">{card.number}</h1>
              <h3 className="impact-description">{card.description}</h3>
            </div>
          ))}
        </div>
        <p className="impact-subtext">Every number represents a child, a family, and a future.</p>
      </div>
    </section>
  )
}

export default Impact
