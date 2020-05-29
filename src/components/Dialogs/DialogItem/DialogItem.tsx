import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {dialogsDataType} from "../../../index";

const DialogItem = (props: dialogsDataType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;