import React from 'react'
import "../styles/card.scss"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Intro = () => {
  return (
    <>
    <Navbar/>
    <div className='card-container'>
    <div className="card">
      <h3>3 Velkommen ombord kaptajn</h3>
      <p>Her kan du se en kort introdukiton til dit nye værktøj.</p>
        <video controls>
          <source src="/src/assets/video/intro-video.mp4" type="video/mp4" />
        </video>

        <div className='progress'>
        <Link to="/avatar"> <button className='left'>&#10140;</button> </Link>
        <div className='progress__mini'>
          <div className='progress__mini--empty'></div>
          <div className='progress__mini--empty'></div>
          <div className='progress__mini--full'></div>
        </div>
        <Link to="/dashboard"> <button>&#10140;</button> </Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Intro