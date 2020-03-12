import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    profilePage:  state.profilePage
})

const mapDispatchToProps = (dispatch) => ({
    addPost: () => {
        dispatch(addPostActionCreator())
    },
    updateNewPostText: (newText) => {
        dispatch(updateNewPostTextActionCreator(newText));
    }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;