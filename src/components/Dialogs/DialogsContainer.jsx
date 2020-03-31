import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageText, addMessage} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

const mapDispatchToProps = {
    addMessage,
    updateNewMessageText
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);