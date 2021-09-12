import c from './Profile.module.scss';
import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {

    return (
        <div className={c.mainContent}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;