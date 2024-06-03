import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import "../styles/card.scss"
import { Link } from 'react-router-dom';

const Avatar = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (index) => {
    setSelectedBox(index);
  };

  return (
    <>
    <Navbar/>
    <div className='card-container'>
    <div className="card">
    <h2>Vælg din avatar</h2>
    <div className="grid">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className={`box ${selectedBox === index ? 'selected' : ''}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
    <div className="buttons">
    <Link to="/register"> <button>Tilbage</button> </Link>
    <Link to="/intro"> <button>Næste</button> </Link>
    </div>
  </div>
  </div>
  </>
  )
}

export default Avatar