// src/pages/Projects.js
import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Global styles with Google Fonts
const GlobalStyle = createGlobalStyle`
  /* Importing Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
`;

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
`;

// Container for the projects section
const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  background: #f9f9f9;
  min-height: 100vh;
`;

// Title styling
const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
`;

// Responsive grid layout for project items
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

// Styled project item
const ProjectItem = styled.div`
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  animation: ${fadeIn} 0.6s ease-out, ${scaleUp} 0.6s ease-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin-top: 0;
    color: #222;
    font-size: 1.8rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin: 1rem 0;
  }
`;

// Updated styled image for each project
const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  border: 2px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    filter: brightness(1.05);
  }
`;

// Styled button for GitHub link
const ProjectButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.2rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.3s ease;

  img {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  &:hover {
    background-color: #555;
    transform: translateY(-3px);
  }
`;

const Projects = () => {
  const projects = [
    {
      name: 'Book Connect App',
      description: 'Utilized HTML5, CSS3 and Javascript to create a responsive and visually appealing design.',
      image: '/book-connect.png',
      netlify: 'https://thebookconnect.netlify.app',
      github: 'https://github.com/Sancho566/TAPMUN568_FTO2403_A1_Tapfuma-Mundondo_DJS03.git',
    },
    {
      name: 'CodeCraft Website',
      description: 'Built with Tailwind CSS for a responsive and modern user interface.',
      image: '/codecraft.png',
      netlify: 'https://codecraft99.netlify.app',
      github: 'https://github.com/Sancho566/codecraft.git',
    },
    {
      name: 'AB Construction Website',
      description: 'Used Tailwind CSS for responsive design and Javascript for interactity.',
      image: '/abconstruction.png',
      netlify: 'https://abconstruction.netlify.app',
      github: 'https://github.com/Sancho566/abConcstructionCo.git',
    },
  ];

  return (
    <>
      <GlobalStyle />
      <ProjectsContainer>
        <Title>My Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <InViewProject
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              netlify={project.netlify}
              github={project.github}
            />
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </>
  );
};

const InViewProject = ({ name, description, image, netlify, github }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ProjectItem ref={ref} inView={inView}>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={netlify} target="_blank" rel="noopener noreferrer">
        <ProjectImage src={image} alt={name} />
      </a>
      <ProjectButton href={github} target="_blank" rel="noopener noreferrer">
        <img src="/github-6980894_1280(1).png" alt="GitHub" />
        View on GitHub
      </ProjectButton>
    </ProjectItem>
  );
};

export default Projects;
