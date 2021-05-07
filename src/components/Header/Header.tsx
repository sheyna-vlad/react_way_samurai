import React from 'react'
import classes from './Header.module.css'
import Button from '../UI/Button/Button'

type HeaderPropsType = {
    isAuth: boolean
    id: number | null
    email: string | null
    login: string | null
}

const Header = ({isAuth, email, login, id}: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <div>
                <h1 className={classes.title}>Gray Social Network</h1>
            </div>
            <div>
                {
                    isAuth ? <Button text="Log Out" /> : <Button text="Log In" />
                }
            </div>
        </header>
    )
}

export default Header
