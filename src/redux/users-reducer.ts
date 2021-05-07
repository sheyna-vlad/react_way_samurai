import {usersAPI, UserType} from '../api/api'
import {AppThunk} from './redux-store'

export type UsersPageType = {
    users: Array<UserType>
    page: number
    count: number
    totalCount: number
    isFetching: boolean
    followingInProgress: number[]
}

export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}

export type SetUsersActionType = {
    type: 'SET-USERS'
    users: UserType[]
}

export type SetPageActionType = {
    type: 'SET-PAGE'
    page: number
}

export type SetTotalCountActionType = {
    type: 'SET-TOTAL-COUNT'
    totalCount: number
}

export type ToggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}

export type ToggleFollowingProgressActionType = {
    type: 'TOGGLE-FOLLOWING-PROGRESS'
    userId: number
    isFetching: boolean
}

const initialState: UsersPageType = {
    users: [],
    page: 1,
    count: 10,
    totalCount: 0,
    isFetching: false,
    followingInProgress: []
}

export type UsersActionTypes =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetPageActionType
    | SetTotalCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingProgressActionType

const usersReducer = (state: UsersPageType = initialState, action: UsersActionTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        case 'SET-PAGE': {
            return {
                ...state,
                page: action.page
            }
        }
        case 'SET-TOTAL-COUNT': {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'TOGGLE-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId: number): FollowActionType => ({type: 'FOLLOW', userId})
export const unfollowSuccess = (userId: number): UnfollowActionType => ({type: 'UNFOLLOW', userId})
export const setUsers = (users: UserType[]): SetUsersActionType => ({type: 'SET-USERS', users})
export const setPage = (page: number): SetPageActionType => ({type: 'SET-PAGE', page})
export const setTotalCount = (totalCount: number): SetTotalCountActionType => ({type: 'SET-TOTAL-COUNT', totalCount})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching
})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: 'TOGGLE-FOLLOWING-PROGRESS',
    isFetching,
    userId
})

export const getUsers = (page: number, count: number): AppThunk => dispatch => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(page, count).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(toggleIsFetching(false))
    })
}

export const follow = (userId: number): AppThunk => dispatch => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    })
}

export const unfollow = (userId: number): AppThunk => dispatch => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    })
}

export default usersReducer
