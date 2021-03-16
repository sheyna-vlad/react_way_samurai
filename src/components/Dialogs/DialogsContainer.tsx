import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialgItem/DialogsItem';
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import { PropsStoreType} from "../../Redux/store";
import {Dialogs} from "./Dialogs";


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
    store: PropsStoreType
}

 function DialogsContainer(props: PropsDialogsType) {

    let DialogsPage = props.store.getState().DialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs messages={DialogsPage.messages}
                 dialog={DialogsPage.dialog}
                 newMessageBody={DialogsPage.newMessageBody}
                 sendMessage={onSendMessageClick}
                 updateNewMessageBody={onNewMessageChange}
        />
    );
}
export default DialogsContainer;