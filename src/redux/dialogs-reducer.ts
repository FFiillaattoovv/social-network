const dialogsReducer = (state, action) => {
    if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber();
    } else if (action.type === "SEND-MESSAGE") {
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = "";
        this._state.dialogsPage.messages.push({id: 6, message: body})
        this._callSubscriber();
    }
    return state;
}