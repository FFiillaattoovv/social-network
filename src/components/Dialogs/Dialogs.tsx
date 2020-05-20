import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

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

type PropsTypeMessage = {
    message: string
}

const Message = (props: PropsTypeMessage) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Maxim"},
        {id: 4, name: "Paul"},
        {id: 5, name: "Elena"}
    ];

    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you"},
        {id: 3, message: "I'm fine!"}
    ];
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;