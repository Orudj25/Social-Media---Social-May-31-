import React from 'react';
import './Sidebar-style.css'
import {RssFeed, Chat, Slideshow, Groups,Bookmarks,Quiz,Work,Event,School} from '@mui/icons-material'
import CloseFriends from "../closeFriends/CloseFriends";
import {Users} from "../../Data";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon'/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon'/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <Slideshow className='sidebarIcon'/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Groups className='sidebarIcon'/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmarks className='sidebarIcon'/>
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <Quiz className='sidebarIcon'/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className='sidebarIcon'/>
                        <span className="sidebarListItemText">Job</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon'/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className='sidebarIcon'/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                    {Users.map(u=>(
                        <CloseFriends key = {u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;