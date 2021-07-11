import React from 'react';

type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    activateEditMode = (): void => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = (): void => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {
                    this.state.editMode ?
                        <div>
                            <input onBlur={this.deactivateEditMode} autoFocus type="text" value={this.props.status}/>
                        </div>
                        :
                        <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                        </div>
                }
            </>
        )
    }
}

export default ProfileStatus;
