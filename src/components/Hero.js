// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ darkMode }) => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.2
      }
    }
  };

  const blobVariant = {
    animate: {
      scale: [1, 1.2, 1.1, 1.3, 1],
      opacity: [0.1, 0.3, 0.2, 0.4, 0.1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const rippleVariant = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0, 0.4, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  // Helper to pick text color
  const lightText = 'text-zinc-900';
  const darkTextPrimary = 'text-gray-100';
  const darkTextSecondary = 'text-gray-300';

  return (
    <section
      id="home"
      className={`
        min-h-[calc(100vh-4rem)] flex items-center pt-16
        ${darkMode ? 'bg-gray-900' : 'bg-gray-300'}
      `}
    >
      <div className="container mx-auto px-6 py-0 flex flex-col-reverse md:flex-row items-center justify-between md:gap-4">

        {/* Text Column */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:-ml-4 md:pl-20"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <h1
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? darkTextPrimary : lightText
            }`}
          >
            Hi, I'm{' '}
            <span className="text-blue-500 dark:text-blue-400">
              Tapfuma Arnold
            </span>
          </h1>

          <h2
            className={`text-2xl md:text-3xl font-semibold mb-6 ${
              darkMode ? darkTextSecondary : lightText
            }`}
          >
            Frontend Developer
          </h2>

          <p
            className={`text-lg mb-8 max-w-lg mx-auto md:mx-0 ${
              darkMode ? darkTextSecondary : lightText
            }`}
          >
            I create beautiful, responsive websites with modern technologies.
            Passionate about UI/UX and crafting seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/ContactForm"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Contact Me
            </Link>
            <Link
              to="/projects"
              className={`
                border border-blue-500 px-6 py-3 rounded-lg font-medium transition duration-300
                ${darkMode ? 'dark:hover:bg-gray-800 text-gray-300' : 'hover:bg-blue-50 text-blue-500'}
              `}
            >
              View Work
            </Link>
          </div>

          <motion.div
            className={`flex mt-8 justify-center md:justify-start space-x-4 text-2xl ${
              darkMode ? darkTextSecondary : lightText
            }`}
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            <a href="https://github.com/Sancho566" className="hover:text-blue-500 transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/tapfuma-arnold-mundondo-7a3573329" className="hover:text-blue-500 transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2 flex justify-center relative mb-8 md:mb-0">
          <motion.div
            className="absolute w-80 h-80 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full filter blur-2xl opacity-30 dark:opacity-20"
            variants={blobVariant}
            animate="animate"
          />

          <motion.div
            className="absolute w-80 h-80 rounded-full border-4 border-blue-300"
            variants={rippleVariant}
            animate="animate"
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full border-2 border-blue-200"
            variants={rippleVariant}
            animate="animate"
            style={{ transitionDelay: '0.5s' }}
          />

          <motion.img
            src="IMG_20230707_100924.jpg"
            alt="Profile"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl hover:scale-105 transition-transform z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
