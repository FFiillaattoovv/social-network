let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Dmitry",
            status: "I am a boss",
            location: {citi: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Sasha",
            status: "I am a boss too",
            location: {citi: "Moscow", country: "Russia"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Andrew",
            status: "I am a boss too too",
            location: {citi: "Kiev", country: "Ukraine"}
        }
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })]
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })]
            };
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: "FOLLOW", userId});

export const unfollowAC = (userId) => ({type: "UNFOLLOW", userId});

export const setUsersAC = (users) => ({type: "SET-USERS", users});

export default usersReducer;