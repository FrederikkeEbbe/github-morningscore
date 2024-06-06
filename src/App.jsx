import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ToolInclude from "./components/ToolInclude";
import Footer from "./components/Footer";
import heroLoopVideo from "./assets/video/hero-loop.mp4";


function App() {
  return (
    <>
      <Navbar />
      <div className="landing-page">
        <section className="hero-section">
          <div className="hero-content">
            <h5>DIT SEO EVENTYR</h5>
            <h1>Et stjerneklart SEO værktøj</h1>
            <p>
              Start din <em>gratis prøveperiode</em> med det samme, helt uden
              skjulte betalinger, gebyrer eller kreditkort.
            </p>
            <div className="input-group">
              <input type="text" placeholder="Indtast din hjemmeside" />
              <Link to="/register">
                <button>Tjek hjemmeside</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="showreel-section">
          <video controls loop>
            <source src={heroLoopVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
      <ToolInclude />
      <Footer />
    </>
  );
}

export default App;
