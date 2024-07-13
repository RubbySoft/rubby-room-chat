import React, { useState } from 'react';
import axios from 'axios';
import './Css/Subscribe.css'; // Assuming the CSS file is in the same directory

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/contact', formData)
      .then(response => {
        alert('Message sent successfully');
      })
      .catch(error => {
        alert('Message failed to send');
      });
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <span className="heading">Send us a message</span>

          <div className="form-group">
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <label>Subject</label>
          </div>
          <div className="form-group">
            <textarea
              className="form-input"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label>Message</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
