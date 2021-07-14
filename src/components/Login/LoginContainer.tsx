import Login from './Login';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {authAPI} from '../../api/api';

export const postLoginDataThunkCreator = (email: string, password: string) => (dispatch: Dispatch) => {
    authAPI.postAuth(email, password);
}

const mapStateToProps = () => {

};

const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;
