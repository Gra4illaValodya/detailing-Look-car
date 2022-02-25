import React from "react";
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";




const MessageItem = (props) => {


    return <div className={style.messageItem}>{props.messageItem}

    </div>
}

export default MessageItem