import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { showUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = +this.props.match.params.userId;
		
		if (!userId){
			userId = this.props.ownerId;
		}

		this.props.showUserProfile(userId);
		this.props.getUserStatus(userId);
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
	status: state.profilePage.status,
	ownerId: state.auth.id,
});

const mdtp = {
	showUserProfile,
	getUserStatus,
	updateUserStatus,
};

const composedContainer = compose (
	withAuthRedirect,
	withRouter,
	connect(mstp, mdtp)
)(ProfileContainer)

export default composedContainer
