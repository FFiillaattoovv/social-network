import Login from './Login';
import {connect} from 'react-redux';
import {loginThunkCreator} from '../../redux/auth-reducer';

const LoginContainer = connect(null, {loginThunkCreator})(Login);

export default LoginContainer;
