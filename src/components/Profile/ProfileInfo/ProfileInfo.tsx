import React from 'react';
import classes from './ProfileInfo.module.css';
import {ProfileType} from '../../../redux/profile-reducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

type PropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.content}>
                <img src="https://cdn.pixabay.com/photo/2016/10/29/23/48/animals-1782013__340.png" alt=""/>
            </div>
            <img src={props.profile.photos.large} alt="profile"/>
            <ProfileStatus status='Hello everybody!'/>
        </div>
    )
}

export default ProfileInfo;
