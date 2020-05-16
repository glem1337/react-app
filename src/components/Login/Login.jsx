import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {isRequired, maxLengthCreator, minLengthCreator} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";
import {login} from '../../redux/auth-reducer';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength = maxLengthCreator(30);
const minLength = minLengthCreator(5);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {props.error}
            </div>
            <div>
                <Field placeholder={"Email"}
                       validate={[isRequired, maxLength, minLength]}
                       name={"email"} component={Input}/>
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
        this.props.login(values.email, values.password, values.rememberMe);
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile/'} />
        }
        return (
            <div>
                <div>Login</div>
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);