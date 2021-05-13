import Dialogs from './Dialogs';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {DialogsPageType} from '../../redux/store';
import {Redirect, RouteComponentProps} from 'react-router-dom';
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

type ProfilePropsType = MapStateType & MapDispatchType

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

let AuthRedirectComponent = (props: PropsType) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>;
    return <Dialogs {...props}/>
}

const DialogsContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;