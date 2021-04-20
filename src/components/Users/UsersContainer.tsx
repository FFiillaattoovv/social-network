import {connect} from 'react-redux';
import Users from './Users';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setToggleFollowingInProgress,
    setTotalUsersCount,
    setUsers,
    unfollow
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

type MapStatePropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

type MDTPType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setToggleFollowingInProgress: (isFetching: boolean, userId: number) => void
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

export type UsersPropsType = MapStatePropsType & MDTPType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ? <Preloader/> :
                        <Users users={this.props.users}
                               follow={this.props.follow}
                               unfollow={this.props.unfollow}
                               onPageChanged={this.onPageChanged}
                               totalUserCount={this.props.totalUserCount}
                               pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage}
                               followingInProgress={this.props.followingInProgress}
                               setToggleFollowingInProgress={this.props.setToggleFollowingInProgress}
                        />
                }
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setToggleFollowingInProgress
})(UsersContainer);