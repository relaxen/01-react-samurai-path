import c from './Profile.module.scss';
import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

	const {profile, status, updateUserStatus} = props;

	return (
		<div className={c.mainContent}>
			<ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} />
			<MyPostsContainer />
		</div>
	);
}

export default Profile;