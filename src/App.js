import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Developer from './pages/Developer';
import Artist from './pages/Artist';
import Individual from './pages/Individual';
import MyJourney from './components/MyJourney';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop/>
        <Navbar />
        <div className="body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/individual" element={<Individual />} />
            <Route path="/myjourney" element={<MyJourney />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;