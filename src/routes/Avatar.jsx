import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import "../styles/card.scss"
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

import avatarOriginal from '../assets/img/avatar_original.jpg';
import avatarAqua from '../assets/img/avatar_aqua.jpg';
import avatarOrange from '../assets/img/avatar_orange.jpg';
import avatarLimegreen from '../assets/img/avatar_limegreen.jpg';
import avatarPink from '../assets/img/avatar_pink.jpg';
import avatarRed from '../assets/img/avatar_red.jpg';
import avatarLightpurple from '../assets/img/avatar_lightpurple.jpg';
import avatarYellow from '../assets/img/avatar_yellow.jpg';
import avatarPurple from '../assets/img/avatar_purple.jpg';

const Avatar = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (index) => {
    setSelectedBox(index);
  };

const images = [
  avatarOriginal,
  avatarAqua,
  avatarOrange,
  avatarLimegreen,
  avatarPink,
  avatarRed,
  avatarLightpurple,
  avatarYellow,
  avatarPurple
]
  return (
    <>
    <Navbar/>
    <div className='card-container'>
    <div className="card">
    <h3>2 Vælg din avatar</h3>
    <p>Du kan altid ændre den på et senere tidspunkt</p>
    <div className="grid">
    {images.map((image, index) => (
              <div
                key={index}
                className={`box ${selectedBox === index ? 'selected' : ''}`}
                onClick={() => handleClick(index)}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
        />
      ))}
    </div>
    <div className='progress'>
        <Link to="/register"> <button className='left'>&#10140;</button> </Link>
        <div className='progress__mini'>
          <div className='progress__mini--empty'></div>
          <div className='progress__mini--full'></div>
          <div className='progress__mini--empty'></div>
        </div>
        <Link to="/intro"> <button>&#10140;</button> </Link>
      </div>
  </div>
  </div>
  <Footer/>
  </>
  )
}

export default Avatar