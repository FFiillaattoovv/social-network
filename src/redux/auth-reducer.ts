import {ActionCreator, Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = '/auth/SET_USER_DATA';

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean
}

type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
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
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)

export const getAuthUserDataThunkCreator = () => async (dispatch: Dispatch) => {
    let response = await authAPI.getAuth();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => async (dispatch: ActionCreator<Dispatch>) => {
    const response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const logoutThunkCreator = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
