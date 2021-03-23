import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";


type OwnPropsType = {
    store: Store
}

const Profile = (props: OwnPropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            store={props.store}
        />
    </div>
}

export default Profile;