import React from "react";
import Post from "./Post/Post";
import {ActionsTypes, PostType, addPostActionCreator, onPostChangeActionCreator} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current!.value;
        props.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>New post</div>
            {postsElements}
        </div>
    )
}
export default MyPosts;