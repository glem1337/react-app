import React from 'react';
import s from './Users.module.css'
import userPlaceholder from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';



let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return (
        <div>
            <div className={s.pagination}>
                {
                    props.pagination(props.currentPage, props.pageSize, pagesCount).map(element => {
                        return <span key={element} onClick={(e) => { props.setCurrentPage(element) }} className={props.currentPage === element ? s.active : undefined}>{element}</span>
                    })
                }
            </div>
            {
                props.users.map(user => {
                    return <div className={s.user} key={user.id}>
                        <div className={s.userLeft}>
                            <NavLink to={`/profile/${user.id}`} ><img src={user.photos.small != null ? user.photos.small : userPlaceholder} alt="" /></NavLink>
                            <div>{user.name}</div>
                            {
                                user.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': 'a743b5cd-3bde-49a3-9d2a-3503d5caa355'
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unFollow(user.id)
                                                }
                                            })
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': 'a743b5cd-3bde-49a3-9d2a-3503d5caa355'
                                                }
                                            })
                                            .then(response => {
                                                //debugger;
                                                if (response.data.resultCode === 0) {
                                                    props.follow(user.id)
                                                }
                                            })
                                    }}>Follow</button>
                            }
                        </div>
                        <div className={s.userRight}>
                            <div>Status: {user.status}</div>
                            {/* <div>City: {user.location.cityName}</div> */}
                            {/* <div>Country: {user.location.country}</div> */}
                        </div>
                    </div>
                })
            }
        </div>
    )

}


export default Users;