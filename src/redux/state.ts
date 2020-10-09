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

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebarType
}

type sidebarType = {}

export type storeType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: "ADD-POST"
}

type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 4},
                {id: 2, message: "It's my first post.", likesCount: 16}
            ],
            newPostText: "Test text"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Maria"},
                {id: 3, name: "Maxim"},
                {id: 4, name: "Paul"},
                {id: 5, name: "Elena"}
            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you"},
                {id: 3, message: "I'm fine!"}
            ]
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
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostType = {id: 3, message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }
}

export const onPostChangeActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    }
}

export type  addPostType = () => void

export type  updateNewPostTextType = (newText: string) => void

export default store;