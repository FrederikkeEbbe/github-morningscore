import React from 'react';
import Footer from '../components/Footer';
import DashboardNav from '../components/DashboardNav';
import avatarLimegreen from '../assets/img/avatar_limegreen.jpg';
import yourMorningscore from '../assets/dashboards/your-morningscore.jpg';
import changes from '../assets/dashboards/changes.jpg';
import health from '../assets/dashboards/health.jpg';
import links from '../assets/dashboards/links.jpg';
import missions from '../assets/dashboards/missions.jpg';
import levels from '../assets/dashboards/levels.jpg';
import '../styles/dashboard.scss';

// OBS: da det ikke var muligt/tilladt at hente data fra morningscore, 
// har vi her indsat billeder der henviser til det relle produkt, 
// med et nyt design, fra prototypen

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <section className='dashboard-section'>
        <div className='dashboard-hero-container'>
          <div className='dashboard-hero'>
            <div className='dashboard-hero__profile'>
              <img src={avatarLimegreen} alt="Avatar" />
            </div>
            <div className='dashboard-hero__info'>
              <div className='dashboard-hero__info--header'>
                <h1>Velkommen tilbage kaptajn</h1>
                <p>Hvad med at tage et kig på dine nye missioner?</p>
              </div>
              <div className='dashboard-hero__info--buttons'>
                <button>Guided tour</button>
                <button id='deactivated'>Tilføj nyt website</button>
              </div>
            </div>
          </div> 
          <div className='progress-circle'>
            <div className='progress-text'>
              <div>Level 3</div>
              <h2>546 XP</h2>
              <div>54 XP til næste level</div>
            </div>
          </div>
        </div>
      </section>
      <section className='dashboard'>
        <img src={yourMorningscore} alt="Your Morningscore" />
        <div className='dashboard--row--mid'>
          <img src={changes} alt="Changes" />
          <img src={health} alt="Health" />
          <img src={links} alt="Links" />
        </div>
        <div className='dashboard--row--end'>
          <img id='one' src={missions} alt="Missions" />
          <img id='two' src={levels} alt="Levels" />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Dashboard;