import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialgItem/DialogsItem';
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {PropsDialogType, PropsStoreType} from "../../Redux/store";

export type PropsDialogsType = {
    dialog: Array<PropsDialogType>
    messages: Array<PropsMessagesType>
    newMessageBody: string
}


export type PropsMessagesType = {
    id: string
    message: string
}

export type PropsDialogItemType = {
    name: string
    id: string
}
export type PropsMessageType = {
    message: string
}

export type DialogsProps = {
    store: PropsStoreType
}

export function Dialogs(props: DialogsProps) {

    let dialogsElement = props.store.getState().DialogsPage.dialog.map(t => <DialogItem name={t.name} id={t.id}/>);
    let messageElement = props.store.getState().DialogsPage.messages.map(t => <Message message={t.message}/>);
    let newMessageBody = props.store.getState().DialogsPage.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div> {messageElement}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}