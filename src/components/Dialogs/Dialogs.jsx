import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageActionCreator, updateTextareaDialogActionCreator} from "../../redux/state";


const Dialogs = (props) => {
    let state = props.store.getState().dialogPage
    let dialogElement = state.dialogElementData
        .map(dialogElementMap => <DialogItem nameUserItem={dialogElementMap.nameUserItem}
                                             id={dialogElementMap.id}/>)
    let messageElement = state.messageElementData
        .map(messageElementMap => <MessageItem messageItem={messageElementMap.messageItem}
                                               id={messageElementMap.id}/>)
    let textareaDialog = state.textareaText

    const addMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    const textareaChange  = (event) => {
        let textareaDialog =  event.target.value;
        props.store.dispatch(updateTextareaDialogActionCreator(textareaDialog))
    }








    return <div className={style.dialogs}>

        <div className={style.dialogElement}>
            {dialogElement}
        </div>

        <div className={style.messageElement}>
            <div>{messageElement}</div>
        <div>
                <textarea    value={textareaDialog}
                             onChange={textareaChange}
                             placeholder="Вводите сообщение..."
                             className={style.inputTextMessage}
                             />
            </div>
            <div>
                <button onClick={addMessageClick}>
                   send message
                </button>
            </div>
        </div>

    </div>

}

export default Dialogs