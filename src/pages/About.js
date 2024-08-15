// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>About Me:</h2>
      <InViewSection>
        Hi👋, I'm Tapfuma Mundondo, a passionate Web Developer with a knack for building dynamic and responsive web applications.
        With a strong foundation in HTML, CSS, JavaScript, and React, I bring ideas to life with clean, maintainable code.
      </InViewSection>
      <InViewSection>
        I love learning new technologies and applying them to solve real-world problems. My goal is to continually improve as a developer and contribute to exciting projects.
      </InViewSection>
      <InViewSection>
       <h3>Web Delopment</h3>
       I create Responsive secured web apps and websites that give users a cutting edge experience.
      </InViewSection>
      <InViewSection>
        <h4>Mobile Apps</h4>
       I create Functional Apps unique to each native plartfom that makes working with your customers very efficient. I ensure that all custom apps exceed user expectations every time.
      </InViewSection>
    </AboutContainer>
  );
};

const InViewSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section ref={ref} inView={inView}>
      {children}
    </Section>
  );
};

export default About;
