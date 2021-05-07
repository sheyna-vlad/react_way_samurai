import React from 'react'
import classes from './MessagesItem.module.css'

type MessagesItemPropsType = {
    messageText: string
}

const MessagesItem: React.FC<MessagesItemPropsType> = props => {
    return (
        <div className={classes.messageItem}>
            <p>{props.messageText}</p>
        </div>
    )
}

export default MessagesItem
