import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

type TypeProps = {
    name: string
    id: number
}

const DialogItem = (props: TypeProps) => {
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
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Maria</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Maxim</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Paul</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Elena</NavLink>
                </div>
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