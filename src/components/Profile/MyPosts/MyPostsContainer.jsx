import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onChangeTextarea = (newText) => {
        props.store.dispatch(updateNewPostTextActionCreator(newText));
    }

    return (
        <MyPosts state={state}
            updateNewPostText={onChangeTextarea}
            addPost={addPost} />
    );
}

export default MyPostsContainer;