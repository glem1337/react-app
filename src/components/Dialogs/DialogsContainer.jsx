import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/dialogs-reducer';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onChangeTextarea = (newText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newText));
    }

    return (
        <Dialogs state={state} addMessage={addMessage} updateNewMessageText={onChangeTextarea} />
    );
}

export default DialogsContainer;