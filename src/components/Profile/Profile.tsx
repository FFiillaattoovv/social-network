import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostType, PostType} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
    addPost: addPostType
    newPostText: string
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText}/>
        </div>
    )
}
export default Profile;