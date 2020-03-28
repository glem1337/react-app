import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageText, addMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => ({
    dialogsPage:  state.dialogsPage
})

const mapDispatchToProps = {
    addMessage,
    updateNewMessageText
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;