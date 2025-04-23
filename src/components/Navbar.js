import React, { useState, useRef, useEffect } from 'react';
import { FaSpotify, FaSearch, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

/* ───────── SEARCH ITEMS (replace your old array) ───────── */
const searchItems = [
  /* main site pages */
  { type: 'page',    label: 'Developer',        path: '/developer' },
  { type: 'page',    label: 'Artist',           path: '/artist' },
  { type: 'page',    label: 'Individual',       path: '/individual' },

  /* misc content */
  { type: 'project', label: 'React Portfolio',  path: '/developer' },
  { type: 'goal',    label: '2025 Vision Board',path: '/individual' },

  /* résumé & timeline */
  { type: 'resume',  label: 'Download Résumé',      path: '/resume.pdf' },  // opens PDF
  { type: 'page',    label: 'My Journey Timeline',  path: '/myjourney' },

  { type: 'project', label: 'Text2Vision',    path: '/developer' },
  { type: 'project', label: 'Portfolio Site',       path: '/developer' },

  /* artworks (route back to Artist page) */
  { type: 'art', label: 'Autumn – Digital Art',               path: '/artist' },
  { type: 'art', label: 'Forest Hut – Digital Art',           path: '/artist' },
  { type: 'art', label: 'Forest – Sketch',                    path: '/artist' },
  { type: 'art', label: 'Cave – Sketch',                      path: '/artist' },
  { type: 'art', label: 'Webtoon – Painting',                 path: '/artist' },
  { type: 'art', label: 'Animated Scene – Digital Art',       path: '/artist' },
  { type: 'art', label: 'Fairy Cartoon – Animation',          path: '/artist' },
  { type: 'art', label: 'Cat in Room – Sketch',               path: '/artist' },
  { type: 'art', label: 'Greeting Card',                      path: '/artist' },
  { type: 'art', label: 'Elf – Sketch',                       path: '/artist' },
  { type: 'art', label: 'Harry – Digital Art',                path: '/artist' },
  { type: 'art', label: 'Levi – Digital Art',                 path: '/artist' },
  { type: 'art', label: 'Nezuko – Sketch',                    path: '/artist' },
  { type: 'art', label: 'Peas in Pod – Card',                 path: '/artist' },
  { type: 'art', label: 'Mini Photo Booth – Craft',           path: '/artist' },
  { type: 'art', label: 'Dragon Booth – Craft',               path: '/artist' },
  { type: 'art', label: 'Mini Art – Paint',                   path: '/artist' },
  { type: 'art', label: 'Teddy – Sketch',                     path: '/artist' },
  { type: 'art', label: 'Sketch – Portrait 1',                path: '/artist' },
  { type: 'art', label: 'Sketch – Portrait 2',                path: '/artist' },
  { type: 'art', label: 'Sketch – Portrait 3',                path: '/artist' },
  { type: 'art', label: 'Sketch – Portrait 4',                path: '/artist' },
];


export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef(new Audio('/Chill.mp3'));
  const navigate = useNavigate();

  // Set the audio volume to a lower level (e.g., 0.1 for quieter sound)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  /* replace the old filteredItems const */
const filteredItems = searchTerm
? searchItems.filter(item => {
    const term = searchTerm.toLowerCase();
    return (
      item.label.toLowerCase().includes(term) ||               // match label
      item.type.toLowerCase().includes(term)  ||               // match "project", "tech", etc.
      (item.keywords && item.keywords.some(k => k.includes(term))) // optional keywords
    );
  })
: [];


  const handleScrollToAboutMe = () => {
    // Navigate to the home page and set the state flag:
    navigate('/', { state: { scrollToAbout: true } });
  };

  const toggleMusic = () => {
    if (isMusicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicOn(!isMusicOn);
  };

  return (
    <>
      <header className="navbar">
        <div className="nav-left">
          <FaSpotify size={28} />
          <div className="nav-home"><a href="/">Home</a></div>
        </div>
        <div className="nav-center">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
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
                    onClick={() => {
                      navigate(item.path);
                      setSearchTerm('');
                    }}
                  >
                    {item.label} <span className="dropdown-tag">{item.type}</span>
                  </div>
                ))
              ) : (
                <div className="dropdown-item">No results</div>
              )}
            </div>
          )}
        </div>
        <div className="nav-right">
          <button onClick={toggleMusic} className="music-toggle">
            {isMusicOn ? 'Music On' : 'Music Off'}
          </button>
          <button onClick={handleScrollToAboutMe} className="about-me-btn">
            About Me
          </button>
          <FaBell size={20} />
          <img
            src="/Me.jpeg"
            alt="Profile"
            className="avatar"
            onClick={() => setShowProfile(true)}
          />
        </div>
      </header>

      {showProfile && (
        <div className="profile-modal" onClick={() => setShowProfile(false)}>
          <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="/Me.jpeg" alt="Bhavana Poosa" />
          </div>
        </div>
      )}
    </>
  );
}
