import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialgItem/DialogsItem';
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {DialogsType, PropsStoreType} from "../../Redux/store";


export type PropsDialogType = {
    id: string
    name: string
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

export type PropsDialogsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialog: Array<PropsDialogType>
    messages: Array<PropsMessagesType>
    newMessageBody: string
}

export function Dialogs(props: PropsDialogsType) {

    let dialogsElement = props.dialog.map(t => <DialogItem name={t.name} id={t.id}/>);
    let messageElement = props.messages.map(t => <Message message={t.message}/>);
    let newMessageBody = props.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;

        props.updateNewMessageBody(body);
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
                    /></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}