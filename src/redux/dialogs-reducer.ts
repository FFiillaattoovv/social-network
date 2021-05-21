import {DialogsPageType} from './store';

let initialState = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Maxim'},
        {id: 4, name: 'Paul'},
        {id: 5, name: 'Elena'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'I\'m fine!'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case 'SEND-MESSAGE': {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}

export type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyCreator>
export type sendMessageActionType = ReturnType<typeof sendMessageCreator>

export type DialogsActionsType = updateNewMessageBodyActionType | sendMessageActionType

export const updateNewMessageBodyCreator = (text: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: text
} as const)

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'} as const)

export default dialogsReducer;