import React from 'react';
import s from './Users.module.css'


const Users = (props) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHE4aJfygEoR495XBdYtQ9PZK7gKQ53HKdlCY5um21h5_OHWbu',
                fullName: 'Dmitriy',
                status: 'I am a boss',
                location: {
                    cityName: 'Kiev',
                    country: 'Ukraine'
                }
            },
            {
                id: 2,
                followed: false,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHE4aJfygEoR495XBdYtQ9PZK7gKQ53HKdlCY5um21h5_OHWbu',
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {
                    cityName: 'Dnepr',
                    country: 'Ukraine'
                }
            },
            {
                id: 3,
                followed: true,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHE4aJfygEoR495XBdYtQ9PZK7gKQ53HKdlCY5um21h5_OHWbu',
                fullName: 'Oleg',
                status: 'I am a boss too...',
                location: {
                    cityName: 'Primorsk',
                    country: 'Ukraine'
                }
            },
            {
                id: 4,
                followed: false,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHE4aJfygEoR495XBdYtQ9PZK7gKQ53HKdlCY5um21h5_OHWbu',
                fullName: 'Vadim',
                status: 'I am a boss of the boss',
                location: {
                    cityName: 'Lviv',
                    country: 'Ukraine'
                }
            },
        ])
    }

    const userElements = props.usersPage.users
        .map(user => {
            return <div className={s.user} key={user.id}>
                <div className={s.userLeft}>
                    <img src={user.photoUrl} alt="" />
                    <div>{user.fullName}</div>
                    {user.followed ? <button onClick={() => props.unFollow(user.id)}>Unfollow</button> : <button onClick={() => props.follow(user.id)}>Follow</button>}
                </div>
                <div className={s.userRight}>
                    <div>Status: {user.status}</div>
                    <div>City: {user.location.cityName}</div>
                    <div>Country: {user.location.country}</div>
                </div>
            </div>
        })

    return (
        <div>
            {userElements}
        </div>
    )
}

export default Users;