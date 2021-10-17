import c from './ProfileInfo.module.scss';
import React from 'react';
import banner from "./../../../skazki3.jpg";
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}
	return (
		<>
			<img className={c.banner} src={banner} alt="banner" />
			<div className={c.userInfo}>
				<div>
					<img className={c.avatar} src={props.profile.photos.large ? props.profile.photos.large : ""} alt="avatar" />
				</div>
				<div className="main-content__info">
					<h1 className={c.name}>{props.profile.fullName}</h1>
					<div className={c.description}>
						<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
					</div>
				</div>
			</div>
			<div>
				<h2>About me</h2>
				<p>
					{props.profile.aboutMe}
				</p>
			</div>
			<div>В поиске работы?</div>
			{props.profile.lookingForAJob ? <div>{props.profile.lookingForAJobDescription}</div> : null}
		</>
	);
}

export default ProfileInfo;