import c from './ProfileInfo.module.scss';
import React from 'react';
import banner from "./../../../skazki3.jpg";
import avatar from "./photo.png";


const ProfileInfo = () => {
    return (
        <>
            <img className={c.banner} src={banner} alt="banner"/>
            <div className={c.userInfo}>
                <div>
                    <img className={c.avatar} src={avatar} alt="avatar"/>
                </div>
                <div className="main-content__info">
                    <h1 className={c.name}>Edward K.</h1>
                    <div className={c.description}>
                        <p>Date of Birth: 14th august</p>
                        <p>City: Tomsk</p>
                        <p>Education: TUSUR</p>
                        <p>Web Site: localhost:3000</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;