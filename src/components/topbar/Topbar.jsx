import React from 'react';
import './Topbar-style.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material'


const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Social May 31</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input placeholder='Search for friend, post or video' className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="torbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/media-files/person/Oruj photo.jpg" alt="profile-picture" className="topbarImg"/>
            </div>
        </div>
    );
};

export default Topbar;