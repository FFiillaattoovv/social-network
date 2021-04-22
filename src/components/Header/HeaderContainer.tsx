import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import { authAPI } from '../../api/api';

type MSTPType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type MDTPType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null) => void
}

type PropsType = MSTPType & MDTPType;

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);