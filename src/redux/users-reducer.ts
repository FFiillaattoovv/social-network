import {UserType} from '../components/Users/Users';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 3 as number,
    totalUserCount: 16 as number,
    currentPage: 1 as number
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
                ...state,
                users: [...action.users]
            };
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        default:
            return state;
    }
}

type FollowActionType = ReturnType<typeof followAC>
type UnFollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>

export type UsersActionsType = FollowActionType | UnFollowActionType | SetUsersActionType | SetCurrentPageActionType

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const);
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET-USERS', users} as const);
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const);

export default usersReducer;