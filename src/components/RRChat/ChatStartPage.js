import React, { useState } from 'react';
import axios from 'axios';
import './Css/ChatStartPage.css';

const ChatStartPage = () => {
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      alert('Username cannot be empty!');
      return;
    }

    localStorage.setItem('username', username); // Save username to localStorage
    window.location.href = '/RoomChatPage';
    // Example backend logic to save username (replace with your actual API endpoint)
    axios.post('http://localhost:5000/api/set-username', { username })
      .then(response => {
        console.log('Username set successfully');
        setIsUsernameSet(true); // Update state to reflect username is set
      })
      .catch(error => {
        console.error('Failed to set username');
        // Handle error
      });
  };

  // Redirect logic using useEffect
  React.useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsUsernameSet(true);
    }
  }, []);

  return (
    <div className="chat-start-page">

        <>
          <h2>Get Started</h2>
          <center>
            <form className='form-group-user' onSubmit={handleUsernameSubmit}>
              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Set Your Username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <button type="submit">Set Username</button>
            </form>
          </center>
        </>


    </div>
  );
};

export default ChatStartPage;
