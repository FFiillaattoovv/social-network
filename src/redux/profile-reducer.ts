import {PostType} from "./state";

const profileReducer = (state, action) => {
    if (action.type === "ADD-POST") {
        let newPost: PostType = {id: 3, message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber();
    }
    return state;
}