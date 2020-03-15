import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios';
import userPlaceholder from '../../assets/images/user.jpg'



const Users = (props) => {

    let getUsers = (e) => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
            e.target.parentNode.removeChild(e.target)
        }
    }


    const userElements = props.usersPage.users
        .map(user => {
            return <div className={s.user} key={user.id}>
                <div className={s.userLeft}>
                    <img src={user.photos.small != null ? user.photos.small : userPlaceholder} alt="" />
                    <div>{user.name}</div>
                    {user.followed ? <button onClick={() => props.unFollow(user.id)}>Unfollow</button> : <button onClick={() => props.follow(user.id)}>Follow</button>}
                </div>
                <div className={s.userRight}>
                    <div>Status: {user.status}</div>
                    {/* <div>City: {user.location.cityName}</div> */}
                    {/* <div>Country: {user.location.country}</div> */}
                </div>
            </div>
        })

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {userElements}
        </div>
    )
}

export default Users;