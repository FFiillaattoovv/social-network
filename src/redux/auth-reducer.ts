let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null
}

type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

type AuthActionsType = ReturnType<typeof setUserData>;

const setUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: 'SET-USER-DATA',
    data: {userId, email, login}
})

export default authReducer;