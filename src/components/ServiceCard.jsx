// src/components/ServiceCard.jsx
import React from 'react';
import './Css/Subscribe.css';
const ServiceCard = ({ title, description, features }) => (
  <div className="form-container">
    <h3>{title}</h3>
    <p className='serp'>{description}</p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;
