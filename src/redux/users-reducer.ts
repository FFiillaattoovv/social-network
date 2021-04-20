import {UserType} from '../components/Users/Users';
import {followAPI, usersAPI} from '../api/api';
import {Dispatch} from 'redux';

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
        case 'FOLLOW':
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })]
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })]
            };
        case 'SET-USERS':
            return {
                ...state, users: action.users
            };
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUserCount: action.totalCount
            };
        case 'SET-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'SET-TOGGLE-FOLLOWING-IN-PROGRESS':
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

export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const);
export const unfollowSuccess = (userId: number) => ({type: 'UNFOLLOW', userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const);
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const);
export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const);
export const setToggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: 'SET-TOGGLE-FOLLOWING-IN-PROGRESS',
    isFetching,
    userId
} as const);

export const getUsersThunkCreator = (pageSize: number, currentPage: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true));

        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

export const followThunkCreator = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleFollowingInProgress(true, id));

        followAPI.follow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(id));
            }
            dispatch(setToggleFollowingInProgress(false, id));
        });
    }
};

export const unfollowThunkCreator = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleFollowingInProgress(true, id));
        followAPI.unfollow(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(id));
            }
            dispatch(setToggleFollowingInProgress(false, id));
        });
    }
};

export default usersReducer;