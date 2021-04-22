import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {PostType, ProfileType, setUserProfileActionCreator} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {profileAPI} from '../../api/api';

type MSTPType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

type MDTPType = {
    setUserProfileActionCreator: (profile: ProfileType | null) => void
}

type ProfilePropsType = MSTPType & MDTPType

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        profileAPI.getProfile(userId).then(response => {
            this.props.setUserProfileActionCreator(response.data);
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MSTPType => ({
    profile: state.profilePage.profile,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileActionCreator})(WithUrlDataContainerComponent);