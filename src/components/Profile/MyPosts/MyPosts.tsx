import React from "react";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
}
const MyPosts = (props: PropsType) => {
    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea></textarea>
            </div>
            <div>New post</div>
            {postsElements}
        </div>
    )
}
export default MyPosts;