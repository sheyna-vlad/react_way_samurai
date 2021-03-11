import {v1} from "uuid";
import {PropsDialogsType} from "../components/Dialogs/Dialogs";
import profileReducer, {addPostActionCreator, updateNewPostTextCreator} from "./profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";




export type PropsStateType = {
    profilePage: ProfileType
    DialogsPage: PropsDialogsType
    sidebar: object
}

export type PropsDialogType = {
    id: string
    name: string
}
export type PropsPostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileType = {
    posts: Array<PropsPostType>
    newPostText: string
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextCreator> |
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator>



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
            newMessageBody: '';
        },
        sidebar:{},
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
        this._state.DialogsPage = profileReducer(this._state.DialogsPage, action)
        this._state.sidebar = profileReducer(this._state.sidebar, action)
        this._callSubscriber();


    }

}








