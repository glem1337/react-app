import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                <img className={s.pic} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg" alt="" />
                <span>Likes: {props.likes}</span>
            </div>
            <div className={s.text}>{props.text}</div>
        </div>
    );
}

export default Post;