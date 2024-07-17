import React from 'react';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import UserList from './UserList';
import ChatRoomInfo from './ChatRoomInfo';
import './Css/chatroom.css';

const ChattingRoom = () => {
    return (
        <div className="chat-room">
            <ChatRoomInfo />
            <div className="chat-main">
                <ChatWindow />
                <UserList />
            </div>
            <MessageInput />
        </div>
    );
}

export default ChattingRoom;
