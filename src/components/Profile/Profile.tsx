import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import addPost, {PostType, addPostType} from "../../redux/state";

type PropsType = {
    posts: Array<PostType>
    addPost: addPostType
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;