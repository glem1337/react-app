import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    console.log(props)

    let contacts = [];

    for (let key in props.profile.contacts) {
        if (props.profile.contacts[key]) {
            contacts.push(`${key}: ${props.profile.contacts[key]}`)
        }
    }

    return (
        <div>
            <div className={s.info}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large} alt="" />
                </div>
                <div className={s.descr}>
                    <strong>{props.profile.fullName}</strong>
                    <div>About me: {props.profile.aboutMe}</div>
                    <div>About work: {props.profile.lookingForAJob && 'Ищу работу'}, {props.profile.lookingForAJobDescription}</div>
                    <div>Contacts:
                        {contacts.map(contact => {
                            return <div>{contact}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;