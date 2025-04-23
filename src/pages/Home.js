// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Home.css';
import HomeContent from '../components/HomeContent';

const previewContent = {
  developer: "I craft full-stack applications with precision.",
  artist: "My imagination lives on the canvas.",
  individual: "Let me show you what inspires me."
};

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(null);

  // When Home page loads, check if we need to scroll to "about-me".
  useEffect(() => {
    if (location.state && location.state.scrollToAbout) {
      const aboutElement = document.getElementById('about-me');
      if (aboutElement) {
        // Delay a little if necessary to ensure the element renders.
        setTimeout(() => {
          aboutElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  const playSwoosh = () => {
    console.log("Playing swoosh sound...");
    const audio = new Audio('/swoosh.mp3');
    audio.volume = 0.3;
    audio.play().catch(err => console.warn("Audio error:", err));
  };

  const handleClick = (path) => {
    playSwoosh();
    navigate(path);
  };

  return (
    <main className="home-container">
      <div className="home-hero">
        <h1 className="home-title">Let me show you who I am.</h1>
        <p className="home-subtitle">Which side of me do you want to explore first?</p>
      </div>

      <div className="home-options">
        <div
          className={`home-card ${active === 'developer' ? 'active' : ''}`}
          onMouseEnter={() => setActive('developer')}
          onClick={() => handleClick('/developer')}
        >
          <span role="img" aria-label="laptop">💻</span> Developer
        </div>
        <div
          className={`home-card ${active === 'artist' ? 'active' : ''}`}
          onMouseEnter={() => setActive('artist')}
          onClick={() => handleClick('/artist')}
        >
          <span role="img" aria-label="paint palette">🎨</span> Artist
        </div>
        <div
          className={`home-card ${active === 'individual' ? 'active' : ''}`}
          onMouseEnter={() => setActive('individual')}
          onClick={() => handleClick('/individual')}
        >
          <span role="img" aria-label="seedling">🌱</span> Individual
        </div>
      </div>

      {active && (
        <div className="preview-box">
          <p>{previewContent[active]}</p>
        </div>
      )}

      <HomeContent />
    </main>
  );
}
