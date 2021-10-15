import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { showUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = +this.props.match.params.userId;

		this.props.showUserProfile(userId);
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
	showUserProfile,
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainer = withRouter(AuthRedirectComponent);

export default connect(mstp, mdtp)(WithUrlDataContainer);
