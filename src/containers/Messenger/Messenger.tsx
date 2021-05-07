import React, {ChangeEvent, KeyboardEvent} from 'react'
import UsersItem from '../../components/Messanger/Users/UsersItem'
import MessagesItem from '../../components/Messanger/Messages/MessagesItem'
import classes from './Messenger.module.css'
import Button from '../../components/UI/Button/Button'
import {MessengerType} from './MessengerContainer'

export const Messenger: React.FC<MessengerType> = props => {

    const Users = props.messenger.users.map(u => <UsersItem key={u.id} name={u.name} path={`/messenger/${u.id}`} />)

    const Messages = props.messenger.messages.map(m => <MessagesItem key={m.id} messageText={m.messageText} />)

    const sendMessage = () => {
        props.sendMessage()
    }

    const textChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.textChange(newText)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            props.sendMessage()
        }
    }

    return (
        <div>
            <div className={classes.messengerWrapper}>
                <div className={classes.usersList}>
                    {Users}
                </div>

                <div className={classes.messagesList}>
                    {Messages}

                    <textarea
                        value={props.messenger.newMessageText}
                        onChange={textChange}
                        onKeyPress={onKeyPressHandler}
                    />
                    <Button
                        onClick={sendMessage}
                        text="Send"
                    />
                </div>
            </div>
        </div>
    )
}
