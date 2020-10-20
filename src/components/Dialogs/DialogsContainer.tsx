import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/store";

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch:Dispatch): MapDispatchType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

type MapDispatchType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

type MapStateType = {
    dialogsPage: DialogsPageType
}



const DialogsContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;