import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Field, reduxForm, reset} from "redux-form";
import {isRequired, maxLengthCreator} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControls/FormControls";


const maxLength = maxLengthCreator(10);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"New message text..."}
                   validate={[isRequired, maxLength]}
                   name={"message"} component={Textarea}/>
            <button>add message</button>
        </form>
    )
};

const resetForm = (result, dispatch) =>
    dispatch(reset('message'));

const MessageReduxForm = reduxForm({
    form: 'message',
    onSubmitSuccess: resetForm,
})(MessageForm)

class Dialogs extends React.Component {

    onSubmit = values => {
        this.props.addMessage(values.message);
    }

    render() {

        const dialogElements = this.props.dialogsPage.dialogs
            .map((dialog, index) => <Dialog key={index} id={dialog.id} name={dialog.name} ava={dialog.ava}/>)


        const messageElements = this.props.dialogsPage.messages
            .map((message, index) => <Message key={index} message={message.text}/>)

        return (
            <div className={s.wrapper}>
                <div className={s.dialogs}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                    <MessageReduxForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

export default Dialogs;