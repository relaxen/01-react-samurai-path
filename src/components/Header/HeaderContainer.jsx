import React from 'react';
import Header from './Header';
import { getMyAuthData, logout } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getMyAuthData();
	}
	
	render() {
		return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>;
	}
}
const mstp = (state) => {
	return {
		email: state.auth.email,
		login: state.auth.login,
		id: state.auth.id,
		isAuth: state.auth.isAuth,
	};
};

const mdtp = {
	getMyAuthData,
	logout,
};

export default connect(mstp, mdtp)(HeaderContainer);
