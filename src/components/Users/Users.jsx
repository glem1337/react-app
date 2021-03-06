import React from 'react';
import s from './Users.module.css'
import userPlaceholder from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';



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
                                    <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.unfollowThunk(user.id);
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.followThunk(user.id);
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