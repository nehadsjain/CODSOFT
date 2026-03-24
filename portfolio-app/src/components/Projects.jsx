import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 5%;
  background-color: var(--bg-color);
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  
  span {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: var(--card-bg);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--glass-border);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(79, 172, 254, 0.3);
  }
`;



const ProjectInfo = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-main);
`;

const ProjectDescription = styled.p`
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: rgba(79, 172, 254, 0.1);
  color: #4facfe;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-main);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #4facfe;
  }
`;

const Projects = () => {
  const projectsData = [
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application showing current conditions and forecasts for multiple cities using external APIs.',
      tags: ['React', 'OpenWeather API', 'CSS Grid'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Campus Grievance Redressal Portal',
      description: 'A dedicated portal for submitting, tracking, and resolving on-campus student grievances efficiently.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Featured <span>Projects</span></SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TagContainer>
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </TagContainer>
              <LinksContainer>
                <ProjectLink href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> Code
                </ProjectLink>
                <ProjectLink href={project.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </ProjectLink>
              </LinksContainer>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
