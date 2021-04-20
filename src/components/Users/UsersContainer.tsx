import {connect} from 'react-redux';
import Users from './Users';
import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    setToggleFollowingInProgress,
    unfollow
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

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
    getUsersThunkCreator: (pageSize: number, currentPage: number) => void
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
        this.props.getUsersThunkCreator( this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator( this.props.pageSize, pageNumber);
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
    setCurrentPage,
    setToggleFollowingInProgress,
    getUsersThunkCreator
})(UsersContainer);