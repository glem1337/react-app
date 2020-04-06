import React from 'react';
import s from './ProfileInfo.module.css';
import Placeholder from '../../../assets/images/user.jpg'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

    let contacts = [];

    for (let key in props.profile.contacts) {
        if (props.profile.contacts[key]) {
            contacts.push({ key, value: props.profile.contacts[key] })
        }
    }

    return (
        <div>
            <div className={s.info}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large || Placeholder} alt="" />
                </div>
                <div className={s.descr}>
                    <strong>{props.profile.fullName}</strong>
                    <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk} />
                    <div>About me: {props.profile.aboutMe}</div>
                    <div>About work: {props.profile.lookingForAJob && 'Ищу работу'}, {props.profile.lookingForAJobDescription}</div>
                    <div>Contacts:
                        {contacts.map(contact => {
                        return <div key={contact.key}>{contact.key}: <a href={`https://${contact.value}`}>{contact.value}</a></div>
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;