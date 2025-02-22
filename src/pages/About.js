import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobileAlt, FaRocket, FaLightbulb } from 'react-icons/fa'; // Additional icons

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

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif; // Apply Montserrat font
`;

const Section = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  max-width: 800px;
  width: 100%;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1e3c72;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 5s ease infinite;
`;

const SubTitle = styled.h3`
  font-size: 1.8rem;
  color: #2a5298;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  color: #ff6b6b;
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #1e3c72;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <InViewSection>
        <Text>
          Hi👋, I'm <Highlight>Tapfuma Mundondo</Highlight>, a passionate <Highlight>Web Developer</Highlight> with a knack for building dynamic and responsive web applications. With a strong foundation in <Highlight>HTML, CSS, JavaScript, and React</Highlight>, I bring ideas to life with clean, maintainable code.
        </Text>
      </InViewSection>
      <InViewSection>
        <Text>
          I love learning new technologies and applying them to solve real-world problems. My goal is to continually improve as a developer and contribute to exciting projects that make a difference.
        </Text>
      </InViewSection>
      <InViewSection>
        <SubTitle>
          <Icon><FaCode /></Icon>
          Web Development
        </SubTitle>
        <Text>
          I create <Highlight>responsive, secure, and scalable</Highlight> web apps and websites that provide users with a cutting-edge experience. My focus is on <Highlight>performance, accessibility, and user-centric design</Highlight>.
        </Text>
      </InViewSection>
      <InViewSection>
        <SubTitle>
          <Icon><FaMobileAlt /></Icon>
          Mobile Development
        </SubTitle>
        <Text>
          I develop <Highlight>functional and intuitive</Highlight> mobile apps tailored to each native platform, ensuring seamless user experiences. I strive to exceed user expectations with every app I build.
        </Text>
      </InViewSection>
      <InViewSection>
        <SubTitle>
          <Icon><FaRocket /></Icon>
          Innovation & Problem Solving
        </SubTitle>
        <Text>
          I thrive on solving complex problems and turning innovative ideas into reality. Whether it's optimizing performance or implementing new features, I'm always ready to tackle challenges head-on.
        </Text>
      </InViewSection>
      <InViewSection>
        <SubTitle>
          <Icon><FaLightbulb /></Icon>
          Continuous Learning
        </SubTitle>
        <Text>
          I believe in the power of continuous learning. I stay updated with the latest trends and technologies in the industry to ensure my skills are always at the forefront of innovation.
        </Text>
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