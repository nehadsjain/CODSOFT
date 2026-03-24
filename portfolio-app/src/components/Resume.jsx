import React from 'react';
import styled from 'styled-components';
import { FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ResumeSection = styled.section`
  padding: 100px 5%;
  background-color: var(--card-bg);
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

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TimelineColumn = styled.div``;

const ColumnTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-main);

  svg {
    color: #4facfe;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 2.5rem;
  border-left: 2px solid var(--glass-border);

  &::before {
    content: '';
    position: absolute;
    left: -7px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #4facfe;
    box-shadow: 0 0 10px rgba(79, 172, 254, 0.5);
  }
`;

const TimelineDate = styled.span`
  background: rgba(79, 172, 254, 0.1);
  color: #4facfe;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 0.8rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  color: var(--text-main);
  margin-bottom: 0.4rem;
`;

const TimelineSubtitle = styled.h5`
  font-size: 1rem;
  color: var(--text-muted);
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

const TimelineText = styled.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const DownloadButtonContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
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

const Resume = () => {
  return (
    <ResumeSection id="resume">
      <SectionTitle>My <span>Resume</span></SectionTitle>
      <ContentWrapper>
        <TimelineColumn>
          <ColumnTitle><FaGraduationCap /> Education</ColumnTitle>
          <TimelineItem>
            <TimelineDate>2023 - Present</TimelineDate>
            <TimelineTitle>Bachelor of Computer Science</TimelineTitle>
            <TimelineSubtitle>University Name (Expected 2027)</TimelineSubtitle>
            <TimelineText>
              Currently pursuing my degree with a focus on web technologies, data structures, and algorithms. Active member of the coding club.
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>2021 - 2023</TimelineDate>
            <TimelineTitle>High School Diploma</TimelineTitle>
            <TimelineSubtitle>High School Name</TimelineSubtitle>
            <TimelineText>
              Completed with distinction. Participated in various technical and science competitions.
            </TimelineText>
          </TimelineItem>
        </TimelineColumn>

        <TimelineColumn>
          <ColumnTitle><FaBriefcase /> Experience & Projects</ColumnTitle>
          <TimelineItem>
            <TimelineDate>2023 - Present</TimelineDate>
            <TimelineTitle>Frontend Web Developer Intern/Student</TimelineTitle>
            <TimelineSubtitle>Self-Directed Learning & Projects</TimelineSubtitle>
            <TimelineText>
              Building various modern web applications, including UI clones and dynamic portfolios like this one, to strengthen my technical skills.
            </TimelineText>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>Summer 2023</TimelineDate>
            <TimelineTitle>Open Source Contributor</TimelineTitle>
            <TimelineSubtitle>GitHub Community Projects</TimelineSubtitle>
            <TimelineText>
              Contributed to beginner-friendly open-source projects by fixing UI bugs and writing documentation.
            </TimelineText>
          </TimelineItem>
        </TimelineColumn>
      </ContentWrapper>
      
      <DownloadButtonContainer>
        <DownloadButton href="/Neha_DS_Jain_CV.txt" download="Neha_DS_Jain_CV.txt">
          <FaDownload /> Download CV
        </DownloadButton>
      </DownloadButtonContainer>
    </ResumeSection>
  );
};

export default Resume;
