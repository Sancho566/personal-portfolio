import React from 'react';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactDetails = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const IconLink = styled.a`
  color: #1DA1F2;
  font-size: 2.5rem;
  margin: 0 1rem;
  transition: color 0.3s;

  &:hover {
    color: #0a8cd8;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Heading>Contact me</Heading>
      <Text>Feel free to reach out to me through the form below:</Text>
      <ContactForm />
      <ContactDetails>
        <IconLink href="tel:+27677805891">
          <FaPhone />
        </IconLink>
        <IconLink href="mailto:tapfumamundondo@gmail.com">
          <FaEnvelope />
        </IconLink>
      </ContactDetails>
    </ContactContainer>
  );
};

export default Contact;
