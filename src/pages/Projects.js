// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ProjectsContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ProjectItem = styled.div`
  margin-bottom: 1.5rem;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const ProjectButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  img {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
  &:hover {
    background-color: #555;
  }
`;

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'A Meme Generator built with React.',
      github: 'https://github.com/Sancho566/TAPMUN568_FTO2403_A1_Tapfuma-Mundondo_DJS07'
    },
    {
      name: 'Project 2',
      description: 'A responsive portfolio site built with CSS, HTML & Javascript.',
      github: 'https://github.com/Sancho566/TAPMUN568_FTO2403_A1_Tapfuma-Mundondo_CDV05'
    },
    {
      name: 'Project 3',
      description: 'A Book Connect App.',
      github: 'https://github.com/Sancho566/TAPMUN568_FTO2403_A1_Tapfuma-Mundondo_DJS04'
    },
  ];

  return (
    <ProjectsContainer>
      <h2>My Projects:</h2>
      {projects.map((project, index) => (
        <InViewProject 
          key={index} 
          name={project.name} 
          description={project.description} 
          github={project.github} // Pass the GitHub link
        />
      ))}
    </ProjectsContainer>
  );
};

const InViewProject = ({ name, description, github }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ProjectItem ref={ref} inView={inView}>
      <h3>{name}</h3>
      <p>{description}</p>
      <ProjectButton href={github} target="_blank" rel="noopener noreferrer">
        <img src="\github-6980894_1280(1).png" alt="GitHub" />
        View on GitHub
      </ProjectButton>
    </ProjectItem>
  );
};

export default Projects;
