import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = (): void => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    };

    return (
        <>
            {
                editMode ?
                    <div>
                        <input onChange={onChangeStatus} onBlur={deactivateEditMode} autoFocus type="text"
                               value={status}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={activateEditMode}>{status}</span>
                    </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;
