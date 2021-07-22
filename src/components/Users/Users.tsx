import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

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
    users: Array<UserType>
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
}

const Users = ({
                   onPageChanged,
                   totalUserCount,
                   users,
                   unfollowThunkCreator,
                   followThunkCreator,
                   followingInProgress,
                   currentPage,
                   pageSize
               }: PropsType) => {

    return (
        <div>
            <Paginator onPageChanged={onPageChanged} totalUserCount={totalUserCount}
                       pageSize={pageSize} currentPage={currentPage}/>
            {
                users.map(u => <User key={u.id} user={u} followThunkCreator={followThunkCreator}
                                     unfollowThunkCreator={unfollowThunkCreator}
                                     followingInProgress={followingInProgress}/>)
            }
        </div>
    )
}

export default Users;
