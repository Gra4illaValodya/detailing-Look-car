import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";



const MessageItem = (props) => {
    return <div className={style.messageItem}>{props.messageItem}</div>
}
const Dialogs = (props) => {



    let dialogElement = props.dialogElementData
        .map(dialogElement => <DialogItem nameUserItem={dialogElement.nameUserItem} id={dialogElement.id}/>)

    let messageElement = props.messageElementData
        .map(messageElementMap => <MessageItem messageItem={messageElementMap.messageItem} id={messageElementMap.id}/>)

    return <div className={style.dialogs}>

        <div className={style.dialogElement}>{dialogElement}</div>
        <div className={style.messageElement}>{messageElement}</div>

    </div>

}

export default Dialogs