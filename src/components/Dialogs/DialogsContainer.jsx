import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {updateNewPostTextActionCreator} from "../../redux/profile-reducer";

const DialogsContainer = (props) => {

    const state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        // props.onSendMessageClick
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        // props.undateNewText(body)
        props.store.dispatch(action);
    }

    return (
        <Dialogs onSendMessageClick={onSendMessageClick}
                 onNewMessageChange={updateNewMessageBodyCreator}/>
    )
}

export default DialogsContainer;