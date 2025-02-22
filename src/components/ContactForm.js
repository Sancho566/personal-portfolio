import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  background: #ffffff;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  transition: 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;

const FormButton = styled.button`
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #fff;
  padding: 0.85rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #003b80);
    transform: scale(1.05);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  color: ${(props) => (props.success ? 'green' : 'red')};
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    emailjs.sendForm('service_yummw78', 'template_685geia', e.target, 'BvdIKcv1PUbWKdJIW')
      .then(() => {
        setMessage('Message Sent Successfully');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setMessage('Message Failed to Send');
      })
      .finally(() => setLoading(false));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required />
        </FormGroup>
        <FormButton type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</FormButton>
        {message && <Message success={message.includes('Successfully')}>{message}</Message>}
      </form>
    </FormContainer>
  );
};

export default ContactForm;
