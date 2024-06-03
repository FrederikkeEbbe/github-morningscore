import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/card.scss"
import { Link } from 'react-router-dom'
Link
const Register = () => {
  return (
    <>
      <Navbar/>
      <div className='card-container'>
      <div className="card">
      <h2>Gratis prøve</h2>
      <p>Har du allerede en bruger? <Link to="/login">Gå til login</Link></p>
      <input type="text" placeholder="Hjemmeside link" />
      <input type="email" placeholder="Email" />
      <Link to="/Avatar"> <button>Start</button> </Link>
      </div>
    </div>
    </>
  )
}

export default Register