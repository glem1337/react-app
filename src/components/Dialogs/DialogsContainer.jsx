import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    dialogsPage:  state.dialogsPage
})

const mapDispatchToProps = (dispatch) => ({
    addMessage: () => {
        dispatch(addMessageActionCreator())
    },
    updateNewMessageText: (newText) => {
        dispatch(updateNewMessageTextActionCreator(newText));
    }
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;