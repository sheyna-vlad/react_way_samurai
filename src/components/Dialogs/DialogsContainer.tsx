import React from 'react';
import {DialogsType, sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Dispatch, Store} from "redux";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../Redux/redux-store";


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



//
//
//  function DialogsContainer(props: PropsDialogsType) {
//
//     let state = props.store.getState()
//
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//     let onNewMessageChange = (body: string) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//     return (
//         <Dialogs messages={state.DialogsPage.messages}
//                  dialog={state.DialogsPage.dialog}
//                  newMessageBody={state.DialogsPage.newMessageBody}
//                  sendMessage={onSendMessageClick}
//                  updateNewMessageBody={onNewMessageChange}
//         />
//     );
// }

export type PropsDialogsType = mapStateToPropsType & mapDispatchToPropsType;

type mapStateToPropsType = {
    dialogsPage: DialogsType
}
type mapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}


let mapStateToProps = (state: ReduxStoreType): mapStateToPropsType => {
    return ({
        dialogsPage: state.DialogsPage

    });
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return ({
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    });
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;