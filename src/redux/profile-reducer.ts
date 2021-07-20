import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

const ADD_POST = '/profile/ADD_POST';
const SET_USER_PROFILE = '/profile/SET_USER_PROFILE';
const SET_STATUS = '/profile/SET_STATUS';
const DELETE_POST = '/profile/DELETE_POST';

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: { small: string, large: string }
}

type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'It\'s my first post.', likesCount: 16}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string
}

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {id: 3, message: action.newPostBody, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        }
        default:
            return state;
    }
}

export type addPostActionType = ReturnType<typeof addPostActionCreator>
export type setUserProfileActionType = ReturnType<typeof setUserProfileActionCreator>
export type setUserStatusActionType = ReturnType<typeof setUserStatusActionCreator>
export type deletePostActionType = ReturnType<typeof deletePostActionCreator>

export type ProfileActionsType =
    | addPostActionType
    | setUserProfileActionType
    | setUserStatusActionType
    | deletePostActionType

export const addPostActionCreator = (newPostBody: string) => ({type: ADD_POST, newPostBody: newPostBody} as const)

export const setUserProfileActionCreator = (profile: ProfileType | null) => ({
    type: SET_USER_PROFILE,
    profile
} as const)

export const setUserStatusActionCreator = (status: string) => ({
    type: SET_STATUS,
    status: status
} as const)

export const deletePostActionCreator = (id: number) => ({
    type: DELETE_POST,
    id: id
} as const)

export const getUserProfileThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfileActionCreator(response.data));
}

export const getUserStatusThunkCreator = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatusActionCreator(response.data));
}

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusActionCreator(status));
    }
}

export default profileReducer;
