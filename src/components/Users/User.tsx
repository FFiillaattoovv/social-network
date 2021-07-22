import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/images.png';
import {NavLink} from 'react-router-dom';

export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type LocationType = {
    citi: string
    country: string
}

type PropsType = {
    user: UserType
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
    followingInProgress: Array<number>
}

const User = ({user, followingInProgress, followThunkCreator, unfollowThunkCreator}: PropsType) => {

    return (
        <div>
            <span>
               <div>
                  <NavLink to={'/profile/' + user.id}>
                      <img src={user.photos.small ? user.photos.small : userPhoto}
                           className={styles.userPhoto}
                           alt="User avatar"/>
                  </NavLink>
               </div>
               <div>
                  {
                      user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  unfollowThunkCreator(user.id)
                                              }}>Unfollow</button> :
                          <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      followThunkCreator(user.id)
                                  }}>Follow</button>
                  }
               </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.citi'}</div>
                    <div>{'user.location.country'}</div>
                </span>
            </span>
        </div>
    )
}

export default User;
