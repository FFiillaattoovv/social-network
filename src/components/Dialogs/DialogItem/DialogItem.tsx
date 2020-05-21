import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    name: string
    id: number
}

const DialogItem = (props: PropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;