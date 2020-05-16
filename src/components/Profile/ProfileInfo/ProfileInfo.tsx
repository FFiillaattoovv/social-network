import React from "react";
import classes from "../Profile.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.content}>
                <img src="https://cdn.pixabay.com/photo/2016/10/29/23/48/animals-1782013__340.png" alt=""/>
            </div>
            <div>Ava + description</div>
        </div>
    )
}

export default ProfileInfo;