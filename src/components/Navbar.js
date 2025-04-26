// src/components/Navbar.js
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaHome, FaSearch, FaBars, FaTimes, FaHeadphones, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const searchItems = [
  { type: 'page',    label: 'Developer',        path: '/developer' },
  { type: 'page',    label: 'Artist',           path: '/artist' },
  { type: 'page',    label: 'Individual',       path: '/individual' },
  { type: 'project', label: 'React Portfolio',  path: '/developer' },
  { type: 'goal',    label: '2025 Vision Board',path: '/individual' },
  { type: 'resume',  label: 'Download Résumé',  path: '/resume.pdf' },
  { type: 'page',    label: 'My Journey Timeline', path: '/myjourney' },
  // …and any others you need
];

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMusicOn, setIsMusicOn]   = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current = new Audio('/Chill.mp3');
    audioRef.current.volume = 0.1;
  }, []);

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return [];
    return searchItems.filter(it =>
      it.label.toLowerCase().includes(term) ||
      it.type.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const handleResultClick = (item) => {
    if (item.path.endsWith('.pdf')) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.path);
    }
    setSearchTerm('');
  };

  const toggleMusic = () => {
    if (isMusicOn) audioRef.current.pause();
    else          audioRef.current.play().catch(() => {});
    setIsMusicOn(m => !m);
    setShowBurgerMenu(false);
  };

  const handleScrollToAboutMe = () => {
    navigate('/', { state: { scrollToAbout: true } });
    setShowBurgerMenu(false);
  };

  return (
    <header className="navbar">
      {/* ─── LEFT: logo + home */}
      <div className="nav-left" onClick={() => navigate('/')}>
        <FaHome size={24} />
        <span className="nav-home">Home</span>
      </div>

      {/* ─── CENTER: search */}
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
            {filteredItems.length
              ? filteredItems.map((it, i) => (
                  <div
                    key={i}
                    className="dropdown-item"
                    onClick={() => handleResultClick(it)}
                  >
                    {it.label}
                    <span className="dropdown-tag">{it.type}</span>
                  </div>
                ))
              : <div className="dropdown-item">No results</div>
            }
          </div>
        )}
      </div>

      {/* ─── RIGHT: desktop buttons + mobile burger */}
      <div className="nav-right">
        <button className="music-toggle" onClick={toggleMusic}>
          {isMusicOn ? 'Music On' : 'Music Off'}
        </button>

        <button className="about-me-btn" onClick={handleScrollToAboutMe}>
          About Me
        </button>

        <button
          className="burger-menu-btn"
          onClick={() => setShowBurgerMenu(b => !b)}
          aria-label="Toggle menu"
        >
          {showBurgerMenu
            ? <FaTimes size={20} />
            : <FaBars  size={20} />
          }
        </button>

        <img src="/Me.jpeg" alt="Avatar" className="avatar" />
      </div>

      {/* ─── Mobile-only burger dropdown */}
      {showBurgerMenu && (
        <div className="burger-menu-dropdown">
          <button onClick={toggleMusic}>
            <FaHeadphones /> {isMusicOn ? 'Music Off' : 'Music On'}
          </button>
          <button onClick={handleScrollToAboutMe}>
            <FaUserAlt /> About Me
          </button>
        </div>
      )}
    </header>
  );
}
