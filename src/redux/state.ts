import {renderEntireTree} from "../render";

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

let state: RootStateType = {
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
}

export type  addPostType = (postMessage: string) => void


export let addPost = (postMessage: string) => {
    let newPost:PostType = {id: 3, message: postMessage, likesCount: 0};
    state.profilePage.posts.push(newPost);
    renderEntireTree();
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderEntireTree();
}

export default state;