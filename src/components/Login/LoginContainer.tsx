import Login from './Login';
import {connect} from 'react-redux';
import {loginThunkCreator} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
};

const LoginContainer = connect(mapStateToProps, {loginThunkCreator})(Login);

export default LoginContainer;
