import {connect} from 'react-redux';
import Users from './Users';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';

type MapStatePropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

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

class UsersContainer extends React.Component<PropsType> {

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
        onPageChanged={this.onPageChanged}
        totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (usersId: number) => {
            dispatch(followAC(usersId));
        },
        unfollow: (usersId: number) => {
            dispatch(unfollowAC(usersId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);