import React from 'react';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';
import { FaPhone, FaTwitter } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactDetails = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

const IconLink = styled.a`
  color: #1DA1F2;
  font-size: 2rem;
  margin: 0 1rem;

  &:hover {
    color: #0a8cd8;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact me</h2>
      <p>Feel free to reach out to me through the form below:</p>
      <ContactForm />
      <ContactDetails>
        <IconLink href="tel:+27677805891">
          <FaPhone />
        </IconLink>
        <IconLink href="https://twitter.com/MundondoTapfuma" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </IconLink>
      </ContactDetails>
    </ContactContainer>
  );
};

export default Contact;
