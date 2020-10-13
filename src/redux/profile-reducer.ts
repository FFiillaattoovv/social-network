import {ActionsTypes, PostType, ProfilePageType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 4},
        {id: 2, message: "It's my first post.", likesCount: 16}
    ],
    newPostText: "Test text"
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {id: 3, message: state.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)

export const updateNewPostTextActionCreator = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text} as const)

export default profileReducer;