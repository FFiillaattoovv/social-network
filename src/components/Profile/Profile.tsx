import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src="https://cdn.pixabay.com/photo/2016/10/29/23/48/animals-1782013__340.png" alt=""/>
            <div>
                Ava + description
            </div>
            <div>
                My posts
                <div>New post</div>
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
            </div>
        </div>
    )
}
export default Profile;