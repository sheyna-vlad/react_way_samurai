type MessageType = {
    id: number
    messageText: string
}

type MessagesUsersListType = {
    id: number
    name: string
}

export type MessengerPageType = {
    users: Array<MessagesUsersListType>
    messages: Array<MessageType>
    newMessageText: string
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type ChangeNewMessageActionType = {
    type: 'CHANGE-NEW-MESSAGE-TEXT'
    newText: string
}

const initialState: MessengerPageType = {
    users: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Thomas'},
        {id: 3, name: 'Max'},
        {id: 4, name: 'Sir'},
    ],
    messages: [
        {id: 1, messageText: 'Hello 😂'},
        {id: 2, messageText: 'Hi!!! Go to the gym'},
        {id: 3, messageText: 'Good idea, lets go!'},
        {id: 4, messageText: '😎'},
        {id: 5, messageText: 'potato'},
    ],
    newMessageText: ''
}

export type MessengerActionTypes = ChangeNewMessageActionType | SendMessageActionType

const messengerReducer = (state: MessengerPageType = initialState, action: MessengerActionTypes): MessengerPageType => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-TEXT': {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        case 'SEND-MESSAGE': {
            const newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 11, messageText: newMessage}],
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (): SendMessageActionType => {
    return {
        type: 'SEND-MESSAGE'
    }
}

export const changeNewMessageTextCreator = (newText: string): ChangeNewMessageActionType => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newText
    }
}

export default messengerReducer
