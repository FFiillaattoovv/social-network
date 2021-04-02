import React from 'react';
import axios from 'axios'
import Users from './Users';

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

class UsersAPIComponent extends React.Component<PropsType> {

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

    render() {
        return <Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                      setUsers={this.props.setUsers} setCurrentPage={this.props.setCurrentPage}
                      setTotalUsersCount={this.props.setTotalUsersCount} onPageChanged={this.onPageChanged}
                      totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}/>
    }
}

export default UsersAPIComponent;