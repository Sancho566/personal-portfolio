import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`;

const FormButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Message = styled.p`
  color: ${props => (props.success ? 'green' : 'red')};
  font-weight: bold;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yummw78', 'template_685geia', e.target, 'BvdIKcv1PUbWKdJIW')
      .then((result) => {
        setMessage('Message Sent Successfully');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setMessage('Message Failed to Send');
      });
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="message">Message:</FormLabel>
          <FormTextarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </FormGroup>
        <FormButton type="submit">Send</FormButton>
        {message && <Message success={message.includes('Successfully')}>{message}</Message>}
      </form>
    </FormContainer>
  );
};

export default ContactForm;
