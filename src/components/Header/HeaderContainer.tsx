import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
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