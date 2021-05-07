import React, {ChangeEvent} from 'react'
import classes from './ProfileStatus.module.css'

type ProfileStatusType = {
    status: string
    updateProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <span onDoubleClick={this.activateEditMode}>{this.props.status || '📝'}</span>
                }
                {this.state.editMode &&
                <input
                   autoFocus={true}
                   value={this.state.status}
                   onChange={this.onStatusChange}
                   onBlur={this.deactivateEditMode}
                />
                }
            </>
        )
    }
}

export default ProfileStatus
