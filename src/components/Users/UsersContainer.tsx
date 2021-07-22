import {connect} from 'react-redux';
import Users from './Users';
import {
    followThunkCreator,
    unfollowThunkCreator,
    requestUsersThunkCreator,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    setIsFetching
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from '../../redux/users-selectors';

type MapStatePropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

type MDTPType = {
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
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
        const {getUsersThunkCreator, pageSize, currentPage} = this.props;
        getUsersThunkCreator(pageSize, currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        const {getUsersThunkCreator, pageSize} = this.props;
        getUsersThunkCreator(pageSize, pageNumber);
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ? <Preloader/> :
                        <Users users={this.props.users}
                               followThunkCreator={this.props.followThunkCreator}
                               unfollowThunkCreator={this.props.unfollowThunkCreator}
                               onPageChanged={this.onPageChanged}
                               totalUserCount={this.props.totalUserCount}
                               pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage}
                               followingInProgress={this.props.followingInProgress}
                        />
                }
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    followThunkCreator,
    unfollowThunkCreator,
    setCurrentPage,
    getUsersThunkCreator: requestUsersThunkCreator,
    setUsers,
    setTotalUsersCount,
    setIsFetching
})(UsersContainer);
