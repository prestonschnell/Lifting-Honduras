import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import logo from '../assets/logo.avif'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: 'Home', to: '/', end: true },
    { label: 'About', to: '/about' },
    { label: 'Team', to: '/team' },
    { label: 'Missions', to: '/missions' },
    { label: 'Contact', to: '/contact' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Donate', to: '/donate' }
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
          <NavLink
            key={item.label}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            onClick={handleNavClick}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
