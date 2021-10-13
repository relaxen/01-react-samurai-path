import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../redux/profile-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = +this.props.match.params.userId;
		axios({
			method: 'get',
			url: `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
		}).then((response) => {
			this.props.setUserProfile(response.data);
		});
	}

	render() {
		return (
			<>
				<Profile {...this.props} />
			</>
		);
	}
}

const mstp = (state) => ({
	profile: state.profilePage.profile,
});

const mdtp = {
	setUserProfile,
};

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mstp, mdtp)(WithUrlDataContainer);
