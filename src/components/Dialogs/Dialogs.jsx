import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";



const MessageItem = (props) => {
    return <div className={style.messageItem}>{props.messageItem}</div>
}
const Dialogs = (props) => {
const newMessage = React.createRef()
const addMessage = () => {
        let newMessageText = newMessage.current.value
    alert( newMessageText)
    }

    let dialogElement = props.dialogElementData
        .map(dialogElement => <DialogItem nameUserItem={dialogElement.nameUserItem} id={dialogElement.id}/>)

    let messageElement = props.messageElementData
        .map(messageElementMap => <MessageItem messageItem={messageElementMap.messageItem} id={messageElementMap.id}/>)

    return <div className={style.dialogs}>

        <div className={style.dialogElement}>{dialogElement}</div>
        <div className={style.messageElement}>

            {messageElement}

        <div> <textarea ref={newMessage}></textarea> </div>

        <div> <button onClick= { addMessage }>add message</button> </div>
        </div>

    </div>

}

export default Dialogs