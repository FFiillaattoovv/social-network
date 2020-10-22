import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    props.setUsers(
        [
            {
                id: 1,
                photoUrl: "https://pbs.twimg.com/profile_images/1236759527179124738/pEx2QkKw_400x400.jpg",
                followed: false,
                fullName: "Dmitry",
                status: "I am a boss",
                location: {citi: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://pbs.twimg.com/profile_images/1062368194118197248/82fZyeo_.jpg",
                followed: true,
                fullName: "Sasha",
                status: "I am a boss too",
                location: {citi: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://pbs.twimg.com/profile_images/1102796114741227521/YiJ4QEAF_400x400.png",
                followed: false,
                fullName: "Andrew",
                status: "I am a boss too too",
                location: {citi: "Kiev", country: "Ukraine"}
            }
        ]
    );
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt="User avatar"/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.citi}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;