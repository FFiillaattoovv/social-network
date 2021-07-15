import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators';
import {Input} from '../common/FormControls/FormControls';

type LoginPropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMy);
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
