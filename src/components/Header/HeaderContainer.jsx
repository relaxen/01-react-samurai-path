import axios from 'axios';
import React from 'react';
import Header from './Header';
import { setAuthUserData, setAuth } from '../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios({
			method: 'get',
			withCredentials: true,
			url: 'https://social-network.samuraijs.com/api/1.0/auth/me',
		}).then((response) => {
			if (response.data.resultCode == 0) {
				this.props.setAuthUserData(response.data.data);
				this.props.setAuth();
			}
		});
	} /*  */

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
	setAuthUserData,
	setAuth,
};

export default connect(mstp, mdtp)(HeaderContainer);
