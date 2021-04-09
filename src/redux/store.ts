import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from './profile-reducer';
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from './dialogs-reducer';

export type MessageType = {
    id?: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id?: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebarType
}

type sidebarType = {}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 4},
                {id: 2, message: 'It\'s my first post.', likesCount: 16}
            ],
            newPostText: 'Test text'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Maria'},
                {id: 3, name: 'Maxim'},
                {id: 4, name: 'Paul'},
                {id: 5, name: 'Elena'}
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'I\'m fine!'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}

export default store;