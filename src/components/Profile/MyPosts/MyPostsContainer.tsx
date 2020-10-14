import React from "react";
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: PropsType) => {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost}/>
    )
}
export default MyPostsContainer;