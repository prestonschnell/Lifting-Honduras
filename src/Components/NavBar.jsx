import React from 'react'
import './NavBar.css'

const NavBar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Missions', href: '#missions' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Donate', href: '#donate' }
  ]

  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="nav-link"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default NavBar
