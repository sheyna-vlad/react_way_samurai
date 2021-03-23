import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";


type PropsProfileType = {
    store: Store
}

const Profile = (props: PropsProfileType) => {


    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            store={props.store}        />

    </div>
}

export default Profile;