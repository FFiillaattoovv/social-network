import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<mapStateToPropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>;
            return <Component {...this.props}/>;
        }
    }

    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectRedirectComponent;
}