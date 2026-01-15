import React, { useEffect, useState } from 'react'
import './ScrollToTopButton.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'is-visible' : ''}`}
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

export default ScrollToTopButton
