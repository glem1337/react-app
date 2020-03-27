import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageText, addMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    dialogsPage:  state.dialogsPage
})

const mapDispatchToProps = {
    addMessage,
    updateNewMessageText
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;