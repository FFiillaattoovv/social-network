import {getAuthUserDataThunkCreator} from './auth-reducer';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';

let initialState = {
    initialized: false as boolean
}

type InitialStateType = typeof initialState

type AppActionsType = ReturnType<typeof initializedSuccess>

const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'});

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, AppActionsType> => (dispatch) => {
    let promise = dispatch(getAuthUserDataThunkCreator());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
};

export default appReducer;
