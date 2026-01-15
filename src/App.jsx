import React from 'react'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import MissionsPage from './pages/MissionsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import DonatePage from './pages/DonatePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'
import Footer from './Components/Footer.jsx'
import ScrollToTopButton from './Components/ScrollToTopButton.jsx'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  )
}

export default App
