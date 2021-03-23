import React from 'react';
import s from './MyPosts.module.css';
import Post, {PropsPostType} from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import {ActionsTypes, ProfilePageType, PropsStoreType} from "../../../Redux/store";
import MyPosts from "./MyPosts";
import {Dispatch, Store} from "redux";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../Redux/dialogs-reducer";
import {ReduxStoreType} from "../../../Redux/redux-store";

export type PropsMyPostsContainerType = {
    store: Store
}


// const MyPostsContainer = (props: PropsMyPostsContainerType) => {
//
//     let addPost = () => {
//             props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text: string) => {
//                 props.store.dispatch(updateNewPostTextCreator(text));
//     }
//     return (
//
//        <MyPosts posts={props.store.getState().profilePage.posts}
//                 newPostText={props.store.getState().profilePage.newPostText}
//                 addPost={addPost}
//                 updateNewPostText={onPostChange}
//        />
//     );
// }

type mapStateToPropsType = {
    profilePage: ProfilePageType
}

type mapDispatchToPropsType = {
    addPost: () => void,
    onPostChange: (text: string) => void
}

export type PropsMyPostsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return ({
        profilePage: state.profilePage,

    });
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return ({
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },

    });
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;