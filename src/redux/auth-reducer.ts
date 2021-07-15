import {Dispatch, ActionCreator} from 'redux';
import {authAPI} from '../api/api';

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
                ...action.payload
            }
        default:
            return state;
    }
}

type AuthActionsType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: {id, email, login, isAuth}
} as const)

export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: ActionCreator<Dispatch>) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataThunkCreator());
        }
    });
}

export const logoutThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;
