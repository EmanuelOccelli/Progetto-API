import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const CustomNavbarContainer = styled(Navbar)`
  background-color: #1a1a1a;
  padding: 10px;
`;

const CustomLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const CustomNavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const CustomNavLink = styled.li`
  margin-right: 20px;
`;

const CustomNavLinkItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #3498db;
  }
`;

const CharacterButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CharacterButton = styled(Link)`
  margin-right: 10px;
`;

const CharacterLogo = styled.img`
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
`;

const CustomNavbar = () => {
  return (
    <CustomNavbarContainer expand="lg">
      <Container>
        <CustomLogo src="/IMG/D2_Logo.png" alt="Destiny 2 Logo" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <CustomNavLinks>
            <CustomNavLink>
              <CustomNavLinkItem to="/personaggi/titan">Titano</CustomNavLinkItem>
            </CustomNavLink>
            <CustomNavLink>
              <CustomNavLinkItem to="/personaggi/hunter">Cacciatore</CustomNavLinkItem>
            </CustomNavLink>
            <CustomNavLink>
              <CustomNavLinkItem to="/personaggi/warlock">Stregone</CustomNavLinkItem>
            </CustomNavLink>
          </CustomNavLinks>
        </Navbar.Collapse>
        <CharacterButtonsContainer>
          <CharacterButton to="/personaggi/titan">
            <CharacterLogo src="/IMG/Titan_logo.jpg" alt="Titano" />
          </CharacterButton>
          <CharacterButton to="/personaggi/hunter">
            <CharacterLogo src="/IMG/Hunter_logo.jpg" alt="Cacciatore" />
          </CharacterButton>
          <CharacterButton to="/personaggi/warlock">
            <CharacterLogo src="/IMG/Warlock_logo.jpg" alt="Stregone" />
          </CharacterButton>
        </CharacterButtonsContainer>
      </Container>
    </CustomNavbarContainer>
  );
};

export default CustomNavbar;
