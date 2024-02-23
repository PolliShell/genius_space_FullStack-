import React from 'react';
import s from './ProfileInfo.module.css';
// import MyPosts from './MyPosts/Post/MyPosts';

const ProfileInfo = () => {
    return (
        <div> 
            <div>
                <img src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/og.4ad05d4125a5.png"></img>

            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>


        </div>

    );
}

export default ProfileInfo;