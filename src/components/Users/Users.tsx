import Pagination from '../UI/Pagination/Pagination'
import classes from './Users.module.css'
import User from './User'
import React from 'react'
import { UserType } from '../../api/api'


type UsersPropsType = {
    page: number
    count: number
    totalCount: number
    SetPageHandler: (page: number) => void
    users: UserType[]
    followingInProgress: number[]
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
    return (
        <>
            <Pagination
                page={props.page}
                count={props.count}
                totalCount={props.totalCount}
                SetPageHandler={props.SetPageHandler}
            />
            <div className={classes.usersList}>
                {props.users.map((u) => {
                    return (
                        <User
                            key={u.id}
                            userId={u.id}
                            name={u.name}
                            status={u.status}
                            photos={u.photos}
                            followed={u.followed}
                            followingInProgress={props.followingInProgress}
                            follow={props.follow}
                            unfollow={props.unfollow}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Users
