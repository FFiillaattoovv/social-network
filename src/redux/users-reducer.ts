import {UserType} from '../components/Users/Users';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 3 as number,
    totalUserCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean
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
        default:
            return state;
    }
}

type FollowActionType = ReturnType<typeof follow>
type UnFollowActionType = ReturnType<typeof unfollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type SetIsFetchingActionType = ReturnType<typeof setIsFetching>

export type UsersActionsType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | SetIsFetchingActionType

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const);
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const);
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const);
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const);
export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const);

export default usersReducer;