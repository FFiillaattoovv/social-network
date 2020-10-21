import React from "react";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";

type PropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts = (props: PropsType) => {
    let state = props.profilePage;
    let postsElements = state.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)
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
                <textarea onChange={onPostChange} ref={newPostElement} value={state.newPostText}/>
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