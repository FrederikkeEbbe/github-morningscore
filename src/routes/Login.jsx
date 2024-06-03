import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/card.scss"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Navbar/>
      <div className='card-container'>
      <div className="card">
      <h2>Login</h2>
      <p>Har du ikke en bruger? <Link to="/register">Registrer dig her</Link></p>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Kodeord" />
      <Link to="/dashboard"><button>Login</button></Link>
    </div>
    </div>
    </>
  )
}

export default Login