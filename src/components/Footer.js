// src/components/Footer.js
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center md:text-left">
          &copy; {currentYear} Tapfuma Arnold. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Sancho566"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            <i className="fab fa-github text-xl"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/tapfuma-arnold-mundondo-7a3573329"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
