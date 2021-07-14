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
    ]
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}

export type sendMessageActionType = ReturnType<typeof sendMessageCreator>

export type DialogsActionsType = sendMessageActionType

export const sendMessageCreator = (newMessageBody: string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)

export default dialogsReducer;
