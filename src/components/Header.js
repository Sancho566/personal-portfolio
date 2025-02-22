import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const logoAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  font-family: 'Overpass', sans-serif;
  padding: 1.5rem 2rem;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;
  animation: ${logoAnimation} 2s infinite;
  background: linear-gradient(135deg, #ffcc00, #ff6699);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    display: ${props => (props.open ? 'flex' : 'none')};
    animation: ${fadeIn} 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Overpass', sans-serif;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
  background: linear-gradient(135deg, #ffcc00, #ff6699);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    transform: translateY(-3px);
  }

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background: linear-gradient(135deg, #ffcc00, #ff6699);
    transition: width 0.3s ease-in-out;
    position: absolute;
    left: 0;
    bottom: -5px;
  }

  &:hover:after {
    width: 100%;
  }
`;

const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  background: linear-gradient(135deg, #ffcc00, #ff6699);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>Tapfuma</Logo>
        <ToggleButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </ToggleButton>
        <NavLinks open={menuOpen}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;