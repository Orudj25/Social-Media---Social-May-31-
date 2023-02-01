import React, {useState} from 'react';
import './Post.css'
import {MoreVert} from '@mui/icons-material'
import {Users} from "../../Data";

const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg'
                             src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}/>
                        <span className='postUserName'>
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        <span className='postDate'>
                            {post.date}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImage' src={post.photo}/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' onClick={likeHandler} src="/media-files/like.png"/>
                        <img className='heartIcon' onClick={likeHandler} src="/media-files/heart.png"/>
                        <span className="postLikeCounter">{like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;