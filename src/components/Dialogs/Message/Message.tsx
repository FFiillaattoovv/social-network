import classes from "../Dialogs.module.css";
import React from "react";

type PropsTypeMessage = {
    message: string
}

const Message = (props: PropsTypeMessage) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message;