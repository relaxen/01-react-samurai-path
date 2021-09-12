import c from './Post.module.scss';
import React from 'react';
import avatar from "./photo.png";


const Post = ({message = "Don`t know what i want", likesCount = 0}) => {
    return (
        <div className={c.item}>
            <div className="post__avatar">
                <img className={c.avatar} src={avatar} alt="avatar"/>
            </div>
            <div className="post__message">
                {message}
                <div>likes - {likesCount}</div>
            </div>
        </div>
    );
}

export default Post;