import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 100px 5%;
  background-color: var(--bg-color);
  min-height: 80vh;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  
  span {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;

  @media screen and (max-width: 868px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const InfoCard = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid var(--glass-border);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(79, 172, 254, 0.3);
  }

  svg {
    font-size: 2rem;
    color: #4facfe;
    background: rgba(79, 172, 254, 0.1);
    padding: 0.5rem;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
  }

  div {
    h4 {
      color: var(--text-main);
      font-size: 1.2rem;
      margin-bottom: 0.3rem;
    }
    p {
      color: var(--text-muted);
      font-size: 1rem;
    }
  }
`;

const ContactForm = styled.form`
  flex: 1;
  background: var(--card-bg);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-main);
  font-weight: 500;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 10px;
  background: var(--bg-color);
  border: 1px solid var(--glass-border);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 10px rgba(79, 172, 254, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 10px;
  background: var(--bg-color);
  border: 1px solid var(--glass-border);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 10px rgba(79, 172, 254, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  border-radius: 10px;
  background: var(--accent-gradient);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 242, 254, 0.3);
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <ContactSection id="contact">
      <SectionTitle>Get In <span>Touch</span></SectionTitle>
      <ContentWrapper>
        <ContactInfo>
          <InfoCard>
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Manglore, Karnataka, India</p>
            </div>
          </InfoCard>
          <InfoCard>
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <p>+91 9876543210</p>
            </div>
          </InfoCard>
          <InfoCard>
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>neha3@gmail.com</p>
            </div>
          </InfoCard>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input type="text" id="name" placeholder="Neha D S Jain" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Your Email</Label>
            <Input type="email" id="email" placeholder="neha@example.com" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="message">Your Message</Label>
            <TextArea id="message" placeholder="How can I help you?" required />
          </InputGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContentWrapper>
    </ContactSection>
  );
};

export default Contact;
