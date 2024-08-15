// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #333;
  padding: 2rem;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
