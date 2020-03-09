import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    const postElements = props.state.posts
        .map((post, index) => <Post key={index} likes={post.likes} text={post.text} />)


    let addPost = () => {
        props.addPost();
    }

    let onChangeTextarea = (e) => {
        let newText = e.target.value;
        props.updateNewPostText(newText);
    }

    return (
        <div className={s.mypost}>
            <strong>My post</strong>
            <textarea onChange={onChangeTextarea} value={props.state.newPostText} cols="30" rows="10" />
            <button onClick={addPost} >add post</button>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;