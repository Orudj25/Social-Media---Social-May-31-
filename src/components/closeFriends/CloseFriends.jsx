import React from 'react';

const CloseFriends = ({user}) => {
    return (
        <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={user.profilePicture} alt="sidebarFriendImage"/>
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
};

export default CloseFriends;