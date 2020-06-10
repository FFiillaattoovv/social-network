import React, {RefObject} from "react";
import Post from "./Post/Post";
import {addPostType, PostType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
    addPost: addPostType

}
const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current!.value;
        props.addPost(text);
        newPostElement.current!.value = "";
    }
    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea ref={newPostElement}></textarea>
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