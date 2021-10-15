import { sendMessageActionCreator, updateMessageActionCreator } from '../../redux/dialog-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogsData,
		messages: state.dialogsPage.messagesData,
		tempText: state.dialogsPage.newMessageTemp,
		isAuth: state.auth.isAuth,
	};
};
let mapDispatchToProps = (dispatch) => {
	return {
		onChangeMessage: (newMessageText) => {
			dispatch(updateMessageActionCreator(newMessageText));
		},
		addMessage: () => {
			dispatch(sendMessageActionCreator());
		},
	};
};

const RedirectedDialogs = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectedDialogs);

export default DialogsContainer;
