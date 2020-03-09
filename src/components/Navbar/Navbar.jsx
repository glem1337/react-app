import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friend from './Friend/Friend';

const Navbar = (props) => {

    const navElements = props.state.nav
        .map((link, index) => <div key={index} className={s.item}><NavLink activeClassName={s.active} to={`/${link.url}`} >{link.text}</NavLink></div>)

    const friendElements = props.state.friends
        .map((friend, index) => <Friend key={index} ava={friend.ava} name={friend.name} />)

    return (
        <div className={s.nav}>
            <nav>
                {navElements}
            </nav>
            <h3>Friends</h3>
            <div className={s.friends}>
                {friendElements}
            </div>
        </div>
    );
}

export default Navbar;