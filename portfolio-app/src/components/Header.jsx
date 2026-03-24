import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: ${({ scrolled }) => (scrolled ? 'var(--glass-bg)' : 'transparent')};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ scrolled }) => (scrolled ? 'var(--glass-border)' : 'transparent')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  letter-spacing: 1px;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    width: 100%;
    height: calc(100vh - 80px);
    background: var(--bg-color);
    transition: all 0.4s ease;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #4facfe;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--accent-gradient);
      border-radius: 2px;
    }
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: var(--text-main);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Portfolio.
      </Logo>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu click={click}>
        <NavItem><a href="#about" onClick={closeMenu}>About</a></NavItem>
        <NavItem><a href="#skills" onClick={closeMenu}>Skills</a></NavItem>
        <NavItem><a href="#projects" onClick={closeMenu}>Projects</a></NavItem>
        <NavItem><a href="#resume" onClick={closeMenu}>Resume</a></NavItem>
        <NavItem><a href="#contact" onClick={closeMenu}>Contact</a></NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
