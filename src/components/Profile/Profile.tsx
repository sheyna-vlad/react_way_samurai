import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PropsStoreType} from "../../Redux/store";
import {PropsPostType} from "./MyPosts/Post/Post";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PropsProfileType = {
    store: PropsStoreType
}

const Profile = (props: PropsProfileType) => {


    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            store={props.store}
        />

    </div>
}

export default Profile;