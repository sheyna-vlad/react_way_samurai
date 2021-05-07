import {profileAPI, ProfileType} from '../api/api'
import {AppThunk} from './redux-store'

export type PostsType = {
    id: number
    postText: string,
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
    status: string
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
}

export type SetProfileActionType = {
    type: 'SET-PROFILE'
    profile: ProfileType
}

export type SetProfileStatusActionType = {
    type: 'SET-PROFILE-STATUS'
    status: string
}

const initialState: ProfilePageType = {
    posts: [
        {
            id: 1,
            postText: 'Hello! How are you? Subscribe me: https://github.com/paragulgov. Thank you so much. Good bye, see you later',
            likesCount: 13
        },
        {
            id: 2,
            postText: 'Hello! How are you?',
            likesCount: 5
        },
        {
            id: 3,
            postText: 'Its my first post here 😄',
            likesCount: 8
        },
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export type ProfileActionTypes =
    AddPostActionType
    | ChangeNewTextActionType
    | SetProfileActionType
    | SetProfileStatusActionType

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: 4,
                postText: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case 'CHANGE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-PROFILE-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPost = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}

export const changeNewPostText = (newText: string): ChangeNewTextActionType => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newText
    }
}

export const setProfile = (profile: ProfileType): SetProfileActionType => {
    return {
        type: 'SET-PROFILE',
        profile
    }
}

export const setProfileStatus = (status: string): SetProfileStatusActionType => ({type: 'SET-PROFILE-STATUS', status})

export const getProfile = (userId: number): AppThunk => dispatch => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setProfile(response.data))
    })
}

export const getProfileStatus = (userId: number): AppThunk => dispatch => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setProfileStatus(response.data))
    })
}

export const updateProfileStatus = (status: string): AppThunk => dispatch => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    })
}


export default profileReducer
