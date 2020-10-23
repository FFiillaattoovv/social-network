import {UserType} from "../components/Users/Users";

let initialState = {
    users: [] as Array<UserType>
}

type InitialStateType = typeof initialState


const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })]
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })]
            };
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId} as const);
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: "SET-USERS", users} as const);

type FollowActionType = ReturnType<typeof followAC>
type UnFollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>

export type UsersActionsType = FollowActionType | UnFollowActionType | SetUsersActionType

export default usersReducer;