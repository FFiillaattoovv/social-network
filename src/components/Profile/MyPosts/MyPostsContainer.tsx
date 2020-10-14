import React from "react";
import {ActionsTypes, PostType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: PropsType) => {

    let state = props.store.getState()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <StoreContext.Consumer>
            <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText{state.profilePage.newPostText}/>
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;