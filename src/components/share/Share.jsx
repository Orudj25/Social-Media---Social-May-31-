import React from 'react';
import './Share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg'
                         src="/media-files/person/Oruj photo.jpg" alt=""
                    />
                    <input className='shareInput'
                           placeholder='What`s in your mind Oruj?'
                    />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia classname='shareIcon' htmlColor='red'/>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label classname='shareIcon' htmlColor='blue'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room classname='shareIcon' htmlColor='green'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions classname='shareIcon' htmlColor='goldenrod'/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Share;