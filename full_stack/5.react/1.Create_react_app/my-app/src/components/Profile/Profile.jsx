import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from './MyPosts/Post/ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;