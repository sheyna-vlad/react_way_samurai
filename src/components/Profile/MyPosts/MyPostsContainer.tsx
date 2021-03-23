import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import {ProfilePageType} from "../../../Redux/store";
import MyPosts from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";


type MapStateToPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: () => void,
    onPostChange: (text: string) => void
}

export type PropsMyPostsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return ({
        profilePage: state.profilePage,

    });
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return ({
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },

    });
}


const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;