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
    <h3>2 Vælg din avatar</h3>
    <p>Du kan altid ændre den på et senere tidspunkt</p>
    <div className="grid">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className={`box ${selectedBox === index ? 'selected' : ''}`}
          onClick={() => handleClick(index)}
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
  </>
  )
}

export default Avatar