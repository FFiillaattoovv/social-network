import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer  />
        </div>
    )
}
export default Profile;