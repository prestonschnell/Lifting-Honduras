import React from 'react'
import './Footer.css'
import logo from '../assets/logo_lifting.png'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo-wrap">
          <img className="footer-logo" src={logo} alt="Lifting Honduras logo" />
        </div>
        <div className="footer-links">
          <button className="footer-link" type="button">
            Privacy Policy
          </button>
          <button className="footer-link" type="button">
            Terms of Use
          </button>
          <button className="footer-link" type="button">
            Contact
          </button>
        </div>
        <div className="footer-actions">
          <button className="footer-social" type="button">
            Facebook
          </button>
          <button className="footer-social" type="button">
            Instagram
          </button>
          <button className="footer-donate" type="button">
            Donate Now
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
