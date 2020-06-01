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

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 4},
            {id: 2, message: "It's my first post.", likesCount: 16}
        ]
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
}

export default state;