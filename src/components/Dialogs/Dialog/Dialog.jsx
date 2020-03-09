import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}><img src={props.ava} alt=""/>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;