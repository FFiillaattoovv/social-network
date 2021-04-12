let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean
}

type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

type AuthActionsType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (id: number | null, email: string | null, login: string | null) => ({
    type: 'SET-USER-DATA',
    data: {id, email, login}
} as const)

export default authReducer;