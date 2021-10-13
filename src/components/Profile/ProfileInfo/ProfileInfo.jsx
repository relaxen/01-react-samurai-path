import c from './ProfileInfo.module.scss';
import React from 'react';
import banner from "./../../../skazki3.jpg";
import Preloader from '../../common/preloader/Preloader';


const ProfileInfo = (props) => {

	if (!props.profile){
		return <Preloader/>
	}
  return (
        <>
            <img className={c.banner} src={banner} alt="banner"/>
            <div className={c.userInfo}>
                <div>
                    <img className={c.avatar} src={props.profile.photos.small?props.profile.photos.small:""} alt="avatar"/>
                </div>
                <div className="main-content__info">
                    <h1 className={c.name}>{props.profile.fullName}</h1>
                    <div className={c.description}>
                        <p>Date of Birth: 14th august</p>
                        <p>City: Tomsk</p>
                        <p>Education: TUSUR</p>
                        <p>Web Site: localhost:3000</p>
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
						{props.profile.lookingForAJob?<div>{props.profile.lookingForAJobDescription}</div>:null}
        </>
  );
}

export default ProfileInfo;