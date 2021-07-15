import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {ProfilePageType} from '../../../redux/store';

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(addPostActionCreator(newPostBody));
        }
    }
}

type MapStateType = {
    profilePage: ProfilePageType
}

type MapDispatchType = {
    addPost: (newPostBody: string) => void
}


const MyPostsContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
