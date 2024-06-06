import React from 'react';
import '../styles/footer.scss';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <section className='footer'>
        <div className="footer-column">
          <img src="logo-horizontal.svg" alt="Logo" className="footer-logo" />
          <div>
            <p>Et simpelt komplet SEO værktøj</p>
            <p>Grundlagt og bygget i Odense</p>
          </div>
          <div>
            <address>
              Lumbyvej 19Be<br />
              Odense C, Danmark
            </address>
            <p>CVR: 39311437</p>
          </div>
          <div className="footer-social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Funktioner</h4>
          <ul>
            <li><a href="#">SEO test af din hjemmeside</a></li>
            <li><a href="#">Rank tracker</a></li>
            <li><a href="#">Søgeords research</a></li>
            <li><a href="#">Backlink tjek</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Sammenlign</h4>
          <ul>
            <li><a href="#">Ahref</a></li>
            <li><a href="#">Semrush</a></li>
            <li><a href="#">Moz</a></li>
            <li><a href="#">Ubersuggest</a></li>
            <li><a href="#">Screaming Frog</a></li>
            <li><a href="#">Tiny Ranker</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Artikler</h4>
          <ul>
            <li><a href="#">Best of 2024</a></li>
            <li><a href="#">Sådan får du søgeord rangeret på Google</a></li>
            <li><a href="#">Hvad er backlinks?</a></li>
            <li><a href="#">SEO tekster</a></li>
            <li><a href="#">SEO for begyndere</a></li>
            <li><a href="#">Se mere</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Virksomhed</h4>
          <ul>
            <li><a href="#">SEO kursus</a></li>
            <li><a href="#">Certificered SEO eksperter</a></li>
            <li><a href="#">SEO fredagsbaren</a></li>
            <li><a href="#">Hjælp og guides</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </div>
      </section>
      <div>

      </div>
    </footer>
  );
}

export default Footer;