import React from 'react';
import Post from './Post/Post';
import {ProfilePageType} from '../../../redux/store';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type PropsType = {
    profilePage: ProfilePageType
    addPost: (newPostBody: string) => void
}

const MyPosts = (props: PropsType) => {

    let state = props.profilePage;

    let postsElements = state.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

    const addNewPost = (values: PostFormType) => {
        props.addPost(values.newPostBody);
    }

    return (
        <div>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div>New post</div>
            {postsElements}
        </div>
    )
};

type PostFormType = {
    newPostBody: string
};

const AddPostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostBody'} placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<PostFormType>({
    form: 'postAddMessageForm'
})(AddPostForm);

export default MyPosts;
