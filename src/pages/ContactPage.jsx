import React from 'react'
import './Page.css'
import AboutHero from '../Components/AboutHero.jsx'

const ContactPage = () => {
  return (
    <main>
      <AboutHero title="Contact" />
      <header className="page">
        <h1>Contact</h1>
        <p>
          Reach out with questions, partnership ideas, or volunteer interest. Add a contact
          form and organization details here.
        </p>
      </header>
    </main>
  )
}

export default ContactPage
