import React, {useState} from 'react';
import styles from './users.module.css';
import axios from 'axios'
import userPhoto from '../../assets/images/images.png';

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
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
}

const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = []

    for (let i = 1; pagesCount >= i; i++) {
        pages.push(i);
    }

    let portionSize = 10;

    let portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;

    let rightPortionPageNumber = portionNumber * portionSize;

    let previousPageToggle = () => {
        setPortionNumber(portionNumber - 1);
    }

    let nextPageToggle = () => {
        setPortionNumber(portionNumber + 1);
    }

    return (
        <div>
            <div>
                {portionNumber > 1 && <button onClick={previousPageToggle}>PREV</button>}
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(e => {
                    return <span onClick={() => {
                        props.onPageChanged(e)
                    }}
                                 className={`${props.currentPage === e && styles.selectedPage} ${styles.pageNumber}`}>{e}</span>
                })}
                {portionCount > portionNumber && <button onClick={nextPageToggle}>NEXT</button>}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}
                                 alt="User avatar"/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.citi'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;