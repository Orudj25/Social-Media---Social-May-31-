import React from 'react';
import './Rightbar-style.css'
import {Users} from "../../Data";
import Online from "../online/Online";

const HomeRightbar = () => {
    return (
        <>
            <div className="birthdayContainer">
                <img className='birthdayImg' src="/media-files/gift.png"/>
                <span className='birthdayText'>
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today!
                    </span>
            </div>
            <img className='rightbarAd' src="/media-files/ad-new.png" alt=""/>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(u => (
                    <Online key={u.id} user={u}/>
                ))}
            </ul>
        </>
    )
}
const ProfileRightbar = () => {
    return (
        <>
            <h4 className='rightbarTitle'>User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue"> Baku</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue"> Azerbaijan, Baku</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue"> Single</span>
                </div>
            </div>
            <h4 className='rightbarTitle'>User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className='rightbarFollowingImg' src="/media-files/person/9.jpeg"/>
                    <span className="rightbarFollowingName">Claudia Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img className='rightbarFollowingImg' src="/media-files/person/8.jpeg"/>
                    <span className="rightbarFollowingName">Helga Pataki</span>
                </div>
                <div className="rightbarFollowing">
                    <img className='rightbarFollowingImg' src="/media-files/person/7.jpeg"/>
                    <span className="rightbarFollowingName">Carter Troy</span>
                </div>
                <div className="rightbarFollowing">
                    <img className='rightbarFollowingImg' src="/media-files/person/6.jpeg"/>
                    <span className="rightbarFollowingName">Michel Bravo</span>
                </div>
                <div className="rightbarFollowing">
                    <img className='rightbarFollowingImg' src="/media-files/person/3.jpeg"/>
                    <span className="rightbarFollowingName">Laura Kuznetcova</span>
                </div>
            </div>
        </>
    )
}

const Rightbar = ({profile}) => {

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
};

export default Rightbar;