import React from 'react';
import '../styles/HomeContent.css';
import { useNavigate } from 'react-router-dom';

export default function HomeContent() {
  const navigate = useNavigate();

  return (
    <main className="home-content">
      <section id="about-me" className="hero fade-in">
        <h1 className="hero-title">Hi, I'm Bhavana</h1>
        <p className="hero-subtitle">Creative Developer & Digital Artist</p>
      </section>

      <section className="preview-cards slide-in">
        <div className="preview-card" onClick={() => navigate('/developer')}>
          <h3>
            <span role="img" aria-label="laptop">💻</span> Developer
          </h3>
          <p>Explore my full-stack projects and tech stack</p>
        </div>
        <div className="preview-card" onClick={() => navigate('/artist')}>
          <h3>
            <span role="img" aria-label="artist palette">🎨</span> Artist
          </h3>
          <p>Browse my digital artworks and sketches</p>
        </div>
        <div className="preview-card" onClick={() => navigate('/individual')}>
          <h3>
            <span role="img" aria-label="plant growing">🌱</span> Individual
          </h3>
          <p>A few things that spark my curiosity.</p>
        </div>
      </section>

      <section className="featured-section fade-in">
        <h2>
            <span role="img" aria-label="plant growing">🌟</span> Featured
        </h2>
        <div className="featured-tiles">
          <div className="tile">
            <h4>Latest Project</h4>
            <p>Capsweb Migration</p>
          </div>
          <div className="tile">
            <h4>Recent Artwork</h4>
            <p>"Whiskers & Wonder" — A Cat Portrait</p>
          </div>
          <div className="tile">
            <h4>Vision</h4>
            <p>Run a 10K. Master Framer Motion. Inspire someone.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
