import {v1} from "uuid";
import {PropsDialogType, PropsMessagesType} from "../components/Dialogs/Dialogs";
import {InferActionTypes} from "./redux-store";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsType = {
    dialog: Array<PropsDialogType>
    messages: Array<PropsMessagesType>
    newMessageBody: string
}


const initialState =  {
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'Helo'},
        {id: v1(), message: 'My job'},
        {id: v1(), message: 'My  perfect job'},
        {id: v1(), message: 'My  new job'},
    ] as Array<PropsMessagesType>,
    dialog: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Sasha'}
    ] as Array<PropsDialogType>,

    newMessageBody: ''
}

export type initialStateType = typeof initialState


const dialogsReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: v1(), message: body});
            return state;

        default:
            return state;
    }


}

type ActionsType = InferActionTypes<typeof actions>
 export const actions = {
    sendMessageCreator : () => ({type: SEND_MESSAGE} as const),
    updateNewMessageBodyCreator : (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)
}


export default dialogsReducer;