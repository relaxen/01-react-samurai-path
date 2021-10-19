import React from 'react';
import { addMessage } from '../../redux/dialog-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class DialogsContainer extends React.Component {


	render() {
		return (
			<>
				<Dialogs {...this.props} />
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogsData,
		messages: state.dialogsPage.messagesData,
		isAuth: state.auth.isAuth,
	};
};
let mapDispatchToProps = {
		addMessage,
};

const composedContainer = compose (
	withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
)(DialogsContainer)

export default composedContainer;
