import React from 'react';
import './Dialogs.scss';
import { BrowserRouter, NavLink } from 'react-router-dom';
import c from '../Profile/MyPosts/MyPosts.module.scss';
import { Field, reduxForm } from 'redux-form'
import { maxLength } from '../common/validators/validators';
import { Textarea } from '../common/FormControl/FormControl';

const maxLength200 = maxLength(200);

let NewMessageForm = props => {
	const { handleSubmit } = props
	return <form onSubmit={handleSubmit} className={c.post}>
		<Field
			component={Textarea}
			className={c.textarea}
			name="newMessage"
			placeholder='Type your message'
			validate={[maxLength200]}
		/>
		<button
			className={c.button}>
			Send
		</button>
	</form>
}

NewMessageForm = reduxForm({
	// a unique name for the form
	form: 'newmessage'
})(NewMessageForm)

const DialogItem = (props) => {
	return (
		<div className='dialogs__item'>
			<NavLink key={props.id} to={'/dialog/' + props.id}>
				{props.name}
			</NavLink>
		</div>
	);
};

const Message = (props) => {
	return props.owner ? (
		<div key={props.id} className={`dialogs__message right`}>
			{props.message}
		</div>
	) : (
		<div key={props.id} className={`dialogs__message`}>
			{props.message}
		</div>
	);
};

export const Dialogs = (props) => {

	let addMessage = (dataForm) => {
		props.addMessage(dataForm.newMessage);
	};

	let dialogsElements = props.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.userId} />);

	let messagesElements = props.messages.map((messages) => (
		<Message id={messages.id} message={messages.message} owner={messages.owner} />
	));

	return (
		<BrowserRouter>
			<div className='dialogs'>
				<div className='dialogs__dialogs-items'>{dialogsElements}</div>
				<div className='dialogs__message-field'>
				<div className='dialogs__messages'>{messagesElements}</div> 
					<NewMessageForm onSubmit={addMessage}	/>
				</div>
			</div>
		</BrowserRouter>
	);
};
