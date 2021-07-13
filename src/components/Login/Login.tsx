import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    )
}

type FormDataType = {
    login: string
    password: string
    rememberMy: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = () => {
    return (
        <form>
            <div><Field type="text" placeholder={'Login'} name={'login'} component={'input'}/></div>
            <div><Field type="text" placeholder={'Password'} name={'password'} component={'input'}/></div>
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
