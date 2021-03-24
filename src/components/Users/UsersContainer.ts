import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersInitialStateType} from "../../Redux/users-reducer";

export type PropsUsersType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: UsersInitialStateType
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersInitialStateType) => void
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return ({
        usersPage: state.usersPage

    });
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return ({
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UsersInitialStateType) => {
            dispatch(setUsersAC(users))
        }

    });
}


const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;