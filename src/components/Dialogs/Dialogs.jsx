import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    const addMessage = () => {
        let newMessageText = newMessageElement.current.value
        props.addMessage(newMessageText)
        props.updateMessageText('')

    }

    const freshText  = () => {
        let text = newMessageElement.current.value;
        props.updateMessageText(text)

    }
    let dialogElement = props.dialogElementData
        .map(dialogElementMap => <DialogItem nameUserItem={dialogElementMap.nameUserItem}
                                          id={dialogElementMap.id}/>)

    let messageElement = props.messageElementData
        .map(messageElementMap => <MessageItem messageItem={messageElementMap.messageItem}
                                               id={messageElementMap.id}/>)
    const newMessageElement = React.createRef()
    return <div className={style.dialogs}>

        <div className={style.dialogElement}>
            {dialogElement}
        </div>

        <div className={style.messageElement}>
            {messageElement}

            <div>

                <textarea    value={props.textareaText}
                             onChange={freshText}
                            className={style.inputTextMessage}
                            ref={newMessageElement}
                         />
            </div>

            <div>
                <button onClick={addMessage}>
                    add message
                </button>
            </div>
        </div>

    </div>

}

export default Dialogs