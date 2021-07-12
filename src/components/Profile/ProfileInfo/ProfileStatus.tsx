import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = (): void => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = (): void => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.target.value
        });
    }

    render() {
        return (
            <>
                {
                    this.state.editMode ?
                        <div>
                            <input onChange={this.onChangeStatus} onBlur={this.deactivateEditMode} autoFocus type="text"
                                   value={this.state.status}/>
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
