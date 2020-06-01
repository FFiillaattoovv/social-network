import React from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogType, MessageType } from "../../redux/state";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
const Dialogs = (props: PropsType) => {
    let dialogsElements = props.dialogs.map( (dialog: DialogType) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messages.map( (message: MessageType) => <Message message={message.message}/>)

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