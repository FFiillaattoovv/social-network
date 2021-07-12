import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    }

    activateEditMode = (): void => {
        console.log(this)
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = (): void => {
        this.setState({
            editMode: false
        })
    }

    onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
        let status = event.target.value;
        this.props.updateStatus(status)
    }

    render() {
        return (
            <>
                {
                    this.state.editMode ?
                        <div>
                            <input onChange={this.onChangeStatus} onBlur={this.deactivateEditMode} autoFocus type="text" value={this.props.status}/>
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
