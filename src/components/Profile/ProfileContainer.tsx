import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    PostType,
    ProfileType, updateUserStatusThunkCreator
} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import {compose} from 'redux';

type MSTPType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
    authorizedUserId: string | number | null
    isAuth: boolean
}

type MDTPType = {
    getUserProfileThunkCreator: (userId: string) => void
    getUserStatusThunkCreator: (userId: string) => void
    updateUserStatusThunkCreator: (status: string) => void
}

type ProfilePropsType = MSTPType & MDTPType

type PathParamsType = {
    userId: any
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateUserStatusThunkCreator}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MSTPType => ({
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
