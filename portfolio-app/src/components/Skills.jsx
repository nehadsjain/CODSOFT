import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython } from 'react-icons/fa';
import { SiC } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 100px 5%;
  background-color: var(--bg-color);
  min-height: 80vh;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  
  span {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  background: var(--card-bg);
  padding: 2rem 1rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(79, 172, 254, 0.1);
    border-color: rgba(79, 172, 254, 0.3);
  }

  svg {
    font-size: 3rem;
    color: ${({ color }) => color || 'var(--text-main)'};
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  h4 {
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--text-main);
  }
`;

const Skills = () => {
  const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Java', icon: <FaJava />, color: '#007396' },
    { name: 'C', icon: <SiC />, color: '#A8B9CC' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' }
  ];

  return (
    <SkillsSection id="skills">
      <SectionTitle>My <span>Skills</span></SectionTitle>
      <SkillsGrid>
        {skillsData.map((skill, index) => (
          <SkillCard key={index} color={skill.color}>
            {skill.icon}
            <h4>{skill.name}</h4>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
