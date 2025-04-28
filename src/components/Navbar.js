import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  FaHome,
  FaSearch,
  FaBars,
  FaTimes,
  FaHeadphones,
  FaUserAlt,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const searchItems = [
  { type: 'page',    label: 'Developer',        path: '/developer' },
  { type: 'page',    label: 'Artist',           path: '/artist' },
  { type: 'page',    label: 'Individual',       path: '/individual' },
  { type: 'project', label: 'React Portfolio',  path: '/developer' },
  { type: 'Me',      label: 'Art',              path: '/artist' },
  { type: 'resume',  label: 'Download Résumé',  path: '/BhavanaPoosa-resume.pdf' },
  { type: 'page',    label: 'My Journey Timeline', path: '/myjourney' },
  // …and any others you need
];

export default function Navbar() {
  const navigate                     = useNavigate();
  const [searchTerm, setSearchTerm]  = useState('');
  const [isMusicOn,  setMusic]       = useState(false);
  const [showMenu,   setMenu]        = useState(false);
  const [showProfile, setProfile]    = useState(false);
  const audioRef                     = useRef(null);

  /* audio */
  useEffect(() => {
    audioRef.current        = new Audio('/Chill.mp3');
    audioRef.current.volume = 0.1;
  }, []);

  /* search filter */
  const results = useMemo(() => {
    const t = searchTerm.trim().toLowerCase();
    return t
      ? searchItems.filter(i =>
          i.label.toLowerCase().includes(t) ||
          i.type.toLowerCase().includes(t))
      : [];
  }, [searchTerm]);

  /* handlers */
  const execResult = item => {
    item.path.endsWith('.pdf')
      ? window.open(item.path, '_blank', 'noopener,noreferrer')
      : navigate(item.path);
    setSearchTerm('');
  };

  const toggleMusic = () => {
    isMusicOn ? audioRef.current.pause()
              : audioRef.current.play().catch(() => {});
    setMusic(m => !m);
    setMenu(false);
  };

  const goAboutMe = () => {
    navigate('/', { state: { scrollToAbout: true } });
    setMenu(false);
  };

  /* ─────────────────────────── render */
  return (
    <>
      <header className="navbar">
        {/* LEFT  */}
        <div className="nav-left" onClick={() => navigate('/')}>
          <FaHome size={24} />
          <span className="nav-home">Home</span>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search…"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <div className="search-dropdown">
              {results.length ? (
                results.map((it, idx) => (
                  <div
                    key={idx}
                    className="dropdown-item"
                    onClick={() => execResult(it)}
                  >
                    {it.label}
                    <span className="dropdown-tag">{it.type}</span>
                  </div>
                ))
              ) : (
                <div className="dropdown-item">No results</div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT – desktop buttons, avatar, burger */}
        <div className="nav-right">
          {/* desktop-only buttons (hidden by CSS on mobile) */}
          <button className="music-toggle" onClick={toggleMusic}>
            {isMusicOn ? 'Music On' : 'Music Off'}
          </button>
          <button className="about-me-btn" onClick={goAboutMe}>
            About Me
          </button>

          {/* avatar always visible */}
          <img
            src="/Me.jpeg"
            alt="Avatar"
            className="avatar"
            onClick={() => setProfile(true)}
          />

          {/* burger – mobile menu */}
          <button
            className="burger-menu-btn"
            onClick={() => setMenu(m => !m)}
            aria-label="Toggle menu"
          >
            {showMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* dropdown under burger (mobile) */}
        {showMenu && (
          <div className="burger-menu-dropdown">
            <button onClick={toggleMusic}>
              <FaHeadphones /> {isMusicOn ? 'Music Off' : 'Music On'}
            </button>
            <button onClick={goAboutMe}>
              <FaUserAlt /> About Me
            </button>
          </div>
        )}
      </header>

      {/* profile pop-up */}
      {showProfile && (
        <div className="profile-modal" onClick={() => setProfile(false)}>
          <div
            className="profile-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <img src="/Me.jpeg" alt="Large avatar" />
          </div>
        </div>
      )}
    </>
  );
}
