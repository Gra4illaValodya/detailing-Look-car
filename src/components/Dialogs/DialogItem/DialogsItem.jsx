import React from "react";
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    const path = "/dialog/"
    return <div className={style.dialogItem}>
        <NavLink to={path + props.id}>{props.nameUserItem}</NavLink>
    </div>
}


export default DialogItem