import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--card-bg);
  padding: 3rem 5%;
  border-top: 1px solid var(--glass-border);
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  a {
    color: var(--text-muted);
    font-size: 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #4facfe;
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  
  span {
    color: #e94560;
  }
`;

const FooterTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Portfolio.</FooterTitle>
      <SocialLinks>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
      </SocialLinks>
      <Copyright>
        &copy; {new Date().getFullYear()} Neha D S Jain.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
