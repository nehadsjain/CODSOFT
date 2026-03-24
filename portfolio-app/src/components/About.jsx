import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 5% 50px;
  background-color: var(--bg-color);
  id: about;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media screen and (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Greeting = styled.h3`
  font-size: 1.5rem;
  color: #4facfe;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;

  span {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Substring = styled.h2`
  font-size: 2rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  max-width: 600px;

  @media screen and (max-width: 968px) {
    margin: 0 auto 2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  background: var(--accent-gradient);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 242, 254, 0.3);
  }
`;

const SecondaryButton = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  background: transparent;
  color: var(--text-main);
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  border: 2px solid #4facfe;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79, 172, 254, 0.1);
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 968px) {
    justify-content: center;
  }

  a {
    color: var(--text-muted);
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #4facfe;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4facfe;
  box-shadow: 0 0 40px rgba(79, 172, 254, 0.4);
  position: relative;

  @media screen and (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <ContentWrapper>
        <TextContent>
          <Greeting>Hello, I'm</Greeting>
          <Title>Neha <span>D S Jain</span></Title>
          <Substring>Computer Science Student & Aspiring Developer</Substring>
          <Description>
            I am a student passionate about building modern web applications. 
            I love learning new technologies and turning creative ideas into user-friendly digital experiences.
          </Description>
          <ButtonContainer>
            <PrimaryButton href="#contact">Get In Touch</PrimaryButton>
            <SecondaryButton href="#projects">View Work</SecondaryButton>
          </ButtonContainer>
          <SocialLinks>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </SocialLinks>
        </TextContent>
        <ImageContainer>
          <ProfileImage src="/profile.jpeg" alt="Neha D S Jain Profile" />
        </ImageContainer>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
