// src/components/Header.js
import React, { useEffect } from 'react';

const Header = ({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen }) => {
  useEffect(() => {
    const mobileLinks = document.querySelectorAll('#mobileMenu a');
    const handleClick = () => setMobileMenuOpen(false);
    
    mobileLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });
    
    return () => {
      mobileLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [setMobileMenuOpen]);

  return (
    <header className="fixed w-full h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-3">
            <img
              src="/portfolio.png"
              alt="Tapfuma Mundondo Logo"
              className="w-40 h-auto"
            />           
          </a>
          
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/projects" className="nav-link">Projects</a>
              <a href="/skills" className="nav-link">Skills</a>
              <a href="/contact" className="nav-link">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <div 
                className={`dark-mode-toggle w-[50px] h-[26px] rounded-[13px] relative cursor-pointer transition ${
                  darkMode ? 'bg-gray-600' : 'bg-gray-200'
                }`}
                onClick={toggleDarkMode}
              >
                <div className={`absolute w-5 h-5 rounded-full top-[3px] left-[3px] transition-transform ${
                  darkMode 
                    ? 'bg-gray-200 translate-x-[24px]' 
                    : 'bg-white'
                }`}></div>
              </div>
              
              <button 
                className="md:hidden focus:outline-none" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        id="mobileMenu"
        className={`md:hidden bg-white dark:bg-gray-800 shadow-lg ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-2 flex flex-col space-y-4 pb-6">
          <a href="/" className="py-2 border-b border-gray-100 dark:border-gray-700">Home</a>
          <a href="/about" className="py-2 border-b border-gray-100 dark:border-gray-700">About</a>
          <a href="/projects" className="py-2 border-b border-gray-100 dark:border-gray-700">Projects</a>
          <a href="/skills" className="py-2 border-b border-gray-100 dark:border-gray-700">Skills</a>
          <a href="/contact" className="py-2">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
