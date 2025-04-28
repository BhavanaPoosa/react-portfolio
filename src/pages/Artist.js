import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import '../styles/Artist.css';

const artItems = [
  { src: '/Autum.PNG', alt: 'Digital Art' },
  { src: '/Forest_hut.PNG', alt: 'Digital Art' },
  { src: '/Forest.PNG', alt: 'Sketch' },
  { src: '/Cave.PNG', alt: 'Sketch' },
  { src: '/webtoon.jpeg', alt: 'Painting' },
  { src: '/Animated.JPG', alt: 'Digital Art' },
  { src: '/AnimatedCartoonFairy.PNG', alt: 'Animated Fairy' },
  { src: '/CatInRoom.JPG', alt: 'Sketch' },
  { src: '/Card.PNG', alt: 'Card' },
  { src: '/Elf.JPG', alt: 'Sketch' },
  { src: '/Harry.JPG', alt: 'Digital art' },
  { src: '/Levi.JPG', alt: 'Digital Art' },
  { src: '/Nezuko.JPG', alt: 'Sketch' },
  { src: '/PeasInPod.PNG', alt: 'Card' },
  { src: '/MiniPhotoBooth.jpeg', alt: 'Craft' },
  { src: '/CraftDragonBooth.jpeg', alt: 'Craft' },
  { src: '/MiniArt.jpeg', alt: 'Paint' },
  { src: '/Teddy.jpeg', alt: 'Sketch' },
  { src: '/Sketch.JPG', alt: 'Sketch' },
  { src: '/Sketch4.jpeg', alt: 'Sketch' },
  { src: '/Sketch3.jpeg', alt: 'Sketch' },
  { src: '/Sketch2.JPG', alt: 'Sketch' },
];

export default function Artist() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const location = useLocation();

  /* smooth-scroll to #my-art if navigated with state */
  useEffect(() => {
    if (location.state?.scrollTo === 'my-art') {
      const artSec = document.getElementById('my-art');
      artSec && setTimeout(() => artSec.scrollIntoView({ behavior: 'smooth' }), 150);
    }
  }, [location]);

  /* light-box helpers */
  const openModal  = idx => setSelectedIndex(idx);
  const closeModal = ()  => setSelectedIndex(null);
  const nextImage  = e => { e.stopPropagation(); setSelectedIndex(i => (i + 1) % artItems.length); };
  const prevImage  = e => { e.stopPropagation(); setSelectedIndex(i => (i - 1 + artItems.length) % artItems.length); };

  return (
    <main className="artist-page">
      {/* ── HEADER CARD ─────────────────── */}
      <section className="card artist-header">
        <h1>🎨 Artist</h1>
        <p>
          Explore my world of digital art and sketches—each piece reflects my creative spirit.
          I honed my skills as an active member of my college art club. While I rarely paint,
          every work is crafted with dedication and care.
        </p>
      </section>

      {/* ── SOCIAL CARD + GIF ───────────── */}
      <section className="card artist-social">
        <h2>Follow My Art Journey</h2>
        <p>Get exclusive sneak peeks and behind-the-scenes content on Instagram.</p>

        {/* GIF with overlay handle */}
        <div className="insta-container">
          <div className="insta-gif-wrapper">
            {/* Put your GIF in /public and update the file name below */}
            <img
              src="/follow.gif"
              alt="Instagram preview GIF"
              className="insta-gif"
            />
            <span className="insta-overlay-text"> Follow us & share the vibe!</span>
          </div>
        </div>

        <p className="collab-prompt">
          Interested in collab? Drop a message!
          <a
            href="https://www.instagram.com/the__chitrakaar?igsh=MWRwYzllNGszazFmaA&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-link"
          >
            <FaInstagram size={18} /> @the_chitrakaar
          </a>
        </p>
      </section>

      {/* ── ART GALLERY (edge-to-edge) ──── */}
      <section id="my-art" className="artist-gallery">
        <h2>My Art Collection</h2>
        <div className="art-grid">
          {artItems.map((item, idx) => (
            <div key={idx} className="art-card" onClick={() => openModal(idx)}>
              <img src={item.src} alt={item.alt} className="art-thumbnail" />
            </div>
          ))}
        </div>
      </section>

      {/* ── INFO CARD ───────────────────── */}
      <section className="card artist-info">
        <h2>My Art Journey</h2>
        <p>
          My journey in art began during my college days as a proud member of the art club,
          where I refined my skills in sketching and digital art. Though you rarely see me paint,
          every creation tells a story of passion and perseverance.
        </p>
      </section>

      {/* ── LIGHT-BOX MODAL ─────────────── */}
      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-prev" onClick={prevImage}>&larr;</button>
            <img src={artItems[selectedIndex].src} alt="" className="modal-image" />
            <button className="modal-next" onClick={nextImage}>&rarr;</button>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </main>
  );
}
