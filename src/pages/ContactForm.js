import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormWrapper = styled.section`
  padding: 10rem 1rem 6rem;
  background-color: ${({ darkMode }) => (darkMode ? '#111827' : '#D1D5DB')};
  transition: background-color 0.3s ease;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: ${({ darkMode }) => (darkMode ? '#1F2937' : '#FFFFFF')};
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${({ darkMode }) => (darkMode ? '#FFFFFF' : '#111827')};
  transition: color 0.3s ease;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid ${({ darkMode }) => (darkMode ? '#007bff' : '#ddd')}; // Updated
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ darkMode }) => (darkMode ? '#374151' : '#FFFFFF')};
  color: ${({ darkMode }) => (darkMode ? '#F9FAFB' : '#111827')};

  &::placeholder {
    color: ${({ darkMode }) => (darkMode ? '#D1D5DB' : '#6B7280')};
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid ${({ darkMode }) => (darkMode ? '#007bff' : '#ddd')}; // Updated
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ darkMode }) => (darkMode ? '#374151' : '#FFFFFF')};
  color: ${({ darkMode }) => (darkMode ? '#F9FAFB' : '#111827')};

  &::placeholder {
    color: ${({ darkMode }) => (darkMode ? '#D1D5DB' : '#6B7280')};
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;

const FormButton = styled.button`
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #ffffff;
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
    background: #cccccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin-top: 1.5rem;
  font-weight: bold;
  color: ${({ success }) => (success ? 'green' : 'red')};
`;

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    emailjs
      .sendForm('service_yummw78', 'template_685geia', e.target, 'BvdIKcv1PUbWKdJIW')
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
    <FormWrapper darkMode={darkMode}>
      <FormContainer darkMode={darkMode}>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FormGroup>
            <FormLabel darkMode={darkMode} htmlFor="name">Name</FormLabel>
            <FormInput
              darkMode={darkMode}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel darkMode={darkMode} htmlFor="email">Email</FormLabel>
            <FormInput
              darkMode={darkMode}
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel darkMode={darkMode} htmlFor="message">Message</FormLabel>
            <FormTextarea
              darkMode={darkMode}
              id="message"
              name="message"
              placeholder="Your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormButton type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</FormButton>
          {message && <Message success={message.includes('Successfully')}>{message}</Message>}
        </form>
      </FormContainer>
    </FormWrapper>
  );
};

export default ContactForm;
