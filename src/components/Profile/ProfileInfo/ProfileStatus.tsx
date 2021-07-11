import React from 'react';

type PropsType = {
    status: string
}

const ProfileStatus = (props: PropsType) => {
    return (
        <>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input type="text" value={props.status}/>
            </div>
        </>
    )
}

export default ProfileStatus;
