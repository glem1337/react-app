import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusThunk(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return <div>
            status: {(this.state.editMode) ?
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                   value={this.state.status}/> :
            <span className={s.edit} onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
        </div>
    }
}

export default ProfileStatus;