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
          <p className='relink'>Har du ikke en konto? <Link to="/register">Tilmeld dig her</Link></p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Kodeord" />
          <div className='checkbox'>
            <input type="checkbox"/>
            <p className='relink'> Husk mig</p>
          </div>
          <Link to="/dashboard"><button className='login'>Login</button></Link>
          <p className='relink--copy'>©2024 All Rights Reserved. Morningscore ApS. Privacy policy</p>
        </div>
      </div>
    </>
  )
}

export default Login