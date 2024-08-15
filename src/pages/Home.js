// src/pages/Home.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('https://i.pinimg.com/736x/3d/4a/e0/3d4ae08a57c365705ba35ce65d24f8ed.jpg') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 30px;
`;

const FloatingImage = styled.img`
  width: 130px; /* Adjust size as needed */
  height: auto;
  border-radius: 100%;
  animation: ${float} 4s ease-in-out infinite;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Hi👋, I am Tapfuma Mundondo</h1>
      <h2>Web Developer, UI/UX Designer</h2>
      <p>Welcome to my Portfolio</p>
      <FloatingImage src="\IMG_20230707_100924(1).jpg" alt="My Image"/>
    </HomeContainer>
  );
};

export default Home;
