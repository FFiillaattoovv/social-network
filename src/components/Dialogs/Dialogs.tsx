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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={"Andrey"} id={1}/>
                <DialogItem name={"Maria"} id={2}/>
                <DialogItem name={"Maxim"} id={3}/>
                <DialogItem name={"Paul"} id={4}/>
                <DialogItem name={"Elena"} id={5}/>
            </div>
            <div className={classes.messages}>
                <Message message="Hi!"/>
                <Message message="How are you?"/>
                <Message message="I'm fine!"/>
            </div>
        </div>
    )
}

export default Dialogs;