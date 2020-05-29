import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postDataType} from "../../../index";



type MyPostsType = {
    posts: Array<postDataType>
}


const MyPosts = (props: MyPostsType) => {

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