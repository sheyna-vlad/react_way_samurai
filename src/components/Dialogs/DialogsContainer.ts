import {actions, DialogsInitialStateType} from "../../Redux/dialogs-reducer";
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





export type PropsDialogsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
}
type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return ({
        dialogsPage: state.DialogsPage

    });
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return ({
        sendMessage: () => {
            dispatch(actions.sendMessageCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(actions.updateNewMessageBodyCreator(body))
        },
    });
}


const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;