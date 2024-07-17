import React from 'react';
import './Css/chatwindow.css';

const ChatWindow = () => {
    const messages = [
        { id: 1, user: 'User1', text: 'Hello!' },
        { id: 2, user: 'User2', text: 'Hi there!' },
    ];

    return (
        <div className="chat-window">
            {messages.map((message) => (
                <div key={message.id} className="chat-message">
                    <strong>{message.user}</strong>: {message.text}
                </div>
            ))}
        </div>
    );
}

export default ChatWindow;
