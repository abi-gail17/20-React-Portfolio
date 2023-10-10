import React, { useState } from 'react';
import "../assets/style/contact.css";

function Contact() {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
        });
      
        const [errors, setErrors] = useState({
          email: '',
        });
      
        const [successMessage, setSuccessMessage] = useState('');
      
        const handleChange = (e) => {
          const { name, value } = e.target;
      
          setFormData({
            ...formData,
            [name]: value,
          });
      
          setErrors({
            ...errors,
            email: '',
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (!isValidEmail(formData.email)) {
            setErrors({
              ...errors,
              email: 'Please enter a valid email address.',
            });
            return;
          }
      

          setSuccessMessage('Form submitted successfully!');
          setTimeout(() => {
            setSuccessMessage('');
            window.location.reload();
          }, 1000); 
        };
      
        const isValidEmail = (email) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        };

  return (
    <div className='contact-me'>
      <h2>Contact Me</h2>
      <p>If you have any questions or just want to reach out, enter your contact details below.</p>
      <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Contact;
