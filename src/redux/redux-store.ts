import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>;

let store = createStore(reducers);

export default store;