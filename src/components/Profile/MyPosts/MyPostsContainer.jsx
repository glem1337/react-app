import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onChangeTextarea = (newText) => {
                    store.dispatch(updateNewPostTextActionCreator(newText));
                }
                return <MyPosts state={state}
                    updateNewPostText={onChangeTextarea}
                    addPost={addPost} />
            }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;