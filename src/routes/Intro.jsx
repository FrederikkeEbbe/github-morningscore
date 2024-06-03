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
      <h2>Tutorial</h2>
      <p>Her vil der være en tutorial...</p>
      <div className="buttons">
      <Link to="/avatar"> <button>Tilbage</button> </Link>
    <Link to="/dashboard"> <button>Færdig</button> </Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Intro