import React from 'react';
import Header from './Header';
import { getMyAuthData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getMyAuthData();
	}
	
	render() {
		return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
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
};

export default connect(mstp, mdtp)(HeaderContainer);
