import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../common/validators/validators'
import { Input } from '../common/FormControl/FormControl';

const maxLength20 = maxLength(20);

const LoginForm = (props) => {
	const { handleSubmit } = props

	return <form onSubmit={handleSubmit}>
		<div>
			<Field
				validate={[required, maxLength20]}
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
		console.log(dataForm);
	}

	return <>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</>
};

export default Login