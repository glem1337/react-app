import React from 'react';
import { updateNewPostText, addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    profilePage:  state.profilePage
})

const mapDispatchToProps = {
    addPost,
    updateNewPostText
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;