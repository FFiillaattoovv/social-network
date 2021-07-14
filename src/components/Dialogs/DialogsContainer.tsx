import Dialogs from './Dialogs';
import {sendMessageCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
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
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

type MapStateType = {
    dialogsPage: DialogsPageType,
    isAuth: boolean
}

type MapDispatchType = {
    sendMessage: (newMessageBody: string) => void
}

const DialogsContainer = compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;
