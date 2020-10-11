import {PostType} from "./state";

const profileReducer = (state, action) => {
    if (action.type === "ADD-POST") {
        let newPost: PostType = {id: 3, message: state.newPostText, likesCount: 0};
        state.posts.push(newPost);
        state.newPostText = "";
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText;
    }
    return state;
}