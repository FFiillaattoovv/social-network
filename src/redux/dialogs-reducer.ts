const dialogsReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body})
            return state;
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