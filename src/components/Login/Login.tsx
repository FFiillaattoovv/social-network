import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators';
import {Input} from '../common/FormControls/FormControls';
import {Redirect} from 'react-router-dom';
import styles from '../common/FormControls/FormControls.module.css';

type LoginPropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMy);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type FormDataType = {
    email: string
    password: string
    rememberMy: boolean
}

const maxLength30 = maxLengthCreator(30);

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" placeholder={'Email'} name={'email'} component={Input}
                        validate={[required, maxLength30]}/></div>
            <div><Field type="password" placeholder={'Password'} name={'password'} component={Input}
                        validate={[required, maxLength30]}/></div>
            <div><Field type="checkbox" name={'rememberMy'} component={'input'}/>remember me</div>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);

export default Login;
