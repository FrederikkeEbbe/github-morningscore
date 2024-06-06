import React from 'react'
import Footer from '../components/Footer'
import DashboardNav from '../components/DashboardNav'
import '../styles/dashboard.scss'

// OBS: da det ikke var muligt/tilladt at hente data fra morningscore, 
//har vi her indsat billeder der henviser til det relle produkt, 
//med et nyt desing, fra prototypen

const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <section className='dashboard-section'>
      <div className='dashboard-hero-container'>
        <div className='dashboard-hero'>
          <div className='dashboard-hero__profile'>
            <img src="/src/assets/img/avatar_limegreen.jpg" alt="" />
          </div>
          <div className='dashboard-hero__info'>
            
            <div className='dashboard-hero__info--header'>
              <h1>Velkommen tilbage kaptajn</h1>
            </div>

            <div className='dashboard-hero__info--buttons'>
              <button>Guided tour</button>
              <button id='deactivated'>Tilføj nyt website</button>
            </div>

          </div>

        </div> 

        <div></div>
      </div>

      </section>
      <section className='dashboard'>
        <img src="/src/assets/dashboards/your-morningscore.jpg" alt="" />

        <div className='dashboard--row--mid'>
          <img src="/src/assets/dashboards/changes.jpg" alt="" />
          <img src="/src/assets/dashboards/health.jpg" alt="" />
          <img src="/src/assets/dashboards/links.jpg" alt="" />
        </div>
        <div className='dashboard--row--end'>
          <img id='one' src="/src/assets/dashboards/missions.jpg" alt="" />
          <img id='two' src="/src/assets/dashboards/levels.jpg" alt="" />
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Dashboard