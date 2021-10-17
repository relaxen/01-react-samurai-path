import React from 'react'
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
	const { handleSubmit } = props

	return <form onSubmit={handleSubmit}>
		<div>
			<Field placeholder={'Login'} name={'login'} component={'input'}/>
		</div>
		<div>
			<Field placeholder={'Password'} name={'password'}  component={'input'} type={'password'}/>
		</div>
		<div>
			<Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
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
	<LoginReduxForm onSubmit={onSubmit}/>
	</>
};

export default Login