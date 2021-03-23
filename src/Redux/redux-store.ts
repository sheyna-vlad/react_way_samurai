import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    DialogsPage: dialogsReducer,
    sidebar: sidebarReducer,

});
let store = createStore(rootReducer);

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type AppStateType = ReturnType<typeof rootReducer>

export default store;