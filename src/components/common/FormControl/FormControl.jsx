import React from 'react';
import style from './FormControl.module.scss';

export const FormControl = ({Element, input, meta, ...props}) => {

	const hasError = meta.touched && !meta.valid;

	return <div className={hasError?style.error:'' + ' ' + style.field }>
		<Element {...input} {...props} />
		<span>{meta.error}</span>
	</div>
}

export const Textarea = ({...props}) =><FormControl {...props} Element={'textarea'}/>
export const Input = ({...props}) =><FormControl {...props} Element={'input'}/>