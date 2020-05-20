import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 4},
        {id: 2, message: "It's my first post.", likesCount: 16}
    ];

    let postsElements = postData.map( post => <Post message={post.message} likesCount={post.likesCount} />)

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