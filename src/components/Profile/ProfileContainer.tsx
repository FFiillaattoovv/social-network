import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfileActionCreator, PostType} from '../../redux/profile-reducer';
import {withRouter, RouteComponentProps} from 'react-router-dom';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfileActionCreator(response.data);
        });
    }

    render() {
        debugger
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