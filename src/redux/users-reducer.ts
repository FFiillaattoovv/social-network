import {UserType} from '../components/Users/Users';
import {followAPI, usersAPI} from '../api/api';
import {ActionCreator, Dispatch} from 'redux';
import {AxiosResponse} from 'axios';

const FOLLOW = '/users/FOLLOW';
const UNFOLLOW = '/users/UNFOLLOW';
const SET_USERS = '/users/SET_USERS';
const SET_CURRENT_PAGE = '/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = '/users/SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = '/users/SET_IS_FETCHING';
const SET_TOGGLE_FOLLOWING_IN_PROGRESS = '/users/SET_TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 3 as number,
    totalUserCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    followingInProgress: [] as Array<number>
}

type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })]
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })]
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

type FollowActionType = ReturnType<typeof followSuccess>
type UnFollowActionType = ReturnType<typeof unfollowSuccess>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type SetIsFetchingActionType = ReturnType<typeof setIsFetching>
type SetToggleFollowingInProgressActionType = ReturnType<typeof setToggleFollowingInProgress>

export type UsersActionsType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | SetIsFetchingActionType
    | SetToggleFollowingInProgressActionType

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const);
export const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching} as const);
export const setToggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: SET_TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
} as const);

export const requestUsersThunkCreator = (pageSize: number, page: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));

        const data = await usersAPI.getUsers(pageSize, page);
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
};

type apiMethodType = (id: number) => Promise<AxiosResponse<{ resultCode: number }>>

const followUnfollowFlow = async (dispatch: Dispatch, id: number, apiMethod: apiMethodType, actionCreator: ActionCreator<FollowActionType | UnFollowActionType>) => {
    dispatch(setToggleFollowingInProgress(true, id));
    const response = await apiMethod(id);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(setToggleFollowingInProgress(false, id));
};

export const followThunkCreator = (id: number) => {
    return async (dispatch: Dispatch) => {
        const apiMethod = followAPI.follow.bind(followAPI);
        await followUnfollowFlow(dispatch, id, apiMethod, followSuccess);
    }
};

export const unfollowThunkCreator = (id: number) => {
    return async (dispatch: Dispatch) => {
        const apiMethod = followAPI.unfollow.bind(followAPI);
        await followUnfollowFlow(dispatch, id, apiMethod, unfollowSuccess);
    }
};

export default usersReducer;
