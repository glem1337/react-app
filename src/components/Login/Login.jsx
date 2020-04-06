import React from 'react';
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

class Login extends React.Component {

    onSubmit = values => {
        console.log(values);
    }

    render() {
        return (
            <div>
                <div>Login</div>
                <LoginReduxForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default Login;