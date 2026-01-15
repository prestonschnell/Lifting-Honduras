import React from 'react'
import './TeamCards.css'
import andrew from '../assets/andrew.avif'
import patrick from '../assets/patrick.avif'
import bryan from '../assets/bryan.avif'

const TeamCards = () => {
  const cards = [
    { id: 'andrew', name: 'Andrew Castro', title: 'Co-founder', image: andrew },
    { id: 'patrick', name: 'Patrick Musacchia', title: 'Co-founder', image: patrick },
    { id: 'bryan', name: 'Bryan Metoyer', title: 'Co-founder', image: bryan },
  ]

  return (
    <section className="team-cards" aria-label="Team leadership">
      {cards.map((card) => (
        <article className="team-card" key={card.id}>
          <img className="team-card-image" src={card.image} alt={card.name} />
          <div className="team-card-content">
            <h2>{card.name}</h2>
            <p>{card.title}</p>
            <button className="team-card-button" type="button">
              Read more <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default TeamCards
