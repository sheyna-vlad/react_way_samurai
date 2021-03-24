import {v1} from "uuid";
import {PropsDialogType, PropsMessagesType} from "../components/Dialogs/Dialogs";
import {InferActionTypes} from "./redux-store";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';



const initialState = {
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

export type DialogsInitialStateType = typeof initialState


const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionsType): DialogsInitialStateType => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY: {
            return  {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
             return  {
                ...state,
                messages : [...state.messages,{id: v1(), message: body}],
                newMessageBody : ''
            }
        }

        default:
            return state;
    }


}

type ActionsType = InferActionTypes<typeof actions>

export const actions = {
    sendMessageCreator: () => ({type: SEND_MESSAGE} as const),
    updateNewMessageBodyCreator: (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)
}


export default dialogsReducer;