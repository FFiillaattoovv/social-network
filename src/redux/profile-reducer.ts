import {PostType, ProfilePageType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 4},
        {id: 2, message: "It's my first post.", likesCount: 16}
    ],
    newPostText: "Test text"
}

const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {id: 3, message: state.newPostText, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export type addPostActionType = ReturnType<typeof addPostActionCreator>
export type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export type ProfileActionsType = addPostActionType | updateNewPostTextActionType

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)

export const updateNewPostTextActionCreator = (text: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: text} as const)

export default profileReducer;