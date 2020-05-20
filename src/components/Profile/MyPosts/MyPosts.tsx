import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 4},
        {id: 2, message: "It's my first post.", likesCount: 16}
    ];

    return (
        <div>
            <div>
                <h3>My posts</h3>
                <textarea></textarea>
            </div>
            <div>New post</div>
            <Post message={postData[0].message} likesCount={postData[0].likesCount} />
            <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        </div>
    )
}
export default MyPosts;