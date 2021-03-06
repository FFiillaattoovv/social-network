import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {Dispatch, compose} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {DialogsPageType} from '../../redux/store';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import React from 'react';

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

type MapStateType = {
    dialogsPage: DialogsPageType,
    isAuth: boolean
}

type MapDispatchType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

const DialogsContainer = compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;
