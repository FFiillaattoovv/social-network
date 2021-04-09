import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfileActionCreator, PostType} from '../../redux/profile-reducer';

type MSTPType = {
    posts: Array<PostType>
    newPostText: string
    profile: Array<ProfileType> | null
}

type MDTPType = {
    setUserProfileActionCreator: (profile: Array<ProfileType> | null) => void
}

type ProfilePropsType = MSTPType & MDTPType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfileActionCreator(response.data);
        });
    }

    render() {
        return (
            <div>
                <Profile/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MSTPType => ({
    profile: state.profilePage.profile,
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
});

export default connect(mapStateToProps, {setUserProfileActionCreator})(ProfileContainer);