import {v1} from "uuid";
import {ProfilePageType} from "./store";
import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";

export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState =  {
    posts: [
        {id: v1(), message: 'Hello I am done it', likesCount: 22},
        {id: v1(), message: 'Ts', likesCount: 45},
        {id: v1(), message: 'React', likesCount: 98}

    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state: ProfilePageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PropsPostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }


}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;