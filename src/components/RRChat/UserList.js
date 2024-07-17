import React from 'react';
import './Css/userlist.css';

const UserList = () => {
    const users = ['User1', 'User2', 'User3'];

    return (
        <div className="user-list">
            <h3>Active Users</h3>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
