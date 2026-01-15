import React from 'react'
import './PhotoRow.css'
import img1296 from '../assets/IMG_1296.jpeg'
import img5429 from '../assets/IMG_5429.jpeg'
import img5404 from '../assets/IMG_5404.jpeg'
import img5405 from '../assets/IMG_5405.jpeg'

const PhotoRow = () => {
  return (
    <section className="photo-row" aria-label="Lifting Honduras photo row">
      <img src={img1296} alt="Lifting Honduras photo 1" />
      <img src={img5429} alt="Lifting Honduras photo 2" />
      <img src={img5404} alt="Lifting Honduras photo 3" />
      <img src={img5405} alt="Lifting Honduras photo 4" />
    </section>
  )
}

export default PhotoRow
