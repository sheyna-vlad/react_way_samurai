import React from 'react'
import classes from './Profile.module.css'
import Button from '../../UI/Button/Button'
import Preloader from '../../UI/Preloader/Preloader'
import {ProfileType} from '../../../api/api'
import ProfileStatus from './ProfileStatus/ProfileStatus'

type InfoPropsType = {
    profile: ProfileType | null
    status: string
    updateProfileStatus: (status: string) => void
}

const Profile = (props: InfoPropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.info}>
            <div className={classes.avatarBlock}>
                <img
                    src={props.profile.photos.large ? props.profile.photos.large : 'https://source.unsplash.com/random/200x200'}
                    alt="Avatar" width="200" />
                <div className={classes.profileInfoButton}>
                    <Button text="Edit" />
                </div>
            </div>
            <div className={classes.description}>
                <div className={classes.nameAndStatus}>
                    <h1>Ramzan Paragulgov</h1>
                    <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus} />
                </div>
            </div>
        </div>
    )
}

export default Profile
