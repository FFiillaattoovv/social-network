import profileReducer, {addPostActionCreator, deletePostActionCreator, PostType, ProfileType} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'It\'s my first post.', likesCount: 16}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string
};

test('message of new post should correct', () => {
    let action = addPostActionCreator('Test profile reducer');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test('length of post should be incremented', () => {
    let action = addPostActionCreator('Test profile reducer');
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('Test profile reducer');
});

test('after deleting length of message should be decremented', () => {
    let action = deletePostActionCreator(2);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});
