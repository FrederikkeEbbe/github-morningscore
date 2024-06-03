import React, { useState } from 'react';
import '../styles/main.scss'
import '../../public/logo-horizontal.svg'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'>
        <img src="logo-horizontal.svg" alt="Logo" />
        </Link>
      </div>
      <button className="navbar-menu" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#funktioner">Funktioner</a>
        <a href="#priser">Priser</a>
        <a href="#omos">Om os</a>
        <a href="#preview">Preview</a>
      </div>
      <div className="navbar-buttons">
          <Link  to='/Login'><button className="button-thick-outline">Login</button></Link>
          <Link to='/Register'><button className="button-thick-primary">Gratis prøve</button></Link>
        </div>
    </nav>
  );
}

export default Navbar;