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
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>I'm fine!</div>
            </div>
        </div>
    )
}

export default Dialogs;