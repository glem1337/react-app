import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                let onChangeTextarea = (newText) => {
                    store.dispatch(updateNewMessageTextActionCreator(newText));
                }
                return <Dialogs state={state} addMessage={addMessage} updateNewMessageText={onChangeTextarea} />
            }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;