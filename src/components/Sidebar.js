// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import {
  FaAngleRight,
  FaAngleLeft,
  FaPaintBrush,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRoad,
  FaHeadphones
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

const quotes = [
  "Let's build something amazing — or at least debug it together!",
  'My inbox is friendlier than it looks. Say hi!',
  'Ping me before I start my next art masterpiece.',
];

export default function Sidebar() {
  const navigate               = useNavigate();
  const [drawerOpen, setDrawer]  = useState(false);
  const [showContact, setModal]  = useState(false);
  const [quote, setQuote]        = useState('');

  // prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : 'auto';
  }, [drawerOpen]);

  // pop sound for contact
  useEffect(() => {
    if (showContact) {
      const pop = new Audio('/bubble-pop-5-323639.mp3');
      pop.volume = 0.3;
      pop.play().catch(() => {});
    }
  }, [showContact]);

  const toggleDrawer = () => setDrawer(open => !open);
  const closeDrawer  = () => setDrawer(false);
  const openContact = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setModal(true);
  };
  const go = (path, state) => {
    navigate(path, state ? { state } : undefined);
    closeDrawer();
  };

  return (
    <>
      {/* ─── Mobile drawer toggle arrow ─── */}
      <button
        className="burger-btn"
        onClick={toggleDrawer}
        aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
      >
        {drawerOpen
          ? <FaAngleLeft size={24} color="#fff" />
          : <FaAngleRight size={24} color="#fff" />
        }
      </button>

      {/* ─── Drawer ─── */}
      <aside className={`sidebar ${drawerOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          {/* still keep an explicit close icon inside if you like */}
          <button className="close-btn" onClick={closeDrawer} aria-label="Close menu">
            <FaAngleLeft size={20} color="#fff" />
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
            <li onClick={() => go('/individual', { scrollTo: 'music' })}>
              <FaHeadphones /> Soundtrack
            </li>
          </ul>
        </div>
      </aside>

      {/* backdrop */}
      {drawerOpen && <div className="backdrop" onClick={closeDrawer} />}

      {/* contact modal */}
      {showContact && (
        <div className="modal-overlay" onClick={() => setModal(false)}>
          <div className="contact-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModal(false)}>✖</button>
            <h3>Let's Connect!</h3>
            <p>Email: <a href="mailto:bhavana.3113@gmail.com">bhavana.3113@gmail.com</a></p>
            <p className="socials">
              <FaGithub /> <a href="https://github.com/BhavanaPoosa" target="_blank" rel="noopener noreferrer">GitHub</a><br/>
              <FaLinkedin /> <a href="https://linkedin.com/in/bhavana" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
