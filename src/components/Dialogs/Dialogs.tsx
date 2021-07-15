import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType, DialogType, MessageType} from '../../redux/store';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormControls/FormControls';
import {maxLengthCreator, required} from '../../utils/validators';

type PropsType = {
    dialogsPage: DialogsPageType,
    isAuth: boolean
    sendMessage: (newMessageBody: string) => void
    updateNewMessageBody: (body: string) => void
}

const Dialogs = (props: PropsType) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((dialog: DialogType) => <DialogItem name={dialog.name}
                                                                                id={dialog.id}
                                                                                key={dialog.id}/>);
    let messagesElements = state.messages.map((message: MessageType) => <Message message={message.message}
                                                                                 key={message.id}/>);

    const addNewMessage = (values: MessageFormType) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

type MessageFormType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<MessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'} placeholder="Enter your message"
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<MessageFormType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
