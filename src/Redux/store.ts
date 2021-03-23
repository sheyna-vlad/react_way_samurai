import {v1} from "uuid";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {actions, DialogsType} from "./dialogs-reducer";
import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";
import sidebarReducer from "./sidebar-reducer";


export type PropsStateType = {
    profilePage: ProfilePageType
    DialogsPage: DialogsType
    sidebar: object
}

export type ProfilePageType = {
    posts: Array<PropsPostType>
    newPostText: string
}


export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof actions.sendMessageCreator> |
    ReturnType<typeof actions.updateNewMessageBodyCreator>


export type PropsStoreType = {
    _state: PropsStateType
    _callSubscriber: () => void
    getState: () => PropsStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}


export let store: PropsStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hello I am done it', likesCount: 22},
                {id: v1(), message: 'Ts', likesCount: 45},
                {id: v1(), message: 'React', likesCount: 98}

            ],
            newPostText: 'it-kamasutra'
        },
        DialogsPage: {
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'Helo'},
                {id: v1(), message: 'My job'},
                {id: v1(), message: 'My  perfect job'},
                {id: v1(), message: 'My  new job'},
            ],
            dialog: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Andrey'},
                {id: v1(), name: 'Sveta'},
                {id: v1(), name: 'Viktor'},
                {id: v1(), name: 'Sasha'}
            ],
            newMessageBody: ''
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State was changed ')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber();


    }

}








