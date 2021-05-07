import {applyMiddleware, combineReducers, createStore} from 'redux'
import messengerReducer, {MessengerActionTypes} from './messenger-reducer'
import profileReducer, {ProfileActionTypes} from './profile-reducer'
import sidebar from './sidebar-reducer'
import usersReducer, { UsersActionTypes } from './users-reducer'
import authReducer, {AuthActionTypes} from './auth-type'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    profilePage: profileReducer,
    messengerPage: messengerReducer,
    usersPage: usersReducer,
    sidebar,
    auth: authReducer,
    form: formReducer
})

export type RootStateReduxType = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

type AppActionsType = AuthActionTypes | MessengerActionTypes | ProfileActionTypes | UsersActionTypes

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateReduxType, unknown, AppActionsType>

// @ts-ignore
window.store = store

export default store
