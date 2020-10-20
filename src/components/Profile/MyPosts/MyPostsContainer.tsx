import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfilePageType} from "../../../redux/store";

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

type MapStateType = {
    profilePage: ProfilePageType
}

type MapDispatchType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}



const MyPostsContainer = connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;