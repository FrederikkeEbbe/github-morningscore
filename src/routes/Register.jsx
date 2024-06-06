import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/card.scss"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Register = () => {
  return (
    <>
      <Navbar/>
      <div className='card-container'>
      <div className="card">
      <h2>Opret bruger</h2>
      <p className='relink'>Har du allerede en konto? <Link to="/login">Login</Link></p>
      <h3>1 Det praktiske</h3>
      <p>Bare rolig, vi behøver ikke flere oplysninger for at kunne sende dig afsted</p>
      <form>
      <input type="email" placeholder="Mailadresse" />
      <input type="text" placeholder="Indtast hjemmeside" />
      <div className='progress'>
        <Link to="/"> <button className='left'>&#10140;</button> </Link>
        <div className='progress__mini'>
          <div className='progress__mini--full'></div>
          <div className='progress__mini--empty'></div>
          <div className='progress__mini--empty'></div>
        </div>
        <Link to="/Avatar"> <button>&#10140;</button> </Link>
      </div>
      </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register