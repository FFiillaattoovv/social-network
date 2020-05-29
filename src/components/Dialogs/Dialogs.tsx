import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsDataType, messagesDataType} from "../../index";

type DialogsType = {
    dialogs: Array<dialogsDataType>
    messages: Array<messagesDataType>
}

const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs.map( (dialog: dialogsDataType) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages.map( (message: messagesDataType) => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;