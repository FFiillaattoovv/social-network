import React from "react";
import classes from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>Andrey</div>
                <div className={classes.dialog}>Maria</div>
                <div className={classes.dialog}>Maxim</div>
                <div className={classes.dialog}>Paul</div>
                <div className={classes.dialog}>Elena</div>
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