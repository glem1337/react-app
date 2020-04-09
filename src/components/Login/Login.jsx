import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {isRequired, maxLengthCreator, minLengthCreator} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";

const maxLength = maxLengthCreator(10);
const minLength = minLengthCreator(5);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       validate={[isRequired, maxLength, minLength]}
                       name={"login"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[isRequired, maxLength, minLength]}
                       name={"password"} component={Input}/>
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
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default Login;