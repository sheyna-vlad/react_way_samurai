import React from 'react'
import {NavLink} from 'react-router-dom'

type UsersItemPropsType = {
    name: string
    path: string
}

const UsersItem: React.FC<UsersItemPropsType> = props => {
    return (
        <div>
            <NavLink to={props.path}>{props.name}</NavLink>
        </div>
    )
}

export default UsersItem
