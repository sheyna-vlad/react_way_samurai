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

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType):ProfilePageType => {
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

type ActionsType = AddPostACType | UpdateNewPostTextACType

type AddPostACType = {
    type:  typeof ADD_POST,
}
type UpdateNewPostTextACType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newText: string
}


export const addPostAC = ():AddPostACType => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string):UpdateNewPostTextACType => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;