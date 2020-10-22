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

}

export const followAC = (userId) => ({type: "FOLLOW", userId})

export const unfollowAC = (userId) => ({type: "UNFOLLOW", userId})

export default usersReducer;