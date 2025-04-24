import React, { useState, useEffect } from 'react';
import {
  FaBars, FaTimes,             // mobile toggle icons
  FaPaintBrush, FaEnvelope,
  FaGithub, FaLinkedin, FaRoad, FaHeadphones
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

const quotes = [
  "Let's build something amazing — or at least debug it together!",
  'My inbox is friendlier than it looks. Say hi!',
  'Ping me before I start my next art masterpiece.',
];

export default function Sidebar() {
  const navigate                 = useNavigate();
  const [drawerOpen, setDrawer]  = useState(false);
  const [showContact, setModal]  = useState(false);
  const [quote, setQuote]        = useState('');

  /* lock / unlock body scroll when drawer state changes */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : 'auto';
  }, [drawerOpen]);

  /* play pop sound when contact modal opens */
  useEffect(() => {
    if (showContact) {
      const pop = new Audio('/bubble-pop-5-323639.mp3');
      pop.volume = 0.3;
      pop.play().catch(() => {});
    }
  }, [showContact]);

  /* helpers */
  const toggleDrawer = () => setDrawer(!drawerOpen);
  const closeDrawer  = () => setDrawer(false);

  const openContact  = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setModal(true);
  };

  const go = (path, state) => {
    navigate(path, state ? { state } : undefined);
    closeDrawer();
  };

  return (
    <>
      {/* ───── Hamburger button (mobile only – hidden by CSS on desktop) */}
      <button className="burger-btn" onClick={toggleDrawer} aria-label="Open menu">
        <FaBars />
      </button>

      {/* ───── Sidebar / Drawer */}
      <aside className={`sidebar ${drawerOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          {/* close-icon appears only on mobile drawer */}
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
            <li onClick={() => go('/individual', { scrollTo: 'music' })}>
              <FaHeadphones /> Soundtrack
            </li>
          </ul>
        </div>
      </aside>

      {/* ───── Back-drop (dims page while drawer open) */}
      {drawerOpen && <div className="backdrop" onClick={closeDrawer} />}

      {/* ───── Contact Modal */}
      {showContact && (
        <div className="modal-overlay" onClick={() => setModal(false)}>
          <div className="contact-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModal(false)}>✖</button>
            <h3>Let's Connect!</h3>

            <p>Email: <a href="mailto:bhavana.3113@gmail.com">bhavana.3113@gmail.com</a></p>

            <p className="socials">
              <FaGithub /> <a href="https://github.com/BhavanaPoosa"   target="_blank" rel="noopener noreferrer">GitHub</a><br/>
              <FaLinkedin /> <a href="https://www.linkedin.com/in/bhavana-p-872011252/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
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
