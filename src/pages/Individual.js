// src/pages/Individual.js
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaPaintBrush, FaRunning, FaMusic, FaUtensils } from 'react-icons/fa';
import '../styles/Individual.css';

const funFacts = [
  'Creativity flows from art to nail-art.',
  '8-10K steps a day keeps me energised.',
  'Completed my first 5K run this year.',
  'Love discovering new cafés & restaurants.',
  'Music scores every part of my day.',
];

const photoGallery = [
  '/nails1.jpeg',
  '/nails2.jpeg',
  '/nails3.jpeg',
  '/run.jpeg',
  '/MexicanBowl.jpeg',
  '/steps.jpeg',
];

const photoGalleryCaptions = [
  'Gradient nail-art session',
  'Minimalist line-art nails',
  'Red to test',
  '5K finish-line smile',
  'Fuel stop — Mexican bowl',
  'Weekly step streak',
];

export default function Individual() {
  const [currentFact, setCurrentFact] = useState(0);
  const [showMoments, setShowMoments] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentFact(Math.floor(Math.random() * funFacts.length)),
      5000
    );
    return () => clearInterval(interval);
  }, []);
  

  const [currentMedia, setCurrentMedia] = useState(0);
  const nextMedia = () =>
    setCurrentMedia((p) => (p + 1) % photoGallery.length);
  const prevMedia = () =>
    setCurrentMedia((p) => (p - 1 + photoGallery.length) % photoGallery.length);
  const isVideo = (src) => src.toLowerCase().endsWith('.mp4');

  return (
    <main className="individual-page">
      <section id="about-me" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi — I'm Bhavana : a full-stack developer who pairs clean code with
          creative flair. By day I secure and scale web apps; after hours I'm
          sketching, experimenting with nail-art, or scouting new cafés and
          restaurants to feed both curiosity and appetite.
        </p>
        <p>
          My mantra is <em>create with intent, deliver with impact</em>.
          Whether I'm crushing 10K steps, refining a digital illustration, or
          shipping fresh features, I bring energy, curiosity, and craftsmanship
          to every project.
        </p>
      </section>

      <section className="highlights">
        <div className="highlight-card">
          <h3>8K-10K+</h3>
          <span>Steps / Day</span>
        </div>
        <div className="highlight-card">
          <h3>5K</h3>
          <span>Run Completed</span>
        </div>
        <div className="highlight-card">
          <h3>15+</h3>
          <span>Food Places Explored</span>
        </div>
        <div className="highlight-card">
          <h3>15 hrs</h3>
          <span>Music /Week</span>
        </div>
      </section>

      {/* ─── Music Section Wrapped in a Card ─── */}
      <div className="music-card">
        <section id="music"className="music-section">
          <h2>Code Soundtrack <span role="img" aria-label="headphones"> </span>🎧</h2>
          <p className="music-intro">
            These are the soundscapes I often tune into while sketching or coding — 
            whether it's deep work or weekend play.
          </p>
          <button 
            className="toggle-btn"
            onClick={() => setShowMusic(!showMusic)}
            aria-expanded={showMusic}
          >
            {showMusic ? 'Hide My Soundtrack' : 'Show My Soundtrack'}
            <FaChevronDown className={`toggle-icon ${showMusic ? 'rotate' : ''}`} />
          </button>
          
          {showMusic && (
            <div className="music-card">
              <div className="spotify-embeds">
                <div className="spotify-embed">
                  <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/playlist/1u8mRX5tupysOLLaLy7lYE?utm_source=generator"
                  title="Focus Jams"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  />
                </div>
                <div className="spotify-embed">
                  <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/playlist/4Nj45kVFIszLL6pQ2eBEvu?utm_source=generator"
                  title="Deep Work"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  />
                </div>
                <div className="spotify-embed">
                  <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/playlist/5dBXWGyIlAlY0hOGtbvvjM?utm_source=generator"
                  title="Weekend Sketches"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      </div>


      {/* Moments toggle */}
      <div class="moments-toggle-card">
        <h2>Daily Aesthetics
    
          <span role="img" aria-label="sparkles"> ✨</span> 
      

          </h2>
          <p className="music-intro">
            Small joys, big impact — a look into my personal style and flavors.
          </p>
      <button 
        className={`toggle-btn ${showMoments ? 'open' : ''}`}
        aria-expanded={showMoments}
        onClick={() => setShowMoments(!showMoments)}
      >
        {showMoments ? 'Hide The Lighter Side' : 'See The Lighter Side'}
        <FaChevronDown className="toggle-icon" />
      </button>
      
      
        {showMoments && (
          <div className="moments-card">
            <section className="moments">
              <h2>The Lighter Side</h2>
              <p className="moments-note">
              Here's what makes life more vibrant.
              </p>
              <div className="moments-carousel">
                <button onClick={prevMedia} className="moments-btn prev">&larr;</button>
                {isVideo(photoGallery[currentMedia]) ? (
                  <video className="moments-media" controls muted preload="metadata">
                    <source src={photoGallery[currentMedia]} type="video/mp4" />
                    </video>
                  ) : (
                  <img
                  src={photoGallery[currentMedia]}
                  alt="Moment"
                  className="moments-media"
                  />
                )}
                <span className="moments-caption">
                  {photoGalleryCaptions[currentMedia]}
                </span>
                <button onClick={nextMedia} className="moments-btn next">&rarr;</button>
              </div>
            </section>
          </div>
        )}
      </div>


      <section className="fun-facts">
        <h2>Fun Fact About Me</h2>
        <div className="fun-fact-card">
          <p>{funFacts[currentFact]}</p>
        </div>
      </section>

      <section className="hobbies-icons">
        <h2>My Hobbies</h2>
        <div className="icons-container">
          <div className="icon-item">
            <FaPaintBrush size={40} title="Art" />
            <span>Art</span>
          </div>
          <div className="icon-item">
            <FaRunning size={40} title="Running" />
            <span>Running</span>
          </div>
          <div className="icon-item">
            <FaMusic size={40} title="Music" />
            <span>Music</span>
          </div>
          <div className="icon-item">
            <FaUtensils size={40} title="Food" />
            <span>Food</span>
          </div>
        </div>
      </section>
    </main>
  );
}
