import React, { useState } from "react";
import axios from "axios";
import './Css/Subscribe.css';

const Subscribe =()=> {

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/subscribe', { email }).then(response => {
            alert('Subscription successful');
        })
        .catch(error => {
            alert('Subscription failed');
        });
    };

    return (
<div className="form-container">
  <form className="form" onSubmit={handleSubmit}>
    <span className="heading">Subscribe</span>

    <div className="form-group">
      <input className="form-input" required="" type="email" name="email" value={email} onChange={handleChange} />
      <label>Email</label>
    </div>
    <button>SUBSCIBE</button>
  </form>
</div>

    )
}

export default Subscribe;