// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import {
  FaBars, FaTimes,               // ⬅︎ new icons for toggle
   FaPaintBrush, FaEnvelope,
  FaGithub, FaLinkedin, FaTwitter, FaRoad,
  FaHeadphones
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

const quotes = [
  "Let's build something amazing — or at least debug it together!",
  "My inbox is friendlier than it looks. Say hi!",
  "Contact me before I start my next art masterpiece."
];

export default function Sidebar() {
  const navigate = useNavigate();
  const [showContact, setShowContact] = useState(false);
  const [quote, setQuote]         = useState('');
  const [drawerOpen, setDrawer]   = useState(false);   // ⬅︎ drawer state

  /* play pop‑sound on contact modal */
  useEffect(() => {
    if (showContact) {
      const audio = new Audio('/bubble-pop-5-323639.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  }, [showContact]);

  /* lock body scroll when drawer is open (mobile) */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : 'auto';
  }, [drawerOpen]);

  const toggleDrawer  = () => setDrawer(!drawerOpen);
  const closeDrawer   = () => setDrawer(false);
  const openContact   = () => {
    setQuote(quotes[Math.floor(Math.random()*quotes.length)]);
    setShowContact(true);
  };

  /* helper: navigate & close drawer (for mobile) */
  const go = (path, state) => {
    navigate(path, state ? { state } : undefined);
    closeDrawer();
  };

  return (
    <>
      {/* ─── Hamburger button (mobile) ─── */}
      <button className="burger-btn" onClick={toggleDrawer} aria-label="Open menu">
        <FaBars />
      </button>

      {/* ─── Sidebar / Drawer ─── */}
      <aside className={`sidebar ${drawerOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={closeDrawer} aria-label="Close menu">
            <FaTimes />
          </button>

          <button className="create-btn" onClick={openContact}>
            <FaEnvelope /> More
          </button>
        </div>

        <div className="filters">
          <button onClick={() => go('/developer')}>Developer</button>
          <button onClick={() => go('/artist')}>Artist</button>
          <button onClick={() => go('/individual')}>About</button>
        </div>

        <div className="sidebar-section">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => go('/MyJourney')}><FaRoad /> My Journey</li>
            <li onClick={() => go('/artist', { scrollTo: 'my-art' })}>
              <FaPaintBrush /> Digital Art
            </li>
            <li onClick={() => go('/individual')}><FaHeadphones /> Soundtrack </li>
          </ul>
        </div>
      </aside>

      {/* ─── Backdrop when drawer open (mobile) ─── */}
      {drawerOpen && <div className="backdrop" onClick={closeDrawer} />}

      {/* ─── Contact modal ─── */}
      {showContact && (
        <div className="modal-overlay" onClick={() => setShowContact(false)}>
          <div className="contact-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowContact(false)}>✖</button>
            <h3>Let's Connect!</h3>
            <p>Email: <a href="mailto:bhavana.3113@gmail.com">bhavana.3113@gmail.com</a></p>
            <p>
              <FaGithub /> <a href="https://github.com/bhavana"   target="_blank" rel="noopener noreferrer">GitHub</a><br/>
              <FaLinkedin /> <a href="https://linkedin.com/in/bhavana" target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
              <FaTwitter /> <a href="https://twitter.com/bhavana" target="_blank" rel="noopener noreferrer">Twitter</a>
            </p>
            <div className="quote">
              <span role="img" aria-label="speech balloon">💬</span> {quote}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
