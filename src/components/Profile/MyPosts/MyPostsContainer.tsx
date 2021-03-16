import React from 'react';
import s from './MyPosts.module.css';
import Post, { PropsPostType } from "./Post/Post";
import { addPostActionCreator,  updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import {ActionsTypes, PropsStoreType} from "../../../Redux/store";
import MyPosts from "./MyPosts";

export type PropsMyPostsContainerType = {
    store: PropsStoreType
}





const MyPostsContainer = (props: PropsMyPostsContainerType) => {

    let addPost = () => {
            props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text: string) => {
                props.store.dispatch(updateNewPostTextCreator(text));
    }
    return (

       <MyPosts posts={props.store.getState().profilePage.posts}
                newPostText={props.store.getState().profilePage.newPostText}
                addPost={addPost}
                updateNewPostText={onPostChange}
       />
    );
}

export default MyPostsContainer;