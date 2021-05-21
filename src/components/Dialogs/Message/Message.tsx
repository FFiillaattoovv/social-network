import classes from '../Dialogs.module.css';
import React from 'react';
import {MessageType} from '../../../redux/store';

const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message;