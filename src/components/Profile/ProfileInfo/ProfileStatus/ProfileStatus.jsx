import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatus = ({updateStatus, ...props}) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    };

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const onStatusChange = e => setStatus(e.currentTarget.value);

    return (
        <div>
            status: {(editMode) ?
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                   value={status}/> :
            <span className={s.edit} onDoubleClick={activateEditMode}>{status}</span>}
        </div>
    );

};

export default ProfileStatus;