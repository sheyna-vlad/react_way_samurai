type MessageType = {
    id: number
    messageText: string
}

type MessagesUsersListType = {
    id: number
    name: string
}

type PostsType = {
    id: number
    postText: string,
    likesCount: number
}

type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

type MessengerPageType = {
    users: Array<MessagesUsersListType>
    messages: Array<MessageType>
    newMessageText: string
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    messengerPage: MessengerPageType
    sidebar: SidebarType
}

type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

type ActionTypes =
    AddPostActionType
    | ChangeNewTextActionType
    | ChangeNewMessageActionType
    | SendMessageActionType

type AddPostActionType = {
    type: 'ADD-POST'
}

type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
}

type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

type ChangeNewMessageActionType = {
    type: 'CHANGE-NEW-MESSAGE-TEXT'
    newText: string
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    postText: 'Hello! How are you? Subscribe me: https://github.com/paragulgov. Thank you so much. Good bye, see you later',
                    likesCount: 13
                },
                {
                    id: 2,
                    postText: 'Hello! How are you?',
                    likesCount: 5
                },
                {
                    id: 3,
                    postText: 'Its my first post here 😄',
                    likesCount: 8
                },
            ],
            newPostText: ''
        },
        messengerPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {
        console.log('redux changed')
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.messengerPage = dialogsReducer(this._state.messengerPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this.rerenderEntireTree()
    }
}

const addPostActionCreator = (): AddPostActionType => {
    return {
        type: 'ADD-POST'
    }
}

const changeNewPostTextActionCreator = (newText: string): ChangeNewTextActionType => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newText
    }
}

const sendMessageCreator = (): SendMessageActionType => {
    return {
        type: 'SEND-MESSAGE'
    }
}

const changeNewMessageTextCreator = (newText: string): ChangeNewMessageActionType => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newText
    }
}

export default store
