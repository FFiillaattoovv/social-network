import React from 'react';
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
    totalUserCount: number
    pageSize: number
    currentPage: number
}

class Users extends React.Component<PropsType> {

    state = {
        portionNumber: 1
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    previousPageToggle = () => {
        this.setState({
            portionNumber: this.state.portionNumber - 1
        })
    }

    nextPageToggle = () => {
        this.setState({
            portionNumber: this.state.portionNumber + 1
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages = []

        for (let i = 1; pagesCount >= i; i++) {
            pages.push(i);
        }

        let portionSize = 10;

        let portionCount = Math.ceil(pagesCount / portionSize);

        let leftPortionPageNumber = (this.state.portionNumber - 1) * portionSize + 1;

        let rightPortionPageNumber = this.state.portionNumber * portionSize;

        return (
            <div>
                <div>
                    {this.state.portionNumber > 1 && <button onClick={this.previousPageToggle}>PREV</button>}
                    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(e => {
                        return <span onClick={() => {
                            this.onPageChanged(e)
                        }} className={`${this.props.currentPage === e && styles.selectedPage} ${styles.pageNumber}`}>{e}</span>
                    })}
                    {portionCount > this.state.portionNumber && <button onClick={this.nextPageToggle}>NEXT</button>}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}
                                 alt="User avatar"/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users;