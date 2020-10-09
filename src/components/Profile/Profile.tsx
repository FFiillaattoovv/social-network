import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostType, PostType, storeType, updateNewPostTextType} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
    addPost: addPostType
    newPostText: string
    updateNewPostText: updateNewPostTextType
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile;