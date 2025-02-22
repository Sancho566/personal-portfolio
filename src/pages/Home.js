// src/pages/Home.js
import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

// Global styles with Google Fonts
const GlobalStyle = createGlobalStyle`
  /* Importing Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
`;

// Keyframe for the floating animation
const float = keyframes`
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-20px);
  }
`;

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
  background: url('/deveev.jpeg')
    no-repeat center center/cover;
  color: #fff;
  text-align: center;

  /* Dark overlay for better text readability */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  /* Ensure all content sits above the overlay */
  & > * {
    position: relative;
    z-index: 2;
  }

  /* Responsive typography */
  h1 {
    font-size: 2.5rem;
    margin: 0.5rem 0;
  }
  h2 {
    font-size: 1.8rem;
    margin: 0.5rem 0;
  }
  p {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
`;

const FloatingImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  animation: ${float} 4s ease-in-out infinite;
  margin-top: 1rem;

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <HomeContainer>
        <h1>Hi 👋, I am Tapfuma Arnold Mundondo</h1>
        <h2>Web Developer & UI/UX Designer</h2>
        <p>Welcome to my Portfolio</p>
        <FloatingImage src="/IMG_20230707_100924(1).jpg" alt="My Image" />
      </HomeContainer>
    </>
  );
};

export default Home;
