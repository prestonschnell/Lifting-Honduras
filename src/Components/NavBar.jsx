import React, { useState } from 'react'
import './NavBar.css'
import logo from '../assets/logo.avif'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Missions', href: '#missions' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Donate', href: '#donate' }
  ]

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="floating-nav">
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={handleToggle}
      >
        <img src={logo} alt="Lifting Honduras" className="nav-logo" />
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
