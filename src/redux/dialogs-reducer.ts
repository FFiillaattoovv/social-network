import {ActionsTypes, DialogsPageType} from "./store";

let initialState = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Maxim"},
        {id: 4, name: "Paul"},
        {id: 5, name: "Elena"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you"},
        {id: 3, message: "I'm fine!"}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    let stateCopy;
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            stateCopy = {
                ...state,
                newMessageBody: action.body
            };
            return stateCopy;
        }
        case "SEND-MESSAGE": {
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };
            return stateCopy;
        }
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (text: string) => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: text
} as const)

export const sendMessageCreator = () => ({type: "SEND-MESSAGE"} as const)

export default dialogsReducer;