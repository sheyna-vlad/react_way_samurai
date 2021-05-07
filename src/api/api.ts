import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd4e93fe8-e0fb-4a22-9388-0b3da2212073'
    }
})

type CommonType<T = {}> = {
    resultCode: 0 | 1
    messages: Array<string>
    data: T
}

type GetUsers = {
    error: null | string
    totalCount: number
    items: UserType[]
}

type AuthType = {
    id: number | null
    email: string | null
    login: string | null
}

export type UserType = {
    id: number
    name: string
    followed: boolean
    status: string | null
    photos: { small: string | null, large: string | null }
    uniqueUrlName: any
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    aboutMe: string | null
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string | null
        large: string | null
    }
}

export const usersAPI = {
    getUsers(page: number = 1, count: number = 10) {
        return instance.get<GetUsers>(`users/?page=${page}&count=${count}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<CommonType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<CommonType>(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<CommonType>(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get<CommonType<AuthType>>(`auth/me`)
    }
}
