import React from 'react'
import '../styles/Donors.css'
import img1 from '../assets/donor1.avif'
import img2 from '../assets/donor2.avif'
import img3 from '../assets/donor3.avif'
import img4 from '../assets/donor4.avif'
import img5 from '../assets/donor5.avif'

const Donors = () => {
  const donorImages = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
  ]
  const loopImages = [
    ...donorImages,
    ...donorImages,
    ...donorImages,
    ...donorImages,
    ...donorImages,
    ...donorImages,
    ...donorImages,
    ...donorImages,
    ...donorImages,
    ...donorImages,
  ]

  return (
    <section className="donors-section">
      <div className="donors-carousel-container">
        <div className="donors-strip">
          {loopImages.map((image, index) => (
            <div key={`${image.id}-${index}`} className="carousel-item">
              <img src={image.src} alt={`Donor ${image.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Donors
