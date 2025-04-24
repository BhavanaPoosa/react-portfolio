// src/components/Navbar.js
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

/* ───────── SEARCH CATALOG ───────── */
const searchItems = [
  /* pages */
  { type: 'page',    label: 'Developer',  path: '/developer' },
  { type: 'page',    label: 'Artist',     path: '/artist' },
  { type: 'page',    label: 'Individual', path: '/individual' },

  /* misc */
  { type: 'project', label: 'React Portfolio',        path: '/developer' },
  { type: 'goal',    label: '2025 Vision Board',      path: '/individual' },
  { type: 'resume',  label: 'Download Résumé',        path: '/resume.pdf' },
  { type: 'page',    label: 'My Journey Timeline',    path: '/myjourney' },

  { type: 'project', label: 'Text2Vision',            path: '/developer' },
  { type: 'project', label: 'Portfolio Site',         path: '/developer' },

  /* artwork */
  { type: 'art', label: 'Autumn – Digital Art',       path: '/artist' },
  { type: 'art', label: 'Forest Hut – Digital Art',   path: '/artist' },
  // … (keep the rest of your art items here)
];

export default function Navbar() {
  const navigate = useNavigate();

  /* — state — */
  const [showProfile, setShowProfile] = useState(false);
  const [searchTerm,  setSearchTerm]  = useState('');
  const [isMusicOn,   setIsMusicOn]   = useState(false);

  /* background music */
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current = new Audio('/Chill.mp3');
    audioRef.current.volume = 0.1;
  }, []);

  /* performant live-search */
  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return [];
    return searchItems.filter(i =>
      i.label.toLowerCase().includes(term) ||
      i.type.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  /* handlers */
  const handleResultClick = (item) => {
    if (item.path.endsWith('.pdf')) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.path);
    }
    setSearchTerm('');
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    isMusicOn ? audioRef.current.pause()
              : audioRef.current.play().catch(()=>{});
    setIsMusicOn(p => !p);
  };

  /* scroll to About-Me (HomeContent) */
  const goToAboutMe = () => {
    navigate('/', { state: { scrollToAbout: true } });
  };

  /* ───────── JSX ───────── */
  return (
    <>
      <header className="navbar">
        {/* left */}
        <div className="nav-left" onClick={() => navigate('/')}>
          <FaHome size={24} />
          <span className="nav-home"></span>
        </div>

        {/* center — search */}
        <div className="nav-center">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <div className="search-dropdown">
              {filteredItems.length ? (
                filteredItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="dropdown-item"
                    onClick={() => handleResultClick(item)}
                  >
                    {item.label}
                    <span className="dropdown-tag">{item.type}</span>
                  </div>
                ))
              ) : (
                <div className="dropdown-item">No results</div>
              )}
            </div>
          )}
        </div>

        {/* right */}
        <div className="nav-right">
          <button className="about-me-btn" onClick={goToAboutMe}>
            About Me
          </button>

          <button className="music-toggle" onClick={toggleMusic}>
            {isMusicOn ? 'Music On' : 'Music Off'}
          </button>

          <img
            src="/Me.jpeg"
            alt="Bhavana Poosa avatar"
            className="avatar"
            onClick={() => setShowProfile(true)}
          />
        </div>
      </header>

      {/* profile modal */}
      {showProfile && (
        <div className="profile-modal" onClick={() => setShowProfile(false)}>
          <div
            className="profile-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/Me.jpeg" alt="Bhavana Poosa" />
          </div>
        </div>
      )}
    </>
  );
}
