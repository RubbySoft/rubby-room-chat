import React, { useState } from 'react';
import './Css/messageinput.css';

const MessageInput = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        // Handle sending message
        console.log(message);
        setMessage('');
    }

    return (
        <div className="message-input">
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Type a message..." 
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
}

export default MessageInput;
