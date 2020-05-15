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
            <Post message="Hi, how are you?" likesCount="4" />
            <Post message="It's my first post." likesCount="16" />
        </div>
    )
}
export default MyPosts;