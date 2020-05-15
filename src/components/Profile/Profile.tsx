import React from "react";
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/10/29/23/48/animals-1782013__340.png" alt=""/>
            </div>
            <div>Ava + description</div>
            <MyPosts />
        </div>
    )
}
export default Profile;