// src/pages/Artist.js
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
  { src: '/CatInRoom.JPG', alt: 'Sketch 1' },
  { src: '/Card.PNG', alt: 'Card' },
  { src: '/Elf.JPG', alt: 'Sketch 1' },
  { src: '/Harry.JPG', alt: 'Digital art' },
  { src: '/Levi.JPG', alt: 'Digital Art' },
  { src: '/Nezuko.JPG', alt: 'Sketch 1' },
  { src: '/PeasInPod.PNG', alt: 'Card' },
  { src: '/MiniPhotoBooth.jpeg', alt: 'Craft' },
  { src: '/CraftDragonBooth.jpeg', alt: 'Craft' },
  { src: '/MiniArt.jpeg', alt: 'Paint' },
  { src: '/Teddy.jpeg', alt: 'Sketch' },
  { src: '/Sketch.JPG', alt: 'Sketch' },
  { src: '/Sketch4.jpeg', alt: 'Sketch' },
  { src: '/Sketch3.jpeg', alt: 'Sketch' },
  { src: '/Sketch2.JPG', alt: 'Sketch' },
  // Add more art items as needed
];

export default function Artist() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const location = useLocation();

  // Scroll to the "my-art" section if the state flag is present
  useEffect(() => {
    console.log(location.state);
    if (location.state && location.state.scrollTo === 'my-art') {
      const artSection = document.getElementById('my-art');
      console.log('Scrolling to: ', artSection);
      if (artSection) {
        setTimeout(() => {
          artSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % artItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) =>
      (prevIndex - 1 + artItems.length) % artItems.length
    );
  };

  return (
    <main className="artist-page">
      <header className="artist-header">
        <h1>
          <span role="img" aria-label="artist palette">🎨</span> Artist
        </h1>
        <p>
          Explore my world of digital art and sketches—each piece reflects my creative spirit.
          I honed my skills as an active member of my college art club. While I rarely paint,
          every work is crafted with dedication and care.
        </p>
      </header>

      <section className="artist-social">
        <h2>Follow My Art Journey</h2>
        <p>
          Get exclusive sneak peeks and behind-the-scenes content on Instagram.</p>
          <p className="collab-prompt">
          Interested in collab? Drop a message!
          <a
            href="https://www.instagram.com/the__chitrakaar?igsh=MWRwYzllNGszazFmaA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-link"
          >
            <span role="img" aria-label="instagram"><FaInstagram size={20} /></span>{" "}
             @the_chitrakaar
          </a>
        </p>
      </section>

      {/* Add an id "my-art" to this section so it can be scrolled into view */}
      <section id="my-art" className="artist-gallery">
        <h2>My Art Collection</h2>
        <div className="art-grid">
          {artItems.map((item, index) => (
            <div key={index} className="art-card" onClick={() => openModal(index)}>
              <img src={item.src} alt={item.alt} className="art-thumbnail" />
            </div>
          ))}
        </div>
      </section>

      <section className="artist-info">
        <h2>My Art Journey</h2>
        <p>
          My journey in art began during my college days as a proud member of the art club,
          where I refined my skills in sketching and digital art. Though you rarely see me paint,
          every creation tells a story of passion and perseverance.
        </p>
      </section>

      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-prev" onClick={prevImage}>&larr;</button>
            <img
              src={artItems[selectedIndex].src}
              alt={artItems[selectedIndex].alt}
              className="modal-image"
            />
            <button className="modal-next" onClick={nextImage}>&rarr;</button>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </main>
  );
}
