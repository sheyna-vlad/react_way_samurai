import React from 'react';
import {actions, DialogsType} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";


export type PropsMessagesType = {
    id: string
    message: string
}

export type PropsDialogItemType = {
    name: string
    id: string
}





export type PropsDialogsType = mapStateToPropsType & mapDispatchToPropsType;

type mapStateToPropsType = {
    dialogsPage: DialogsType
}
type mapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return ({
        dialogsPage: state.DialogsPage

    });
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return ({
        sendMessage: () => {
            dispatch(actions.sendMessageCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(actions.updateNewMessageBodyCreator(body))
        },
    });
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;