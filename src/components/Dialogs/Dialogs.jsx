import React from 'react';
import './Dialogs.scss';
import { BrowserRouter, NavLink, Redirect } from 'react-router-dom';
import c from '../Profile/MyPosts/MyPosts.module.scss';

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
	let newMessage = React.createRef();

	let addMessage = () => {
		props.addMessage();
	};

	let onChangeMessage = () => {
		let newMessageText = newMessage.current.value;

		props.onChangeMessage(newMessageText);
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
					<form action='' className={c.post}>
						<textarea
							className={c.textarea}
							name=''
							id=''
							ref={newMessage}
							value={props.tempText}
							onChange={onChangeMessage}
							placeholder='Type your message'
						/>
						<button onClick={addMessage} className={c.button} type='button'>
							Send
						</button>
					</form>
				</div>
			</div>
		</BrowserRouter>
	);
};
