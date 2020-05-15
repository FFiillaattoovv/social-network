import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea></textarea>

            </div>
            <div>New post</div>
            <Post message="Hi, how are you?"/>
            <Post message="It's my first post."/>
        </div>
    )
}
export default MyPosts;