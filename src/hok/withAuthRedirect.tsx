import React, {ComponentType} from 'react';
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

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<mapStateToPropsType> {
        render() {
            let {isAuth, ...restProps} = this.props;
            if (!isAuth) return <Redirect to="/login"/>;
            return <Component {...restProps as T}/>;
        }
    }

    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectRedirectComponent;
}