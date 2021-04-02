import {connect} from 'react-redux';
import {UserType} from './Users';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import UsersAPIComponent from './UsersAPIComponent';

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);