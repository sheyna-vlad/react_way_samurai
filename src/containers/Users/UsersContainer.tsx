import React from 'react'
import {connect} from 'react-redux'
import {RootStateReduxType} from '../../redux/redux-store'
import {follow, getUsers, setPage, unfollow} from '../../redux/users-reducer'
import Users from '../../components/Users/Users'
import Preloader from '../../components/UI/Preloader/Preloader'
import { UserType } from '../../api/api'

class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.count)
    }

    SetPageHandler = (page: number) => {
        this.props.getUsers(page, this.props.count)
        this.props.setPage(page)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    page={this.props.page}
                    count={this.props.count}
                    totalCount={this.props.totalCount}
                    SetPageHandler={this.SetPageHandler}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>

        )
    }
}

type MapStateToPropsType = {
    users: UserType[]
    page: number
    count: number
    totalCount: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    setPage: (page: number) => void
    getUsers: (page: number, count: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

type OwnPropsType = {}

type UsersType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    users: state.usersPage.users,
    page: state.usersPage.page,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, RootStateReduxType>
(mapStateToProps, {
    setPage,
    getUsers,
    follow,
    unfollow
})(UsersContainer)
