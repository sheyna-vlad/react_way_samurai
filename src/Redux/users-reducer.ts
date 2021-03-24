import {v1} from "uuid";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        {
            id: v1(),
            photoUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEB2S6pghPChA/profile-displayphoto-shrink_800_800/0/1517590887677?e=1622073600&v=beta&t=rMEP8plOgggRzYkAQMrb-NvlHhobsfauGPojX6mRmNU',
            followed: false,
            fullName: 'Vlad',
            status: 'Student',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEB2S6pghPChA/profile-displayphoto-shrink_800_800/0/1517590887677?e=1622073600&v=beta&t=rMEP8plOgggRzYkAQMrb-NvlHhobsfauGPojX6mRmNU',
            followed: false,
            fullName: 'Julia',
            status: 'lawyer',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEB2S6pghPChA/profile-displayphoto-shrink_800_800/0/1517590887677?e=1622073600&v=beta&t=rMEP8plOgggRzYkAQMrb-NvlHhobsfauGPojX6mRmNU',
            followed: false,
            fullName: 'Vadim',
            status: 'foreman',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            photoUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEB2S6pghPChA/profile-displayphoto-shrink_800_800/0/1517590887677?e=1622073600&v=beta&t=rMEP8plOgggRzYkAQMrb-NvlHhobsfauGPojX6mRmNU',
            followed: false,
            fullName: 'Eva',
            status: 'apprentice',
            location: {city: 'Minsk', country: 'Belarus'}
        },

    ],
}
export type UsersInitialStateType = typeof initialState

const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsType): UsersInitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }

        }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET_USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }


        default:
            return state;
    }

}

type ActionsType = FollowACType | SetUsersACType

type FollowACType = {
    type: typeof FOLLOW | typeof UNFOLLOW
    userId: string
}
type SetUsersACType = {
    type: typeof SET_USERS
    users: any
}


export const followAC = (userId: string): FollowACType => ({type: FOLLOW, userId: userId} as const)
export const unfollowAC = (userId: string): FollowACType => ({type: UNFOLLOW, userId: userId} as const)
export const setUsersAC = (users: any): SetUsersACType => ({type: SET_USERS, users: users} as const)

export default usersReducer;