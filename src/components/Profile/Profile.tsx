import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PropsPostType} from "../../Redux/store";


type PropsTypeProfile = {
    posts: Array<PropsPostType>
    newPostText: string
    // updateNewPostText: (newText: string) => void
    // addPost: () => void
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: PropsTypeProfile) => {


    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.posts}
            dispatch={props.dispatch}
            newPostText={props.newPostText}
            // updateNewPostText={props.updateNewPostText}
            // addPost={props.addPost}
        />

    </div>
}

export default Profile;