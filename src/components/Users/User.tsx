import React from 'react'
import classes from './User.module.css'
import Button from '../UI/Button/Button'
import {NavLink} from 'react-router-dom'

type UserPropsType = {
    userId: number
    name: string
    status: string | null
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
    followingInProgress: number[]
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

const User = (props: UserPropsType) => {
    const onFollowClickHandler = () => {
        props.follow(props.userId)
    }

    const onUnfollowClickHandler = () => {
        props.unfollow(props.userId)
    }

    return (
        <div className={classes.userCard}>
            <div className={classes.userCardAvatar}>
                <NavLink to={`/profile/${props.userId}`}>
                    <img
                        className={classes.userAvatar}
                        src={props.photos.large ? props.photos.large : 'https://picsum.photos/100/100'}
                        alt="Здесь должна была быть аватарка..."
                    />
                </NavLink>
            </div>

            <div>
                <div className={classes.userCardInfo}>
                    <h3 className={classes.userCardName}>{props.name}</h3>
                    <span className={classes.userCardAbout}>{props.status}</span>
                </div>

                <div className={classes.userCardButton}>
                    {props.followed
                        ? <Button disabled={props.followingInProgress.some(id => id === props.userId)} text="Unfollow"
                                  onClick={onUnfollowClickHandler} />
                        : <Button disabled={props.followingInProgress.some(id => id === props.userId)} text="Follow"
                                  onClick={onFollowClickHandler} />
                    }
                </div>
            </div>
        </div>
    )
}

export default User
