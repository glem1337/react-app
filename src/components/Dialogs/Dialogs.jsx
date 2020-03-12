import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {

    const dialogElements = props.dialogsPage.dialogs
        .map((dialog, index) => <Dialog key={index} id={dialog.id} name={dialog.name} ava={dialog.ava} />)


    const messageElements = props.dialogsPage.messages
        .map((message, index) => <Message key={index} message={message.text} />)


    let addMessage = () => {
        props.addMessage();
    }

    let onChangeTextarea = (e) => {
        let newText = e.target.value;
        props.updateNewMessageText(newText);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea onChange={onChangeTextarea} name="" id="" cols="30" rows="10" value={props.dialogsPage.newMessageText} />
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    );
}

export default Dialogs;