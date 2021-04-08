import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {PropsType} from '../Users/UsersContainer';

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
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

export default ProfileContainer;