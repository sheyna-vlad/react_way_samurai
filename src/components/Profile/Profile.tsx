import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes} from "../../Redux/store";
import {PropsPostType} from "./MyPosts/Post/Post";


type PropsProfileType = {
    posts: Array<PropsPostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: PropsProfileType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.posts}
            newPostText={props.newPostText}
            dispatch={props.dispatch}
        />

    </div>
}

export default Profile;