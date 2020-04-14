import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to="/"><img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png"
                                 alt=""/></NavLink>
            <div className={s.login}>
                {
                    props.isAuth === true ?
                        <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                        : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;