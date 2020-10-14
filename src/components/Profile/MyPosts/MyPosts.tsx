import React from "react";
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current!.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>New post</div>
            {postsElements}
        </div>
    )
}
export default MyPosts;