import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserDataThunkCreator, logoutThunkCreator} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

type MSTPType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type MDTPType = {
    getAuthUserDataThunkCreator: () => void
    logoutThunkCreator: () => void
}

type PropsType = MSTPType & MDTPType;

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserDataThunkCreator();
    }

    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state: AppStateType) => ({
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {getAuthUserDataThunkCreator, logoutThunkCreator})(HeaderContainer);
