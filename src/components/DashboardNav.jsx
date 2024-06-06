import React, { useState } from 'react';
import '../styles/main.scss'
import '../../public/logo-horizontal.svg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHeart, faSpaceShuttle, faTag, faLink, faQrcode, faFlag } from '@fortawesome/free-solid-svg-icons';

const DashboardNav = () => {
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
        <a href="#oversigt"><FontAwesomeIcon icon={faGlobe} /> Oversigt</a>
        <a href="#helbred"><FontAwesomeIcon icon={faHeart} /> Helbred</a>
        <a href="#missioner"><FontAwesomeIcon icon={faSpaceShuttle} /> Missioner</a>
        <a href="#søgeord"><FontAwesomeIcon icon={faTag} /> Søgeord</a>
        <a href="#links"><FontAwesomeIcon icon={faLink} /> Links</a>
        <a href="#scan"><FontAwesomeIcon icon={faQrcode} /> Scan</a>
        <a href="#rapporter"><FontAwesomeIcon icon={faFlag} /> Rapporter</a>
      </div>
      <div className="navbar-buttons">
          <Link  to='/'><button className="button-thick-outline">Log ud</button></Link>
        </div>
    </nav>
  );
}

export default DashboardNav;