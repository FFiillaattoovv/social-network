import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                    <NavLink to="/dialogs/1">Andrey</NavLink>
                </div>
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