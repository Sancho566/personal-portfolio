import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './pages/About';
import Projects from './pages/projects';
import Skills from './pages/Skills';
import ContactForm from './pages/ContactForm';
import Footer from './components/Footer';

function AppContent({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();

  return (
    <div
      className={`min-h-screen scroll-smooth transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'
      }`}
    >
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
        <Routes>
          <Route path="/" element={<Hero darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactForm darkMode={darkMode} />} />
        </Routes>
      
      <Footer />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const userPrefersDark =
      window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <AppContent
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </BrowserRouter>
  );
}

export default App;