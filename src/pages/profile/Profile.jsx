import React from 'react';
import './Profile.css'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="/media-files/post/3.jpeg"/>
                            <img className='profileUserImg' src="/media-files/person/7.jpeg"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Oruj Mammadov</h4>
                            <span className='profileInfoDesc'>Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;