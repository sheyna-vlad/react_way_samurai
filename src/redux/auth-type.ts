import {authAPI} from '../api/api'
import {AppThunk} from './redux-store'

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type AuthType = {
    data: AuthDataType
    isAuth: boolean
}

export type setAuthActionType = {
    type: 'SET-AUTH'
    data: AuthDataType
}

const initialState: AuthType = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

export type AuthActionTypes = setAuthActionType

const authReducer = (state: AuthType = initialState, action: AuthActionTypes): AuthType => {
    switch (action.type) {
        case 'SET-AUTH': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuth = (id: number | null, email: string | null, login: string | null): setAuthActionType => {
    return {
        type: 'SET-AUTH',
        data: {id, email, login}
    }
}

export const getAuthUserData = (): AppThunk => dispatch => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuth(id, email, login))
            }
        })
}

export default authReducer
