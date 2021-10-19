import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../common/validators/validators'
import { Input } from '../common/FormControl/FormControl';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';

const maxLength20 = maxLength(20);

const LoginForm = (props) => {
	const { handleSubmit } = props

	return <form onSubmit={handleSubmit}>
		<div>
			<Field
				validate={[required]}
				placeholder={'Login'}
				name={'login'}
				component={Input} />
		</div>
		<div>
			<Field
				validate={[required, maxLength20]}
				placeholder={'Password'}
				name={'password'}
				component={Input}
				type={'password'} />
		</div>
		<div>
			<Field component={'input'} name={'rememberMe'} type={'checkbox'} />
			remember me
		</div>
		<div>
			<button >Login</button>
		</div>
	</form>
}

const LoginReduxForm = reduxForm({
	// a unique name for the form
	form: 'login'
})(LoginForm)

const Login = (props) => {

	const onSubmit = (dataForm) => {
		props.login(dataForm.login, dataForm.password, dataForm.rememberMe);
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	} else 

	return <>

		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
		
	</>
};

let mstp = (state) => {
	return {
		id: state.auth.id,
		email: state.auth.email,
		login: state.auth.login,
		isAuth: state.auth.isAuth,
	}

};

const mdtp = {
	login,
	logout,
};

export default compose(
	connect(mstp, mdtp)
)(Login)