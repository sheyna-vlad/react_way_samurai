import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type FormDataType = {
    login : string
    password: string
    remember: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="login">Login</label>
                <Field name="login" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
            </div>
            <div>
                <label>
                    <Field name="remember" component="input" type="checkbox" /> remember me
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login
